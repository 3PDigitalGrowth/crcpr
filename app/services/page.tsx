import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";
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
  title: "Corporate PR Services",
  description:
    "Full-service corporate communications, reputation management, crisis response, issues management, media strategy, and digital media services.",
};

const services: {
  title: string;
  slug: string;
  description: string;
}[] = [
  {
    title: "Corporate communications",
    slug: "corporate-communications",
    description:
      "Strategic counsel for internal and external messaging. We help organisations communicate with clarity, consistency, and authority across stakeholders, media, and the public.",
  },
  {
    title: "Reputation management",
    slug: "reputation-management",
    description:
      "Your reputation is your most valuable asset. We assess vulnerabilities, monitor threats, and build strategies that protect what matters most, before and after issues surface.",
  },
  {
    title: "Issues management",
    slug: "issues-management",
    description:
      "Proactive identification and management of emerging issues. We help organisations get ahead of potential crises with early intervention, stakeholder mapping, and strategic messaging.",
  },
  {
    title: "Crisis communications",
    slug: "crisis-communications",
    description:
      "24/7 crisis response, media management, and communications coordination. We have been in the room when it matters most, guiding organisations through the most significant challenges.",
  },
  {
    title: "Media strategy",
    slug: "media-strategy",
    description:
      "Proactive media engagement, spokesperson preparation, and sustained media presence. We help organisations build and maintain relationships with journalists and editors.",
  },
  {
    title: "Digital media",
    slug: "digital-media",
    description:
      "Online reputation management, social media strategy, and digital communications. We help organisations navigate the digital landscape with authority.",
  },
];

const proofItems = [
  {
    label: "Senior access",
    value: "Direct counsel",
    detail:
      "Every service is delivered with direct access to experienced advisers rather than a junior account structure.",
  },
  {
    label: "High-stakes focus",
    value: "Pressure-tested",
    detail:
      "CRC Public Relations is strongest where reputation, governance, stakeholder confidence, or urgent response genuinely matter.",
  },
  {
    label: "Practical outcomes",
    value: "Strategy to action",
    detail:
      "The work spans planning, message development, spokesperson readiness, issue management, and execution under pressure.",
  },
] as const;

const faqs = [
  {
    question: "How do we know which CRC Public Relations service is the right starting point?",
    answer:
      "Most clients arrive with a situation rather than a neatly labelled service category. We help identify whether the immediate need is strategic communications counsel, issues management, crisis support, media strategy, reputation work, or a blend of several services.",
  },
  {
    question: "Do you provide standalone project support as well as ongoing counsel?",
    answer:
      "Yes. Some clients need support around a single matter, announcement, or review. Others want an ongoing advisory relationship. The structure depends on the situation, the pace, and the level of internal capability.",
  },
  {
    question: "Are all services led by experienced advisers?",
    answer:
      "Yes. CRC Public Relations is structured around direct counsel from experienced advisers. There is no separate junior account model for complex or sensitive work.",
  },
];

/* Chambers port (17 Nov 2026). Copy unchanged; service icons and generated
   imagery dropped, the six services now read as a numbered ledger. */

export default function ServicesPage() {
  return (
    <>
      <PageHero copyId="services"
        asidePreset="strategicIntegrated"
        eyebrow="Full service offering"
        title="Corporate communications and PR services."
        description="We provide specialist counsel across the full spectrum of corporate communications. Every engagement is led by experienced advisers who work directly with you, not through an account management layer."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip copyId="services"
        title="The service mix changes by client. The standard of counsel does not."
        items={[...proofItems]}
      />

      {/* ---------- HOW WE THINK ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id="services.t1">How we think about services</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="services.t2">Better judgement matters more than more activity.</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id="services.t3">
                Most organisations do not need more communications activity. They need clearer judgement about what
                matters, which stakeholders carry the greatest risk or influence, and what sequence of communication
                will hold up under scrutiny.
              </T>
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="services.t4">
                  That is why CRC Public Relations&apos; services are designed around pressure points, not agency
                  departments.
                </T>
              </p>
              <p>
                <T id="services.t5">
                  Some clients come to us because a crisis is already active. Others need a stronger media position,
                  sharper executive messaging, better reputation visibility, or earlier intervention around an
                  emerging issue. The right service is usually the one that gives leadership more control sooner.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <FramedPhoto src={MEDIA.officeOrangeChair} alt="An orange chair against the book wallpaper in the CRC Public Relations office" className="mb-6" />
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id="services.t6">What the right starting point solves</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t7", "Clearer priorities", "t8", "Focus on what matters most rather than adding more communication for its own sake."],
                  ["t9", "Better stakeholder sequencing", "t10", "Decide who needs to hear what, and in what order, before pressure compounds."],
                  ["t11", "Faster control", "t12", "The right service is usually the one that gives leadership more control sooner."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`services.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`services.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      <InlineEnquirySection copyId="services"
        title="Not sure which service is the right starting point?"
        body="That is common. Many clients come to CRC Public Relations with a situation rather than a neatly labelled service category. We can help identify the right starting point and the right next step."
        bullets={[
          "Sensitive matters needing experienced communications judgement",
          "Preparation before a major announcement or issue escalates",
          "Reputation, media, crisis, and stakeholder communication advice",
        ]}
        defaultMessage="We would like advice on which CRC Public Relations service is the right starting point for our situation."
        variant="white"
      />

      {/* ---------- THE SERVICES ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="border-t border-line">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr,auto] md:items-baseline md:gap-8"
                >
                  <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                  <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                    <T id="services.t13">Learn more →</T>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <LeadMagnetBanner
        magnet="reputationAssessment"
        title="Want a clearer view of where your organisation is exposed?"
        description="Start with the CRC Public Relations Reputation Vulnerability Assessment. It gives leadership a fast view of media, stakeholder, governance, crisis, and digital exposure so the next decision is based on evidence rather than instinct."
      />

      <Section tone="base" className="py-11 md:py-14">
        <Container className="max-w-3xl">
          <CapabilityDownload />
        </Container>
      </Section>

      <FAQSection copyId="services"
        items={faqs}
        titleText="Common questions about CRC Public Relations services"
        expandable={false}
      />

      <PageClosingCTA copyId="services"
        title="Not sure which service is the right starting point?"
        body="That is common. Many clients come to us with a situation rather than a neatly labelled service category. We can help you identify the right starting point and the right next step."
      />
    </>
  );
}
