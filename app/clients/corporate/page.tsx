import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Corporate PR & Communications",
  description:
    "Corporate communications, reputation management, and crisis response for ASX-listed companies, professional services firms, and private enterprises.",
};

const services = [
  "Board-level and executive communications counsel",
  "Reputation management and issues preparedness",
  "Investor relations and market-sensitive communications support",
  "Executive positioning and thought leadership",
  "Media relations, briefings, and spokesperson readiness",
  "M&A, restructuring, and change communications",
  "Crisis response and stakeholder alignment",
];

export default function CorporateClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="CORPORATE"
        title="Corporate communications and reputation counsel"
        description="Senior-level communications strategy for ASX-listed companies, professional services firms, and private enterprises."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 text-charcoal-mid text-[15px] leading-relaxed">
            <p>
              Corporate reputation is shaped at the intersection of strategy,
              behaviour, and narrative. Listed entities, professional services
              firms, and private companies need counsel that understands regulatory
              exposure, market expectations, and the pace at which issues move from
              internal concern to public headline.
            </p>
            <p>
              CRC PR works with chairs, CEOs, and general counsel to align
              messaging with governance, protect valuation during turbulence, and
              prepare leaders for scrutiny from investors, analysts, and media. We
              bring journalistic judgment and crisis experience to every
              engagement, without the overhead of a large agency model.
            </p>
            <p>
              Whether you are managing a live issue, strengthening executive
              visibility, or building a communications capability that matches
              your growth ambitions, we provide direct access to senior advisors
              who take ownership of outcomes.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-3">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-charcoal-mid text-[15px] leading-snug"
                >
                  <Check
                    className="size-5 shrink-0 text-brand-gold mt-0.5"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <LeadMagnetBanner magnet="crisisPlanTemplate" />

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
            Discuss your corporate communications needs →
          </h3>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
          >
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
