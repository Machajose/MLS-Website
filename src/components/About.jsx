import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink/10 bg-lab-50/60 dark:border-dark-border dark:bg-dark-surface/40 py-20 md:py-28">
      <DriftingParasite />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.4fr_0.6fr]">
          <div>
            <span className="label-tag text-lab-700 dark:text-lab-500">Test: 001 / Overview</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
              Who we are
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft dark:text-dark-ink-soft">
            <p>
              MUTMLSA is the official student association for the Department
              of Medical Laboratory Science at Murang'a University of
              Technology. We exist to complement classroom learning with
              hands-on exposure, mentorship, and a genuine sense of
              community among lab science students.
            </p>
            <p>
              From haematology to microbiology, histopathology to clinical
              chemistry, our members support one another through practicals,
              exams, attachments, and the long road to certification —
              because good diagnostics start with people who look out for
              each other first.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 dark:border-dark-border dark:bg-dark-border sm:grid-cols-3">
          {[
            { k: "Mission", v: "To promote and maintain high standards of professionalism and excellence in Medical Laboratory service delivery in Murang'a University of Technology and beyond." },
            { k: "Vision", v: "Promote cohesion and collaboration, linking competent medical technologists to opportunities." },
            { k: "Objectives", v: "Unite medical laboratory students, expose members to the wider medical field through community-based service, and create public awareness on health matters." },
          ].map((item) => (
            <div key={item.k} className="bg-paper p-7 dark:bg-dark-bg">
              <h3 className="label-tag text-coral-600 dark:text-coral-500">{item.k}</h3>
              <p className="mt-3 text-ink-soft dark:text-dark-ink-soft">{item.v}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 label-tag text-ink-soft dark:text-dark-ink-soft">
          Matron · Dr. Esther Muitta
        </p>
      </div>
    </section>
  );
}

function DriftingParasite() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute"
        style={{ top: "6%", left: "78%", width: 150, height: 55 }}
        animate={{
          x: [0, -30, 0, 30, 0],
          y: [0, 10, 0, -10, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Trypanosome />
      </motion.div>
    </div>
  );
}
function Trypanosome() {
  // An elongated, ribbon-like parasite with an undulating membrane and
  // a trailing flagellum — the shape is redrawn continuously to create
  // a swimming/undulating motion, distinct from the round bacteria/virus.
  return (
    <svg viewBox="0 0 200 60" className="h-full w-full opacity-[0.15]" overflow="visible">
      <motion.path
        stroke="#146349"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        animate={{
          d: [
            "M 10 30 Q 45 10, 80 30 T 150 30 Q 165 30, 180 22",
            "M 10 30 Q 45 48, 80 30 T 150 30 Q 165 30, 180 38",
            "M 10 30 Q 45 10, 80 30 T 150 30 Q 165 30, 180 22",
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* nucleus, roughly mid-body */}
      <circle cx="70" cy="30" r="5" fill="#0B2E23" opacity="0.5" />
    </svg>
  );
}