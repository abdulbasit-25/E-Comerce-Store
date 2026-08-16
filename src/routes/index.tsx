import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/storefront/product-card";
import { StoreShell } from "@/components/storefront/shell";
import heroImage from "@/assets/hero.jpg";
import { categories, products } from "@/lib/mock-data";
import { ArrowUpRight, Mail, MessageCircle, Package, Scissors, Ship, Sprout } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

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

const process = [
  { icon: Sprout, step: "01", title: "Source", body: "Flax and wool bought direct from small growers and a family mill." },
  { icon: Scissors, step: "02", title: "Make", body: "Cut, thrown or woven by hand, one short run at a time." },
  { icon: Package, step: "03", title: "Finish", body: "Washed, checked and packed in the same room it was made." },
  { icon: Ship, step: "04", title: "Ship COD", body: "Out the door to you — you pay the courier on arrival." },
];

const tickerItems = ["SLOW-MADE", "HAND-THROWN", "PAY ON DELIVERY", "SMALL BATCH", "SHIPPED WORLDWIDE"];

function Home() {
  const featured = products.slice(0, 4);

  return (
    <StoreShell>
      <style>{`
        @keyframes sorrel-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-24 h-96 w-96 rounded-full bg-olive/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-olive/5 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-[1500px] gap-6 px-5 pt-10 md:px-10 md:pt-16">
          {/* Spine label — desktop only */}
          <div className="hidden shrink-0 md:flex md:w-10 md:items-start md:justify-center">
            <span className="label-caps origin-top-left translate-y-full -rotate-90 whitespace-nowrap text-olive">
              Spring Collection — 2026 — Sorrel Atelier
            </span>
          </div>

          <div className="grid flex-1 gap-8 pb-16 md:grid-cols-12">
            <div className="rise md:col-span-5 md:pt-16">
              <p className="label-caps flex items-center gap-2 text-olive md:hidden">
                <span className="h-px w-6 bg-olive" />
                Spring collection · 2026
              </p>
              <h1 className="display-xl mt-4 md:mt-6">
                Made slowly,
                <br />
                <em className="italic">worn</em> daily.
              </h1>
              <p className="mt-6 max-w-sm text-muted-foreground md:mt-8">
                Washed linen, hand-thrown stoneware and quiet objects for the home. Made in small runs,
                delivered to your door, paid when it arrives.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
                <Link
                  to="/shop"
                  className="label-caps group inline-flex items-center gap-2 bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground"
                >
                  Shop the collection
                  <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
                <Link to="/about" className="label-caps link-underline text-muted-foreground">
                  Inside the atelier
                </Link>
              </div>
            </div>

            {/* Boxed / framed hero image */}
            <div className="relative md:col-span-7">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-olive/30 md:block"
              />
              <div className="media-zoom relative rounded-sm border border-border/60 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.4)]">
                <img
                  src={heroImage}
                  alt="Model wearing an oversized oatmeal linen shirt against a warm plaster wall"
                  width={1920}
                  height={1200}
                  className="aspect-[4/3] w-full rounded-sm object-cover md:aspect-[5/6]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="rule-top overflow-hidden border-b border-border/60 bg-olive-soft py-3">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap"
          style={{ animation: "sorrel-marquee 22s linear infinite" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="label-caps flex items-center gap-10 text-olive">
              {item}
              <span className="h-1 w-1 rounded-full bg-olive/50" />
            </span>
          ))}
        </div>
      </div>

      {/* Collections */}
      <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-y-6 md:grid-cols-12">
          <h2 className="text-3xl md:col-span-4 md:text-4xl">The collections</h2>
          <div className="grid gap-px overflow-hidden rounded-sm bg-hairline md:col-span-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/shop"
                search={{ category: category.slug }}
                className="group relative flex flex-col gap-1 overflow-hidden bg-background px-6 py-6 transition-colors duration-300 hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-olive transition-transform duration-300 group-hover:scale-y-100"
                />
                <span className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {category.name}
                </span>
                <span className="flex-1 text-sm text-muted-foreground">{category.description}</span>
                <span className="label-caps flex items-center gap-1 text-olive opacity-0 transition-all duration-300 group-hover:opacity-100">
                  View
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process — a real sequence, numbers earn their place here */}
      <section className="rule-top mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20">
        <p className="label-caps text-olive">How it's made</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(({ icon: Icon, step, title, body }) => (
            <div
              key={step}
              className="group relative rounded-sm border border-border/60 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-olive/50 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] md:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-muted-foreground">{step}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-olive/30 text-olive transition-colors duration-300 group-hover:bg-olive group-hover:text-surface">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <p className="font-display mt-6 text-xl">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-[1500px] px-5 pb-8 md:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl">New this season</h2>
          <Link to="/shop" className="label-caps link-underline group inline-flex items-center gap-1.5">
            All goods
            <ArrowUpRight className="h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Editorial note — with rotating atelier stamp */}
      <section className="mx-auto mt-20 max-w-[1500px] px-5 md:mt-24 md:px-10">
        <div className="relative overflow-hidden rounded-sm bg-olive-soft px-6 py-16 text-center md:px-20 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
          />

          {/* Spinning stamp */}
          <div className="relative mx-auto mb-6 hidden h-20 w-20 items-center justify-center sm:flex">
            <svg viewBox="0 0 100 100" className="h-full w-full text-olive/70" style={{ animation: "spin 18s linear infinite" }}>
              <defs>
                <path id="stampCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="8.2" letterSpacing="2" fill="currentColor">
                <textPath href="#stampCircle">HAND MADE • SINCE 2026 • HAND MADE • SINCE 2026 •</textPath>
              </text>
            </svg>
            <span className="absolute h-2 w-2 rounded-full bg-olive" />
          </div>

          <p className="label-caps relative text-olive">On payment</p>
          <p className="relative mx-auto mt-6 max-w-2xl font-display text-2xl leading-tight sm:text-3xl md:text-5xl">
            No card, no checkout friction. You pay the courier when the parcel is in your hands.
          </p>
        </div>
      </section>

      {/* Contact / owner panel */}
      <section className="mx-auto mt-20 max-w-[1500px] px-5 pb-4 md:mt-24 md:px-10">
        <div className="relative overflow-hidden rounded-sm border border-border/60 bg-surface px-6 py-10 sm:px-8 md:px-14 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <p className="label-caps text-olive">Want a store like this?</p>
              <h2 className="font-display mt-4 text-2xl leading-tight sm:text-3xl">
                This site is a working demo, built by ARCHER.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                For a storefront built to your brand, catalog and workflow, reach out directly.
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