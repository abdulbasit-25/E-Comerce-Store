import { Link } from "@tanstack/react-router";
import { currency, type Product } from "@/lib/mock-data";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block rise"
      style={{ animationDelay: `${Math.min(index, 6) * 60}ms` }}
    >
      <div className="media-zoom relative aspect-[4/5] bg-surface-2">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover"
        />
        {product.stock === 0 && (
          <span className="label-caps absolute top-3 left-3 bg-background px-2 py-1">Sold out</span>
        )}
        {product.stock > 0 && product.stock <= 5 && (
          <span className="label-caps absolute top-3 left-3 bg-olive px-2 py-1 text-accent-foreground">
            {product.stock} left
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-lg leading-snug">{product.name}</h3>
        <span className="text-sm text-muted-foreground">{currency(product.price)}</span>
      </div>
    </Link>
  );
}

export function ProductCardSkeleton() {
  return (
    <div>
      <div className="aspect-[4/5] animate-pulse bg-surface-2" />
      <div className="mt-3 h-4 w-2/3 animate-pulse bg-surface-2" />
    </div>
  );
}
