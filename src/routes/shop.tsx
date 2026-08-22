import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useMemo } from "react";
import { ProductCard, ProductCardSkeleton } from "@/components/storefront/product-card";
import { StoreShell } from "@/components/storefront/shell";
import { categories, products, type Product } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type ShopSearch = {
  category?: string | undefined;
  q?: string | undefined;
  max?: number | undefined;
  inStock?: boolean | undefined;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
    max: search["max"] !== undefined ? Number(search["max"]) || undefined : undefined,
    inStock: search["inStock"] === true || search["inStock"] === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop all — Sorrel" },
      {
        name: "description",
        content:
          "Browse linen apparel, hand-thrown ceramics, woven textiles and objects. Filter by category, price and availability.",
      },
      { property: "og:title", content: "Shop all — Sorrel" },
      {
        property: "og:description",
        content: "Linen apparel, ceramics, textiles and objects, made in small runs.",
      },
    ],
  }),
  component: Shop,
});

function useFilteredProducts(search: ShopSearch) {
  return useQuery({
    queryKey: ["products", search],
    queryFn: async (): Promise<Product[]> => {
      await new Promise((r) => setTimeout(r, 250));
      return products.filter((p) => {
        if (search.category && p.categorySlug !== search.category) return false;
        if (
          search.q &&
          !`${p.name} ${p.description}`.toLowerCase().includes(search.q.toLowerCase())
        )
          return false;
        if (search.max && p.price > search.max) return false;
        if (search.inStock && p.stock === 0) return false;
        return true;
      });
    },
  });
}

function Shop() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const { data, isPending } = useFilteredProducts(search);
  const maxPrice = useMemo(() => Math.max(...products.map((p) => p.price)), []);

  const setSearch = (patch: Partial<ShopSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });

  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-10">
        <p className="label-caps text-olive">
          {search.category
            ? categories.find((c) => c.slug === search.category)?.name
            : "Everything"}
        </p>
        <h1 className="mt-4 text-5xl md:text-7xl">Shop</h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr]">
          {/* Filters */}
          <aside className="space-y-8">
            <div className="relative">
              <Search className="absolute top-1/2 left-0 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search.q ?? ""}
                onChange={(e) => setSearch({ q: e.target.value || undefined })}
                placeholder="Search"
                className="w-full border-b border-hairline bg-transparent py-2 pl-6 text-sm outline-none placeholder:text-muted-foreground focus:border-olive"
              />
            </div>

            <div>
              <p className="label-caps mb-3 text-muted-foreground">Category</p>
              <div className="flex flex-col items-start gap-2 text-sm">
                <button
                  onClick={() => setSearch({ category: undefined })}
                  className={cn("link-underline", !search.category && "text-olive")}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSearch({ category: c.slug })}
                    className={cn("link-underline", search.category === c.slug && "text-olive")}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="label-caps mb-3 text-muted-foreground">Max price</p>
              <input
                type="range"
                min={50}
                max={maxPrice}
                step={5}
                value={search.max ?? maxPrice}
                onChange={(e) => setSearch({ max: Number(e.target.value) })}
                className="w-full accent-olive"
              />
              <p className="mt-1 text-sm text-muted-foreground">Up to ${search.max ?? maxPrice}</p>
            </div>

            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={Boolean(search.inStock)}
                onChange={(e) => setSearch({ inStock: e.target.checked || undefined })}
                className="accent-olive"
              />
              In stock only
            </label>

            <button
              onClick={() => navigate({ search: {}, replace: true })}
              className="label-caps text-muted-foreground link-underline"
            >
              Reset
            </button>
          </aside>

          {/* Grid */}
          <div>
            {isPending ? (
              <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : data && data.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
                {data.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center border border-dashed border-hairline px-6 py-24 text-center">
                <p className="font-display text-4xl">Nothing here yet</p>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  No pieces match this combination of filters. Try widening the price range or
                  clearing the category.
                </p>
                <Link
                  to="/shop"
                  search={{}}
                  className="label-caps mt-8 bg-primary px-6 py-3 text-primary-foreground"
                >
                  Clear filters
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </StoreShell>
  );
}
