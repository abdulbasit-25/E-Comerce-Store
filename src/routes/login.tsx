import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { StoreShell } from "@/components/storefront/shell";
import { useAuth } from "@/lib/store";
import { loginUser } from "@/lib/auth-server";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Sorrel" },
      { name: "description", content: "Sign in to track your Sorrel orders, addresses and order history." },
      { property: "og:title", content: "Sign in — Sorrel" },
      { property: "og:description", content: "Access your Sorrel account and order history." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const signIn = useAuth((s) => s.signIn);
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (mode === "signup") {
      toast.error("Registration is not available yet");
      return;
    }

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    if (!email.includes("@")) {
      toast.error("Enter a valid email address");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    setLoading(true);
    try {
      const result = await loginUser(email, password);
      
      if (result.success && result.user) {
        // Store token in localStorage
        if (result.token) {
          localStorage.setItem("auth-token", result.token);
        }
        
        // Update Zustand store with real user data
        signIn(result.user.email, result.user.name);
        
        toast.success(`Welcome, ${result.user.name}`);
        navigate({ to: result.user.role === "admin" ? "/admin" : "/account" });
      } else {
        toast.error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

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
                onClick={() => setMode(value)}
                className={cn(
                  "label-caps pb-2",
                  mode === value ? "border-b-2 border-olive text-foreground" : "text-muted-foreground",
                )}
              >
                {value === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            {mode === "signup" && (
              <div>
                <label htmlFor="name" className="label-caps text-muted-foreground">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
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
                className="mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="label-caps w-full bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground disabled:opacity-50"
            >
              {loading ? "Signing in..." : (mode === "signin" ? "Sign in" : "Create account")}
            </button>
          </form>

          <Link to="/shop" className="label-caps link-underline mt-8 inline-block text-muted-foreground">
            Continue shopping
          </Link>
        </div>
      </div>
    </StoreShell>
  );
}
