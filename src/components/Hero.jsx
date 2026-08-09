import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      {/* ambient grid, like graph/lab paper */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <DriftingCells />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8">
        <div>
          <div className="crosshair inline-flex items-center gap-2 px-4 py-2">
            <span className="label-tag text-lab-700 dark:text-lab-500">MUTMLSA · Est. board 2023</span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-lab-900 md:text-6xl dark:text-dark-ink">
            The bedrock of
            <br />
            <span className="text-coral-600">modern medicine.

            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft dark:text-dark-ink-soft">
            The Murang'a University of Technology Medical Laboratory
            Students' Association brings together students of Medical
            Laboratory Science to sharpen diagnostic skill, share research,
            and grow into the clinicians labs depend on.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            
              <a href="#join"
              className="rounded-sm bg-coral-500 px-6 py-3.5 text-sm font-semibold text-paper shadow-[3px_3px_0_0_var(--color-lab-900)] transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-lab-900)]"
            >
              Become a member
            </a>
            
              <a
              href="#about"
              className="label-tag border-b border-ink/30 pb-1 text-ink-soft transition-colors hover:border-lab-700 hover:text-lab-800 dark:text-dark-ink-soft"
            >
              Read the report ↓
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6 dark:border-dark-border">
            <div>
              <dt className="label-tag text-ink-soft dark:text-dark-ink-soft">Charter</dt>
              <dd className="font-display text-2xl font-semibold text-lab-900 dark:text-dark-ink">2023</dd>
            </div>
            <div>
              <dt className="label-tag text-ink-soft dark:text-dark-ink-soft">Members</dt>
              <dd className="font-display text-2xl font-semibold text-lab-900 dark:text-dark-ink">300+</dd>
            </div>
            <div>
              <dt className="label-tag text-ink-soft dark:text-dark-ink-soft">Cohorts</dt>
              <dd className="font-display text-2xl font-semibold text-lab-900 dark:text-dark-ink">Y1–Y4</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="crosshair rounded-sm border border-ink/10 bg-lab-900 p-8 shadow-xl dark:border-dark-border">
            <MicroscopeField />
            <div className="mt-6 flex items-center justify-between border-t border-paper/15 pt-4">
              <span className="label-tag text-lab-100/70">Field of view · 40x</span>
              <span className="label-tag text-coral-500">MUTMLSA LAB</span>
            </div>
          </div>
          {/* tape corner accent */}
          <div className="absolute -top-3 left-8 h-6 w-16 -rotate-3 bg-lab-100/80" />
        </div>
      </div>
    </section>
  );
}

function MicroscopeField() {
  return (
    <svg viewBox="0 0 320 260" className="w-full" aria-hidden="true">
      <circle cx="160" cy="130" r="128" fill="#0B2E23" />
      <circle cx="160" cy="130" r="128" fill="none" stroke="#EFF6F1" strokeOpacity="0.12" strokeWidth="1" />
      {[
        [95, 90, 26], [150, 70, 22], [210, 95, 28], [70, 150, 24],
        [140, 150, 30], [205, 165, 22], [110, 200, 20], [230, 55, 18],
        [255, 140, 20], [45, 100, 16],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="#E8593F" opacity="0.9" />
          <circle cx={cx} cy={cy} r={r * 0.42} fill="#0B2E23" opacity="0.55" />
        </g>
      ))}
      <circle cx="178" cy="120" r="34" fill="#EFF6F1" opacity="0.95" />
      <circle cx="168" cy="112" r="9" fill="#146349" />
      <circle cx="188" cy="126" r="7" fill="#146349" />
      <line x1="32" y1="130" x2="288" y2="130" stroke="#EFF6F1" strokeOpacity="0.15" />
      <line x1="160" y1="2" x2="160" y2="258" stroke="#EFF6F1" strokeOpacity="0.15" />
    </svg>
  );
}

