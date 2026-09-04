import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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

type Mode = "signin" | "signup";

const MODES: { value: Mode; label: string }[] = [
  { value: "signin", label: "Sign in" },
  { value: "signup", label: "Create account" },
];

function LoginPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [formMessage, setFormMessage] = useState<{
    type: "error" | "success" | "info";
    text: string;
  } | null>(null);

  const signIn = useAuth((s) => s.signIn);
  const navigate = useNavigate();
  const messageRef = useRef<HTMLParagraphElement>(null);

  // Switching tabs should clear stale state from the previous mode instead of
  // leaving a sign-in error visible on the sign-up tab (or vice versa).
  const handleModeChange = useCallback((value: Mode) => {
    setMode(value);
    setFieldErrors({});
    if (value === "signup") {
      setFormMessage({
        type: "info",
        text: "Account creation is coming soon — sign in with a demo account below.",
      });
    } else {
      setFormMessage(null);
    }
  }, []);

  // Move focus to the alert whenever a new message appears, so screen reader
  // and keyboard users notice it without having to hunt for it.
  useEffect(() => {
    if (formMessage) messageRef.current?.focus();
  }, [formMessage]);

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (mode === "signup") {
        // Guarded here too in case the disabled button is ever bypassed
        // (e.g. programmatic submit), but the UI already prevents this path.
        setFormMessage({ type: "info", text: "Account creation is coming soon." });
        return;
      }

      const form = new FormData(event.currentTarget);
      const email = String(form.get("email") ?? "").trim();
      const password = String(form.get("password") ?? "");

      const nextFieldErrors: typeof fieldErrors = {};
      if (!isValidEmail(email)) nextFieldErrors.email = "Enter a valid email address";
      if (!password) nextFieldErrors.password = "Password is required";

      if (Object.keys(nextFieldErrors).length > 0) {
        setFieldErrors(nextFieldErrors);
        const text = nextFieldErrors.email ?? nextFieldErrors.password!;
        setFormMessage({ type: "error", text });
        return;
      }

      setFieldErrors({});
      setFormMessage(null);
      setLoading(true);

      // Default outcome covers every early-return path below, so `result`
      // is always a concrete LoginResult and never null when we read it.
      let result: LoginResult = {
        success: false,
        message: "Something went wrong. Please try again.",
      };

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
          result = text
            ? (JSON.parse(text) as LoginResult)
            : { success: false, message: "No response from server" };
        } catch {
          result = { success: false, message: "Unexpected response from server" };
        }

        // Trust the HTTP status over the payload for server-side failures,
        // even if a buggy backend reports success:true alongside a 5xx/413.
        if (resp.status === 413 || resp.status >= 500) {
          result = { success: false, message: result.message || "Server error during login" };
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
            // Note: localStorage is readable by any script on the page, so
            // an httpOnly session cookie set by the server is a safer place
            // for this token long-term. Keeping localStorage for now to match
            // the existing /api/login contract.
            localStorage.setItem("auth-token", result.token);
          } catch {
            /* ignore storage errors (e.g. private browsing) */
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

      const message = result.message || "Login failed";
      setFormMessage({ type: "error", text: message });
      toast.error(message);
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
          <div className="mt-8 max-w-sm border-l-2 border-olive pl-4 text-sm text-muted-foreground">
            <p className="label-caps text-xs text-foreground">Demo credentials</p>
            <dl className="mt-2 space-y-1">
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">Admin</dt>
                <dd>admin@sorrel.local / Admin@12345</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">Customer</dt>
                <dd>customer@sorrel.local / Customer@12345</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-surface p-8 md:p-12">
          <div
            role="tablist"
            aria-label="Account access"
            className="flex gap-6 border-b border-hairline"
          >
            {MODES.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={mode === value}
                onClick={() => handleModeChange(value)}
                className={cn(
                  "label-caps -mb-px border-b-2 pb-3 transition-colors",
                  mode === value
                    ? "border-olive text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
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
            {formMessage && (
              <p
                ref={messageRef}
                tabIndex={-1}
                role={formMessage.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={cn(
                  "border px-4 py-3 text-sm outline-none",
                  formMessage.type === "error" &&
                    "border-destructive/40 bg-destructive/10 text-destructive",
                  formMessage.type === "success" && "border-olive/40 bg-olive-soft text-foreground",
                  formMessage.type === "info" &&
                    "border-hairline bg-muted/40 text-muted-foreground",
                )}
              >
                {formMessage.text}
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
                  disabled
                  className="mt-2 w-full border-b border-hairline bg-transparent py-2 text-muted-foreground outline-none disabled:cursor-not-allowed"
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
                disabled={mode === "signup"}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                className={cn(
                  "mt-2 w-full border-b bg-transparent py-2 outline-none focus:border-olive disabled:cursor-not-allowed disabled:text-muted-foreground",
                  fieldErrors.email ? "border-destructive" : "border-hairline",
                )}
              />
              {fieldErrors.email && (
                <p id="email-error" className="mt-1 text-xs text-destructive">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="label-caps text-muted-foreground">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  placeholder="••••••••"
                  disabled={mode === "signup"}
                  aria-invalid={Boolean(fieldErrors.password)}
                  aria-describedby={fieldErrors.password ? "password-error" : undefined}
                  className={cn(
                    "w-full border-b bg-transparent py-2 pr-9 outline-none focus:border-olive disabled:cursor-not-allowed disabled:text-muted-foreground",
                    fieldErrors.password ? "border-destructive" : "border-hairline",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  disabled={mode === "signup"}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {fieldErrors.password && (
                <p id="password-error" className="mt-1 text-xs text-destructive">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || mode === "signup"}
              className="label-caps w-full bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {mode === "signup" ? "Coming soon" : loading ? "Signing in..." : "Sign in"}
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
