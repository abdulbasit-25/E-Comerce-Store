import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "@/components/storefront/product-card";
import { StoreShell } from "@/components/storefront/shell";
import { getCategories } from "@/lib/category-server";
import { getProductBySlug, getProducts } from "@/lib/product-server";
import { useCart } from "@/lib/store";
import { currency } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: async ({ params }) => {
    const product = await getProductBySlug({ data: params.slug });
    if (!product) throw notFound();

    const [related, categories] = await Promise.all([
      getProducts({ data: { categoryId: product.categoryId } }),
      getCategories(),
    ]);
    return {
      product,
      related: related.filter((p) => p.id !== product.id).slice(0, 3),
      categories,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Piece not found — Sorrel" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Sorrel` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — Sorrel` },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product, related, categories } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const category = categories.find((c) => c.id === product.categoryId);

  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-10">
        <nav className="label-caps text-muted-foreground">
          <Link to="/shop" className="link-underline">
            Shop
          </Link>
          <span className="px-2">/</span>
          <Link to="/shop" search={{ category: product.categoryId }} className="link-underline">
            {category?.name}
          </Link>
        </nav>

        <div className="mt-8 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <img
              src={product.image}
              alt={product.name}
              width={1024}
              height={1280}
              className="w-full bg-surface-2 object-cover"
            />
          </div>

          <div className="md:col-span-5 md:pt-8">
            <h1 className="text-5xl leading-none md:text-6xl">{product.name}</h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xl">{currency(product.price)}</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-olive text-olive" />
                {product.rating}
              </span>
            </div>

            <p className="mt-8 text-muted-foreground">{product.description}</p>

            <dl className="mt-8 space-y-2 border-t border-hairline pt-6 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">SKU</dt>
                <dd>{product.sku}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Availability</dt>
                <dd className={product.stock === 0 ? "text-destructive" : "text-olive"}>
                  {product.stock === 0 ? "Sold out" : `${product.stock} in stock`}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Payment</dt>
                <dd>Cash on delivery</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-stretch gap-3">
              <div className="flex items-center border border-hairline">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-4 hover:text-olive"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-4 hover:text-olive"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                disabled={product.stock === 0}
                onClick={() => {
                  add(product.id, qty);
                  toast.success(`${product.name} added to your bag`);
                }}
                className="label-caps flex-1 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                {product.stock === 0 ? "Sold out" : "Add to bag"}
              </button>
            </div>
          </div>
        </div>

        <section className="mt-28">
          <h2 className="mb-8 text-3xl">Pairs well with</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </StoreShell>
  );
}
