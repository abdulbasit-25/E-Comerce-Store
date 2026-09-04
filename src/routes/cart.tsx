import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { StoreShell } from "@/components/storefront/shell";
import { getProductsByIds } from "@/lib/product-server";
import { cartDetail, useCart, useHydrated } from "@/lib/store";
import { currency } from "@/lib/utils";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your bag — Sorrel" },
      {
        name: "description",
        content: "Review the pieces in your bag before placing a pay-on-delivery order.",
      },
      { property: "og:title", content: "Your bag — Sorrel" },
      {
        property: "og:description",
        content: "Review your bag and check out with cash on delivery.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const hydrated = useHydrated();
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const activeLines = hydrated ? lines : [];
  const {
    data: products = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["cart-products", activeLines.map((line) => line.productId)],
    queryFn: () => getProductsByIds({ data: activeLines.map((line) => line.productId) }),
    enabled: hydrated,
  });
  const { items, subtotal, shipping, total } = cartDetail(activeLines, products);

  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-10">
        <h1 className="text-5xl md:text-7xl">Your bag</h1>

        {!hydrated || isPending ? (
          <div className="mt-12 space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="h-32 animate-pulse bg-surface-2" />
            ))}
          </div>
        ) : isError ? (
          <div
            role="alert"
            className="mt-12 border border-destructive/50 bg-destructive/10 p-6 text-destructive"
          >
            Unable to load your bag. Please try again.
          </div>
        ) : items.length === 0 ? (
          <div className="mt-16 flex flex-col items-start border-t border-hairline pt-16">
            <p className="font-display text-4xl">Nothing in the bag yet</p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Pieces you add will wait here. Everything ships pay-on-delivery.
            </p>
            <Link
              to="/shop"
              className="label-caps mt-8 bg-primary px-7 py-4 text-primary-foreground"
            >
              Browse the collection
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-16 md:grid-cols-[1fr_360px]">
            <div className="border-t border-hairline">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-5 border-b border-hairline py-6">
                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    className="media-zoom w-24 shrink-0"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <Link to="/product/$slug" params={{ slug: product.slug }} className="text-lg">
                        {product.name}
                      </Link>
                      <button
                        onClick={() => remove(product.id)}
                        aria-label="Remove"
                        className="hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.sku}</p>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex items-center border border-hairline text-sm">
                        <button onClick={() => setQty(product.id, qty - 1)} className="px-3 py-1.5">
                          −
                        </button>
                        <span className="w-8 text-center">{qty}</span>
                        <button onClick={() => setQty(product.id, qty + 1)} className="px-3 py-1.5">
                          +
                        </button>
                      </div>
                      <span>{currency(product.price * qty)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit bg-surface p-8">
              <p className="label-caps text-muted-foreground">Summary</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>{currency(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd>{shipping === 0 ? "Free" : currency(shipping)}</dd>
                </div>
                <div className="flex justify-between border-t border-hairline pt-3 text-base">
                  <dt>Total</dt>
                  <dd>{currency(total)}</dd>
                </div>
              </dl>
              <Link
                to="/checkout"
                className="label-caps mt-8 block bg-primary px-6 py-4 text-center text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground"
              >
                Checkout
              </Link>
              <p className="mt-4 text-xs text-muted-foreground">
                Payment is collected on delivery.
              </p>
            </aside>
          </div>
        )}
      </div>
    </StoreShell>
  );
}
