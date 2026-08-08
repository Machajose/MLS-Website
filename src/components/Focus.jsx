const AREAS = [
  {
    code: "HEM",
    title: "Haematology & Blood Banking",
    desc: "Peer practicals on blood film review, grouping, and cross-matching technique.",
  },
  {
    code: "MIC",
    title: "Microbiology",
    desc: "Culture, staining, and identification workshops beyond the standard curriculum.",
  },
  {
    code: "CHM",
    title: "Clinical Chemistry",
    desc: "Analyser walkthroughs, QC principles, and result interpretation clinics.",
  },
  {
    code: "HTP",
    title: "Histopathology & Cytology",
    desc: "Specimen processing, staining technique, and slide-reading sessions.",
  },
  {
    code: "RES",
    title: "Research & Publication",
    desc: "Guided support for final-year projects, abstracts, and poster presentations.",
  },
  {
    code: "OUT",
    title: "Community Outreach",
    desc: "Free screening camps and health-awareness drives around Murang'a County.",
  },
];

export default function Focus() {
  return (
    <section id="focus" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500"> Panel</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          What we focus on
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <div
              key={a.code}
              className="group relative rounded-sm border border-ink/10 bg-lab-50/50 p-6 transition-colors hover:border-lab-600/40 hover:bg-lab-50 dark:border-dark-border dark:bg-dark-surface/40 dark:hover:bg-dark-surface"
            >
              <div className="flex items-center justify-between">
                <span className="label-tag rounded-sm bg-lab-900 px-2 py-1 text-lab-100 dark:bg-lab-600">
                  {a.code}
                </span>
                <span className="h-2 w-2 rounded-full bg-coral-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-lab-900 dark:text-dark-ink">
                {a.title}
              </h3>
              <p className="mt-2 text-ink-soft dark:text-dark-ink-soft">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
