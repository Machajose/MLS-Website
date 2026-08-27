import { useState } from "react";
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

// Each entry is one graduating class — a group photo (or slideshow of a
// few) identifying that year's cohort as a whole, not individual profiles.
const ALUMNI_CLASSES = [
  {
    year: "Class of 2026",
    tagline: "On to the next adventure.This years heros!",
    photos: [ClassOf2026_1],
  },
  {
    year: "Class of 2025",
    tagline: "Soon to be uploaded",
    photos: [],
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
              <ClassTile classData={c} onOpen={() => setOpenIndex(i)} />
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

function ClassTile({ classData, onOpen }) {
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
      <div className="flex aspect-[4/3] items-center justify-center bg-lab-900">
        {hasPhotos ? (
          <img src={classData.photos[0]} alt={classData.year} className="h-full w-full object-cover" />
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
        <div className="max-h-[75vh] w-full space-y-2 overflow-y-auto bg-lab-900 p-2">
          {classData.photos.map((src, i) => (
            <img key={i} src={src} alt={`${classData.year} ${i + 1}`} className="w-full rounded-sm object-contain" />
          ))}
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