import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { MediaReachSnapshot } from "@/components/shared/MediaReachSnapshot";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { FramedPhoto } from "@/components/altkit/media";
import { MEDIA } from "@/components/altkit/data";

export const metadata: Metadata = {
  title:
    "Media Relations & Strategy PR Australia | CRC Public Relations",
  description:
    "Proactive media strategy, journalist relationship management, and sustained media presence for Australian organisations. Documented media reach including 221 placements for one client in a single month. Senior advisers with broad media and editorial experience. Brisbane-based, national reach.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Media Strategy and Media Relations",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Proactive media strategy, journalist relationship management, and sustained media presence for Australian organisations.",
  areaServed: "AU",
  serviceType: "Media Relations Consulting",
};

const proofItems = [
  {
    label: "Newsroom perspective",
    value: "Former journalists",
    detail:
      "We understand what makes a great media story, and how to position you as the voice of authority in your field.",
  },
  {
    label: "Sustained profile",
    value: "Beyond the press release",
    detail:
      "Impacting media coverage that brings you trust and drives business is based on strategy, creativity, and an understanding of your ultimate objectives.",
  },
  {
    label: "Executive readiness",
    value: "Prepared voices",
    detail:
      "We ensure you are briefed and prepared, to maximise the impact of every media appearance and interview, and that you are ready for anything unexpected.",
  },
] as const;

const faqs = [
  {
    question: "What is the difference between media strategy and media training?",
    answer:
      "Media strategy is the broader discipline of deciding what the organisation should say, when it should say it, where it should appear, and which voices should carry the message. Media training prepares specific spokespeople to perform well within that strategy.",
  },
  {
    question: "Can CRC Public Relations help if we already have media relationships but they are inconsistent?",
    answer:
      "Yes. Many organisations have some media activity but no disciplined strategy behind it. We help tighten message focus, strengthen journalist relationships, and create a more credible, sustained market presence.",
  },
  {
    question: "Do you write op-eds and thought leadership pieces?",
    answer:
      "Yes. We work with leaders to identify positions worth taking, shape commentary that can stand up editorially, and place that thinking with the right outlets over time.",
  },
  {
    question: "Why is journalism experience beneficial?",
    answer:
      "Effective media strategy depends on understanding how editors, producers, and reporters think. Our team has a wide media background.",
  },
];

const P = "services-media-strategy";

const reachPoints = [
  "Media outlets in every city and state across Australia and New Zealand, and most rural and regional centres",
  "Media across the Pacific region",
  "International media markets, including major news outlets across the USA, UK, Europe and Asia",
  "International outlets and news wires like CNN, Bloomberg, AFP, and Associated Press",
  "Remote and rural Australian media",
  "Niche industry publications",
  "Major Australian TV, radio and digital publications",
  "Podcasts and new media",
];

