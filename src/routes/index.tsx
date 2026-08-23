import { createFileRoute } from "@tanstack/react-router";
import { StoreShell } from "@/components/storefront/shell";
import { HeroSection } from "@/components/storefront/home/hero-section";
import { MarqueeTicker } from "@/components/storefront/home/marquee-ticker";
import { CollectionsSection } from "@/components/storefront/home/collections-section";
import { ProcessSection } from "@/components/storefront/home/process-section";
import { FeaturedProductsSection } from "@/components/storefront/home/featured-products-section";
import { EditorialBanner } from "@/components/storefront/home/editorial-banner";
import { ContactPanel } from "@/components/storefront/home/contact-panel";
import { TrustBadges } from "@/components/storefront/home/trust-badges";
import { BestSellersSection } from "@/components/storefront/home/best-sellers-section";
import { TestimonialsSection } from "@/components/storefront/home/testimonials-section";
import { NewsletterSection } from "@/components/storefront/home/newsletter-section";
import { FaqSection } from "@/components/storefront/home/faq-section";
import { InstagramFeedSection } from "@/components/storefront/home/instagram-feed-section";
import {
  bestSellers,
  categories,
  faqEntries,
  instagramPosts,
  products,
  testimonials,
} from "@/lib/mock-data";

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
      {
        property: "og:description",
        content: "Slow-made goods from an independent atelier. Pay on delivery.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);

  return (
    <StoreShell>
      <HeroSection />
      <MarqueeTicker />
      <CollectionsSection categories={categories} />
      <ProcessSection />
      <FeaturedProductsSection products={featured} />
      <TrustBadges />
      <BestSellersSection products={bestSellers} />
      <TestimonialsSection reviews={testimonials} />
      <EditorialBanner />
      <NewsletterSection />
      <FaqSection items={faqEntries} />
      <InstagramFeedSection posts={instagramPosts} />
      <ContactPanel />
    </StoreShell>
  );
}
