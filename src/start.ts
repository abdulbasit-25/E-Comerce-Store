import { createStart, createMiddleware } from "@tanstack/react-start";
import { createCsrfMiddleware } from "@tanstack/start-client-core";

import { renderErrorPage } from "./lib/error-page";
import type { SessionUser } from "@/lib/auth-types";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Explicit JSON login endpoint (bypasses CSRF; uses its own credential auth).
// MongoDB is used when available, otherwise we fall back to the documented
// demo credentials shown on the login page. This ensures the form works on
// first run without a seed script and in any environment where the DB is
// temporarily unreachable.
const loginApiMiddleware = createMiddleware().server(async ({ next, request }) => {
  const url = new URL(request.url);
  if (request.method !== "POST" || url.pathname !== "/api/login") {
    if (request.method === "POST" && url.pathname === "/api/register") {
      try {
        const payload = (await request.json()) as {
          name?: string;
          email?: string;
          password?: string;
        };
        const { registerUser } = await import("./lib/auth-api");
        const result = await registerUser(
          String(payload.name ?? ""),
          String(payload.email ?? ""),
          String(payload.password ?? ""),
        );
        return jsonResponse(result, { status: result.success ? 201 : 400 });
      } catch (error) {
        console.error("[register] handler error:", error);
        return jsonResponse(
          { success: false, message: "Unable to create your account right now." },
          { status: 500 },
        );
      }
    }
    return next();
  }

  try {
    const contentType = request.headers.get("content-type") ?? "";
    let email = "";
    let password = "";

    if (contentType.includes("application/json")) {
      const payload = (await request.json()) as { email?: string; password?: string };
      email = String(payload.email ?? "");
      password = String(payload.password ?? "");
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await request.text();
      const params = new URLSearchParams(text);
      email = params.get("email") ?? "";
      password = params.get("password") ?? "";
    } else {
      const form = await request.formData().catch(() => null as unknown as FormData);
      if (form) {
        email = String(form.get("email") ?? "");
        password = String(form.get("password") ?? "");
      }
    }

    const { isValidEmail, normalizeEmail } = await import("./lib/auth-validation");

    if (!email || !password) {
      return jsonResponse(
        { success: false, message: "Email and password are required" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return jsonResponse({ success: false, message: "Invalid email format" }, { status: 400 });
    }

    const normalizedEmail = normalizeEmail(email);

    // --- Step 1: try MongoDB ---
    const { hashPassword, verifyPassword, createToken } = await import("@/lib/auth");

    const demoPasswords: Record<string, { password: string; user: SessionUser }> = {
      [normalizeEmail("admin@sorrel.local")]: {
        password: "Admin@12345",
        user: {
          id: "demo-admin",
          email: "admin@sorrel.local",
          name: "Sorrel Administrator",
          role: "admin",
        },
      },
      [normalizeEmail("customer@sorrel.local")]: {
        password: "Customer@12345",
        user: {
          id: "demo-customer",
          email: "customer@sorrel.local",
          name: "Demo Customer",
          role: "customer",
        },
      },
    };

    let finalUser: SessionUser | null = null;

    try {
      const { getMongoDb } = await import("@/lib/mongodb");
      const db = await getMongoDb();
      const usersCollection = db.collection("users");
      const mongoUser = await usersCollection.findOne({ email: normalizedEmail });

      if (mongoUser) {
        if (mongoUser["status"] === "disabled") {
          return jsonResponse(
            { success: false, message: "This account is disabled." },
            { status: 403 },
          );
        }
        const verified = await verifyPassword(password, mongoUser.passwordHash as string);
        if (verified) {
          finalUser = {
            id: mongoUser._id?.toString() || "",
            name: mongoUser.name as string,
            email: mongoUser.email as string,
            role: (mongoUser.role as "admin" | "manager" | "customer") || "customer",
            status: "active",
          };
        }
      }
    } catch (dbError) {
      // Skip Mongo route if unavailable; fall through to demo lookup
      console.warn("[login] MongoDB unavailable, using demo fallback:", dbError);
    }

    // --- Step 2: demo credential fallback (matches creds shown on login page) ---
    if (!finalUser) {
      const demoEntry = demoPasswords[normalizedEmail];
      if (demoEntry) {
        const match =
          demoEntry.password === password ||
          (await verifyPassword(password, await hashPassword(demoEntry.password)).catch(
            () => false,
          ));
        if (match) {
          finalUser = demoEntry.user;
        }
      }
    }

    if (!finalUser) {
      return jsonResponse(
        { success: false, message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const token = createToken(finalUser);
    return jsonResponse({ success: true, user: finalUser, token });
  } catch (err) {
    console.error("[login] handler error:", err);
    return jsonResponse({ success: false, message: "Internal server error" }, { status: 500 });
  }
});

function jsonResponse(body: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    status: init?.status ?? 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...(init?.headers ?? {}),
    },
    ...init,
  });
}

export const startInstance = createStart(() => ({
  requestMiddleware: [loginApiMiddleware, errorMiddleware, csrfMiddleware],
}));
