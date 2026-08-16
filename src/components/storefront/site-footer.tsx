import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MessageCircle, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="rule-top relative mt-24 overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-olive/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-olive/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1.3fr] md:px-10">
        <div>
          <p className="font-display text-4xl leading-none">Sorrel</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Slow-made apparel, ceramics and objects. Shipped from the atelier, paid on delivery.
          </p>
          <div className="mt-6 flex items-center gap-3">
            
              href="mailto:hello@sorrelgoods.com"
              aria-label="Email"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
            
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
          <Link to="/shop" className="link-underline w-fit">
            All goods
          </Link>
          <Link to="/shop" search={{ category: "textiles" }} className="link-underline w-fit">
            Textiles
          </Link>
          <Link to="/shop" search={{ category: "objects" }} className="link-underline w-fit">
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

        {/* Boxed contact panel */}
        <div className="relative rounded-sm border border-border/60 p-5">
          <p className="label-caps mb-3 flex items-center gap-1.5 text-olive">
            <Sparkles className="h-3.5 w-3.5" />
            Built by ARCHER
          </p>
          <div className="flex flex-col gap-2">
            
              href="mailto:abdulbasit.alpha25@gmail.com"
              className="group flex items-center justify-between gap-2 rounded-sm border border-border/60 px-3 py-2.5 text-xs transition-all duration-300 hover:border-olive hover:bg-olive/5"
            >
              <span className="flex items-center gap-2 text-foreground">
                <Mail className="h-3.5 w-3.5 text-olive shrink-0" />
                <span className="truncate">abdulbasit.alpha25@gmail.com</span>
              </span>
              <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            
              href="https://wa.me/923415878569"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-2 rounded-sm border border-border/60 px-3 py-2.5 text-xs transition-all duration-300 hover:border-olive hover:bg-olive/5"
            >
              <span className="flex items-center gap-2 text-foreground">
                <MessageCircle className="h-3.5 w-3.5 text-olive shrink-0" />
                +92 341 5878569
              </span>
              <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">Available for remote work worldwide</p>
        </div>
      </div>

      <div className="rule-top relative mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:px-10">
        <span>© 2026 Sorrel Goods</span>
        <span>Cash on delivery · Free shipping over $200</span>
        
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