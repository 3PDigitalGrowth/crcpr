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
    question: "What types of corporate matters does CRC Public Relations usually support?",
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
        eyebrow="Corporate"
        title="Corporate communications and reputation counsel"
        description="Senior-level communications strategy for ASX-listed companies, professional services firms, and private enterprises."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Corporate clients need communications advice that understands governance pressure, not just publicity."
        items={[...proofItems]}
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_380px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Corporate communications
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Reputation is shaped where strategy, behaviour, and narrative meet.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Listed entities, professional services firms, and private
                companies need counsel that understands regulatory exposure,
                market expectations, and the pace at which issues move from
                internal concern to public headline.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  CRC Public Relations works with chairs, CEOs, and general counsel to align
                  messaging with governance, protect valuation during
                  turbulence, and prepare leaders for scrutiny from investors,
                  analysts, and media. We bring journalistic judgment and
                  crisis experience to every engagement, without the overhead
                  of a large agency model.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  Whether you are managing a live issue, strengthening
                  executive visibility, or building a communications capability
                  that matches your growth ambitions, we provide direct access
                  to senior advisors who take ownership of outcomes.
                </p>
              </div>
            </div>

            <aside className="rounded-[28px] border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                Typical support areas
              </p>
              <div className="space-y-3">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-brand-border bg-white px-4 py-4"
                  >
                    <Check
                      className="size-5 shrink-0 text-brand-gold mt-0.5"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-charcoal-mid text-[15px] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <InlineEnquirySection
        eyebrow="Typical situations"
        title="Need senior corporate communications advice?"
        body="We are often engaged when the stakes are commercial as well as reputational: a leadership transition, a sensitive market-facing announcement, investor or stakeholder concern building behind the scenes, or a legal and communications issue colliding at the same time. In those environments, speed matters, but so does judgement."
        bullets={[
          "Leadership transitions and board-facing moments",
          "Sensitive market, investor, and stakeholder announcements",
          "Reputation, legal, and communications issues colliding at once",
        ]}
        defaultMessage="We need corporate communications advice on a sensitive matter."
      />

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        title="Does your leadership team have the communications discipline for a high-pressure corporate matter?"
        description="Download the CRC Public Relations Crisis Communications Plan Template. It is a practical framework for escalation, first-response control, stakeholder sequencing, and executive message discipline when a sensitive matter starts attracting attention."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions from corporate clients"
      />

      <PageClosingCTA
        title="Discuss your corporate communications needs with a senior advisor."
        body="CRC Public Relations works with listed companies, private enterprises, and professional services firms that need judgement, discretion, and direct access when the stakes are high."
      />
    </>
  );
}
