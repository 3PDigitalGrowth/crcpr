import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { ReputationAssessment } from "@/components/shared/ReputationAssessment";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";

export const metadata: Metadata = {
  title:
    "Reputation Management Consultants Australia | CRC Public Relations",
  description:
    "Reputation vulnerability assessments, monitoring, and long-term reputation protection for companies, associations, and government organisations. Direct access to experienced advisers.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reputation Management",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Reputation vulnerability assessments, stakeholder perception analysis, ongoing monitoring, and reputation recovery strategy for organisations across Australia.",
  areaServed: "AU",
  serviceType: "Reputation Management Consulting",
};

const sectorLinks = [
  { label: "Companies & family businesses", href: "/clients/corporate" },
  { label: "Industry associations", href: "/clients/industry-associations" },
  { label: "Government", href: "/clients/government" },
  { label: "Schools and faith-based", href: "/clients/schools-faith" },
] as const;

const proofItems = [
  {
    label: "Strategic foresight",
    value: "A step ahead",
    detail:
      'Our "outside" perspective means we can identify current and future vulnerabilities that clients might miss, and protect their reputation, brand, values, and revenue.',
  },
  {
    label: "Leadership clarity",
    value: "Experience matters",
    detail:
      "Creating the right messaging and crafting the most effective strategies that puts reputation at the centre only comes from years of experience across all sectors.",
  },
  {
    label: "Ongoing protection",
    value: "It's a relationship",
    detail:
      "We take our mission seriously: to promote, protect, and be advocates for our clients. Our success is why we have so many long-term client relationships.",
  },
] as const;

const faqs = [
  {
    question: "What is the difference between reputation management and crisis communications?",
    answer:
      "Reputation management is the longer-horizon discipline of identifying vulnerabilities, monitoring risk, and strengthening trust before a major public event occurs. Crisis communications is what happens when the issue is already live and public pressure is active.",
  },
  {
    question: "Who usually uses a reputation vulnerability assessment?",
    answer:
      "Boards, CEOs, communications leaders, and risk teams use it when they want a more realistic view of stakeholder, media, digital, and governance exposure. It is especially useful before major change, growth, scrutiny, or leadership transition.",
  },
  {
    question: "Can CRC Public Relations help if reputation damage has already occurred?",
    answer:
      "Yes. Reputation work often starts after a trust event. In those cases we assess what caused the damage, how key stakeholders currently perceive the organisation, and what communication and behaviour changes are needed to rebuild confidence over time.",
  },
  {
    question: "Is this a one-off project or an ongoing advisory relationship?",
    answer:
      "It can be either. Some organisations want a single vulnerability assessment or recovery roadmap. Others retain CRC Public Relations as an ongoing reputation partner because they want regular review points, monitoring, and strategic counsel before new issues emerge.",
  },
];

const pressureItems = [
  "A regulator or government body shifts from routine correspondence to pointed questions",
  "Customers, suppliers, or partners begin raising concerns privately that have not surfaced publicly",
  "Search results and online sentiment quietly turn, telling a different story about your organisation",
  "Board and executive alignment on a difficult issue begins to fracture behind the scenes",
];

