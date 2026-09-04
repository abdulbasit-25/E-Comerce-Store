import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { StoreShell } from "@/components/storefront/shell";
import { useAuth } from "@/lib/store";
import { cn, isValidEmail } from "@/lib/utils";
import type { SessionUser } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Sorrel" },
      {
        name: "description",
        content: "Sign in to track your Sorrel orders, addresses and order history.",
      },
      { property: "og:title", content: "Sign in — Sorrel" },
      { property: "og:description", content: "Access your Sorrel account and order history." },
    ],
  }),
  component: LoginPage,
});

type LoginResult = {
  success: boolean;
  user?: SessionUser;
  token?: string;
  message?: string;
};

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);
  const signIn = useAuth((s) => s.signIn);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const formEl = event.currentTarget;
      if (!(formEl instanceof HTMLFormElement)) return;

      if (mode === "signup") {
        setLoginMessage({ type: "error", text: "Registration is not available yet" });
        toast.error("Registration is not available yet");
        return;
      }

      const form = new FormData(formEl);
      const email = String(form.get("email") ?? "").trim();
      const password = String(form.get("password") ?? "");

      if (!isValidEmail(email)) {
        setLoginMessage({ type: "error", text: "Enter a valid email address" });
        toast.error("Enter a valid email address");
        return;
      }

      if (!password) {
        setLoginMessage({ type: "error", text: "Password is required" });
        toast.error("Password is required");
        return;
      }

      setLoading(true);
      setLoginMessage(null);
      let result: LoginResult | null = null;

      try {
        const resp = await fetch("/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const text = await resp.text();
        try {
          result = (text ? JSON.parse(text) : null) as LoginResult | null;
        } catch {
          result = { success: false, message: "Unexpected response from server" };
        }

        if (!result) result = { success: false, message: "No response from server" };

        if (resp.status === 413 || resp.status >= 500) {
          // Even if the payload says success, trust the HTTP status
          result.success = false;
          result.message = result.message || "Server error during login";
        }
      } catch (networkErr) {
        console.error("Login network error:", networkErr);
        result = { success: false, message: "Could not reach the login server" };
      } finally {
        setLoading(false);
      }

      if (result.success && result.user) {
        if (result.token) {
          try {
            localStorage.setItem("auth-token", result.token);
          } catch {
            /* ignore storage errors */
          }
        }

        signIn(result.user.email, result.user.name);
        toast.success(`Welcome, ${result.user.name}`);
        const redirectTo = result.user.role === "admin" ? "/admin" : "/account";
        try {
          await navigate({ to: redirectTo });
        } catch (navErr) {
          console.error("Navigate failed after login, falling back to location.href:", navErr);
          window.location.href = redirectTo;
        }
        return;
      }

      if (!result.success) {
        const message = result.message || "Login failed";
        setLoginMessage({ type: "error", text: message });
        toast.error(message);
      }
    },
    [mode, navigate, signIn],
  );

  return (
    <StoreShell>
      <div className="mx-auto grid max-w-[1500px] gap-16 px-5 py-16 md:grid-cols-2 md:px-10">
        <div>
          <p className="label-caps text-olive">Account</p>
          <h1 className="display-xl mt-6">
            {mode === "signin" ? "Welcome back." : "Join the atelier."}
          </h1>
          <p className="mt-8 max-w-sm text-muted-foreground">
            Your account keeps order history, saved addresses and delivery tracking in one place.
          </p>
          <p className="mt-8 max-w-sm border-l-2 border-olive pl-4 text-sm text-muted-foreground">
            Demo credentials:
            <br />
            <strong>Admin:</strong> admin@sorrel.local / Admin@12345
            <br />
            <strong>Customer:</strong> customer@sorrel.local / Customer@12345
          </p>
        </div>

        <div className="bg-surface p-8 md:p-12">
          <div className="flex gap-6">
            {(["signin", "signup"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setMode(value)}
                className={cn(
                  "label-caps pb-2",
                  mode === value
                    ? "border-b-2 border-olive text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {value === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            method="post"
            noValidate
            autoComplete="on"
            className="mt-10 space-y-6"
          >
            {loginMessage && (
              <p
                role={loginMessage.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={cn(
                  "border px-4 py-3 text-sm",
                  loginMessage.type === "error"
                    ? "border-destructive/40 bg-destructive/10 text-destructive"
                    : "border-olive/40 bg-olive-soft text-foreground",
                )}
              >
                {loginMessage.text}
              </p>
            )}
            {mode === "signup" && (
              <div>
                <label htmlFor="name" className="label-caps text-muted-foreground">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="label-caps text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                className="mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
              />
            </div>
            <div>
              <label htmlFor="password" className="label-caps text-muted-foreground">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                placeholder="••••••••"
                className="mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="label-caps w-full bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground disabled:opacity-50"
            >
              {loading ? "Signing in..." : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <Link
            to="/shop"
            className="label-caps link-underline mt-8 inline-block text-muted-foreground"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </StoreShell>
  );
}
