import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="rule-top mt-24 bg-surface">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:grid-cols-[2fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-display text-4xl leading-none">Sorrel</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Slow-made apparel, ceramics and objects. Shipped from the atelier, paid on delivery.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="mailto:hello@sorrelgoods.com"
              aria-label="Email"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
            >
              <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="label-caps mb-2 text-muted-foreground">Shop</p>
          <Link to="/shop" className="link-underline group flex w-fit items-center gap-1">
            All goods
          </Link>
          <Link
            to="/shop"
            search={{ category: "textiles" }}
            className="link-underline group flex w-fit items-center gap-1"
          >
            Textiles
          </Link>
          <Link
            to="/shop"
            search={{ category: "objects" }}
            className="link-underline group flex w-fit items-center gap-1"
          >
            Objects
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="label-caps mb-2 text-muted-foreground">Account</p>
          <Link to="/account" className="link-underline w-fit">
            Orders
          </Link>
          <Link to="/login" className="link-underline w-fit">
            Sign in
          </Link>
          <Link to="/about" className="link-underline w-fit">
            The atelier
          </Link>
        </div>
      </div>

      <div className="rule-top mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:px-10">
        <span>© 2026 Sorrel Goods</span>
        <span>Cash on delivery · Free shipping over $200</span>
        <a
          href="https://abdulbasit-archer.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-1.5 text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
          Powered by ARCHER
          <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </a>
      </div>
    </footer>
  );
}