import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  title:
    "Corporate Communications Consultant Australia | CRC Public Relations",
  description:
    "Senior-level corporate communications counsel for companies, government departments, and associations. Stakeholder engagement, media relations, executive messaging. Brisbane-based, available nationally.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Senior-level corporate communications counsel including stakeholder engagement, media relations, executive messaging, and internal communications strategy.",
  areaServed: "AU",
  serviceType: "Corporate Communications Consulting",
};

const sectorLinks = [
  { label: "Companies & family businesses", href: "/clients/corporate" },
  { label: "Government", href: "/clients/government" },
  {
    label: "Industry & professional associations",
    href: "/clients/industry-associations",
  },
  { label: "Legal and professional services", href: "/contact" },
];

const proofItems = [
  {
    label: "Board confidence",
    value: "Principal-led",
    detail:
      "Every engagement is led by an experienced adviser who understands board scrutiny, market sensitivity, and stakeholder risk.",
  },
  {
    label: "Communication discipline",
    value: "Message first",
    detail:
      "We build messaging frameworks that hold across leadership, media, staff, regulators, and critical external stakeholders.",
  },
  {
    label: "Real-world pressure",
    value: "High-stakes ready",
    detail:
      "We support sensitive announcements, leadership transitions, difficult stakeholder matters, and media-facing moments where precision matters.",
  },
] as const;

