import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import kemelsa1 from "../assets/moments/kemelsa.jpeg";
import kemelsa2 from "../assets/moments/kemelsa 2.jpeg";
import kemelsa3 from "../assets/moments/kemelsa 3.jpeg";
import kemelsa4 from "../assets/moments/kemelsa 4.jpeg";
import kemelsa5 from "../assets/moments/kemelsa 5.jpeg";
import kemelsa6 from "../assets/moments/kemelsa 6.jpeg";
import kemelsa7 from "../assets/moments/kemelsa 7.jpeg";
import kemelsa8 from "../assets/moments/kemelsa 8.jpeg";

import symposium1 from "../assets/moments/Symposium1.jpeg";
import symposium2 from "../assets/moments/Symposium2.jpeg";
import symposium3 from "../assets/moments/Symposium3.jpeg";
import symposium4 from "../assets/moments/Symposium4.jpeg";
import symposium5 from "../assets/moments/Symposium5.jpeg";
import symposium6 from "../assets/moments/symposium 6.jpeg";
import symposium7 from "../assets/moments/symposium 7.jpeg";
import symposium8 from "../assets/moments/symposium 8.jpeg";

import bloodDrive1 from "../assets/moments/blood-drive-1.jpeg";
import bloodDrive2 from "../assets/moments/blood-drive-2.jpeg";
import bloodDrive3 from "../assets/moments/blood-drive-3.jpeg";
import bloodDrive from "../assets/moments/blood-drive.jpeg";

import handover1 from "../assets/moments/handover-1.jpeg";
import handover from "../assets/moments/handover.jpeg";
import handover3 from "../assets/moments/handover-3.jpeg";
import handover6 from "../assets/moments/handover-6.jpeg";
import handover7 from "../assets/moments/handover-7.jpeg";
import handover8 from "../assets/moments/handover-8.jpeg";

import handoverZandria from "../assets/moments/handoverZandria.jpeg";
import handoverZandria2 from "../assets/moments/handoverZandria2.jpeg";
import handoverZandria3 from "../assets/moments/handoverZandria3.jpeg";
import handoverZandria4 from "../assets/moments/handoverZandria4.jpeg";
import handoverZandria5 from "../assets/moments/handoverZandria5.jpeg";
import handoverZandria6 from "../assets/moments/handoverZandria6.jpeg";
import handoverZandria7 from "../assets/moments/handoverZandria7.jpeg";

import handoverAlvin from "../assets/moments/handoverALvin.jpeg";
import handoverAlvin1 from "../assets/moments/handoverAlvin1.jpeg";
import handoverAlvin2 from "../assets/moments/handoverAlvin2.jpeg";
import handoverAlvin3 from "../assets/moments/handoverAlvin3.jpeg";


import professionalExchange from "../assets/moments/professional-exchange-jkuat.jpeg";
import professionalExchange1 from "../assets/moments/professional-exchange-jkuat 1.jpeg";
import professionalExchange2 from "../assets/moments/professional-exchange-jkuat 2.jpeg";

import kemelsaElections from "../assets/moments/kemelsa-elections.jpg";
import kemelsaElections1 from "../assets/moments/kemelsa-elections-1.jpg";
import kemelsaElections2 from "../assets/moments/kemelsa-elections-2.jpg";


import gameNightVideo from "../assets/moments/game-night-video.mp4";

// Grouped by academic year (since semesters span two calendar years),
// then by semester, then individual events. Most recent first — add
// new academic years/semesters/events here as photos come in. Empty
// `events: []` arrays are placeholders for years not yet populated.
const MOMENTS_BY_PERIOD = [
  {
    academicYear: "2025/2026",
    semester: "Sem 2",
    events: [
      {
        caption: "Handover Ceremony",
        tagline: "New board, same chaos, better spirit",
        type: "slideshow",
        photos: [handover1, handover , handover3, handover6, handover7, handover8],
      },
      {
        caption: "MUTMLSA at KeMELSA Scientific Conference",
        tagline: "Where we pretended to understand everyone's research",
        type: "slideshow",
        photos: [kemelsa8, kemelsa1, kemelsa2, kemelsa3, kemelsa4, kemelsa5, kemelsa6, kemelsa7],
      },
      {
        caption: "Club Symposium",
        type: "slideshow",
        photos: [symposium1, symposium6, symposium3, symposium8, symposium5, symposium2, symposium7, symposium4],
        objectPosition: "center 30%",
      },
      {
        caption: "Game Night",
        tagline: "The night strategy,skills and KAhoot! met competitive chaos",
        type: "video",
        video: gameNightVideo,
      },
    ],
  },
  {
    academicYear: "2025/2026",
    semester: "Sem 1",
    events: [
      {
        caption: "Blood Drive",
        tagline: "Giving blood, saving lives, complaining about the pinch",
        date: "November 29th",
        type: "slideshow",
        photos: [bloodDrive, bloodDrive1, bloodDrive2, bloodDrive3],
      },
    ],
  },
  {
    academicYear: "2024/2025",
    semester: "Sem 2",
    events: [
      { caption: "Handover Ceremony ", 
        type: "slideshow" ,
        photos: [handoverZandria7, handoverZandria2, handoverZandria3, handoverZandria4, handoverZandria5, handoverZandria6, handoverZandria],
      },

      { caption: "KeMELSA ELECTIONS 2025 hosted by MUTMLSA",
        date : "March 22nd 2025",
         type: "slideshow",
         photos: [kemelsaElections, kemelsaElections1, kemelsaElections2]
        },

      { caption: "JKUAT Professional Exchange",
        date: "March 8th 2025",
         type: "slideshow" ,
         photos:[professionalExchange2, professionalExchange1, professionalExchange]
        },
    ],
  },
  {
    academicYear: "2024/2025",
    semester: "Sem 1",
    events: [
      { caption: "Blood Film Morphology Workshop", type: "placeholder" },
      { caption: "Kenol Market Screening Camp", type: "placeholder" },
    ],
  },
  {
    academicYear: "2023/2024",
    semester: "Sem 2",
    events: [
      { caption: "Handover Ceremony",
         type: "slideshow" ,
         photos:[ handoverAlvin, handoverAlvin1, handoverAlvin2, handoverAlvin3]
      },

      { caption: "Careers Beyond the Bench Talk", type: "placeholder" },
    ],
  },
  {
    academicYear: "2023/2024",
    semester: "Sem 1",
    events: [
      { caption: "Board Induction", type: "placeholder" },
    ],
  },
];

