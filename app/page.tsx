import { Hero } from "@/components/Hero";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CVSection } from "@/components/CVSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioSection />
      <CVSection />
      <TestimonialsSection />
    </main>
  );
}
