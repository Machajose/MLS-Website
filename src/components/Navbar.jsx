import { useEffect, useState } from "react";
import logo from "../assets/MUTMLSAlogo.jpeg";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus Areas" },
  { href: "#events", label: "Events" },
  { href: "#committee", label: "Committee" },
  { href: "#join", label: "Join" },
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-ink/10 dark:bg-dark-bg/90 dark:border-dark-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
  <img src={logo} alt="MUTMLSA logo" className="h-8 w-8 rounded-full object-cover" />
  <span className="font-display text-lg font-semibold tracking-tight text-lab-900 dark:text-dark-ink">
    MUTMLSA
  </span>
</a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-tag group relative text-ink-soft transition-colors hover:text-lab-700 dark:text-dark-ink-soft dark:hover:text-lab-500"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-lab-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-lab-500" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-lab-600/50 hover:text-lab-700 dark:border-dark-border dark:text-dark-ink-soft dark:hover:text-lab-500"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          
            <a href="#join"
            className="hidden rounded-sm bg-lab-800 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-lab-700 md:inline-block dark:bg-lab-600 dark:hover:bg-lab-500"
          >
            Become a member
          </a>

          <button
  type="button"
  className="flex flex-col gap-1.5 md:hidden"
  aria-label="Toggle menu"
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
>
            <span className={`h-0.5 w-6 bg-ink transition-transform dark:bg-dark-ink ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-opacity dark:bg-dark-ink ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform dark:bg-dark-ink ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 pb-6 md:hidden dark:border-dark-border dark:bg-dark-bg">
          <ul className="flex flex-col gap-4 pt-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                
                  <a href={l.href}
                  onClick={() => setOpen(false)}
                  className="label-tag block text-ink-soft dark:text-dark-ink-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              
                <a href="#join"
                onClick={() => setOpen(false)}
                className="mt-1 inline-block rounded-sm bg-lab-800 px-4 py-2 text-sm font-semibold text-paper dark:bg-lab-600"
              >
                Become a member
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}