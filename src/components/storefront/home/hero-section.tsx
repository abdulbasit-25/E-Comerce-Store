import heroImage from "@/assets/hero.jpg";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <>
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
                Washed linen, hand-thrown stoneware and quiet objects for the home. Made in small
                runs, delivered to your door, paid when it arrives.
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
    </>
  );
}
