import Reveal from "./Reveal";
import AmbientField from "./AmbientField";
import TiltCard from "./TiltCard";

const COHORTS = [
  { year: "Year 1", title: "Foundations", desc: "Settling into lab basics — safety protocols, specimen handling, and first exposure to the discipline through MUTMLSA's peer mentorship." },
  { year: "Year 2", title: "Building the bench", desc: "Deeper into core units like haematology and microbiology, with MUTMLSA workshops running alongside coursework to reinforce technique." },
  { year: "Year 3", title: "Specialising", desc: "Coursework narrows toward specific disciplines — clinical chemistry, histopathology — with MUTMLSA connecting members to research opportunities." },
  { year: "Year 4", title: "Bridge to practice", desc: "Attachments, final-year projects, and the transition toward certification — MUTMLSA's alumni network and career talks matter most here." },
];

export default function Cohorts() {
  return (
    <section id="cohorts" className="relative overflow-hidden border-t border-ink/10 py-20 dark:border-dark-border md:py-28">
      <AmbientField redCells={2} whiteCells={1} />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500">Every stage</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          From Year 1 to Year 4
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft dark:text-dark-ink-soft">
          MUTMLSA meets members wherever they are in the program — here's
          what each year is generally about.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COHORTS.map((c, i) => (
            <Reveal key={c.year} delay={i * 0.1}>
              <TiltCard className="rounded-sm border border-ink/10 bg-lab-50/50 p-6 dark:border-dark-border dark:bg-dark-surface/40">
                <span className="label-tag rounded-sm bg-lab-900 px-2 py-1 text-lab-100 dark:bg-lab-600">
                  {c.year}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-lab-900 dark:text-dark-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft dark:text-dark-ink-soft">{c.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}