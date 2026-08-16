import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="rule-top mt-24 bg-surface">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:grid-cols-[2fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-display text-4xl leading-none">Sorrel</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Slow-made apparel, ceramics and objects. Shipped from the atelier, paid on delivery.
          </p>
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
      </div>
      <div className="rule-top mx-auto flex max-w-[1500px] flex-wrap justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:px-10">
        <span>© 2026 Sorrel Goods</span>
        <span>Cash on delivery · Free shipping over $200</span>
      </div>
    </footer>
  );
}
