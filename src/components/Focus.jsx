import { motion } from "motion/react";
import Reveal from "./Reveal";

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
    <section id="focus" className="relative overflow-hidden py-20 md:py-28">
      <DriftingBacteria />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500">What we do</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          Beyond the classroom
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft dark:text-dark-ink-soft">
          MUTMLSA runs hands-on activities across every discipline in medical
          lab science — closing the gap between what's taught in class and
          what the job actually demands.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <Reveal key={a.code} delay={i * 0.08}>
              <div className="group relative rounded-sm border border-ink/10 bg-lab-50/50 p-6 transition-colors hover:border-lab-600/40 hover:bg-lab-50 dark:border-dark-border dark:bg-dark-surface/40 dark:hover:bg-dark-surface">
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
      </div>
    </section>
  );
}

function DriftingBacteria() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute"
        style={{ width: 340, height: 150 }}
        animate={{
          top: ["-10%", "100%", "-10%"],
          left: ["-20%", "100%", "-20%"],
          scaleX: [1, 1, -1, -1, 1],
        }}
        transition={{
  top: { duration: 70, repeat: Infinity, ease: "easeInOut" },
  left: { duration: 70, repeat: Infinity, ease: "easeInOut" },
  scaleX: { duration: 70, repeat: Infinity, times: [0, 0.48, 0.5, 0.98, 1], ease: "linear" },
}}
      >
        <FlagellatedBacterium />
      </motion.div>
    </div>
  );
}


function FlagellatedBacterium() {
  // A large, clearly visible bacterium — gradient-shaded for a rounded,
  // 3D feel, ringed with fine pili, plus an independently whipping
  // flagellum for a swimming motion as it crosses the screen.
  const pili = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const bx = 170 + Math.cos(angle) * 75;
    const by = 75 + Math.sin(angle) * 32;
    const ex = 170 + Math.cos(angle) * 100;
    const ey = 75 + Math.sin(angle) * 42;
    return { bx, by, ex, ey, key: i };
  });

  return (
    <svg viewBox="0 0 340 150" className="h-full w-full drop-shadow-lg" overflow="visible">
      <defs>
        <radialGradient id="bacterium-body" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#3FAE7A" />
          <stop offset="55%" stopColor="#146349" />
          <stop offset="100%" stopColor="#0B2E23" />
        </radialGradient>
      </defs>

      {/* pili — fine hair-like appendages around the body */}
      {pili.map((p) => (
        <line
          key={p.key}
          x1={p.bx}
          y1={p.by}
          x2={p.ex}
          y2={p.ey}
          stroke="#1B8A5A"
          strokeWidth="1.5"
          opacity="0.6"
          strokeLinecap="round"
        />
      ))}

      {/* body — rounded, gradient-shaded for volume */}
      <ellipse cx="170" cy="75" rx="80" ry="34" fill="url(#bacterium-body)" />
      {/* glossy highlight for a 3D sheen */}
      <ellipse cx="140" cy="58" rx="26" ry="10" fill="#EFF6F1" opacity="0.3" />
      {/* internal nucleoid texture */}
      <ellipse cx="185" cy="80" rx="34" ry="12" fill="#0B2E23" opacity="0.35" />

      {/* flagellum — whips back and forth from the rear of the body */}
      <motion.path
        d="M 92 75 Q 55 45, 20 68 Q -10 88, -45 65"
        stroke="#146349"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        animate={{
          d: [
            "M 92 75 Q 55 45, 20 68 Q -10 88, -45 65",
            "M 92 75 Q 55 100, 20 78 Q -10 55, -45 82",
            "M 92 75 Q 55 45, 20 68 Q -10 88, -45 65",
          ],
        }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}