export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Well hello new friend! I’m Perry Harlock, a UI Developer / Designer based in Kent and London. I’m currently
        looking for a new role, so if you’re interested in working with me, please get in touch!
        <section id="portfolio" className="h-[500px]">
          Portfolio Section
        </section>
        <section id="cv" className="h-[500px]">
          CV Section
        </section>
      </main>
    </div>
  );
}
