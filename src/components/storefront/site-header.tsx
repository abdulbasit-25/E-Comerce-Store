import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth, useCart, useHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/shop", label: "Apparel", search: { category: "apparel" } },
  { to: "/shop", label: "Ceramics", search: { category: "ceramics" } },
  { to: "/about", label: "Atelier" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const hydrated = useHydrated();
  const lines = useCart((s) => s.lines);
  const user = useAuth((s) => s.user);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const count = hydrated ? lines.reduce((sum, l) => sum + l.qty, 0) : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-6 px-5 md:px-10">
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          type="button"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-display text-2xl tracking-tight">
          Sorrel
        </Link>

        <nav className="ml-6 hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              search={"search" in item ? (item.search as never) : ({} as never)}
              className={cn(
                "label-caps link-underline text-muted-foreground hover:text-foreground",
                pathname === item.to && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          {user?.role === "admin" && (
            <Link to="/admin" className="label-caps hidden text-olive sm:inline">
              Admin
            </Link>
          )}
          <Link to={user ? "/account" : "/login"} aria-label="Account" className="hover:text-olive">
            <User className="h-[18px] w-[18px]" />
          </Link>
          <Link to="/cart" className="relative hover:text-olive" aria-label="Cart">
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 grid h-4 min-w-4 place-items-center rounded-full bg-olive px-1 text-[10px] font-medium text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-hairline px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              search={"search" in item ? (item.search as never) : ({} as never)}
              onClick={() => setOpen(false)}
              className="label-caps text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
