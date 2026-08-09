import organizingSecretary from "../assets/committee/Japheth.jpeg";
// Import each confirmed photo as it comes in, e.g.:
// import japhethPhoto from "../assets/committee/japheth.jpg";

const MEMBERS = [
  { role: "Chairperson", name: "To be announced", initials: "CP", photo: null },
  { role: "Vice Chairperson", name: "To be announced", initials: "VC", photo: null },
  { role: "Secretary General", name: "To be announced", initials: "SG", photo: null },
  { role: "Vice Secretary", name: "To be announced", initials: "VS", photo: null },
  { role: "Treasurer", name: "To be announced", initials: "TR", photo: null },
  { role: "Organizing Secretary", name: "Japheth", initials: "OS", photo: organizingSecretary },
  { role: "Sargent-At-Arm", name: "To be announced", initials: "SA", photo: null },
  { role: "Public Relations Officer", name: "To be announced", initials: "PR", photo: null },
  { role: "Representative", name: "To be announced", initials: "RP", photo: null },
  { role: "Director of the Board", name: "To be announced", initials: "DB", photo: null },
];

export default function Committee() {
  return (
    <section id="committee" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="label-tag text-lab-700 dark:text-lab-500">Board of Members</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-lab-900 md:text-4xl dark:text-dark-ink">
          Executive committee
        </h2>
        <p className="mt-3 max-w-md text-ink-soft dark:text-dark-ink-soft">
          Placeholder roster — swap in names, portraits, and contacts once
          this year's board is confirmed.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((m) => (
            <div
              key={m.role}
              className="flex items-center gap-4 rounded-sm border border-ink/10 bg-lab-50/50 p-5 dark:border-dark-border dark:bg-dark-surface/40"
            >
              <div className="flex aspect-square h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-lab-800 font-display text-lg font-semibold text-lab-100 dark:bg-lab-600">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  m.initials
                )}
              </div>
              <div>
                <p className="label-tag text-coral-600 dark:text-coral-500">{m.role}</p>
                <p className="mt-1 font-display text-lg font-medium text-lab-900 dark:text-dark-ink">
                  {m.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}