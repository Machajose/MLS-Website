import { useEffect, useState } from "react";
import { motion } from "motion/react";
import kemelsa0 from "../assets/moments/kemelsa.jpeg";
import kemelsa1 from "../assets/moments/kemelsa 2.jpeg";
import kemelsa2 from "../assets/moments/kemelsa 3.jpeg";
import kemelsa3 from "../assets/moments/kemelsa 4.jpeg";
import kemelsa4 from "../assets/moments/kemelsa 5.jpeg";
import kemelsa5 from "../assets/moments/kemelsa 6.jpeg";
import kemelsa6 from "../assets/moments/kemelsa 7.jpeg";
import kemelsa7 from "../assets/moments/kemelsa 8.jpeg";
import gameNightphoto from "../assets/moments/game-night.jpeg";
import gameNightVideo from "../assets/moments/game-night-video.mp4";

// Each entry can be one of:
//   { type: "image", photo: someImport }
//   { type: "slideshow", photos: [img1, img2, img3] }  — cycles automatically
//   { type: "video", video: someImport }
//   { type: "placeholder" }  — "Photo coming soon"
const MOMENTS = [
  {
    caption: "KEMELSA Scientific Conference",
    semester: "Sem 2, 2025",
    type: "slideshow",
    photos: [kemelsa0, kemelsa1, kemelsa2, kemelsa3, kemelsa4, kemelsa5, kemelsa6, kemelsa7], // Replace with actual photos as they become available
  },
  {
    caption: "Game Night",
    semester: "Sem 2, 2025",
    type: "video",
    video: gameNightVideo,
  },
  { caption: "Club Symposium", semester: "Sem 2, 2026", type: "placeholder" },

  { caption: "Careers Beyond the Bench Talk", semester: "Sem 2, 2025", type: "placeholder" },
  { caption: "Board Handover Ceremony", semester: "Sem 2, 2024", type: "placeholder" },
];

export default function Moments() {
  return (
    <section id="moments" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500">The archive</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          Moments from past semesters
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft dark:text-dark-ink-soft">
          Photos and clips from what we've been up to — this section will
          keep growing each semester.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOMENTS.map((m) => (
            <MomentTile key={m.caption + m.semester} moment={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MomentTile({ moment }) {
  return (
    <div className="group overflow-hidden rounded-sm border border-ink/10 dark:border-dark-border">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-lab-900">
        {moment.type === "slideshow" && <Slideshow photos={moment.photos} />}
        {moment.type === "image" && (
          <img src={moment.photo} alt={moment.caption} className="h-full w-full object-cover" />
        )}
        {moment.type === "video" && (
          <video
            src={moment.video}
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
        )}
        {moment.type === "placeholder" && (
          <span className="label-tag text-lab-500/60">Photo coming soon</span>
        )}
      </div>
      <div className="bg-lab-50/50 p-4 dark:bg-dark-surface/40">
        <p className="font-display text-sm font-semibold text-lab-900 dark:text-dark-ink">
          {moment.caption}
        </p>
        <p className="label-tag mt-1 text-ink-soft dark:text-dark-ink-soft">
          {moment.semester}
        </p>
      </div>
    </div>
  );
}

function Slideshow({ photos }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="relative h-full w-full">
      {photos.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      ))}
      {photos.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-paper" : "bg-paper/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}