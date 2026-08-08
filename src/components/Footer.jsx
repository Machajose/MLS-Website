export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10 dark:border-dark-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-ink-soft dark:text-dark-ink-soft sm:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Medical Lab Association · Murang'a University of Technology</p>
        <p className="label-tag">Bench to bedside</p>
      </div>
    </footer>
  );
}
