import JoinForm from "./JoinForm";

export default function Join() {
  return (
    <section id="join" className="border-t border-ink/10 bg-lab-50/60 dark:border-dark-border dark:bg-dark-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
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
            <p className="mt-4 label-tag text-lab-500">
              Contact · Joseph Macharia
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              
                <a href="mailto:machajse608@gmail.com"
                className="rounded-sm border border-paper/25 px-5 py-2.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                Email the committee
              </a>
              
                <a href="https://wa.me/254114655750"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-paper/25 px-5 py-2.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <JoinForm />
        </div>
      </div>
    </section>
  );
}