import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { FramedPhoto, FramedVideo } from "@/components/altkit/media";
import { MEDIA } from "@/components/altkit/data";

export const metadata: Metadata = {
  title:
    "School Crisis Communications Australia | CRC Public Relations",
  description:
    "Specialist crisis communications and PR for independent schools, Catholic schools, and faith-based organisations. Parent communications, media management, board governance. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "School Crisis Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: siteConfig.crcPrUrl,
  },
  description:
    "Specialist crisis communications and PR for independent schools, Catholic schools, and faith-based organisations across Australia.",
  areaServed: "AU",
  serviceType: "School Communications Consulting",
};

const proofItems = [
  {
    label: "Community trust",
    value: "Pastoral and strategic",
    detail:
      "School and faith-based communications requires compassion, legal discipline, and message control at the same time.",
  },
  {
    label: "Leadership pressure",
    value: "Principal to board",
    detail:
      "We support principals, executive teams, boards, and governing bodies through situations where confidence can shift quickly.",
  },
  {
    label: "Urgent realities",
    value: "24/7 available",
    detail:
      "Serious incidents often happen outside school hours. Early communication decisions still shape the outcome.",
  },
] as const;

const faqs = [
  {
    question: "What kinds of school matters does CRC Public Relations usually support?",
    answer:
      "Typical matters include safeguarding disclosures, staff conduct allegations, serious incidents, parent-confidence issues, social media escalation, governance concerns, and situations where pastoral care, legal risk, and media attention are all in play at once.",
  },
  {
    question: "Can you help with parent communications as well as media response?",
    answer:
      "Yes. In school and faith-based matters, parent and community communication is often more important than media response in the first instance. We help leaders sequence those audiences carefully while keeping the legal and reputational position aligned.",
  },
  {
    question: "Do you work with principals and boards directly?",
    answer:
      "Yes. We regularly support principals, executive teams, governing bodies, and boards where the communication challenge is strategically sensitive and emotionally charged.",
  },
];

const firstQuestions = [
  "Who needs to be told first?",
  "What can we say to parents now?",
  "What do we hold back while the legal position is still moving?",
  "How do we show compassion without creating avoidable exposure?",
];