const frameworkItems = [
  {
    title: "Reputation vulnerability assessments",
    body: "We conduct assessments of your organisation's communications, considering all stakeholders. We review your media profile, evaluate your digital footprint, and stress-test your messaging against the issues most likely to attract scrutiny. The output is a prioritised action plan your leadership team can act on immediately.",
  },
  {
    title: "Ongoing reputation monitoring and early warning",
    body: "Reputation risks do not appear fully formed. They develop through a series of signals: a change in media tone, a shift in stakeholder sentiment, a pattern of regulatory correspondence. Through a combination of ongoing dialogue with clients, and the provision of media monitoring and reporting, we work to identify signals early, giving your leadership team time to respond proactively rather than reactively.",
  },
  {
    title: "Reputation recovery strategy",
    body: "For organisations that have experienced a significant reputation event, the path back to trust is strategic, not tactical. We develop and implement reputation recovery programmes that address the root causes of the damage, rebuild stakeholder confidence, and restore your organisation's standing, methodically and measurably.",
  },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery was dropped. */

const P = "services-reputation-management";

export default function ReputationManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        copyId={P}
        asidePreset="proofLed"
        eyebrow="Reputation management"
        title="Your reputation is your most valuable asset. Protect it."
        description={`"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently" - Warren Buffett.

Your reputation is at the core of our communications strategies. This includes understanding and identifying your vulnerabilities, evaluating potential ramifications of messaging, and responding effectively when your reputation comes under pressure.`}
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="Strong reputations are never accidental. They are built by trust and managed deliberately."
        items={[...proofItems]}
      />

      {/* ---------- REPUTATION REALITY ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t1`}>Reputation reality</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t2`}>Reputation damage usually starts long before the headline.</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t3`}>
                  There isn&apos;t a year that passes without a major company receiving hostile media coverage that
                  brings with it major ramifications, costs, revenue losses and severe ongoing reputational damage. But
                  while we hear about the high profile companies, there are countless others also battling their own
                  issues because of a loss of trust by their stakeholders.
                </T>
              </p>
              <p>
                <T id={`${P}.t4`}>
                  What will surprise many, is that in most cases, these issues or crises could have been completely
                  avoided.
                </T>
              </p>
              <p>
                <T id={`${P}.t5`}>
                  Reputation damage is almost always predictable in hindsight. Usually the reason for the issue can be
                  traced back to one point: a wrong decision, a missed vulnerability, an oversight, a client who became
                  a public critic, a social media post that was ignored, a regulatory relationship that was allowed to
                  deteriorate, an internal policy that was never communicated clearly, a media enquiry that
                  wasn&apos;t handled correctly.
                </T>
              </p>
              <p>
                <T id={`${P}.t6`}>
                  We work with you to identify these vulnerabilities before they become headlines, and to build the
                  communications frameworks and stakeholder relationships that protect your reputation over the long
                  term.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t7`}>Early warning signs</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t8", "Stakeholder frustration is building", "t9", "Complaints become more organised, more public, and harder to contain."],
                  ["t10", "Media interest is changing shape", "t11", "Journalists move from isolated enquiries to pattern recognition and sustained scrutiny."],
                  ["t12", "Leadership confidence is slipping", "t13", "Teams know a risk exists, but no one has yet aligned the messages, relationships, and response plan around it."],
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

      {/* ---------- PRESSURE BEFORE IT IS PUBLIC ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container>
          <H2 className="max-w-3xl">
            <T id={`${P}.t14`}>What reputation pressure looks like before it becomes public</T>
          </H2>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            {pressureItems.map((item) => (
              <p key={item} className="border-t border-line py-5 text-[15px] leading-relaxed text-muted">
                {item}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- ASSESSMENT ---------- */}
      <Section tone="deep" className="py-11 md:py-14" id="assessment">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t15`}>Start here</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t16`}>Find out where your organisation is exposed</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t17`}>
                  Our Reputation Vulnerability Assessment evaluates your organisation across five risk areas: media
                  readiness, crisis preparedness, stakeholder trust, digital exposure, and governance. It is designed
                  to give leadership a faster, clearer view of where the next trust problem is most likely to emerge.
                </T>
              </p>
              <p>
                <T id={`${P}.t18`}>
                  This is the same framework we use in professional engagements, distilled into a practical
                  self-assessment you can complete now.
                </T>
              </p>
            </div>

            <div className="mt-8">
              <Eyebrow>
                <T id={`${P}.t19`}>What you get</T>
              </Eyebrow>
              <div className="mt-4 divide-y divide-[var(--line)] border-y border-line">
                {[
                  ["t20", "20 questions", "t21", "A fast, practical assessment designed for leadership teams."],
                  ["t22", "5 risk areas", "t23", "Media readiness, crisis preparedness, stakeholder trust, digital exposure, and governance."],
                  ["t24", "Clear next-step view", "t25", "A quicker read on where reputation pressure is most likely to emerge."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="kit-r border border-line bg-card p-6 md:p-8">
              <ReputationAssessment embedded />
            </div>
            <div className="mt-8 px-1">
              <Eyebrow>
                <T id={`${P}.t26`}>Next step</T>
              </Eyebrow>
              <h3 className="kit-display mt-3 text-[15px] uppercase leading-snug">
                <T id={`${P}.t27`}>Want to discuss your results?</T>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t28`}>
                  Once you have completed the assessment, our advisers can walk you through your score and what it
                  means for your organisation in a private, no-obligation conversation.
                </T>
              </p>
              <Link href="/contact" className="btn btn-primary mt-5">
                <T id={`${P}.t29`}>Book a consultation →</T>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- FRAMEWORK ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <Eyebrow>
            <T id={`${P}.t30`}>Reputation framework</T>
          </Eyebrow>
          <H2 className="mt-3 max-w-3xl">
            <T id={`${P}.t31`}>How CRC Public Relations approaches reputation management</T>
          </H2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            <T id={`${P}.t32`}>
              Reputation management works best when leadership can see risk clearly, interpret signals early, and act
              through a disciplined communications framework rather than ad hoc reaction.
            </T>
          </p>
          <div className="mt-8 border-t border-line">
            {frameworkItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr] md:items-baseline md:gap-8">
                  <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                  <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- WHY MOST FAILS ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container>
          <Eyebrow>
            <T id={`${P}.t33`}>Long-term discipline</T>
          </Eyebrow>
          <H2 className="mt-3 max-w-3xl">
            <T id={`${P}.t34`}>Why most reputation management fails, and what to do differently</T>
          </H2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="kit-display text-[15px] uppercase text-accent">
                <T id={`${P}.t35`}>What usually goes wrong</T>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t36`}>
                  Most organisations approach reputation management as a reactive discipline. They invest in
                  communications capability when something goes wrong and reduce that investment when things are going
                  well. The result is a cycle of crisis, recovery, and complacency that leaves the organisation
                  permanently vulnerable.
                </T>
              </p>
              <div className="mt-6 border-l-[3px] border-[var(--k-blue)] pl-5">
                <p className="text-base font-bold">
                  <T id={`${P}.t37`}>Reactive cycle</T>
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  <T id={`${P}.t38`}>
                    Crisis, recovery, and complacency repeats because the underlying vulnerabilities are never managed
                    systematically.
                  </T>
                </p>
              </div>
            </div>
            <div>
              <p className="kit-display text-[15px] uppercase text-accent">
                <T id={`${P}.t39`}>What stronger organisations do</T>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t40`}>
                  CRC Public Relations works as a long-term reputation partner for organisations that have made this
                  decision. While you can call us when something goes wrong, the better option is to retain us now, so
                  that when something does go wrong (and it will at some stage), you are already prepared.
                </T>
              </p>
              <div className="mt-6 divide-y divide-[var(--line)] border-y border-line">
                {[
                  ["t41", "Ongoing assessment", "t42", "Risks are reviewed before they become events."],
                  ["t43", "Prepared leadership", "t44", "Plans, messages, and advisers are already in place."],
                  ["t45", "Deliberate trust-building", "t46", "Reputation is managed as a standing leadership function."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4">
                    <p className="text-base font-bold">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- RELATED SECTORS ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container>
          <Eyebrow>
            <T id={`${P}.t47`}>Related sectors</T>
          </Eyebrow>
          <div className="mt-5 border-t border-line">
            {sectorLinks.map((link, __ti) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-6 border-b border-line py-5"
              >
                <span className="kit-display text-[clamp(1.05rem,1.8vw,1.4rem)] uppercase leading-tight transition-transform duration-300 group-hover:translate-x-1.5">
                  <T id={`${P}.sectorLinks.${__ti}.label`}>{link.label}</T>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <InlineEnquirySection
        copyId={P}
        title="Concerned about where your organisation is exposed?"
        body="If your board, executive team, or communications function needs a clearer view of reputation risk, we can help you assess the pressure points before they become a recovery project."
        bullets={[
          "Leadership-level reputation risk assessment",
          "Stakeholder and media exposure review",
          "Recovery advice for damaged trust environments",
        ]}
        defaultMessage="We would like confidential advice on our organisation's reputation risk and next steps."
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions about reputation management"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="Reputation damage is easier to prevent than to reverse."
        body="We work with organisations that want a realistic view of where they are exposed, what needs to be strengthened, and what your leadership team should do next."
        primaryLabel="Discuss your reputation management needs"
      />
    </>
  );
}
