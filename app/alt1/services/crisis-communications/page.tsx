import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Plus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PAGE_HERO_ASIDES } from "@/config/pageHeroAsides";
import { ClosingCTA } from "@/components/alt1/blocks";
import { PHOTOS } from "@/components/alt1/data";
import { EnquiryForm } from "@/components/alt1/forms";
import { getA1Posts, toCard } from "@/components/alt1/insights";
import { Reveal } from "@/components/alt1/motion";
import { PostCard } from "@/components/alt1/PostCard";
import { BlueRule, Container, Eyebrow, GhostWord, H2, Section, VideoFill } from "@/components/alt1/primitives";
import { ResourceCard } from "@/components/alt1/ResourceCard";

/* Copy is carried over verbatim from /services/crisis-communications. */

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Crisis Communications | Alt 1 | CRC Public Relations",
  description:
    "Crisis communications counsel and 24/7 crisis response for organisations across Australia. Crisis plans, simulation exercises, spokesperson preparation, and immediate support. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Crisis Communications",
  provider: { "@type": "ProfessionalService", name: "CRC Public Relations", url: "https://crcpr.com.au" },
  description:
    "24/7 crisis communications response, crisis planning, simulation exercises, and post-crisis recovery for organisations across Australia.",
  areaServed: "AU",
  serviceType: "Crisis Communications Consulting",
};

const proofItems = [
  {
    label: "Urgent support",
    value: "24/7 access",
    detail:
      "Active crisis matters are handled by experienced advisers, not passed through a generic agency support model.",
  },
  {
    label: "Preparation",
    value: "Plan, train, test",
    detail:
      "Prepared organisations respond faster because their plans, spokespeople, and escalation pathways have already been tested.",
  },
  {
    label: "Recovery",
    value: "Opportunity",
    detail:
      "We focus not only on the present, but turning the challenge into an opportunity to build greater stakeholder trust moving forward.",
  },
];

const failures = [
  {
    title: "Waiting for certainty",
    body: "By the time every detail is confirmed, the narrative is often already moving without you.",
  },
  {
    title: "Using the wrong channel",
    body: "Staff, stakeholders, regulators, and media rarely need the same message in the same order.",
  },
  {
    title: "Saying too much too soon",
    body: "Early overstatement creates contradictions later and makes recovery materially harder.",
  },
];

const expectations = [
  {
    title: "Speed with discipline",
    body: "Fast advice matters, but this doesn't mean reacting without thought and strategy.",
  },
  {
    title: "Message authenticity",
    body: "Your statements, staff updates, media responses, and other communication must connect on an emotional level.",
  },
  {
    title: "Wise guidance",
    body: "Crises are not the time to learn on the job. They require experienced judgement built from previous high-stakes situations.",
  },
];

const supportWays = [
  {
    title: "Crisis preparedness, before it happens",
    image: PHOTOS.boardroomMeeting,
    imageAlt: "Barbara Gorogh and Lyall Mercer working through a crisis plan with a client",
    body: [
      "The best crisis response begins well before the crisis occurs. We work with organisations to develop crisis communications plans, conduct vulnerability assessments that identify the specific scenarios most likely to threaten your reputation, run crisis simulation exercises that test your people and your process under pressure, and train your spokespeople to perform at their best when the stakes are highest.",
      "Organisations whose people are emotionally prepared and have a tested crisis plan respond faster, with greater discipline, and with measurably better outcomes than those without one. This is not an opinion. It is documented consistently across every major crisis communications study and played out in real-life situations.",
    ],
  },
  {
    title: "Active crisis response, when it is happening now",
    image: PHOTOS.lyallPhoneLaptop,
    imageAlt: "Lyall Mercer on a call at his laptop",
    body: [
      "When a crisis is live, CRC Public Relations provides immediate counsel that brings order to a chaotic situation. We join your crisis team, establish media protocols, prepare spokespeople, coordinate communications across stakeholder groups, manage media enquiries, and provide the strategic direction that keeps your organisation ahead of the story.",
      "We are available 24 hours a day, seven days a week. We do not pass crisis calls to juniors. Your situation is managed by advisers with the experience and judgment to make difficult calls under pressure.",
    ],
  },
  {
    title: "Post-crisis recovery, rebuilding what matters",
    image: PHOTOS.foundersOffice,
    imageAlt: "Barbara Gorogh and Lyall Mercer in the CRC Public Relations office",
    body: [
      "The crisis itself is rarely the whole story. How an organisation is perceived after a crisis, whether it is seen as having handled itself with integrity, transparency, and accountability, shapes its reputation for years. We provide post-crisis communications strategy that rebuilds stakeholder trust, addresses the narrative established during the event, and positions your organisation for long-term recovery.",
    ],
  },
];