function DriftingCells() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handlePointerMove(e) {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  const redCells = [
    { size: 46, duration: 26, depth: 0.6, path: [
      { top: "8%", left: "-4%" }, { top: "18%", left: "30%" }, { top: "6%", left: "60%" }, { top: "20%", left: "104%" },
    ]},
    { size: 58, duration: 32, depth: 0.9, path: [
      { top: "72%", left: "-6%" }, { top: "60%", left: "25%" }, { top: "78%", left: "55%" }, { top: "64%", left: "104%" },
    ]},
    { size: 50, duration: 29, depth: 0.75, path: [
      { top: "14%", left: "104%" }, { top: "26%", left: "70%" }, { top: "10%", left: "40%" }, { top: "22%", left: "-6%" },
    ]},
    { size: 38, duration: 24, depth: 0.5, path: [
      { top: "82%", left: "104%" }, { top: "70%", left: "65%" }, { top: "86%", left: "35%" }, { top: "74%", left: "-4%" },
    ]},
    { size: 30, duration: 20, depth: 0.4, path: [
      { top: "50%", left: "-6%" }, { top: "40%", left: "35%" }, { top: "56%", left: "70%" }, { top: "44%", left: "104%" },
    ]},
    { size: 34, duration: 27, depth: 0.55, path: [
      { top: "34%", left: "104%" }, { top: "44%", left: "80%" }, { top: "30%", left: "50%" }, { top: "38%", left: "-6%" },
    ]},
    { size: 42, duration: 23, depth: 0.65, path: [
      { top: "92%", left: "-6%" }, { top: "84%", left: "20%" }, { top: "96%", left: "48%" }, { top: "88%", left: "104%" },
    ]},
    { size: 26, duration: 19, depth: 0.35, path: [
      { top: "4%", left: "104%" }, { top: "12%", left: "78%" }, { top: "2%", left: "48%" }, { top: "10%", left: "-6%" },
    ]},
  ];

  const whiteCells = [
    { size: 44, duration: 34, depth: 0.85, path: [
      { top: "40%", left: "104%" }, { top: "32%", left: "60%" }, { top: "46%", left: "20%" }, { top: "36%", left: "-6%" },
    ]},
    { size: 48, duration: 38, depth: 1, path: [
      { top: "90%", left: "-6%" }, { top: "80%", left: "40%" }, { top: "94%", left: "75%" }, { top: "84%", left: "104%" },
    ]},
  ];

  return (
    <div
      className="pointer-events-auto absolute inset-0 overflow-hidden"
      onPointerMove={handlePointerMove}
    >
      {redCells.map((c, i) => (
        <FlowingCell key={`r-${i}`} cell={c} mouseX={mouseX} mouseY={mouseY}>
          <RedCell blur={c.depth < 0.6} />
        </FlowingCell>
      ))}
      {whiteCells.map((c, i) => (
        <FlowingCell key={`w-${i}`} cell={c} mouseX={mouseX} mouseY={mouseY}>
          <WhiteCell />
        </FlowingCell>
      ))}
    </div>
  );
}

function FlowingCell({ cell, mouseX, mouseY, children }) {
  const px = useTransform(mouseX, (v) => v * 40 * cell.depth);
  const py = useTransform(mouseY, (v) => v * 40 * cell.depth);
  const springX = useSpring(px, { stiffness: 60, damping: 20 });
  const springY = useSpring(py, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      className="absolute"
      style={{ width: cell.size, height: cell.size, x: springX, y: springY }}
      animate={{
        top: cell.path.map((p) => p.top),
        left: cell.path.map((p) => p.left),
        scale: [1, 1.05, 1, 1.05, 1],
      }}
      transition={{
        duration: cell.duration,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.33, 0.66, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function RedCell({ blur = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full opacity-25"
      style={blur ? { filter: "blur(1px)" } : undefined}
    >
      <defs>
        <radialGradient id="rbc-edge" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="#E8593F" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D8492F" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#rbc-edge)" />
      <ellipse cx="50" cy="50" rx="20" ry="16" fill="#F6F4EC" opacity="0.28" />
    </svg>
  );
}

function WhiteCell() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full opacity-20">
      <circle cx="50" cy="50" r="46" fill="#EFF6F1" opacity="0.5" />
      <path
        d="M40 32 C55 28, 68 36, 66 48 C72 54, 68 66, 56 68 C48 74, 34 70, 32 58 C24 54, 28 40, 40 32 Z"
        fill="#146349"
        opacity="0.85"
      />
    </svg>
  );
}