const conferences = [
  {
    location: "The Pacific Islands",
    detail: "Forum with 18 national leaders and heads of state",
  },
  {
    location: "Los Angeles",
    detail: "Global news story",
  },
  {
    location: "France",
    detail: "Global news story",
  },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery was dropped, the dark international-reach panel became a
   hairline ledger, and the lead magnet uses the light variant so it does
   not sit against the pale reach snapshot band. */

export default function MediaStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        photo={{ src: MEDIA.bandTvCrews, alt: "Television crews setting up for an outdoor media conference" }} copyId={P}
        asidePreset="mediaEditorial"
        eyebrow="Media strategy"
        title="A trusted media presence doesn't happen by accident."
        description="We help you build a strong public presence that positions you as the trusted voice in your sector. You work directly with advisers who not only understand how the media works, but how media coverage supports - or in some cases doesn't support - your overall objectives."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        proofStrip={{
          eyebrow: "Why CRC Public Relations",
          title: "Being quoted is not the goal. Being trusted is.",
          items: proofItems,
        }}
      />

      {/* ---------- OPENING ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t1`}>Media strategy</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t2`}>You don&apos;t need publicity. You need results.</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t3`}>
                An impacting and sustained media presence is a major part of an effective communications strategy as
                it helps to build trust with those important to your success. It builds credibility, positions you as
                the expert, and separates you from the crowd.
              </T>
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t4`}>
                  But many confuse media relations with publicity or promotion. Yet visibility is not the same thing
                  as positioning, and the saying that &apos;all publicity is good publicity&apos; can&apos;t be
                  further from the truth, as many companies, organisations and people have sadly discovered.
                </T>
              </p>
              <p>
                <T id={`${P}.t5`}>
                  That&apos;s why we partner with you to achieve the right coverage. We create media strategies that
                  hit the right market with the right messaging, and achieve maximum results. And we know how to
                  respond to media enquiries that won&apos;t benefit you, or worse, could work against you.
                </T>
              </p>
              <p>
                <T id={`${P}.t6`}>
                  Strong media strategy is not a sequence of isolated media moments. It is a disciplined decision
                  about what your organisation should be known for, who should hear it, and why journalists should
                  keep coming back to you.
                </T>
              </p>
              <p>
                <T id={`${P}.t7`}>
                  We build media strategies that go beyond press releases and reactive enquiry handling. If your
                  current approach only generates coverage when you have something to announce, and measures success
                  by whether that coverage was positive or negative, you are managing media, not leading it.
                </T>
              </p>
              <p>
                <T id={`${P}.t8`}>
                  We help you move from reactive media management to proactive positioning, because the difference
                  between being covered and being credible is the difference that protects your reputation.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <FramedPhoto src={MEDIA.mediaInterview} alt="A reporter interviewing an executive" position="70% 40%" className="mb-6" />
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t9`}>What weak strategy looks like</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t10", "Press release dependence", "t11", "Media activity only appears when the organisation has something to announce."],
                  ["t12", "Reactive enquiry handling", "t13", "Journalists drive the agenda because there is no settled editorial position behind the response."],
                  ["t14", "Shallow success measures", "t15", "Coverage is judged as positive or negative, rather than by whether it builds durable authority."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-2 border-t border-line pt-5">
                <Eyebrow>
                  <T id={`${P}.t16`}>Strategic aim</T>
                </Eyebrow>
                <p className="mt-3 text-base font-semibold leading-snug">
                  <T id={`${P}.t17`}>
                    Move from reactive media management to sustained, credible market positioning that directly
                    supports your organisational objectives.
                  </T>
                </p>
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      <LeadMagnetBanner
        magnet="publicVoiceSteps"
        variant="light"
        title="Are you ready to raise your public profile and be the trusted voice of authority for your area of expertise?"
        description="Download the CRC Public Relations '5 steps to becoming a trusted public voice', and drive new clients and staff through the credibility this brings. Applies to companies, non-profits, governments, professional services firms, schools and associations."
        highlights={[]}
      />

      {/* ---------- AN EFFECTIVE STRATEGY ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t18`}>An effective strategy</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t19`}>What strong media strategy looks like in the market</T>
            </H2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              <T id={`${P}.t20`}>
                A strong media strategy is based on an understanding that a public voice is essential to your overall
                objectives. You become a credible source of authority in your sector. Trust is built with key
                stakeholders &ndash; internal and external. Journalists understand what you stand for. Executives
                sound like informed authorities rather than corporate placeholders. Commentary appears in the right
                places, at the right times, with a message that can survive scrutiny.
              </T>
            </p>
            <p>
              <T id={`${P}.t21`}>
                That outcome requires more than media activity. It requires message discipline, editorial judgment,
                and the ability to discern when media exposure is not beneficial. Premium media strategy is as much
                about restraint as visibility.
              </T>
            </p>
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT IT DELIVERS ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <H2 className="max-w-3xl">
            <T id={`${P}.t22`}>What a CRC Public Relations media strategy delivers</T>
          </H2>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            {[
              ["t23", "Media strategy development", "t24", "Every organisation has a story to tell and issues it cares about. Not all of them are media-ready. We work with your leadership team to identify the angles that journalists will actually pursue, the platforms that reach your most important audiences, and the strategy that will work best for you. The result is a media strategy with specific objectives, specific targets, and specific metrics."],
              ["t25", "Journalist and editorial relationships", "t26", "Media coverage is built on relationships with specific journalists, editors, and producers who cover your sector. CRC Public Relations brings corporate PR and journalism practice to the way we build and manage media relationships. We understand what editors and producers need, how stories are commissioned and developed, and how to present your organisation as a source that is worth coming back to. We introduce your organisation to the right people and build the ongoing relationships that generate sustained coverage."],
              ["t27", "Thought leadership and op-ed placement", "t28", "The most credible media presence is earned through consistent, substantive commentary on the issues that matter in your sector. We work with your leaders to develop thought leadership positions, draft op-ed pieces and expert commentary, and place that content with the publications and broadcasters most relevant to your audiences. Over time, this builds an authority profile that no single press release can create."],
              ["t29", "Spokesperson preparation and briefing", "t30", "Every media engagement is a risk if your spokesperson is not prepared. We prepare your executives and subject matter experts for interviews, developing their key messages, anticipating difficult questions, building their confidence on camera and on the record. We also provide pre-interview briefings that ensure your spokesperson walks into every media interaction with a clear plan."],
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

      {/* ---------- OUR MEDIA EXPERIENCE ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
            <div>
              <Eyebrow>
                <T id={`${P}.t31`}>Our media experience</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id={`${P}.t32`}>The reach and relationships behind effective media strategy</T>
              </H2>
              <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
                <T id={`${P}.t33`}>
                  The CRC Public Relations difference is our vast experience dealing with journalists across so many
                  regions and media outlets, from the smallest to the largest. This allows us to assist clients of all
                  sizes in all regions.
                </T>
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t34`}>
                  Our team has coordinated strategic media coverage, publicity, interviews, comments and responses for
                  clients with:
                </T>
              </p>
            </div>
            <Reveal className="lg:pt-10">
              <ul className="divide-y divide-[var(--line)] border-y border-line">
                {reachPoints.map((item) => (
                  <li key={item} className="py-3.5 text-[15px] leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <Eyebrow>
              <T id={`${P}.t35`}>International reach</T>
            </Eyebrow>
            <h3 className="kit-display mt-3 text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
              <T id={`${P}.t36`}>International media conferences hosted in</T>
            </h3>
            <div className="ledger mt-6">
              {conferences.map((item) => (
                <div key={item.location}>
                  <p className="text-sm font-bold">{item.location}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <div id="media-reach-snapshot">
        <MediaReachSnapshot />
      </div>

      {/* ---------- NEWSROOM PERSPECTIVE ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t44`}>Newsroom perspective</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t45`}>We understand how newsrooms think</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t46`}>
                  The CRC Public Relations team has a wide range of public relations and journalism experience,
                  including newsroom backgrounds, so we know how the media works.
                </T>
              </p>
              <p>
                <T id={`${P}.t47`}>
                  We value the role journalists play and understand what they require to prepare a great story and
                  what makes it worth covering.
                </T>
              </p>
              <p>
                <T id={`${P}.t48`}>
                  We know how to frame a media angle so it is genuinely newsworthy, not just self-promotional, and we
                  understand the news cycle and timing required that will make a story most beneficial to the media.
                </T>
              </p>
              <p>
                <T id={`${P}.t49`}>
                  Media training at CRC Public Relations is delivered in partnership with television and radio
                  journalists with decades of broadcast experience, people who have conducted the kinds of interviews
                  your spokespeople need to be ready for.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t37`}>Why it matters</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t38", "Real editorial judgment", "t39", "We know the difference between a genuine angle and a self-interested pitch."],
                  ["t40", "Better reporter fit", "t41", "The right story still fails if it is sent to the wrong journalist, desk, or format."],
                  ["t42", "Smarter timing", "t43", "Knowing when to hold back is often as valuable as knowing when to push forward."],
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

      <InlineEnquirySection copyId={P}
        title="Need a sharper media strategy?"
        body="If your organisation wants stronger editorial positioning, better spokesperson preparedness, or more deliberate thought leadership, CRC Public Relations can help design the strategy behind it."
        bullets={[
          "Media strategy and editorial positioning",
          "Journalist relationship and spokesperson planning",
          "Thought leadership and commentary programmes",
        ]}
        defaultMessage="We would like advice on our media strategy and spokesperson positioning."
        variant="white"
      />

      <FAQSection copyId={P}
        items={faqs}
        titleText="Common questions about media strategy"
        expandable={false}
      />

      <PageClosingCTA copyId={P}
        title="Ready to build media presence that actually moves the needle?"
        body="Media strategy works when it is consistent, strategic, and built on genuine editorial judgment. We help you earn coverage that strengthens authority rather than just generating noise."
        primaryLabel="Book a media strategy consultation"
      />
    </>
  );
}
