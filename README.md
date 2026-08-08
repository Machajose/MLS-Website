# MLAS — Medical Lab Association Website (MUT)

Frontend-only starter for the Medical Laboratory Association of Murang'a
University of Technology. Built with **React** and **Tailwind CSS v4**
(via the `@tailwindcss/vite` plugin — no `tailwind.config.js` needed;
all design tokens live in `src/index.css` under `@theme`).

## Design direction

- **Palette**: lab-report paper (`#F6F4EC`) as the base, a deep specimen
  green (`#0F4C3A` → `#1B8A5A`) as the primary identity colour, and a
  blood-tube coral (`#E8593F`) as the single accent for calls to action.
- **Type**: Fraunces (display/serif) for headings — gives a textbook /
  journal feel — paired with Inter for body text and IBM Plex Mono for
  small "specimen label" details (dates, eyebrows, tags).
- **Signature motif**: sections are framed like microscope slide labels
  — corner crosshair brackets, monospace "Test: 00X" eyebrows, and a
  hero styled as a lab report card with a microscope field-of-view
  illustration (red cells + a white cell), all built in inline SVG.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Focus.jsx        # focus areas / activity panels
    Events.jsx        # upcoming events timeline
    Committee.jsx      # executive committee roster (placeholders)
    Join.jsx           # membership call-to-action
    Footer.jsx
  App.jsx
  index.css           # Tailwind v4 import + @theme design tokens
```

## Next steps before showing the committee

- Swap the placeholder committee names/photos in `Committee.jsx`.
- Confirm real event dates in `Events.jsx`.
- Point the WhatsApp/email links in `Join.jsx` to real contacts.
- Add real photography (club activities, campus) once available —
  the illustration-only hero was a deliberate choice for this first
  pass so nothing here depends on the committee sourcing images yet.
