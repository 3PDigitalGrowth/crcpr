import type { Metadata } from "next";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { MediaReachSnapshot } from "@/components/shared/MediaReachSnapshot";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";

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

export default function MediaStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        asidePreset="mediaEditorial"
        eyebrow="Media strategy"
        title="A trusted media presence doesn't happen by accident."
        description="We help you build a strong public presence that positions you as the trusted voice in your sector. You work directly with advisers who not only understand how the media works, but how media coverage supports - or in some cases doesn’t support - your overall objectives."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/services/media-strategy/hero.webp",
          alt: "Broadcast studio or media room viewed from behind camera with microphone and warm lighting",
        }}
        proofStrip={{
          eyebrow: "Why CRC Public Relations",
          title: "Being quoted is not the goal. Being trusted is.",
          items: proofItems,
        }}
      />

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/services/media-strategy/mid-prep.webp"
            imageAlt="Media strategy workshop: presenter leading colleagues through an integrated launch plan shown on screen in a conference room"
            imagePosition="left"
          >
            <div className="max-w-3xl lg:max-w-none">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Media strategy
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                You don&apos;t need publicity. You need results.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                An impacting and sustained media presence is a major part of
                an effective communications strategy as it helps to build
                trust with those important to your success. It builds
                credibility, positions you as the expert, and separates you
                from the crowd.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  But many confuse media relations with publicity or
                  promotion. Yet visibility is not the same thing as
                  positioning, and the saying that &lsquo;all publicity is
                  good publicity&rsquo; can&apos;t be further from the truth,
                  as many companies, organisations and people have sadly
                  discovered.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  That&apos;s why we partner with you to achieve the right
                  coverage. We create media strategies that hit the right
                  market with the right messaging, and achieve maximum
                  results. And we know how to respond to media enquiries that
                  won&apos;t benefit you, or worse, could work against you.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Strong media strategy is not a sequence of isolated media
                  moments. It is a disciplined decision about what your
                  organisation should be known for, who should hear it, and
                  why journalists should keep coming back to you.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We build media strategies that go beyond press releases and
                  reactive enquiry handling. If your current approach only
                  generates coverage when you have something to announce, and
                  measures success by whether that coverage was positive or
                  negative, you are managing media, not leading it.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We help you move from reactive media management to proactive
                  positioning, because the difference between being covered
                  and being credible is the difference that protects your
                  reputation.
                </p>
              </div>
              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-5">
                  What weak strategy looks like
                </p>

                <div className="space-y-4">
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Press release dependence
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Media activity only appears when the organisation has
                      something to announce.
                    </p>
                  </div>

                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Reactive enquiry handling
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Journalists drive the agenda because there is no settled
                      editorial position behind the response.
                    </p>
                  </div>

                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Shallow success measures
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Coverage is judged as positive or negative, rather than by
                      whether it builds durable authority.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-brand-border">
                  <p className="text-brand-gold text-xs font-medium mb-3">
                    Strategic aim
                  </p>
                  <p className="text-navy font-sans font-semibold text-base leading-relaxed">
                    Move from reactive media management to sustained, credible
                    market positioning that directly supports your organisational
                    objectives.
                  </p>
                </div>
              </aside>
            </div>
          </ImageTextRow>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            An effective strategy
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What strong media strategy looks like in the market
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            A strong media strategy is based on an understanding that a public
            voice is essential to your overall objectives. You become a credible
            source of authority in your sector. Trust is built with key
            stakeholders &ndash; internal and external. Journalists understand
            what you stand for. Executives sound like informed authorities rather
            than corporate placeholders. Commentary appears in the right places,
            at the right times, with a message that can survive scrutiny.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            That outcome requires more than media activity. It requires message
            discipline, editorial judgment, and the ability to discern when media
            exposure is not beneficial. Premium media strategy is as much about
            restraint as visibility.
          </p>
        </div>
      </section>

      <InlineEnquirySection
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

      {/* What a CRC Public Relations media strategy delivers */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What a CRC Public Relations media strategy delivers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Media strategy development
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Every organisation has a story to tell and issues it cares
                about. Not all of them are media-ready. We work with your
                leadership team to identify the angles that journalists will
                actually pursue, the platforms that reach your most important
                audiences, and the strategy that will work best for you. The
                result is a media strategy with specific objectives, specific
                targets, and specific metrics.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Journalist and editorial relationships
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Media coverage is built on relationships with specific
                journalists, editors, and producers who cover your sector.
                CRC Public Relations brings corporate PR and journalism
                practice to the way we build and manage media relationships. We
                understand what editors and producers need, how stories are
                commissioned and developed, and how to present your organisation
                as a source that is worth coming back to. We introduce your
                organisation to the right people and build the ongoing
                relationships that generate sustained coverage.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Thought leadership and op-ed placement
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The most credible media presence is earned through consistent,
                substantive commentary on the issues that matter in your
                sector. We work with your leaders to develop thought
                leadership positions, draft op-ed pieces and expert
                commentary, and place that content with the publications and
                broadcasters most relevant to your audiences. Over time, this
                builds an authority profile that no single press release can
                create.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Spokesperson preparation and briefing
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Every media engagement is a risk if your spokesperson is not
                prepared. We prepare your executives and subject matter experts
                for interviews, developing their key messages, anticipating
                difficult questions, building their confidence on camera and on
                the record. We also provide pre-interview briefings that ensure
                your spokesperson walks into every media interaction with a
                clear plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our media experience */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/services/media-strategy/media-experience.png"
            imageAlt="Cluster of broadcast microphones on a press conference podium with photojournalists and a television camera operator visible in the warm, softly lit background"
            imagePosition="right"
          >
            <div className="max-w-3xl lg:max-w-none">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Our media experience
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                The reach and relationships behind effective media strategy
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                The CRC Public Relations difference is our vast experience
                dealing with journalists across so many regions and media
                outlets, from the smallest to the largest. This allows us to
                assist clients of all sizes in all regions.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Our team has coordinated strategic media coverage, publicity,
                interviews, comments and responses for clients with:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Media outlets in every city and state across Australia and New Zealand, and most rural and regional centres",
                  "Media across the Pacific region",
                  "International media markets, including major news outlets across the USA, UK, Europe and Asia",
                  "International outlets and news wires like CNN, Bloomberg, AFP, and Associated Press",
                  "Remote and rural Australian media",
                  "Niche industry publications",
                  "Major Australian TV, radio and digital publications",
                  "Podcasts and new media",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-charcoal text-[15px] leading-relaxed"
                  >
                    <span
                      className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-gold"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ImageTextRow>

          <aside className="mt-14 rounded-lg bg-navy p-7 md:p-10">
            <p className="text-brand-gold text-xs font-medium mb-3">
              International reach
            </p>
            <h3 className="font-heading font-black text-white text-xl md:text-2xl leading-tight mb-6">
              International media conferences hosted in
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
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
              ].map((item) => (
                <li
                  key={item.location}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="font-sans font-semibold text-white text-base mb-1">
                    {item.location}
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* We understand how newsrooms think */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10 items-start">
            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                Why it matters
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Real editorial judgment
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    We know the difference between a genuine angle and a
                    self-interested pitch.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Better reporter fit
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The right story still fails if it is sent to the wrong
                    journalist, desk, or format.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Smarter timing
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Knowing when to hold back is often as valuable as knowing
                    when to push forward.
                  </p>
                </div>
              </div>
            </aside>

            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Newsroom perspective
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                We understand how newsrooms think
              </h2>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The CRC Public Relations team has a wide range of public
                  relations and journalism experience, including newsroom
                  backgrounds, so we know how the media works.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We value the role journalists play and understand what they
                  require to prepare a great story and what makes it worth
                  covering.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We know how to frame a media angle so it is genuinely
                  newsworthy, not just self-promotional, and we understand the
                  news cycle and timing required that will make a story most
                  beneficial to the media.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Media training at CRC Public Relations is delivered in
                  partnership with television and radio journalists with decades
                  of broadcast experience, people who have conducted the kinds of
                  interviews your spokespeople need to be ready for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="media-reach-snapshot">
        <MediaReachSnapshot />
      </div>

      <LeadMagnetBanner
        magnet="mediaInterviewGuide"
        variant="dark"
        title="Is your spokesperson ready for the next meaningful interview?"
        description="Download the CRC Public Relations Media Interview Preparation Guide, a practical briefing framework used by executives and communications leaders who need their message to hold up on camera, on radio, and on the record."
        highlights={[
          "Practical framework for print, radio, and broadcast",
          "Useful before high-stakes interviews",
          "Built for executives and spokespeople",
        ]}
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about media strategy"
        expandable={false}
      />

      <PageClosingCTA
        title="Ready to build media presence that actually moves the needle?"
        body="Media strategy works when it is consistent, strategic, and built on genuine editorial judgment. We help you earn coverage that strengthens authority rather than just generating noise."
        primaryLabel="Book a media strategy consultation"
      />
    </>
  );
}
