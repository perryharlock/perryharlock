import { CVSection } from "@/components/CVSection";
import { Hero } from "@/components/Hero";
import { PortfolioSection } from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioSection />
      <CVSection />
    </main>
  );
}
