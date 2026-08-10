import { motion } from "motion/react";

export function RedCell({ blur = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full opacity-30"
      style={blur ? { filter: "blur(1px)" } : undefined}
    >
      <defs>
        <radialGradient id="rbc-edge" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#F0917C" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#E8593F" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B03A26" stopOpacity="0.75" />
        </radialGradient>
      </defs>
      {/* rim shadow for volume */}
      <circle cx="50" cy="52" r="46" fill="#0B2E23" opacity="0.15" />
      {/* main body */}
      <circle cx="50" cy="50" r="46" fill="url(#rbc-edge)" />
      {/* biconcave dimple */}
      <ellipse cx="50" cy="50" rx="20" ry="16" fill="#8C2E1E" opacity="0.3" />
      {/* specular highlight */}
      <ellipse cx="35" cy="32" rx="12" ry="7" fill="#FFFFFF" opacity="0.35" />
    </svg>
  );
}

export function WhiteCell() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full opacity-25">
      <defs>
        <radialGradient id="wbc-body" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#EFF6F1" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C7D9CE" stopOpacity="0.5" />
        </radialGradient>
      </defs>
      {/* rim shadow */}
      <circle cx="50" cy="52" r="46" fill="#0B2E23" opacity="0.1" />
      {/* body */}
      <circle cx="50" cy="50" r="46" fill="url(#wbc-body)" />
      {/* lobed nucleus with its own shading */}
      <path
        d="M40 32 C55 28, 68 36, 66 48 C72 54, 68 66, 56 68 C48 74, 34 70, 32 58 C24 54, 28 40, 40 32 Z"
        fill="#146349"
        opacity="0.85"
      />
      <path
        d="M40 32 C48 30, 56 32, 60 38 C54 36, 46 37, 42 41 Z"
        fill="#3FAE7A"
        opacity="0.5"
      />
      {/* specular highlight */}
      <ellipse cx="32" cy="28" rx="10" ry="6" fill="#FFFFFF" opacity="0.4" />
    </svg>
  );
}

export function FlagellatedBacterium() {
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
      <ellipse cx="170" cy="75" rx="80" ry="34" fill="url(#bacterium-body)" />
      <ellipse cx="140" cy="58" rx="26" ry="10" fill="#EFF6F1" opacity="0.3" />
      <ellipse cx="185" cy="80" rx="34" ry="12" fill="#0B2E23" opacity="0.35" />
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

export function VirusParticle() {
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

export function Trypanosome() {
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
      <circle cx="70" cy="30" r="5" fill="#0B2E23" opacity="0.5" />
    </svg>
  );
}