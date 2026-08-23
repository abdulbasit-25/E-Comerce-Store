import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/storefront/product-card";
import type { Product } from "@/lib/mock-data";

type FeaturedProductsSectionProps = {
  products: Product[];
  title?: string;
};

export function FeaturedProductsSection({
  products,
  title = "New this season",
}: FeaturedProductsSectionProps) {
  return (
    <section className="mx-auto max-w-[1500px] px-5 pb-8 md:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <Link
          to="/shop"
          className="label-caps link-underline group inline-flex items-center gap-1.5"
        >
          All goods
          <ArrowUpRight className="h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
