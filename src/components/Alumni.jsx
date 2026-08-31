import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

// Class of 2024 Images
import ClassOf2024_1 from "../assets/Alumni/2023-2024/03.jpeg";
import ClassOf2024_2 from "../assets/Alumni/2023-2024/04.jpeg";
import ClassOf2024_3 from "../assets/Alumni/2023-2024/06.jpeg";
import ClassOf2024_4 from "../assets/Alumni/2023-2024/07.jpeg";
import ClassOf2024_5 from "../assets/Alumni/2023-2024/09.jpeg";

// Class of 2026
import ClassOf2026_1 from "../assets/Alumni/2025-2026/05.jpeg";
import ClassOf2026_2 from "../assets/Alumni/2025-2026/06.jpeg";
import ClassOf2026_3 from "../assets/Alumni/2025-2026/07.jpeg";
import ClassOf2026_4 from "../assets/Alumni/2025-2026/08.jpeg";
import ClassOf2026_5 from "../assets/Alumni/2025-2026/09.jpeg";
import ClassOf2026_6 from "../assets/Alumni/2025-2026/010.jpeg";

// Each entry is one graduating class — a group photo (or slideshow of a
// few) identifying that year's cohort as a whole, not individual profiles.
const ALUMNI_CLASSES = [
  {
    year: "Class of 2026",
    tagline: "Our heroes this year! We are proud of you!!",
    photos: [ClassOf2026_1, ClassOf2026_2, ClassOf2026_3, ClassOf2026_4, ClassOf2026_5, ClassOf2026_6],
  },
  {
    year: "Class of 2024",
    tagline: "The first to walk out MUTMLSA graduates",
    photos: [ClassOf2024_1, ClassOf2024_2, ClassOf2024_3, ClassOf2024_4, ClassOf2024_5],
  },
];

export default function Alumni() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="alumni" className="border-t border-ink/10 py-20 dark:border-dark-border md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500">The alumni</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          Every class that's come before
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft dark:text-dark-ink-soft">
          The graduating classes that built MUTMLSA's legacy, one cohort
          at a time.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALUMNI_CLASSES.map((c, i) => (
            <Reveal key={c.year} delay={i * 0.08}>
              <ClassTile classData={c} seed={i} onOpen={() => setOpenIndex(i)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <ClassLightbox
            classData={ALUMNI_CLASSES[openIndex]}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ClassTile({ classData, seed, onOpen }) {
  const hasPhotos = classData.photos.length > 0;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={hasPhotos ? onOpen : undefined}
      onKeyDown={(e) => {
        if (hasPhotos && (e.key === "Enter" || e.key === " ")) onOpen();
      }}
      className={`group overflow-hidden rounded-sm border border-ink/10 dark:border-dark-border ${
        hasPhotos ? "cursor-pointer transition-transform hover:-translate-y-0.5" : ""
      }`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-lab-900">
        {hasPhotos ? (
          <Slideshow photos={classData.photos} seed={seed} interactive={false} />
        ) : (
          <span className="label-tag text-lab-500/60">Photo coming soon</span>
        )}
      </div>
      <div className="bg-lab-50/50 p-4 dark:bg-dark-surface/40">
        <p className="font-display text-sm font-semibold text-lab-900 dark:text-dark-ink">
          {classData.year}
        </p>
        {classData.tagline && (
          <p className="mt-1 text-xs italic text-ink-soft dark:text-dark-ink-soft">
            {classData.tagline}
          </p>
        )}
      </div>
    </div>
  );
}

function ClassLightbox({ classData, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-lab-900/90 p-5 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl overflow-hidden rounded-sm bg-lab-900"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-lab-900"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="max-h-[75vh] w-full bg-lab-900">
          <Slideshow photos={classData.photos} seed={0} interactive natural />
        </div>

        <div className="p-5">
          <p className="font-display text-lg font-semibold text-paper">{classData.year}</p>
          {classData.tagline && (
            <p className="mt-1 text-sm italic text-paper/70">{classData.tagline}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Slideshow({ photos, seed = 0, interactive = false, natural = false }) {
  const [index, setIndex] = useState(0);

  const normalized = photos.map((p) =>
    typeof p === "string" ? { src: p, label: null } : p
  );

  useEffect(() => {
    if (normalized.length <= 1) return;
    const offset = (seed * 900) % 3200;
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % normalized.length);
      }, 3400);
    }, offset);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [normalized.length, seed]);

  const current = normalized[index];

  return (
    <div className={natural ? "relative w-full" : "relative h-full w-full"}>
      {normalized.map((p, i) => (
        <motion.div
          key={p.src}
          style={
            natural
              ? { position: i === index ? "relative" : "absolute", top: 0, left: 0, width: "100%" }
              : { position: "absolute", inset: 0 }
          }
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {natural ? (
            <ZoomableImage
              src={p.src}
              alt={p.label || ""}
              className="max-h-[75vh] w-full object-contain"
            />
          ) : (
            <img
              src={p.src}
              alt={p.label || ""}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
      ))}

      {current?.label && (
        <div className="absolute bottom-7 left-1/2 max-w-[90%] -translate-x-1/2 rounded-sm bg-lab-900/80 px-3 py-1.5 text-center text-xs font-semibold text-paper backdrop-blur-sm">
          {current.label}
        </div>
      )}

      {normalized.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {normalized.map((_, i) =>
            interactive ? (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors ${
                  i === index ? "bg-paper" : "bg-paper/30"
                }`}
              />
            ) : (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-paper" : "bg-paper/30"
                }`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

function ZoomableImage({ src, alt, className }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-transform duration-200 ${
        zoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
      }`}
      onMouseDown={() => setZoomed(true)}
      onMouseUp={() => setZoomed(false)}
      onMouseLeave={() => setZoomed(false)}
      onTouchStart={() => setZoomed(true)}
      onTouchEnd={() => setZoomed(false)}
      draggable={false}
    />
  );
}