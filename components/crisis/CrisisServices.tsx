import Link from "next/link";

const cards = [
  {
    title: "Crisis Prevention Consultancy",
    paragraphs: [
      "Most crises are preventable. The issue that eventually makes headlines was almost always visible weeks or months earlier, in stakeholder behaviour, in regulatory correspondence, in the pattern of media enquiries that preceded the story.",
      "We work with organisations to assess their specific reputation risks, identify the vulnerabilities most likely to produce a crisis, develop communications plans that give your team a tested response framework, and train your key spokespeople before, not after, an incident occurs.",
      "Crisis prevention is not a one-time exercise. We work with clients on an ongoing basis to monitor their issue landscape, update their plans, and ensure their people remain prepared as their organisation changes.",
    ],
    cta: "Learn about prevention →",
    href: "/services/crisis-communications" as const,
    hash: false,
  },
  {
    title: "Crisis Communications Coordination",
    paragraphs: [
      "When a crisis is live, the decisions made in the first hour determine the outcome of the entire event. We join your response team immediately, managing media enquiries, coordinating communications across all stakeholder groups, preparing and briefing your spokespeople, and directing your response with the discipline that separates organisations that emerge intact from those that do not.",
      "We manage the full response arc: from the initial holding statement, through the sustained communications program during the event, to the stakeholder communications that follow. We are with you 24 hours a day for as long as the crisis requires, not just the first phone call.",
    ],
    cta: "Discuss your situation →",
    href: "#contact-form",
    hash: true,
  },
  {
    title: "Crisis Simulation Exercises",
    paragraphs: [
      "A crisis plan that has never been tested is not a plan. It is a document. The difference between an organisation that responds well under pressure and one that does not is almost always whether their people have practised under simulated conditions before they needed to perform under real ones.",
      "Our crisis simulation exercises are designed specifically for your organisation, built around the scenarios most likely to affect your sector, your stakeholders, and your reputation. We test your crisis team, your spokespeople, your messaging, and your decision-making process in a controlled environment that exposes exactly where your plan needs to be strengthened.",
      "Simulations are available as half-day or full-day programs, for leadership teams of 4 to 15 people, delivered in person or remotely.",
    ],
    cta: "Book a simulation →",
    href: "/contact" as const,
    hash: false,
  },
] as const;

export function CrisisServices() {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-white border-t-[3px] border-brand-gold rounded-lg p-6"
            >
              <h3 className="font-heading font-black text-navy text-xl">
                {card.title}
              </h3>
              <div className="mt-3 space-y-3">
                {card.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-charcoal-mid text-[15px] leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {card.hash ? (
                <a
                  href={card.href}
                  className="text-brand-gold font-sans font-medium text-sm mt-4 inline-block"
                >
                  {card.cta}
                </a>
              ) : (
                <Link
                  href={card.href}
                  className="text-brand-gold font-sans font-medium text-sm mt-4 inline-block"
                >
                  {card.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
