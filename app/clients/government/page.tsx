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
      "Programs, incidents, reform agendas, and contested decisions all require messages that can withstand media and parliamentary pressure.",
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
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 text-charcoal-mid text-[15px] leading-relaxed">
            <p>
              Government organisations must communicate with authority, accuracy,
              and empathy, often while managing competing stakeholder interests,
              statutory obligations, and intense media attention. The public sector
              environment demands discipline: clear accountabilities, defensible
              messaging, and readiness when programs or incidents attract scrutiny.
            </p>
            <p>
              CRC PR supports departments, agencies, and authorities with
              communications strategy that respects machinery-of-government
              realities. We help leaders anticipate friction points, align internal
              and external narratives, and engage communities and industry with
              clarity and respect.
            </p>
            <p>
              From ministerial announcements to operational incidents and complex
              reform agendas, we provide experienced counsel, including crisis
              response when confidence in public institutions is on the line.
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
            Where public sector communications often becomes difficult
          </h2>
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            Complexity rarely comes from the announcement itself. It comes from
            the number of interested audiences around it: ministers, agency
            leadership, delivery partners, local communities, media, and staff.
            The challenge is keeping the message accurate, coordinated, and
            defensible across all of them without losing pace.
          </p>
        </div>
      </section>

      <InlineEnquirySection
        title="Need strategic communications support for a public sector matter?"
        body="CRC PR supports departments, agencies, and statutory authorities that need clearer stakeholder communication, stronger message discipline, or confidential advice on a sensitive issue."
        bullets={[
          "Public sector stakeholder engagement and narrative planning",
          "Issue, crisis, and program communications advice",
          "Senior support for sensitive community and media-facing matters",
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
