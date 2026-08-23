import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/mock-data";

type TestimonialsSectionProps = {
  reviews: Testimonial[];
};

export function TestimonialsSection({ reviews }: TestimonialsSectionProps) {
  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
    return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
  };

  return (
    <section className="rule-top mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="label-caps text-olive">Kind words</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">Loved by our customers</h2>
        </div>
        <p className="label-caps text-xs text-muted-foreground">Verified purchases</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="group rounded-sm border border-border/60 bg-surface p-6 theme-card-hover md:p-7"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 fill-olive text-olive ${
                    i < review.rating ? "" : "opacity-40"
                  }`}
                />
              ))}
            </div>

            <blockquote className="font-display mt-5 text-lg text-foreground">
              &ldquo;{review.quote}&rdquo;
            </blockquote>

            <div className="h-px bg-border/60 my-5" />

            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="label-caps truncate text-xs text-muted-foreground">
                  {review.purchased}
                </p>
                <p className="mt-2 text-sm font-medium">
                  {review.customerName}
                  <span className="text-muted-foreground"> · {review.city}</span>
                </p>
              </div>
              <div className="h-9 w-9 shrink-0 rounded-full border border-olive/30 text-olive flex items-center justify-center text-xs font-medium">
                {getInitials(review.customerName)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
