export default function Join() {
  return (
    <section id="join" className="border-t border-ink/10 bg-lab-50/60 dark:border-dark-border dark:bg-dark-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="crosshair grid gap-10 rounded-sm border border-ink/10 bg-lab-900 p-10 text-paper md:grid-cols-[1fr_auto] md:items-center md:p-14">
          <div>
            <span className="label-tag text-lab-500">Result: Positive</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Ready to join the bench?
            </h2>
            <p className="mt-4 max-w-md text-paper/70">
              Membership is open to all registered Medical Laboratory Science
              students at MUT. Sign up during orientation week, or reach out
              to any committee member directly.
            </p>
            <p className="mt-4 label-tag text-lab-500">
              Contact · Joseph Macharia
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
             href="mailto:mutmedicallab@gmail.com"
  className="rounded-sm bg-coral-500 px-6 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-coral-600"
>
  Email the committee
 </a>
           
           <a
      href="https://instagram.com/mut_mlsa"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-sm border border-paper/25 px-6 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
>
  Follow on Instagram
      
</a>

         <a 
         href="https://chat.whatsapp.com/DK8nvisEgEGLEk5lCZbRjg"
         target="blank"
         rel="noopener noreferrer"
         className="rounded-sm border border-paper/25 px-6 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper/10">

          Join the WhatsApp group
         </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