const supportAreas = [
  {
    title: "Crisis communications and incident response",
    body: "When a serious incident occurs, we help leaders respond clearly, compassionately, and without compromising legal process. That includes immediate counsel on parent messaging, principal briefings, media enquiries, and coordinated communication across staff, boards, and the wider community.",
  },
  {
    title: "Parent and community communications",
    body: "We help schools develop parent and community messaging that is honest, appropriately bounded, and built to maintain confidence. The aim is to show care and transparency without prejudicing outcomes or creating avoidable exposure.",
  },
  {
    title: "Media relations and spokesperson support",
    body: "When attention is sustained, the school's communications posture needs to be equally disciplined. We manage enquiries, prepare principals and spokespeople for interviews, and develop holding statements and media strategy that can hold up across the full coverage period.",
  },
  {
    title: "Board, governance, and digital escalation",
    body: "We advise boards and councils on governance communication, the boundary between oversight and operations, and how to communicate confidentially during sensitive matters. We also help schools prepare for social media escalation, where a single post, video, or anonymous complaint can drive community pressure within hours.",
  },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery and the repeated "Support area" pill were dropped. */

const P = "clients-schools-faith";

export default function SchoolsFaithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        photo={{ src: MEDIA.bandSchoolGate, alt: "Two students walking through a school gate" }}
        copyId={P}
        asidePreset="clientsBreadth"
        eyebrow="Independent schools & faith-based organisations"
        title="School crisis communications that protects students, staff, and the community's trust."
        description="Specialist crisis response, parent communications, and media management for school leaders and faith-based organisations, when pastoral responsibility and strategic communications must work together."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="In schools and faith-based organisations, confidence is built or lost through communication speed, care, and discipline."
        items={[...proofItems]}
      />

      {/* ---------- SECTOR REALITY ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t1`}>Sector reality</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t2`}>In this sector, communication is judged by care as much as control.</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t3`}>
                When your school or organisation faces a serious matter, the real challenge is responding with
                accuracy, compassion, and discipline while trust is already under pressure.
              </T>
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t4`}>
                  Your communications challenges are unlike those of any other sector. When an incident occurs,
                  whether it is a safeguarding matter, a staff conduct issue, a governance concern, or a social media
                  controversy, the audience is not just media and regulators. It is parents who entrust you with the
                  care of their children, alumni who carry your school&apos;s reputation into the world, and a faith
                  community that expects its values to be reflected in how your organisation responds to difficulty.
                </T>
              </p>
              <p>
                <T id={`${P}.t5`}>
                  The legal obligations are significant. The pastoral duty is equally significant. The
                  communications challenge is managing both simultaneously, responding with the transparency that
                  parents demand, the discretion that legal obligations require, and the compassion that your
                  community deserves.
                </T>
              </p>
              <p>
                <T id={`${P}.t6`}>
                  CRC Public Relations works with independent schools, Catholic school networks, and faith-based
                  organisations across Australia. Lyall Mercer has presented at the Australian Catholic Bishops
                  Conference and has developed crisis communications frameworks used by school networks across the
                  country. We understand the unique pressures of school and faith-based communications, and the very
                  high stakes of getting them wrong.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <FramedVideo src={MEDIA.videoSchools} poster={MEDIA.videoSchoolsPoster} label="Video: the communication needs of independent and faith-based schools" className="mb-6" />
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t7`}>What makes this different</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t8", "More than media pressure", "t9", "Parents, boards, alumni, parish communities, and regulators all shape the response environment."],
                  ["t10", "Pastoral and legal duties", "t11", "Leaders must show compassion without compromising legal, safeguarding, or governance obligations."],
                  ["t12", "Trust moves quickly", "t13", "The first messages often shape parent confidence and wider community sentiment for much longer than expected."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- FIRST HOUR ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t14`}>First-hour judgment</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t15`}>What schools usually need help deciding first</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t16`}>
                The first questions are rarely about wording alone. They are about sequence, disclosure, and how to
                communicate care without creating unnecessary exposure.
              </T>
            </p>
            <div className="mt-8 border-t border-line">
              {firstQuestions.map((question, i) => (
                <div
                  key={question}
                  className="grid grid-cols-[3rem,1fr] items-baseline gap-2 border-b border-line py-4"
                >
                  <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                  <p className="text-base font-bold leading-snug">{question}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t17`}>Why the first hour matters</T>
              </Eyebrow>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                <T id={`${P}.t18`}>
                  These are the decisions that shape trust in the first hour and set the tone for every parent,
                  staff, board, and community communication that follows.
                </T>
              </p>
            </aside>
          </Reveal>
        </Container>
      </Section>

      {/* CRC's approved resources (Lyall, 5 May 2026) have no schools playbook: offer the crisis readiness checklist with its approved wording. */}
      <LeadMagnetBanner variant="light" magnet="crisisReadinessChecklist" />

      {/* ---------- HOW WE SUPPORT ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <Eyebrow>
            <T id={`${P}.t19`}>How we support</T>
          </Eyebrow>
          <H2 className="mt-3 max-w-3xl">
            <T id={`${P}.t20`}>How CRC Public Relations supports schools and faith-based organisations</T>
          </H2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            <T id={`${P}.t21`}>
              The need is rarely just media advice. School leaders usually need a response model that protects
              students, reassures families, and keeps governance, legal, and public communication aligned.
            </T>
          </p>
          <div className="mt-8 border-t border-line">
            {supportAreas.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr] md:items-baseline md:gap-8">
                  <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                  <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <blockquote className="max-w-3xl border-l-[3px] border-[var(--k-blue)] pl-5">
            <p className="text-lg font-semibold leading-snug">
              <T id={`${P}.t23`}>
                &quot;CRC Public Relations has developed a crisis communications plan for Christian schools and has
                assisted many of our member schools across Australia to effectively communicate when issues have
                arisen.&quot;
              </T>
            </p>
            <footer className="mt-4 text-sm text-muted">
              <T id={`${P}.t24`}>Executive Officer, Christian schools sector</T>
            </footer>
          </blockquote>
          <FramedPhoto src={MEDIA.handsInLight} alt="Hands raised in light at a faith gathering" />
          </div>
        </Container>
      </Section>

      <InlineEnquirySection
        copyId={P}
        title="Need confidential advice for a school or faith-based matter?"
        body="CRC Public Relations advises school leaders, boards, and faith-based organisations facing parent concern, media attention, governance pressure, or a sensitive incident. If it is urgent, call us now."
        bullets={[
          "Parent, staff, and community communication support",
          "Principal, board, and spokesperson advice",
          "Urgent incident response and preparedness planning",
        ]}
        defaultMessage="We need confidential advice for a school or faith-based communications matter."
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions from school and faith-based leaders"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="School crises do not follow business hours."
        body="When a serious incident affects a school or faith-based organisation, the communication decisions made in the first hour shape trust for months. We are available 24/7 because the most sensitive matters rarely arrive at a convenient time."
      />
    </>
  );
}
