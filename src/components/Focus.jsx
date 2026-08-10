import Reveal from "./Reveal";
import AmbientField from "./AmbientField";


const ACTIVITIES = [
  {
    code: "01",
    title: "Weekly Meetings",
     desc: "General meetings every Thursday, 5:00 PM — plans get made, concepts get debated, and there's usually a game or two before we wrap up."
  },
  {
    code: "02",
    title: "Game Nights",
    desc: "Because bonding outside the lab matters just as much as bonding inside it.",
  },
  {
    code: "03",
    title: "Professional Exchanges",
    desc: "Alumni panels, career talks, and conversations with practicing lab technologists about life after graduation.",
  },
  {
    code: "04",
    title: "Symposiums & Conferences",
    desc: "From our own annual research symposium to external events like the KEMELSA Scientific Conference.",
  },
  {
    code: "05",
    title: "Community Outreach",
    desc: "Free screening camps for blood pressure, glucose, and malaria at markets around Murang'a County.",
  },
];

const DISCIPLINES = [
  { code: "HEM", title: "Haematology & Blood Banking", desc: "Peer-led blood film review, grouping, and cross-matching practice." },
  { code: "MIC", title: "Microbiology", desc: "Culture and Gram-staining workshops, plus organism identification drills." },
  { code: "CHM", title: "Clinical Chemistry", desc: "Analyser walkthroughs and sessions on interpreting abnormal results." },
  { code: "HTP", title: "Histopathology & Cytology", desc: "Specimen processing practice and guided slide-reading sessions." },
  { code: "IMS", title: "Immunology & Serology", desc: "Antigen-antibody reaction principles, serological testing technique, and diagnostic interpretation practice." },
];

export default function Focus() {
  return (
    <section id="focus" className="relative overflow-hidden border-t border-ink/10 bg-lab-50 py-20 text-ink dark:border-dark-border dark:bg-dark-surface/40 md:py-28">

      <AmbientField redCells={3} whiteCells={1} />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500">What we do</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          Beyond the classroom
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft dark:text-dark-ink-soft">
          MUTMLSA is a rhythm of weekly meetings, occasional game nights,
          and bigger moments like symposiums and outreach — with real
          technical practice woven through all of it.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
  {ACTIVITIES.map((a, i) => (
    <Reveal key={a.code} delay={i * 0.08}>
      <div className="group relative h-full flex flex-col rounded-sm border border-ink/10 bg-lab-50/50 p-6 transition-colors hover:border-lab-600/40 hover:bg-lab-50 dark:border-dark-border dark:bg-dark-surface/40 dark:hover:bg-dark-surface">
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
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10 dark:border-dark-border">
          <span className="label-tag text-lab-700 dark:text-lab-500">Technical practice</span>
          <h3 className="mt-2 font-display text-xl font-semibold text-lab-900 dark:text-dark-ink">
            Grounded in the discipline
          </h3>
          <p className="mt-2 max-w-xl text-sm text-ink-soft dark:text-dark-ink-soft">
            Underneath all of that, every activity ties back to real
            coursework across the core areas of medical lab science.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
  {DISCIPLINES.map((d, i) => (
    <Reveal key={d.code} delay={i * 0.06}>
      <div className="h-full flex flex-col rounded-sm border border-ink/10 bg-lab-50/40 p-5 dark:border-dark-border dark:bg-dark-surface/30">
                  <span className="label-tag rounded-sm bg-lab-900 px-2 py-1 text-lab-100 dark:bg-lab-600">
                    {d.code}
                  </span>
                  <h4 className="mt-3 font-display text-base font-semibold text-lab-900 dark:text-dark-ink">
                    {d.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-ink-soft dark:text-dark-ink-soft">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}