import { motion } from "motion/react";
import { RedCell, WhiteCell, FlagellatedBacterium, VirusParticle, Trypanosome } from "./creatures";

// Deterministic pseudo-variety generator, so each section's cells look
// different from each other without needing hand-written paths per file.
function buildPath(seed, laneTop, laneLeft, reverse) {
  const wobble = 10 + (seed % 5) * 4;
  const start = reverse ? "104%" : "-6%";
  const end = reverse ? "-6%" : "104%";
  const midLeft1 = reverse ? "70%" : "30%";
  const midLeft2 = reverse ? "35%" : "65%";
  return [
    { top: `${laneTop}%`, left: start },
    { top: `${laneTop - wobble}%`, left: midLeft1 },
    { top: `${laneTop + wobble}%`, left: midLeft2 },
    { top: `${laneTop}%`, left: end },
  ];
}

export default function AmbientField({ redCells = 3, whiteCells = 1, foreign = null }) {
  const reds = Array.from({ length: redCells }, (_, i) => {
    const laneTop = 10 + ((i * 27) % 80);
    const size = 22 + ((i * 9) % 18); // ~22-40px — RBCs stay smaller
    const duration = 22 + ((i * 5) % 14);
    return {
      size,
      duration,
      path: buildPath(i, laneTop, 0, i % 2 === 0),
    };
  });

  const whites = Array.from({ length: whiteCells }, (_, i) => {
    const laneTop = 20 + ((i * 41) % 60);
    const size = 44 + ((i * 8) % 20); // ~44-64px — WBCs stay larger
    const duration = 30 + ((i * 6) % 10);
    return {
      size,
      duration,
      path: buildPath(i + 9, laneTop, 0, i % 2 !== 0),
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {reds.map((c, i) => (
        <motion.div
          key={`r-${i}`}
          className="absolute"
          style={{ width: c.size, height: c.size }}
          animate={{
            top: c.path.map((p) => p.top),
            left: c.path.map((p) => p.left),
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{ duration: c.duration, repeat: Infinity, ease: "linear" }}
        >
          <RedCell blur={c.size < 34} />
        </motion.div>
      ))}

      {whites.map((c, i) => (
        <motion.div
          key={`w-${i}`}
          className="absolute"
          style={{ width: c.size, height: c.size }}
          animate={{
            top: c.path.map((p) => p.top),
            left: c.path.map((p) => p.left),
          }}
          transition={{ duration: c.duration, repeat: Infinity, ease: "linear" }}
        >
          <WhiteCell />
        </motion.div>
      ))}

      {foreign?.type === "bacterium" && (
        <motion.div
          className="absolute"
          style={{ top: "38%", width: 300, height: 130 }}
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
      )}

      {foreign?.type === "virus" &&
        Array.from({ length: foreign.count || 2 }, (_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute"
            style={{
              top: `${10 + i * 35}%`,
              left: `${8 + i * 40}%`,
              width: 60 + i * 15,
              height: 60 + i * 15,
            }}
            animate={{
              y: [0, -22, 0, 22, 0],
              x: [0, 14, 0, -14, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 26 + i * 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 26 + i * 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 60 + i * 8, repeat: Infinity, ease: "linear" },
            }}
          >
            <VirusParticle />
          </motion.div>
        ))}

      {foreign?.type === "parasite" && (
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
      )}
    </div>
  );
}