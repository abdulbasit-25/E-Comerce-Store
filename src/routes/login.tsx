import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { StoreShell } from "@/components/storefront/shell";
import { useAuth } from "@/lib/store";
import { cn, isValidEmail } from "@/lib/utils";
import type { SessionUser } from "@/lib/auth";

const REQUEST_TIMEOUT_MS = 15_000;

const DEMO_ACCOUNTS = [
  { role: "Admin", email: "admin@sorrel.local", password: "Admin@12345" },
  { role: "Customer", email: "customer@sorrel.local", password: "Customer@12345" },
] as const;

type LoginResponse = {
  success?: boolean;
  user?: SessionUser;
  token?: string;
  message?: string;
};

/** Success always carries a user; failure always carries a message. */
type LoginOutcome =
  { ok: true; user: SessionUser; token?: string } | { ok: false; message: string };

type FormMessage = { type: "error" | "success"; text: string };

function isSafeInternalPath(path: string | undefined): path is string {
  return typeof path === "string" && path.startsWith("/") && !path.startsWith("//");
}

function resolveRedirectPath(redirect: string | undefined, role: SessionUser["role"]): string {
  if (isSafeInternalPath(redirect)) return redirect;
  return role === "admin" ? "/admin" : "/account";
}

async function performLogin(
  email: string,
  password: string,
  signal: AbortSignal,
): Promise<LoginOutcome> {
  let resp: Response;
  try {
    resp = await fetch("/api/login", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      signal,
    });
  } catch (err) {
    if (signal.aborted) throw err; // caller decides how to handle aborts
    console.error("Login network error:", err);
    return {
      ok: false,
      message: "Could not reach the server. Check your connection and try again.",
    };
  }

  let payload: LoginResponse | null = null;
  try {
    const text = await resp.text();
    payload = text ? (JSON.parse(text) as LoginResponse) : null;
  } catch (err) {
    if (signal.aborted) throw err;
    payload = null; // non-JSON body — fall through to status-based handling
  }
  if (signal.aborted) throw new DOMException("Request aborted", "AbortError");

  // Trust the HTTP status over the payload — a 500 body claiming success is a lie.
  if (!resp.ok) {
    const fallback =
      resp.status === 401 || resp.status === 403
        ? "Incorrect email or password."
        : resp.status === 429
          ? "Too many attempts. Please wait a moment and try again."
          : "Something went wrong on our end. Please try again.";
    return { ok: false, message: payload?.message || fallback };
  }

  if (!payload?.success || !payload.user) {
    return { ok: false, message: payload?.message || "Login failed. Please try again." };
  }

  return { ok: true, user: payload.user, token: payload.token };
}

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => {
    const raw = search.redirect;
    return isSafeInternalPath(raw) ? { redirect: raw } : {};
  },
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

