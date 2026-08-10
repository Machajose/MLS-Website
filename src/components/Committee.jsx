import Reveal from "./Reveal";

import chairperson from "../assets/committee/Cherrily.jpeg";
import organizingSecretary from "../assets/committee/Japheth.jpeg";
import viceChairperson from "../assets/committee/brianlore.jpeg";
import viceSecretary from "../assets/committee/Shariff.jpeg";
import secretaryGeneral from "../assets/committee/Antonia.png";
import sargentAtArm from "../assets/committee/Joseph.jpg";
import thirdYearRepresentative from "../assets/committee/Anna.jpeg";
import publicRelationsOfficer from "../assets/committee/parapanda.jpeg";

// Import each confirmed photo as it comes in, e.g.:
// import japhethPhoto from "../assets/committee/japheth.jpg";

const MEMBERS = [
  { role: "Chairperson", name: "Cherrily Ochieng", initials: "CP", photo: chairperson },
  { role: "Vice Chairperson", name: "Brian Lore", initials: "VC", photo: viceChairperson },
  { role: "Secretary General", name: "Antonia Muthoni", initials: "SG", photo: secretaryGeneral },
  { role: "Vice Secretary", name: "Shariff", initials: "VS", photo: viceSecretary },
  { role: "Treasurer", name: "James", initials: "TR", photo: null },
  { role: "Organizing Secretary", name: "Japheth", initials: "OS", photo: organizingSecretary },
  { role: "Sargent-At-Arm", name: "Joseph Macharia", initials: "SA", photo: sargentAtArm },
  { role: "Public Relations Officer", name: "Juluis Kimani", initials: "PR", photo: publicRelationsOfficer },
  { role: "3rd Year Representative", name: "Anna Keddy", initials: "REP", photo: thirdYearRepresentative },
  { role: "2nd Year Representative", name: "Sharon", initials: "REP", photo: null },
  { role: "1st Year Representative", name: "To be announced", initials: "REP", photo: null },
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
          <p className="mt-3 max-w-md text-ink-soft dark:text-dark-ink-soft">
  Meet the board steering MUTMLSA this year.
</p>
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {MEMBERS.map((m, i) => (
  <Reveal key={m.role} delay={i * 0.06}>
    <div className="overflow-hidden rounded-sm border border-ink/10 bg-lab-50/50 dark:border-dark-border dark:bg-dark-surface/40">
      <div className="flex aspect-square items-center justify-center bg-lab-800 dark:bg-lab-700">
        {m.photo ? (
          <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-top" />
        ) : (
          <span className="font-display text-4xl font-semibold text-lab-100">{m.initials}</span>
        )}
      </div>
      <div className="p-5">
        <p className="label-tag text-coral-600 dark:text-coral-500">{m.role}</p>
        <p className="mt-1 font-display text-lg font-medium text-lab-900 dark:text-dark-ink">{m.name}</p>
      </div>
    </div>
  </Reveal>
))}
</div>
          
        </div>
      
    </section>
  );
}