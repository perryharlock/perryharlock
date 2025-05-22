import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="portfolio" className="h-[500px]">
        Portfolio Section
      </section>
      <section id="cv" className="h-[500px]">
        CV Section
      </section>
    </main>
  );
}
