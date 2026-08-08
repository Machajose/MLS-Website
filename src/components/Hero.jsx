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

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8">
        <div>
          <div className="crosshair inline-flex items-center gap-2 px-4 py-2">
            <span className="label-tag text-lab-700 dark:text-lab-500"> MUTMLSA–2026</span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-lab-900 md:text-6xl dark:text-dark-ink">
  The bedrock of
  <br />
  <span className="text-coral-600">modern medicine.</span>
</h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft dark:text-dark-ink-soft">
            The Medical Laboratory Association of Murang'a University of
            Technology brings together students of Medical Laboratory
            Science to sharpen diagnostic skill, share research, and grow
            into the clinicians labs depend on.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#join"
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
              <dt className="label-tag text-ink-soft dark:text-dark-ink-soft">Est.</dt>
              <dd className="font-display text-2xl font-semibold text-lab-900 dark:text-dark-ink">2016</dd>
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
              <span className="label-tag text-coral-500">MLAS LAB</span>
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
      {/* red blood cells */}
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
      {/* white cell */}
      <circle cx="178" cy="120" r="34" fill="#EFF6F1" opacity="0.95" />
      <circle cx="168" cy="112" r="9" fill="#146349" />
      <circle cx="188" cy="126" r="7" fill="#146349" />
      <line x1="32" y1="130" x2="288" y2="130" stroke="#EFF6F1" strokeOpacity="0.15" />
      <line x1="160" y1="2" x2="160" y2="258" stroke="#EFF6F1" strokeOpacity="0.15" />
    </svg>
  );
}
