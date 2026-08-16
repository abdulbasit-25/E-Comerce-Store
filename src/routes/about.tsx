import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreShell } from "@/components/storefront/shell";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Sorrel" },
      {
        name: "description",
        content: "How Sorrel makes linen apparel, stoneware and objects in small runs, and why we ship pay-on-delivery.",
      },
      { property: "og:title", content: "The Atelier — Sorrel" },
      { property: "og:description", content: "Small-batch making, natural materials, and pay-on-delivery ordering." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <StoreShell>
      <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-10">
        <p className="label-caps text-olive">The atelier</p>
        <h1 className="display-xl mt-6 max-w-4xl">A small room, a long table, few machines.</h1>
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="space-y-6 text-muted-foreground md:col-span-5">
            <p>
              Sorrel began with a single run of twelve linen shirts. We still work that way — short runs,
              natural fibres, and materials that improve rather than degrade.
            </p>
            <p>
              Ceramics are thrown by hand, so no two pieces share a silhouette exactly. Textiles are woven at a
              family mill that has run the same looms for three generations.
            </p>
            <p>
              Every order ships pay-on-delivery. You settle with the courier once the parcel is in your hands —
              no card details, no stored payment data.
            </p>
            <Link to="/shop" className="label-caps link-underline inline-block text-foreground">
              Shop the collection
            </Link>
          </div>
          <div className="media-zoom md:col-span-7">
            <img
              src={heroImage}
              alt="Linen garment photographed against a plaster wall"
              loading="lazy"
              width={1920}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </StoreShell>
  );
}
