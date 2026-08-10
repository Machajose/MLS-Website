import JoinForm from "./JoinForm";
import AmbientField from "./AmbientField";

export default function Join() {
  return (
    <section id="join" className="relative overflow-hidden border-t border-ink/10 bg-lab-50/60 dark:border-dark-border dark:bg-dark-surface/40 py-20 md:py-28">
      <AmbientField redCells={2} whiteCells={1} />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="crosshair grid gap-12 rounded-sm border border-ink/10 bg-lab-900 p-10 text-paper md:grid-cols-2 md:p-14">
          <div>
            <span className="label-tag text-lab-500">Result: Positive</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Ready to join the bench?
            </h2>
            <p className="mt-4 max-w-md text-paper/70">
              Membership is open to all registered Medical Laboratory Science
              students at MUT. Fill in the form, or reach out directly.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              
                <a href="mailto:mutmedicallab@gmail.com"
                className="rounded-sm border border-paper/25 px-5 py-2.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                Email the committee
              </a>
              
                <a href="https://wa.me/254112003231"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-paper/25 px-5 py-2.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="label-tag text-lab-500">Follow us</span>
              
                <a href="https://instagram.com/mut_mlsa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper/80 transition-colors hover:border-lab-500 hover:text-lab-500"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <JoinForm />
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}