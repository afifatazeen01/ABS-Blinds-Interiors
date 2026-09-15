import { Hero } from "../components/blocks/Hero";
import { CategoryGrid } from "../components/blocks/CategoryGrid";
import { FeaturedProducts } from "../components/blocks/FeaturedProducts";
import { ProcessTimeline } from "../components/blocks/ProcessTimeline";
import { WhyAbs } from "../components/blocks/WhyAbs";
import { GalleryPreview } from "../components/blocks/GalleryPreview";
import { CtaSection } from "../components/blocks/CtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ProcessTimeline />
      <WhyAbs />
      <GalleryPreview />
      <CtaSection />
    </main>
  );
}
