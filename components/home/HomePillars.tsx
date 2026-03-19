import Link from "next/link";
import { Building2, Shield, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const pillars = [
  {
    icon: Building2,
    title: "Corporate Communications",
    body: "Strategic counsel for internal and external communications. Stakeholder engagement, media relations, brand positioning, and corporate messaging — handled with the precision that senior stakeholders expect.",
    href: "/services/corporate-communications",
  },
  {
    icon: Shield,
    title: "Reputation Management",
    body: "Your reputation is your most valuable asset. We help you assess vulnerabilities, protect against emerging threats, and maintain the trust of every audience that matters — before and after an issue surfaces.",
    href: "/services/reputation-management",
  },
  {
    icon: AlertCircle,
    title: "Crisis Communications",
    body: "When a crisis breaks, the first 15 minutes define the outcome. We have been in the room when it matters most. 24/7. Confidential. Decisive.",
    href: "/services/crisis-communications",
  },
];

export function HomePillars() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase text-center">
          Our Practice Areas
        </p>
        <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] text-center mt-3">
          Corporate. Reputation. Crisis.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="border-t-[3px] border-brand-gold pt-6">
                <Icon className="text-brand-gold" size={32} strokeWidth={1.75} aria-hidden />
                <h3 className="font-heading font-black text-navy text-[22px] mt-4">
                  {pillar.title}
                </h3>
                <p className="font-sans text-charcoal-mid text-[15px] leading-relaxed mt-3">
                  {pillar.body}
                </p>
                <Link
                  href={pillar.href}
                  className="text-brand-gold font-sans font-medium text-sm mt-4 inline-block hover:opacity-80 transition"
                >
                  Explore {pillar.title.toLowerCase()} services →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-12 border border-brand-gold/30 bg-off-white rounded-lg p-8 text-center">
          <p className="font-sans italic text-charcoal text-base leading-relaxed">
            &ldquo;Being boutique and personal means that unlike many PR firms, at CRC
            Public Relations you will deal directly with senior and experienced
            advisors who take a genuine, long-term interest in your
            organisation.&rdquo;
          </p>
          <p className="font-sans font-medium text-brand-gold text-sm mt-4">
            — {siteConfig.lyall.fullName}, Founder
          </p>
        </div>
      </div>
    </section>
  );
}
