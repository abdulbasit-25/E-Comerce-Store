import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BarChart3, Boxes, ClipboardList, LayoutGrid, Package, Users } from "lucide-react";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth, useHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

const links = [
  { to: "/admin", label: "Overview", icon: BarChart3 },
  { to: "/admin/orders", label: "Orders", icon: Package },
  { to: "/admin/products", label: "Products", icon: Boxes },
  { to: "/admin/categories", label: "Categories", icon: LayoutGrid },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/inventory", label: "Inventory", icon: ClipboardList },
  { to: "/admin/shipments", label: "Shipments", icon: Package },
  { to: "/admin/coupons", label: "Coupons", icon: ClipboardList },
  { to: "/admin/returns", label: "Returns", icon: ClipboardList },
  { to: "/admin/reviews", label: "Reviews", icon: ClipboardList },
] as const;

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  const hydrated = useHydrated();
  const user = useAuth((s) => s.user);
  const signOut = useAuth((s) => s.signOut);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (!hydrated) {
    return <div className="min-h-screen animate-pulse bg-surface" />;
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="grid min-h-screen place-items-center bg-background px-5 text-center">
        <div>
          <p className="label-caps text-olive">Restricted</p>
          <h1 className="mt-4 text-4xl">Admin access only</h1>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Sign in with an admin account to manage orders, catalogue and customers.
          </p>
          <Link
            to="/login"
            className="label-caps mt-8 inline-block bg-primary px-6 py-3 text-primary-foreground"
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-56 shrink-0 flex-col border-r border-border bg-sidebar md:flex">
        <Link to="/" className="border-b border-border px-5 py-4 font-display text-xl">
          Sorrel <span className="label-caps text-muted-foreground">Ops</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-0.5 p-2">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-olive-soft text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-4 text-xs text-muted-foreground">
          <p className="text-foreground">{user.name}</p>
          <p>{user.email}</p>
          <button
            onClick={() => {
              signOut();
              navigate({ to: "/" });
            }}
            className="label-caps mt-3 hover:text-destructive"
          >
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-border px-5">
          <h1 className="text-lg font-medium">{title}</h1>
          <div className="flex items-center gap-4">
            <Link to="/" className="label-caps text-muted-foreground hover:text-foreground">
              View storefront
            </Link>
            <ThemeToggle />
          </div>
        </header>
        <div className="flex-1 overflow-x-hidden p-5">{children}</div>
        <nav className="flex justify-around border-t border-border py-2 md:hidden">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="p-2 text-muted-foreground">
              <link.icon className="h-4 w-4" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