const faqs = [
  {
    question: "When should an organisation bring in external corporate communications counsel?",
    answer:
      "PR should be at the table before decisions are made, to assess ramifications and provide objective input: Before a board or executive decision becomes public, a stakeholder issue escalates, or a marketing campaign is launched. External counsel is most valuable when message architecture, sequencing, and stakeholder reaction still have room to be shaped.",
  },
  {
    question: "Do you work directly with boards, CEOs, and general counsel?",
    answer:
      "Yes. CRC Public Relations is structured around direct access. We routinely support chairs, CEOs, general counsel, and executive teams on matters where governance, reputation, and communication are tightly connected.",
  },
  {
    question: "What kinds of matters does corporate communications support usually cover?",
    answer:
      "Public relations means to have a 'relationship with your publics' (stakeholders). Relationships are ongoing and therefore communication is ongoing. Trust is built through regular communication, and this trust is needed when major decisions or changes are made. Intentional communications is vital during announcements, difficult stakeholder issues, sensitive internal communications, and communications planning around regulatory or public scrutiny. It is at these times when trust is required more than ever.",
  },
  {
    question: "How is this different from a larger PR agency retainer?",
    answer:
      "The difference is direct access and judgement. At CRC Public Relations, the people you brief are the people doing the advisory work. There is no large account structure sitting between leadership and the advice.",
  },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery and the repeated sector-card line were dropped. */

const P = "services-corporate-communications";

export default function CorporateCommunicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        photo={{ src: MEDIA.bandCorporateTowers, alt: "Glass corporate office towers" }}
        copyId={P}
        asidePreset="strategicIntegrated"
        eyebrow="Corporate communications"
        title="Corporate communications that build trust and protect value."
        description="As partners in your success, we work directly with your leadership team to ensure every message, whether to important stakeholders – internal and external – or media, is precise, credible, and effective. You deal with experienced advisers, not account managers."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="Corporate communications is not content production. It is strategic control."
        items={[...proofItems]}
      />

      {/* ---------- STRATEGIC CLARITY ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t1`}>Strategic clarity</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t2`}>
                Effective corporate communications supports your objectives with strategy and consistency.
              </T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t3`}>
                  Effective corporate communications is based on clarity, consistency, and strategic intent, ensuring
                  that every message, from every channel, reinforces your organisation&apos;s authority and the
                  confidence your stakeholders place in your leadership.
                </T>
              </p>
              <p>
                <T id={`${P}.t4`}>
                  The challenge for many organisations is that corporate communications becomes reactive.
                  Announcements are drafted in a hurry. Media enquiries are handled without a strategy. Stakeholder
                  relationships are maintained informally, without structure. The result is a communications function
                  that responds to events rather than shapes them.
                </T>
              </p>
              <p>
                <T id={`${P}.t5`}>
                  We work with your leadership team to build the systems, strategies, and capabilities that shift
                  communications from reactive to proactive, ensuring every significant communication is considered,
                  consistent, and designed to achieve a specific outcome.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t6`}>What strong corporate communications looks like</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t7", "Message discipline", "t8", "Leadership, media, staff, and stakeholder communications all support the same strategic position."],
                  ["t9", "Planned sequencing", "t10", "The right audiences hear the right message in the right order, before pressure starts to define the narrative."],
                  ["t11", "Expert oversight", "t12", "Important communications are shaped with judgement, not improvised under time pressure."],
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

      {/* ---------- WHERE IT BREAKS DOWN ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t31`}>Common failure point</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t32`}>Where corporate communications usually breaks down</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t33`}>
                  Most organisations do not suffer from a complete lack of communication activity. They suffer from
                  fragmentation. The board is briefed one way. Staff hear something slightly different. External
                  stakeholders receive a message shaped by operational convenience rather than strategic intent. Media
                  responses are drafted under time pressure and end up sounding defensive or incomplete.
                </T>
              </p>
              <p>
                <T id={`${P}.t34`}>
                  That fragmentation is expensive. It weakens confidence, complicates leadership decision-making, and
                  creates avoidable risk around major announcements, disputes, restructures, and sensitive governance
                  matters. The firms winning trust in difficult environments are the ones that treat corporate
                  communications as a disciplined leadership function, not an afterthought once the decision has
                  already been made.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t35`}>Signs communication has fragmented</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t36", "Inconsistent internal and external messaging", "t37", "Different audiences hear different versions of the same decision, which weakens trust quickly."],
                  ["t38", "Reactive media handling", "t39", "Responses are shaped by urgency and exposure, not by a clear strategic position."],
                  ["t40", "Leadership decisions lose force", "t41", "Good decisions still underperform when the communications discipline behind them is weak."],
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

      <LeadMagnetBanner
        magnet="corpCommsChecklist"
        variant="dark"
        title="Is your organisation's communications strategy ready for scrutiny?"
        description="Download the CRC Public Relations 10 point communications checklist. This provides you with 10 key areas that together ensure your communication isn't random, but is strategically planned with the aim of building ongoing trust with your stakeholders. Applies to companies, non-profits, governments, professional services firms, schools and associations."
        highlights={[
          "10 strategic communication checkpoints",
          "Useful for boards, executives, and comms leaders",
          "Built to surface trust and reputation gaps",
        ]}
        whatYouGetBody="A 10 point checklist that helps your team identify whether your communications strategy is strategically planned to build ongoing stakeholder trust, or leaving you exposed."
      />

      {/* ---------- IN PRACTICE ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <H2 className="max-w-3xl">
            <T id={`${P}.t22`}>What corporate communications looks like in practice</T>
          </H2>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            {[
              ["t23", "Corporate messaging and positioning", "t24", "When your organisation needs to communicate, whether to the market, to government, to the community, or to its own people, the message must be clear, credible, and aligned with your strategic objectives. We develop messaging frameworks that give your leadership team a consistent, defensible position on every issue that matters."],
              ["t25", "Stakeholder engagement and communications strategy", "t26", "Are your stakeholders advocates or adversaries? Every organisation has stakeholders who can either support or obstruct its objectives. We map your stakeholder landscape, identify the relationships that matter most, and design engagement strategies that build trust and maintain it through major change programmes, regulatory processes, and periods of uncertainty."],
              ["t27", "Internal communications and change management", "t28", "How an organisation communicates with its own people during change, crisis, or transition determines whether that process builds or erodes confidence. We develop internal communications programmes that keep your workforce informed, aligned, and engaged, from board announcements to all-staff responses."],
              ["t29", "Executive communications and media positioning", "t30", "Leaders are the face of the organisations they run. We help executives develop their communications voice, prepare for media and stakeholder appearances, and build a public profile that reflects the quality of their leadership. This includes speechwriting, talking points development, and sustained media relationship management."],
            ].map(([tid, title, bid, body]) => (
              <div key={tid} className="border-t border-line py-6">
                <h3 className="kit-display text-[15px] uppercase leading-snug">
                  <T id={`${P}.${tid}`}>{title}</T>
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  <T id={`${P}.${bid}`}>{body}</T>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- HOW AN ENGAGEMENT BEGINS ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <Eyebrow>
            <T id={`${P}.t13`}>When you engage CRC Public Relations</T>
          </Eyebrow>
          <H2 className="mt-3 max-w-3xl">
            <T id={`${P}.t14`}>How a corporate communications engagement begins</T>
          </H2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            <T id={`${P}.t15`}>
              The immediate objective is not more communications activity. It is a clearer picture of what your
              organisation needs to say, to whom, in what order, and under what level of scrutiny. That discipline is
              what prevents sensitive communications work from becoming reactive, inconsistent, or unnecessarily
              exposed.
            </T>
          </p>
          <div className="mt-8 border-t border-line">
            {[
              ["t16", "Situation assessment", "t17", "We assess your communications posture, stakeholder landscape, current messages, and the specific decision or pressure point your leadership team is navigating."],
              ["t18", "Message and stakeholder sequence", "t19", "We define the messages that need to hold across leadership, staff, media, regulators, and other critical stakeholders, then sequence those communications so confidence is built rather than diluted."],
              ["t20", "Ongoing counsel", "t21", "We stay close to the matter, reviewing drafts, preparing spokespeople, pressure-testing language, and advising leadership as the situation evolves."],
            ].map(([tid, title, bid, body], i) => (
              <Reveal key={tid} delay={i * 0.05}>
                <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr] md:items-baseline md:gap-8">
                  <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                  <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
                    <T id={`${P}.${tid}`}>{title}</T>
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">
                    <T id={`${P}.${bid}`}>{body}</T>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- THE CRC MODEL ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t42`}>CRC Public Relations model</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t43`}>Experienced counsel, not account management</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t44`}>
                Sensitive communications work needs direct access to judgement, accountability, and experienced
                strategic advice.
              </T>
            </p>
            <FramedPhoto src={MEDIA.officeMeetingRoom} alt="A meeting room at the CRC Public Relations office, seen through glass" className="mt-8" />
          </div>
          <div>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t45`}>
                  The difference between CRC Public Relations and a larger agency is not size. It is access. At many
                  PR firms, you&apos;ll brief a manager or director, and are then handed to a team of account managers
                  and more junior staff who execute the work. Your initial contact becomes a figurehead rather than an
                  adviser.
                </T>
              </p>
              <p>
                <T id={`${P}.t46`}>
                  At CRC Public Relations, every engagement is led by an experienced adviser from start to finish. You
                  work directly with the person who has the expertise, the judgment, and the accountability for the
                  outcome. This is not a service model we stumbled into. It is a deliberate choice. It is why our
                  client satisfaction rate is 100%.
                </T>
              </p>
              <p>
                <T id={`${P}.t47`}>
                  For organisations dealing with sensitive communications challenges, whether a board transition, a
                  difficult stakeholder relationship, or a market-sensitive announcement, this direct access is not a
                  preference. It is a requirement.
                </T>
              </p>
            </div>
            <div className="ledger mt-8">
              {[
                ["t48", "Direct management access", "t49", "The adviser you brief is the adviser shaping the work."],
                ["t50", "Consistent judgement", "t51", "Strategic direction does not get diluted through layers of delegation."],
                ["t52", "Clear accountability", "t53", "Our team owns the thinking, the advice, and the outcome."],
              ].map(([tid, title, bid, body]) => (
                <div key={tid}>
                  <p className="text-sm font-bold">
                    <T id={`${P}.${tid}`}>{title}</T>
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    <T id={`${P}.${bid}`}>{body}</T>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <InlineEnquirySection
        copyId={P}
        title="Need communications counsel on a sensitive matter?"
        body="Use this form if you are preparing a significant announcement, managing a board or stakeholder issue, or want an experienced external adviser to review your communications posture before the pressure arrives."
        bullets={[
          "Executive and board communication support",
          "Stakeholder engagement planning and message discipline",
          "Sensitive media and internal communication advice",
        ]}
        defaultMessage="We need corporate communications support for an upcoming matter."
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions about corporate communications support"
        expandable={false}
      />

      {/* ---------- RELATED SECTORS ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr,1fr] lg:items-end lg:gap-14">
            <div>
              <Eyebrow>
                <T id={`${P}.t54`}>Related sectors</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id={`${P}.t55`}>Sector experience that shapes the advice.</T>
              </H2>
            </div>
            <p className="text-[15px] leading-relaxed text-muted lg:pb-1">
              <T id={`${P}.t56`}>
                CRC Public Relations has delivered corporate communications programmes across a range of high-stakes
                sectors. Explore the pages below to see how our approach changes when the operating environment,
                stakeholder pressure, and communications risks are different.
              </T>
            </p>
          </div>
          <div className="mt-8 border-t border-line">
            {sectorLinks.map((sector, __ti) => (
              <Link
                key={sector.label}
                href={sector.href}
                className="group flex items-center justify-between gap-6 border-b border-line py-5"
              >
                <span className="kit-display text-[clamp(1.05rem,1.8vw,1.4rem)] uppercase leading-tight transition-transform duration-300 group-hover:translate-x-1.5">
                  <T id={`${P}.sectorLinks.${__ti}.label`}>{sector.label}</T>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <PageClosingCTA
        copyId={P}
        title="Ready to build a communications strategy that holds up under pressure?"
        body="Whether you are preparing for a major announcement, navigating a sensitive stakeholder situation, or building long-term communications capability, CRC Public Relations provides direct access to experienced counsel from the first conversation."
      />
    </>
  );
}
