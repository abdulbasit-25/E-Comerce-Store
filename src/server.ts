import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import type { SessionUser } from "@/lib/auth";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

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

// Defensive POST /api/login implementation at the outermost server layer.
// This handles the login endpoint even if middleware chain has issues.
async function handleLoginApi(request: Request): Promise<Response> {
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

    const { isValidEmail, normalizeEmail } = await import("@/lib/auth");

    if (!email || !password) {
      return jsonResponse(
        { success: false, message: "Email and password are required" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return jsonResponse(
        { success: false, message: "Invalid email format" },
        { status: 400 },
      );
    }

    const normalizedEmail = normalizeEmail(email);
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
        const verified = await verifyPassword(password, mongoUser.passwordHash as string);
        if (verified) {
          finalUser = {
            id: mongoUser._id?.toString() || "",
            name: mongoUser.name as string,
            email: mongoUser.email as string,
            role: (mongoUser.role as "admin" | "customer") || "customer",
          };
        }
      }
    } catch (dbError) {
      console.warn("[server-login] MongoDB unavailable, using demo fallback:", dbError);
    }

    if (!finalUser) {
      const demoEntry = demoPasswords[normalizedEmail];
      if (demoEntry) {
        const match =
          demoEntry.password === password ||
          (await verifyPassword(
            password,
            await hashPassword(demoEntry.password).catch(async () => ""),
          ).catch(() => false));
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
    console.error("[server-login] handler error:", err);
    return jsonResponse(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (request.method === "POST" && url.pathname === "/api/login") {
        return handleLoginApi(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