export default function Moments() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const period = MOMENTS_BY_PERIOD[selectedPeriod];

  return (
    <section id="moments" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500">The archive</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          Moments from past semesters
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft dark:text-dark-ink-soft">
          Photos and clips from what we've been up to — tap a tile to view it
          on its own.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {MOMENTS_BY_PERIOD.map((p, i) => (
            <button
              key={`${p.academicYear}-${p.semester}`}
              type="button"
              onClick={() => {
                setSelectedPeriod(i);
                setOpenIndex(null);
              }}
              className={`label-tag rounded-sm px-3 py-1.5 transition-colors ${
                i === selectedPeriod
                  ? "bg-lab-900 text-lab-100 dark:bg-lab-600"
                  : "bg-lab-50 text-ink-soft hover:bg-lab-100 dark:bg-dark-surface/40 dark:text-dark-ink-soft"
              }`}
            >
              {p.semester} · {p.academicYear}
            </button>
          ))}
        </div>

        {period.events.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {period.events.map((m, i) => (
              <MomentTile
                key={`${selectedPeriod}-${m.caption}`}
                moment={m}
                seed={i}
                onOpen={() => setOpenIndex(i)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-sm border border-dashed border-ink/15 py-12 text-center dark:border-dark-border">
            <p className="label-tag text-ink-soft dark:text-dark-ink-soft">
              No photos archived for this semester yet
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            moment={period.events[openIndex]}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function MomentTile({ moment, seed, onOpen }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen();
      }}
      className="group cursor-pointer text-left overflow-hidden rounded-sm border border-ink/10 transition-transform hover:-translate-y-0.5 dark:border-dark-border"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-lab-900">
        {moment.type === "slideshow" && (
          <Slideshow photos={moment.photos} seed={seed} interactive={false} objectPosition={moment.objectPosition} />
        )}
        {moment.type === "image" && (
          <img src={moment.photo} alt={moment.caption} className="h-full w-full object-cover" />
        )}
        {moment.type === "video" && (
          <video
            src={moment.video}
            className="h-full w-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
        )}
        {moment.type === "placeholder" && (
          <span className="label-tag text-lab-500/60">Photo coming soon</span>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-lab-900/0 opacity-0 transition-all group-hover:bg-lab-900/20 group-hover:opacity-100">
          <span className="label-tag rounded-sm bg-paper/90 px-2 py-1 text-lab-900">
            View
          </span>
        </div>
      </div>
      <div className="bg-lab-50/50 p-4 dark:bg-dark-surface/40">
  <p className="font-display text-sm font-semibold text-lab-900 dark:text-dark-ink">
    {moment.caption}
  </p>
  {moment.tagline && (
    <p className="mt-1 text-xs italic text-ink-soft dark:text-dark-ink-soft">
      {moment.tagline}
    </p>
  )}
  {moment.date && (
    <p className="label-tag mt-1 text-ink-soft dark:text-dark-ink-soft">
      {moment.date}
    </p>
  )}
</div>
    </div>
  );
}

function Slideshow({ photos, seed = 0, interactive = false, natural = false, objectPosition = "center" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const offset = (seed * 900) % 3200;
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % photos.length);
      }, 3400);
    }, offset);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [photos.length, seed]);

  return (
    <div className={natural ? "relative w-full" : "relative h-full w-full"}>
      {photos.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          className={
            natural
              ? "max-h-[75vh] w-full object-contain"
              : "absolute inset-0 h-full w-full object-cover"
          }
          style={
            natural
              ? { position: i === index ? "relative" : "absolute", top: 0, left: 0 }
              : { objectPosition: objectPosition || "center" }
          }
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      ))}
      {photos.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, i) =>
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

function Lightbox({ moment, onClose }) {
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
          {moment.type === "slideshow" && (
            <Slideshow photos={moment.photos} seed={0} interactive natural />
          )}
          {moment.type === "image" && (
            <img
              src={moment.photo}
              alt={moment.caption}
              className="max-h-[75vh] w-full object-contain"
            />
          )}
          {moment.type === "video" && (
            <video
              src={moment.video}
              className="max-h-[75vh] w-full"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>

        <div className="p-5">
          <p className="font-display text-lg font-semibold text-paper">{moment.caption}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}