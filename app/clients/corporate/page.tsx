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
  title: "Corporate PR & Communications",
  description:
    "Corporate communications, reputation management, and crisis response for listed and private companies, professional services firms, and family businesses.",
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
      "Corporate clients deal directly with experienced advisers who can operate at chair, CEO, and general counsel level.",
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

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery was dropped and the support list became a ruled aside. */

const P = "clients-corporate";

export default function CorporateClientsPage() {
  return (
    <>
      <PageHero
        photo={{ src: MEDIA.bandBoardroomChairs, alt: "Leather chairs around a boardroom table" }}
        copyId={P}
        asidePreset="clientsBreadth"
        eyebrow="Corporate"
        title="Corporate communications and reputation counsel"
        description="Direct, personal counsel for owners, directors, and executives. You work with experienced advisers who understand board scrutiny, market sensitivity, and stakeholder risk."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
            <div>
              <Eyebrow>
                <T id={`${P}.t1`}>Corporate communications</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id={`${P}.t2`}>Reputation is shaped where strategy, behaviour, and narrative meet.</T>
              </H2>
              <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
                <T id={`${P}.t3`}>
                  We work with owners, managing directors, and executives who need communications counsel that
                  understands regulatory exposure, market expectations, and the pace at which issues move from internal
                  concern to public headline.
                </T>
              </p>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  <T id={`${P}.t4`}>
                    You deal directly with experienced advisers who align messaging with governance, protect valuation
                    during turbulence, and prepare your leadership team for scrutiny from investors, analysts, and
                    media. We bring journalistic judgment and crisis experience to every engagement, without the
                    overhead of a large agency model.
                  </T>
                </p>
                <p>
                  <T id={`${P}.t5`}>
                    Whether you are managing a live issue, strengthening executive visibility, or building a
                    communications capability that matches your growth ambitions, we work directly with you and take
                    ownership of outcomes.
                  </T>
                </p>
              </div>
            </div>
            <Reveal className="lg:pt-10">
              <FramedPhoto src={MEDIA.officePlants} alt="Plants beside the meeting tables at the CRC Public Relations office" position="60% 50%" ratio="aspect-[3/2] lg:aspect-auto" className="lg:h-full lg:min-h-[18rem]" />
            </Reveal>
          </div>
        {/* Full width below the two columns, points side by side: in the right column it left a gap beside the text. */}
          <aside className="kit-r mt-10 border border-line p-6 md:p-8">
            <Eyebrow>
              <T id={`${P}.t6`}>Typical support areas</T>
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
        title="Corporate clients need communications advice that understands governance pressure, not just publicity."
        items={[...proofItems]}
      />

      <InlineEnquirySection
        copyId={P}
        eyebrow="Typical situations"
        title="Need corporate communications advice?"
        body="We are often engaged when the stakes are commercial as well as reputational: a leadership transition, a sensitive market-facing announcement, investor or stakeholder concern building behind the scenes, or a legal and communications issue colliding at the same time. In those environments, speed matters, but so does judgement."
        bullets={[
          "Leadership transitions and board-facing moments",
          "Sensitive market, investor, and stakeholder announcements",
          "Reputation, legal, and communications issues colliding at once",
        ]}
        defaultMessage="We need corporate communications advice on a sensitive matter."
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions from corporate clients"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="Discuss your corporate communications needs with an experienced adviser."
        body="We work with companies, family businesses, and professional services firms that need judgement, discretion, and direct access when the stakes are high."
      />
    </>
  );
}
