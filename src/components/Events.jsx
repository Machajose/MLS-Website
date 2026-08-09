import { motion } from "motion/react";

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
    title: "Annual MUTMLSA Research Symposium",
    desc: "Final-year project presentations, posters, and the annual general meeting.",
  },
];

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden border-t border-ink/10 bg-lab-900 py-20 text-paper md:py-28">
      <DriftingViruses />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-500"> Schedule</span>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
          Upcoming on the calendar
        </h2>

        <div className="mt-12 divide-y divide-paper/10 border-y border-paper/10">
        <div className="mt-8 flex items-center gap-3 rounded-sm border border-paper/10 bg-paper/5 px-5 py-4">
  <span className="label-tag rounded-sm bg-paper/10 px-2 py-1 text-lab-500">
    Weekly
  </span>
  <p className="text-sm text-paper/70">
    General meetings every <span className="text-paper">Thursday, 5:00 PM</span> — LR 17.
  </p>
</div>
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

function DriftingViruses() {
  const viruses = [
    { top: "10%", left: "5%", size: 70, duration: 26, delay: 0 },
    { top: "65%", left: "88%", size: 90, duration: 32, delay: 2 },
    { top: "80%", left: "10%", size: 55, duration: 22, delay: 4 },
    { top: "20%", left: "78%", size: 50, duration: 28, delay: 1 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {viruses.map((v, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: v.top, left: v.left, width: v.size, height: v.size }}
          animate={{
            y: [0, -22, 0, 22, 0],
            x: [0, 14, 0, -14, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: v.duration, repeat: Infinity, ease: "easeInOut", delay: v.delay },
            x: { duration: v.duration, repeat: Infinity, ease: "easeInOut", delay: v.delay },
            rotate: { duration: v.duration * 2.2, repeat: Infinity, ease: "linear" },
          }}
        >
          <VirusParticle />
        </motion.div>
      ))}
    </div>
  );
}

function VirusParticle() {
  // A stylized virus particle — icosahedral-ish body ringed with spike
  // proteins, slowly rotating as it drifts.
  const spikeCount = 12;
  const spikes = Array.from({ length: spikeCount }, (_, i) => {
    const angle = (i / spikeCount) * Math.PI * 2;
    const bx = 50 + Math.cos(angle) * 30;
    const by = 50 + Math.sin(angle) * 30;
    const ex = 50 + Math.cos(angle) * 44;
    const ey = 50 + Math.sin(angle) * 44;
    return { bx, by, ex, ey, key: i };
  });

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full opacity-[0.14]">
      <defs>
        <radialGradient id="virus-body" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E8593F" />
          <stop offset="100%" stopColor="#0F4C3A" />
        </radialGradient>
      </defs>

      {spikes.map((s) => (
        <g key={s.key}>
          <line x1={s.bx} y1={s.by} x2={s.ex} y2={s.ey} stroke="#E8593F" strokeWidth="2" strokeLinecap="round" />
          <circle cx={s.ex} cy={s.ey} r="3" fill="#E8593F" />
        </g>
      ))}

      <circle cx="50" cy="50" r="30" fill="url(#virus-body)" />
      <circle cx="42" cy="42" r="9" fill="#F6F4EC" opacity="0.25" />
    </svg>
  );
}