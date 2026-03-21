import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Government Communications & PR",
  description:
    "Strategic communications, stakeholder engagement, and crisis response for Federal and State government departments, statutory authorities, and public sector organisations.",
};

const services = [
  "Strategic communications planning and narrative design",
  "Ministerial and executive office communications support",
  "Stakeholder mapping and engagement frameworks",
  "Public sector crisis and issues management",
  "Campaigns, public information, and consent-building",
  "Coordination across agencies and delivery partners",
  "Media, parliamentary, and community liaison",
];

const proofItems = [
  {
    label: "Public trust",
    value: "Clarity under scrutiny",
    detail:
      "Government communication is judged not only by accuracy but by whether the public sees leadership acting with discipline and confidence.",
  },
  {
    label: "Operating environment",
    value: "Machinery-aware",
    detail:
      "We understand the realities of approvals, ministerial offices, agency coordination, and public sector accountability.",
  },
  {
    label: "Sensitive moments",
    value: "Prepared response",
    detail:
      "Programmes, incidents, reform agendas, and contested decisions all require messages that can withstand media and parliamentary pressure.",
  },
] as const;

const faqs = [
  {
    question: "What kinds of public sector matters does CRC PR usually support?",
    answer:
      "Typical matters include contested announcements, community-facing reforms, stakeholder resistance, incidents affecting public confidence, ministerial or executive office communication pressure, and complex cross-agency messaging environments.",
  },
  {
    question: "Do you understand public sector approvals and machinery-of-government realities?",
    answer:
      "Yes. Our advice is shaped around the practical reality of public sector communication: approvals, ministerial interfaces, agency coordination, and the need to maintain accuracy, pace, and defensibility at the same time.",
  },
  {
    question: "Can you help with community and media pressure before it becomes a full crisis?",
    answer:
      "Yes. Many public sector matters become harder because communication remains procedural when the external pressure is becoming emotional or political. Early advice helps leadership align message, timing, and stakeholder sequencing before trust drops further.",
  },
];

export default function GovernmentClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="GOVERNMENT"
        title="Government communications and stakeholder engagement"
        description="Strategic communications counsel for Federal and State government departments, statutory authorities, and public sector organisations."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Government communications succeeds when authority, process, and public confidence remain aligned."
        items={[...proofItems]}
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_380px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium tracking-[0.16em] uppercase mb-4">
                Public Sector Communications
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Authority, process, and public confidence have to hold together.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Government organisations must communicate with authority,
                accuracy, and empathy while managing competing stakeholder
                interests, statutory obligations, and intense media attention.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  The public sector environment demands discipline: clear
                  accountabilities, defensible messaging, and readiness when
                  programmes or incidents attract scrutiny.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  CRC PR supports departments, agencies, and authorities with
                  communications strategy that respects
                  machinery-of-government realities. We help leaders anticipate
                  friction points, align internal and external narratives, and
                  engage communities and industry with clarity and respect.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  From ministerial announcements to operational incidents and
                  complex reform agendas, we provide experienced counsel,
                  including crisis response when confidence in public
                  institutions is on the line.
                </p>
              </div>
            </div>

            <aside className="rounded-[28px] border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium tracking-[0.16em] uppercase mb-5">
                Typical Support Areas
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
        eyebrow="WHERE IT GETS DIFFICULT"
        title="Need strategic communications support for a public sector matter?"
        body="Complexity rarely comes from the announcement itself. It comes from the number of interested audiences around it: ministers, agency leadership, delivery partners, local communities, media, and staff. The challenge is keeping the message accurate, coordinated, and defensible across all of them without losing pace."
        bullets={[
          "Public sector stakeholder engagement and narrative planning",
          "Issue, crisis, and programme communications advice",
          "Senior support for sensitive ministerial, community, and media-facing matters",
        ]}
        defaultMessage="We need government or public sector communications advice on a current matter."
      />

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        title="Does your agency have a crisis and escalation framework that will hold up under scrutiny?"
        description="Download the CRC PR Crisis Communications Plan Template. It helps public sector leaders define ownership, escalation, and stakeholder sequencing before operational pressure, community concern, and media attention collide."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about government communications support"
      />

      <PageClosingCTA
        title="Discuss your government communications needs with a senior advisor."
        body="CRC PR works with departments, agencies, and public sector organisations that need disciplined communication in environments where public trust and scrutiny matter."
      />
    </>
  );
}
