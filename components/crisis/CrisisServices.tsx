import Link from "next/link";

const cards = [
  {
    title: "Crisis Prevention Consultancy",
    body:
      "Most crises are preventable. We help you assess your reputation risks, identify vulnerabilities, develop crisis communications plans, and train your team — before an issue becomes a crisis.",
    cta: "Learn about prevention →",
    href: "/services/crisis-communications" as const,
    hash: false,
  },
  {
    title: "Crisis Communications Coordination",
    body:
      "When an incident breaks, we are your guiding force. Managing media, coordinating communications across all stakeholder groups, advising spokespeople, and directing your response — 24/7, anywhere.",
    cta: "Discuss your situation →",
    href: "#contact-form",
    hash: true,
  },
  {
    title: "Crisis Simulation Exercises",
    body:
      "Your plan is only as good as your team's ability to execute it under pressure. We run tailored crisis simulation exercises that test your people, your process, and your messaging — in a controlled environment.",
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
              <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                {card.body}
              </p>
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
