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
              
                <a href="https://wa.me/254114655750"
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
            <div className="mt-4 flex items-center gap-3">
  
    <a href="https://chat.whatsapp.com/DK8nvisEgEGLEk5lCZbRjg?s=sh&p=a&mlu=4"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-4 py-2 text-sm font-semibold text-paper/80 transition-colors hover:border-lab-500 hover:text-lab-500"
  >
    <WhatsAppIcon className="h-4 w-4" />
    Join the MUTMLSA WhatsApp group
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
function WhatsAppIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.99.581 3.845 1.583 5.404L2.5 22l4.75-1.045c1.492.897 3.242 1.41 5.754 1.41 5.518 0 10.004-4.486 10.004-10.004S17.522 2 12.004 2zm0 18.108c-1.885 0-3.632-.55-5.107-1.497l-.366-.229-3.028.666.596-3.05-.24-.376A8.083 8.083 0 013.92 12.004c0-4.463 3.62-8.084 8.084-8.084s8.084 3.62 8.084 8.084-3.621 8.104-8.084 8.104z" />
    </svg>
  );
}