import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/storefront/product-card";
import { StoreShell } from "@/components/storefront/shell";
import heroImage from "@/assets/hero.jpg";
import { categories, products } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorrel — Linen, stoneware and objects" },
      {
        name: "description",
        content:
          "An independent atelier of linen apparel, hand-thrown ceramics and considered objects. Pay on delivery, ships worldwide.",
      },
      { property: "og:title", content: "Sorrel — Linen, stoneware and objects" },
      { property: "og:description", content: "Slow-made goods from an independent atelier. Pay on delivery." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);

  return (
    <StoreShell>
      {/* Hero — asymmetric editorial split */}
      <section className="mx-auto grid max-w-[1500px] gap-8 px-5 pt-10 pb-16 md:grid-cols-12 md:px-10 md:pt-16">
        <div className="rise md:col-span-5 md:pt-16">
          <p className="label-caps text-olive">Spring collection · 2026</p>
          <h1 className="display-xl mt-6">
            Made slowly,
            <br />
            <em className="italic">worn</em> daily.
          </h1>
          <p className="mt-8 max-w-sm text-muted-foreground">
            Washed linen, hand-thrown stoneware and quiet objects for the home. Made in small runs,
            delivered to your door, paid when it arrives.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="label-caps bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground"
            >
              Shop the collection
            </Link>
            <Link to="/about" className="label-caps link-underline text-muted-foreground">
              Inside the atelier
            </Link>
          </div>
        </div>
        <div className="media-zoom md:col-span-7">
          <img
            src={heroImage}
            alt="Model wearing an oversized oatmeal linen shirt against a warm plaster wall"
            width={1920}
            height={1200}
            className="aspect-[4/3] w-full object-cover md:aspect-[5/6]"
          />
        </div>
      </section>

      {/* Marquee rule */}
      <div className="rule-top">
        <div className="mx-auto flex max-w-[1500px] flex-wrap justify-between gap-6 px-5 py-5 text-xs text-muted-foreground md:px-10">
          <span>Cash on delivery</span>
          <span>Free shipping over $200</span>
          <span>Small-batch production</span>
          <span>30-day returns</span>
        </div>
      </div>

      {/* Categories */}
      <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-10">
        <div className="grid gap-y-6 md:grid-cols-12">
          <h2 className="text-4xl md:col-span-4">The collections</h2>
          <div className="grid gap-px bg-hairline md:col-span-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/shop"
                search={{ category: category.slug }}
                className="group flex items-baseline justify-between gap-6 bg-background py-6 transition-colors hover:bg-surface"
              >
                <span className="font-display text-3xl">{category.name}</span>
                <span className="flex-1 text-sm text-muted-foreground">{category.description}</span>
                <span className="label-caps text-olive opacity-0 transition-opacity group-hover:opacity-100">
                  View
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-[1500px] px-5 pb-8 md:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl">New this season</h2>
          <Link to="/shop" className="label-caps link-underline">
            All goods
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Editorial note */}
      <section className="mx-auto mt-24 max-w-[1500px] px-5 md:px-10">
        <div className="bg-olive-soft px-6 py-20 text-center md:px-20">
          <p className="label-caps text-olive">On payment</p>
          <p className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
            No card, no checkout friction. You pay the courier when the parcel is in your hands.
          </p>
        </div>
      </section>
    </StoreShell>
  );
}