const faqs = [
  {
    question: "Do you only get involved when the crisis is already public?",
    answer:
      "No. Many organisations engage CRC Public Relations before a crisis becomes public so their plans, spokespeople, and escalation pathways are properly tested. Others call when the matter is already live and immediate support is required.",
  },
  {
    question: "What does a crisis communications engagement usually include?",
    answer:
      "Depending on the situation, it can include planning, simulations, spokesperson preparation, first-response messaging, media management, stakeholder communications, and post-crisis recovery advice. The exact mix changes by client and pressure point.",
  },
  {
    question: "Who handles the work during a high-pressure matter?",
    answer:
      "Experienced advisers. CRC Public Relations does not route crisis matters through a junior account structure. Active situations are handled directly by experienced advisers with crisis judgement and newsroom understanding.",
  },
];

export default function Alt1CrisisPage() {
  const aside = PAGE_HERO_ASIDES.crisisTrust;
  const readingFor = getA1Posts()
    .filter((p) => p.category === "Crisis Communications")
    .slice(0, 2)
    .map(toCard);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a
        href={siteConfig.phone.href}
        className="block bg-[#1c74bc] px-4 py-3 text-center text-[13px] font-semibold text-white transition-colors hover:bg-[#155e9a]"
      >
        Need immediate crisis support? Call {siteConfig.phone.display} | Available 24/7
      </a>

      {/* ---------- HERO ---------- */}
      <Section tone="deep" className="pb-20 md:pb-28">
        <div className="orb -left-64 -top-40 h-[52rem] w-[52rem]" aria-hidden />
        <Container className="grid gap-12 pt-12 md:pt-20 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Crisis communications</Eyebrow>
            <h1 className="font-display mt-7 text-[clamp(2.4rem,5.4vw,4.9rem)] leading-[0.98] tracking-[-0.015em]">
              When a crisis breaks, experience is everything.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              24/7 crisis response, crisis communications planning, and simulation exercises. When you need experienced
              counsel, we are available immediately.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
              </Link>
              <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                Or call {siteConfig.phone.display}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] lg:aspect-[5/6]">
              <VideoFill
                video="phone"
                alt="Lyall Mercer taking a call in the CRC Public Relations office"
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                stillClassName="object-cover object-[45%_50%]"
              />
            </div>
            <div className="glass-strong relative z-10 -mt-20 ml-4 mr-4 rounded-[24px] p-6 sm:ml-auto sm:mr-6 sm:max-w-sm lg:absolute lg:-bottom-10 lg:-left-12 lg:m-0">
              <p className="text-xs text-muted">Direct strategic counsel</p>
              <p className="font-display mt-3 text-4xl leading-none text-accent">{siteConfig.stats.yearsTrading}</p>
              <p className="mt-2 text-sm text-muted">Years serving organisations across Australia and the Pacific</p>
              <div className="my-4 h-px bg-[var(--line)]" />
              <p className="text-base font-bold">{aside.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{aside.body}</p>
            </div>
          </Reveal>
        </Container>

        <Container className="mt-24 md:mt-32">
          <div className="border-t border-line pt-14">
            <Eyebrow>Why CRC Public Relations</Eyebrow>
            <H2 className="mt-4 max-w-3xl">The first decisions in a crisis shape everything that follows.</H2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {proofItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08} className="h-full">
                  <div className="glass h-full rounded-[24px] p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{item.label}</p>
                    <p className="font-display mt-4 text-2xl md:text-3xl">{item.value}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- BEING CRISIS-READY ---------- */}
      <Section tone="base" className="py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:gap-20">
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src={PHOTOS.lyallGreySeated}
                alt="Lyall Mercer, co-founder and principal adviser"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_20%]"
              />
            </Reveal>
          </div>
          <div>
            <Eyebrow>Being crisis-ready</Eyebrow>
            <H2 className="mt-4">What does it mean to be crisis-ready?</H2>
            <p className="font-display mt-6 text-2xl leading-snug text-accent">Crisis planning is a mindset, not a document.</p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                A tailored and tested crisis communications plan is essential for every organisation, but it must be
                accompanied by a readiness, logistical and emotional, to respond to any issue or crisis.
              </p>
              <p>
                CRC Public Relations believes that readiness means understanding the value of effective, transparent
                communication that connects with your stakeholders as soon as a major issue or crisis hits, and backing
                this up with a tested plan, prepared spokespeople, and the guidance of outside crisis communications
                counsel.
              </p>
              <p>
                If you don&apos;t, there can be major ramifications. Melissa Agnes, CEO of the Crisis Ready Institute in
                the USA (who we partner with to present the Crisis Masterclass for crisis leaders) defines these
                ramifications as the &quot;Crisis Response Penalty&quot;.
              </p>
            </div>

            <aside className="glass my-10 rounded-[24px] p-7 md:p-9">
              <Eyebrow>The Crisis Response Penalty</Eyebrow>
              <blockquote className="font-display mt-5 border-l-[3px] border-[#1c74bc] pl-5 text-xl leading-snug md:text-2xl">
                &quot;When organisations fail to respond effectively in the right timeline, the longer you wait, the more
                you lose ownership of the narrative, the more trust erodes, and the greater the material impact
                becomes.&quot;
              </blockquote>
              <p className="mt-4 pl-5 text-sm text-muted">
                Melissa Agnes, CEO of the Crisis Ready Institute (presenter of our Crisis Masterclass for crisis leaders)
              </p>
            </aside>

            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                But as Melissa also notes: &quot;The Crisis Response Penalty is preventable... when you have the right
                mindset, skillset, and capabilities in place&quot;.
              </p>
              <p>
                In a crisis, hesitation and overreaction can be equally costly. That&apos;s why preparation and the right
                guidance not only helps to navigate through a crisis, but to turn them into opportunities to build even
                greater trust.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- THE FIRST 15 MINUTES ---------- */}
      <Section tone="deep" className="py-24 md:py-32">
        <span aria-hidden className="ghost-word absolute -right-6 top-0 text-[clamp(12rem,34vw,30rem)]">
          15
        </span>
        <Container className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:gap-20">
          <div>
            <Eyebrow>Urgent timeframe</Eyebrow>
            <H2 className="mt-4">The first 15 minutes</H2>
            <p className="mt-6 text-xl leading-relaxed">
              The best scenario when a crisis hits is to have the time to respond. But usually this isn&apos;t possible.
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                When a crisis becomes public, in this age of digital and social media, the first 15 minutes is a key
                timeframe. Too many organisations don&apos;t understand this and make predictable mistakes: they wait too
                long for more information, or respond through the wrong channel, or say more than they should before the
                facts are established. Each mistake compounds the one prior.
              </p>
              <p>We help prepare you to be crisis-ready.</p>
            </div>
          </div>
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image
              src={PHOTOS.lyallBlazer}
              alt="Lyall Mercer, co-founder and principal adviser"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover object-[50%_18%]"
            />
          </Reveal>
        </Container>
        <Container className="mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Common first-response failures</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {failures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="h-full">
                <div className="glass h-full rounded-[24px] p-7">
                  <BlueRule width="2rem" />
                  <p className="mt-5 text-lg font-bold">{f.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 border-t border-line pt-8 md:flex md:items-baseline md:gap-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent md:shrink-0">What better looks like</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed md:mt-0">
              A tested plan, prepared spokespeople, and guidance from experienced, external crisis communications counsel.
            </p>
          </div>
        </Container>
      </Section>

      {/* ---------- CONFIDENTIAL ENQUIRY ---------- */}
      <section className="tone-deep relative overflow-hidden py-24 md:py-32" aria-labelledby="a1-enquiry">
        <Image src={PHOTOS.officePlant} alt="" fill sizes="100vw" className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-[var(--bg)] opacity-[0.84]" aria-hidden />
        <Container className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Confidential enquiry</Eyebrow>
            <H2 className="mt-4 !text-[clamp(1.9rem,3.6vw,3rem)]">
              <span id="a1-enquiry">Need crisis communications support or preparedness advice?</span>
            </H2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Use this form for confidential advice on crisis planning, simulation exercises, spokesperson preparation, or
              post-crisis recovery. If the matter is already active, call us immediately instead.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Crisis plans, simulation exercises, and spokesperson preparation",
                "Support for active incidents and board-facing matters",
                "Post-crisis recovery and stakeholder trust rebuilding",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-strong rounded-[28px] p-6 md:p-9">
            <EnquiryForm
              defaultMessage="We need confidential crisis communications advice."
              submitLabel="Send confidential enquiry"
              disclaimer="Confidential and reviewed by a crisis adviser."
            />
          </div>
        </Container>
      </section>

      {/* ---------- WHAT TO EXPECT ---------- */}
      <Section tone="base" className="py-24 md:py-32">
        <GhostWord align="right">COUNSEL</GhostWord>
        <Container>
          <Eyebrow>What serious organisations expect</Eyebrow>
          <H2 className="mt-4 max-w-4xl">What serious organisations expect from crisis communications counsel</H2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {expectations.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08} className="h-full">
                <div className="glass h-full rounded-[24px] p-7">
                  <p className="font-display text-2xl">{e.title}</p>
                  <p className="mt-3 text-base leading-relaxed text-muted">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <H2 className="mt-28 max-w-3xl">Three ways we support you through crisis</H2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {supportWays.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                  <Image src={w.image} alt={w.imageAlt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-6 text-xl font-bold leading-snug">{w.title}</h3>
                <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted">
                  {w.body.map((b) => (
                    <p key={b.slice(0, 24)}>{b}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="glass mx-auto mt-20 max-w-3xl rounded-[28px] border-2 !border-[#1c74bc] p-8 text-center md:p-10">
            <h3 className="font-display text-3xl">Facing a crisis right now?</h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Call us directly, available 7 days. Every call is treated with absolute confidentiality. You will speak to a
              CRC Public Relations adviser, not a receptionist.
            </p>
            <a href={siteConfig.phone.href} className="btn btn-primary mt-7 w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden />
              Call {siteConfig.phone.display} now
            </a>
          </div>
        </Container>
      </Section>

      {/* ---------- CHECKLIST ---------- */}
      <Section tone="deep" className="py-24 md:py-32">
        <div className="orb -right-40 top-10 h-[44rem] w-[44rem]" aria-hidden />
        <Container className="grid items-stretch gap-6 lg:grid-cols-[0.8fr,1.2fr]">
          <Reveal className="relative min-h-[22rem] overflow-hidden rounded-[28px]">
            <Image
              src={PHOTOS.barbaraBrownClose}
              alt="Barbara Gorogh, Director of Operations"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-[50%_20%]"
            />
          </Reveal>
          <div className="flex flex-col gap-5">
            <ResourceCard magnet="crisisReadinessChecklist" featured wide />
            <ul className="grid gap-3 sm:grid-cols-3">
              {["30 questions across readiness areas", "Action plan guidance for every gap", "Used by Australian leadership teams"].map(
                (h) => (
                  <li key={h} className="flex items-start gap-2 rounded-2xl border border-line p-4 text-sm font-semibold">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {h}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ---------- FAQ + READING ---------- */}
      <Section tone="base" className="py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr,1fr] lg:gap-20">
          <div>
            <H2 className="!text-[clamp(1.8rem,3.4vw,2.6rem)]">Common questions about crisis communications support</H2>
            <div className="mt-10 border-t border-line">
              {faqs.map((f) => (
                <details key={f.question} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <Plus className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden />
                  </summary>
                  <p className="-mt-1 pb-6 text-base leading-relaxed text-muted">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between gap-6">
              <H2 className="!text-[clamp(1.8rem,3.4vw,2.6rem)]">Related insights</H2>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {readingFor.map((p) => (
                <PostCard key={p.slug} post={p} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw" />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ClosingCTA
        title="Preparation now is worth far more than an ad hoc response later."
        body="A tested crisis communications capability costs a fraction of a poorly handled incident. If your organisation needs a plan, crisis simulation, or requires other support before the next high-pressure event, talk to us."
        primaryLabel="Book a crisis preparedness consultation"
        video="pair"
      />
    </>
  );
}
