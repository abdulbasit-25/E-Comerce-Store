import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreShell } from "@/components/storefront/shell";
import heroImage from "@/assets/hero.jpg";
import { Hand, Leaf, Package, Mail, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

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

const values = [
  {
    icon: Hand,
    title: "Hand-thrown",
    body: "Every ceramic piece is thrown on the wheel — no two share a silhouette exactly.",
  },
  {
    icon: Leaf,
    title: "Natural fibres",
    body: "Linen and wool woven at a family mill running the same looms for three generations.",
  },
  {
    icon: Package,
    title: "Pay on delivery",
    body: "Settle with the courier once the parcel is in your hands. No card details stored, ever.",
  },
];

function About() {
  return (
    <StoreShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-olive/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-olive/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-10">
          <p className="label-caps flex items-center gap-2 text-olive">
            <span className="h-px w-6 bg-olive" />
            The atelier
          </p>
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
              <Link
                to="/shop"
                className="label-caps link-underline group inline-flex items-center gap-1.5 text-foreground"
              >
                Shop the collection
                <ArrowUpRight className="h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </div>

            {/* Boxed / framed image */}
            <div className="relative md:col-span-7">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-olive/30"
              />
              <div className="media-zoom relative rounded-sm border border-border/60 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.35)]">
                <img
                  src={heroImage}
                  alt="Linen garment photographed against a plaster wall"
                  loading="lazy"
                  width={1920}
                  height={1200}
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — boxed cards */}
      <section className="rule-top mx-auto max-w-[1500px] px-5 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative rounded-sm border border-border/60 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-olive/50 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-olive/30 text-olive transition-colors duration-300 group-hover:bg-olive group-hover:text-surface">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-display mt-6 text-xl">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo notice / owner contact */}
      <section className="rule-top mx-auto max-w-[1500px] px-5 py-16 md:px-10">
        <div className="relative overflow-hidden rounded-sm border border-border/60 bg-surface px-8 py-12 md:px-14 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-olive/5 blur-3xl"
          />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <p className="label-caps flex items-center gap-2 text-olive">
                <Sparkles className="h-3.5 w-3.5" />
                Demo storefront
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight">
                This site is a working demo, built by ARCHER.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Sorrel is a showcase build — for a store built to your brand, catalog and workflow, reach out
                directly for further dealing.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:min-w-[280px]">
              <a
                href="mailto:abdulbasit.alpha25@gmail.com"
                className="group flex items-center justify-between rounded-sm border border-border/60 px-5 py-3.5 text-sm transition-all duration-300 hover:border-olive hover:bg-olive/5"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-olive" />
                  abdulbasit.alpha25@gmail.com
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a
                href="https://wa.me/923415878569"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-sm border border-border/60 px-5 py-3.5 text-sm transition-all duration-300 hover:border-olive hover:bg-olive/5"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-olive" />
                  +92 341 5878569
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <p className="text-center text-xs text-muted-foreground">Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </StoreShell>
  );
}