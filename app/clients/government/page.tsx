import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { FramedPhoto } from "@/components/altkit/media";
import { MEDIA } from "@/components/altkit/data";

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
    question: "What kinds of public sector matters does CRC Public Relations usually support?",
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

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery was dropped and the support list became a ruled aside. */

const P = "clients-government";

export default function GovernmentClientsPage() {
  return (
    <>
      <PageHero
        copyId={P}
        asidePreset="clientsBreadth"
        eyebrow="Government"
        title="Government communications and stakeholder engagement"
        description="We work directly with department heads, agency leaders, and public sector leaders who need experienced communications counsel that understands the unique pressures of government."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
            <div>
              <Eyebrow>
                <T id={`${P}.t1`}>Public sector communications</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id={`${P}.t2`}>Authority, process, and public confidence have to hold together.</T>
              </H2>
              <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
                <T id={`${P}.t3`}>
                  Your organisation must communicate with authority, accuracy, and empathy while managing competing
                  stakeholder interests, statutory obligations, and intense media attention. We understand that
                  environment.
                </T>
              </p>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  <T id={`${P}.t4`}>
                    The public sector environment demands discipline: clear accountabilities, defensible messaging, and
                    readiness when programmes or incidents attract scrutiny.
                  </T>
                </p>
                <p>
                  <T id={`${P}.t5`}>
                    We work with departments, agencies, and authorities on communications strategy that respects
                    machinery-of-government realities. We help you anticipate friction points, align internal and
                    external narratives, and engage communities and industry with clarity and respect.
                  </T>
                </p>
                <p>
                  <T id={`${P}.t6`}>
                    From ministerial announcements to operational incidents and complex reform agendas, we provide
                    experienced counsel, including crisis response when confidence in public institutions is on the
                    line.
                  </T>
                </p>
              </div>
            </div>
            <Reveal className="lg:pt-10">
              <FramedPhoto src={MEDIA.pressConference} alt="Microphones on the table at a press conference" ratio="aspect-[3/2] lg:aspect-auto" className="lg:h-full lg:min-h-[18rem]" />
            </Reveal>
          </div>
        {/* Full width below the two columns, points side by side: in the right column it left a gap beside the text. */}
          <aside className="kit-r mt-10 border border-line p-6 md:p-8">
            <Eyebrow>
              <T id={`${P}.t7`}>Typical support areas</T>
            </Eyebrow>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((item) => (
                <li key={item} className="border-t border-line py-3.5 text-[15px] leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </Section>

      <LeadMagnetBanner magnet="crisisReadinessChecklist" variant="light" />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="Government communications succeeds when authority, process, and public confidence remain aligned."
        items={[...proofItems]}
      />

      <InlineEnquirySection
        copyId={P}
        eyebrow="Where it gets difficult"
        title="Need strategic communications support for a public sector matter?"
        body="Complexity rarely comes from the announcement itself. It comes from the number of interested audiences around it: ministers, agency leadership, delivery partners, local communities, media, and staff. The challenge is keeping the message accurate, coordinated, and defensible across all of them without losing pace."
        bullets={[
          "Public sector stakeholder engagement and narrative planning",
          "Issue, crisis, and programme communications advice",
          "Senior support for sensitive ministerial, community, and media-facing matters",
        ]}
        defaultMessage="We need government or public sector communications advice on a current matter."
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions about government communications support"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="Discuss your government communications needs with an experienced adviser."
        body="We work with departments, agencies, and public sector organisations that need disciplined communication in environments where public trust and scrutiny matter."
      />
    </>
  );
}