function LoginPage() {
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();
  const signIn = useAuth((s) => s.signIn);

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<FormMessage | null>(null);
  const [pendingCredentials, setPendingCredentials] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const unmountedRef = useRef(false);

  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
      abortRef.current?.abort();
    };
  }, []);

  // "Fill" buttons may switch tabs first; apply credentials once the inputs mount.
  useEffect(() => {
    if (!pendingCredentials || mode !== "signin") return;
    if (emailRef.current) emailRef.current.value = pendingCredentials.email;
    if (passwordRef.current) passwordRef.current.value = pendingCredentials.password;
    setPendingCredentials(null);
  }, [pendingCredentials, mode]);

  const switchMode = useCallback(
    (next: "signin" | "signup") => {
      if (loading || next === mode) return;
      setMode(next);
      setMessage(null);
      setShowPassword(false);
    },
    [loading, mode],
  );

  const fillDemoAccount = useCallback(
    (account: (typeof DEMO_ACCOUNTS)[number]) => {
      setPendingCredentials({ email: account.email, password: account.password });
      if (mode !== "signin") setMode("signin");
      setMessage(null);
    },
    [mode],
  );

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (loading) return;

      const form = new FormData(event.currentTarget); // read synchronously
      const email = String(form.get("email") ?? "").trim();
      const password = String(form.get("password") ?? "");

      if (!isValidEmail(email)) {
        setMessage({ type: "error", text: "Enter a valid email address." });
        return;
      }
      if (!password) {
        setMessage({ type: "error", text: "Enter your password." });
        return;
      }

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      setLoading(true);
      setMessage(null);

      let outcome: LoginOutcome | null = null;
      try {
        outcome = await performLogin(email, password, controller.signal);
      } catch {
        // performLogin only throws on abort: either timeout or unmount.
        if (!unmountedRef.current) {
          outcome = { ok: false, message: "The request timed out. Please try again." };
        }
      } finally {
        window.clearTimeout(timeoutId);
        if (!unmountedRef.current) setLoading(false);
      }

      if (!outcome || unmountedRef.current) return;

      if (!outcome.ok) {
        setMessage({ type: "error", text: outcome.message });
        toast.error(outcome.message);
        return;
      }

      if (outcome.token) {
        try {
          localStorage.setItem("auth-token", outcome.token);
        } catch {
          /* storage unavailable — session cookie (if any) still applies */
        }
      }

      const displayName = outcome.user.name?.trim() || outcome.user.email;
      signIn(outcome.user.email, outcome.user.name);
      toast.success(`Welcome back, ${displayName}.`);

      const target = resolveRedirectPath(redirect, outcome.user.role);
      try {
        await navigate({ to: target });
      } catch (err) {
        console.error("Client navigation failed after login:", err);
        window.location.assign(target);
      }
    },
    [loading, navigate, redirect, signIn],
  );

  const inputClasses =
    "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-olive";

  return (
    <StoreShell>
      <div className="mx-auto grid max-w-[1500px] gap-16 px-5 py-16 md:grid-cols-2 md:px-10 lg:gap-24">
        {/* Intro column */}
        <div className="max-w-md">
          <p className="label-caps text-olive">Account</p>
          <h1 className="display-xl mt-6">
            {mode === "signin" ? "Welcome back." : "Join the atelier."}
          </h1>
          <p className="mt-8 text-muted-foreground">
            Your account keeps order history, saved addresses and delivery tracking in one place.
          </p>

          <div className="mt-10 border border-hairline bg-surface p-5">
            <p className="label-caps text-muted-foreground">Demo accounts</p>
            <ul className="mt-4 space-y-4">
              {DEMO_ACCOUNTS.map((account) => (
                <li key={account.email} className="flex items-center justify-between gap-4 text-sm">
                  <span className="min-w-0">
                    <span className="font-medium">{account.role}</span>
                    <span className="block truncate text-muted-foreground">{account.email}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => fillDemoAccount(account)}
                    className="label-caps shrink-0 border border-hairline px-3 py-2 transition-colors hover:border-olive hover:text-olive"
                  >
                    Fill
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form column */}
        <div className="border border-hairline bg-surface p-8 md:p-12">
          <div role="tablist" aria-label="Account access" className="flex gap-6">
            {(["signin", "signup"] as const).map((value) => (
              <button
                key={value}
                role="tab"
                type="button"
                aria-selected={mode === value}
                aria-controls={value === "signin" ? "login-panel" : "signup-panel"}
                disabled={loading}
                onClick={() => switchMode(value)}
                className={cn(
                  "label-caps border-b-2 pb-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive",
                  mode === value
                    ? "border-olive text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {value === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          {message && (
            <p
              role={message.type === "error" ? "alert" : "status"}
              className={cn(
                "mt-8 border px-4 py-3 text-sm",
                message.type === "error"
                  ? "border-destructive/40 bg-destructive/10 text-destructive"
                  : "border-olive/40 bg-olive-soft text-foreground",
              )}
            >
              {message.text}
            </p>
          )}

          {mode === "signin" ? (
            <form
              id="login-panel"
              onSubmit={onSubmit}
              noValidate
              aria-busy={loading}
              className="mt-8 space-y-7"
            >
              <div>
                <label htmlFor="email" className="label-caps text-muted-foreground">
                  Email
                </label>
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="password" className="label-caps text-muted-foreground">
                  Password
                </label>
                <div className="relative mt-2">
                  <input
                    ref={passwordRef}
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className={cn(inputClasses, "mt-0 pr-14")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="label-caps absolute inset-y-0 right-0 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="label-caps flex w-full items-center justify-center bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading && (
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block size-3 animate-spin rounded-full border border-current border-t-transparent"
                  />
                )}
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>
          ) : (
            <div id="signup-panel" role="tabpanel" className="mt-8">
              <p className="text-sm font-medium">Account creation is coming soon.</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                We&rsquo;re putting the finishing touches on registration. For now, sign in with one
                of the demo accounts to explore the store.
              </p>
              <button
                type="button"
                onClick={() => switchMode("signin")}
                className="label-caps link-underline mt-6 text-olive"
              >
                Back to sign in
              </button>
            </div>
          )}

          <Link
            to="/shop"
            className="label-caps link-underline mt-10 inline-block text-muted-foreground"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </StoreShell>
  );
}
