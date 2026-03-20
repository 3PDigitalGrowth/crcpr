import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

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

const proofItems = [
  {
    label: "Market sensitivity",
    value: "Board-aware",
    detail:
      "We support matters where governance, valuation, and stakeholder confidence are closely connected.",
  },
  {
    label: "Executive access",
    value: "Senior-only",
    detail:
      "Corporate clients deal directly with experienced advisors who can operate at chair, CEO, and general counsel level.",
  },
  {
    label: "Pressure moments",
    value: "Prepared response",
    detail:
      "From restructures to difficult announcements, the work is designed to hold under scrutiny, not just read well internally.",
  },
] as const;

const faqs = [
  {
    question: "What types of corporate matters does CRC PR usually support?",
    answer:
      "Typical matters include leadership transitions, restructures, market-facing announcements, stakeholder disputes, reputation pressure, investor-facing communication, and situations where legal, governance, and communications issues are colliding at the same time.",
  },
  {
    question: "Do you work directly with chairs, CEOs, and general counsel?",
    answer:
      "Yes. Corporate engagements often involve direct support to chairs, CEOs, executive teams, and general counsel where the communications advice needs to match the level of governance and commercial sensitivity involved.",
  },
  {
    question: "Can you help before a matter becomes public?",
    answer:
      "Yes. In many corporate situations the best work happens before disclosure, while message discipline, stakeholder sequencing, and executive preparation can still be shaped carefully.",
  },
];

export default function CorporateClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="CORPORATE"
        title="Corporate communications and reputation counsel"
        description="Senior-level communications strategy for ASX-listed companies, professional services firms, and private enterprises."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Corporate clients need communications advice that understands governance pressure, not just publicity."
        items={[...proofItems]}
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

      <section className="bg-off-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Typical situations where corporate clients bring us in
          </h2>
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            We are often engaged when the stakes are commercial as well as
            reputational: a leadership transition, a sensitive market-facing
            announcement, investor or stakeholder concern building behind the
            scenes, or a legal and communications issue colliding at the same
            time. In those environments, speed matters, but so does judgement.
          </p>
        </div>
      </section>

      <InlineEnquirySection
        title="Need senior corporate communications advice?"
        body="If your organisation is preparing for a sensitive market, board, investor, or stakeholder moment, CRC PR can provide confidential senior counsel from the outset."
        bullets={[
          "Board and executive communications support",
          "Market-sensitive and stakeholder-facing planning",
          "Reputation, issue, and announcement advice",
        ]}
        defaultMessage="We need corporate communications advice on a sensitive matter."
      />

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        title="Does your leadership team have the communications discipline for a high-pressure corporate matter?"
        description="Download the CRC PR Crisis Communications Plan Template. It is a practical framework for escalation, first-response control, stakeholder sequencing, and executive message discipline when a sensitive matter starts attracting attention."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions from corporate clients"
      />

      <PageClosingCTA
        title="Discuss your corporate communications needs with a senior advisor."
        body="CRC PR works with listed companies, private enterprises, and professional services firms that need judgement, discretion, and direct access when the stakes are high."
      />
    </>
  );
}
