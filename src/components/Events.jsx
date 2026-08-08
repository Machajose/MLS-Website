const EVENTS = [
  {
    date: "14 Sep 2026",
    tag: "Workshop",
    title: "Blood Film Morphology Clinic",
    desc: "Hands-on peer-led review of normal vs. abnormal blood films, open to Y2–Y4.",
  },
  {
    date: "03 Oct 2026",
    tag: "Outreach",
    title: "Free Screening Camp — Kenol Market",
    desc: "Blood pressure, glucose, and malaria screening for the surrounding community.",
  },
  {
    date: "21 Oct 2026",
    tag: "Talk",
    title: "Careers Beyond the Bench",
    desc: "Alumni panel on public health, research, and diagnostics industry pathways.",
  },
  {
    date: "18 Nov 2026",
    tag: "Symposium",
    title: "Annual MLAS Research Symposium",
    desc: "Final-year project presentations, posters, and the annual general meeting.",
  },
];

export default function Events() {
  return (
    <section id="events" className="border-t border-ink/10 bg-lab-900 py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-500"> Schedule</span>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
          Upcoming on the calendar
        </h2>

        <div className="mt-12 divide-y divide-paper/10 border-y border-paper/10">
          {EVENTS.map((e) => (
            <div
              key={e.title}
              className="grid gap-3 py-6 sm:grid-cols-[110px_100px_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-sm text-lab-500">{e.date}</span>
              <span className="label-tag w-fit rounded-sm bg-paper/10 px-2 py-1 text-coral-500">
                {e.tag}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-paper">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-paper/60">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
