import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/mock-data";

type CollectionsSectionProps = {
  categories: Category[];
};

export function CollectionsSection({ categories }: CollectionsSectionProps) {
  return (
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
  );
}
