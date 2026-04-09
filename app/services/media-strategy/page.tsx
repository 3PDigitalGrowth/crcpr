import type { Metadata } from "next";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title:
    "Media Relations & Strategy PR Australia | CRC Public Relations",
  description:
    "Proactive media strategy, journalist relationship management, and sustained media presence for Australian organisations. Former journalists with decades of newsroom experience. Brisbane-based, national reach.",
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
      "We understand what editors pursue, which angles hold up, and what makes a spokesperson worth calling again.",
  },
  {
    label: "Sustained profile",
    value: "Beyond the press release",
    detail:
      "A strong media profile is built through cadence, relationship management, and a defensible point of view over time.",
  },
  {
    label: "Executive readiness",
    value: "Prepared voices",
    detail:
      "Your strongest story still fails if the spokesperson is not ready for the hardest question in the room.",
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
      "Yes. We work with senior leaders to identify positions worth taking, shape commentary that can stand up editorially, and place that thinking with the right outlets over time.",
  },
  {
    question: "Why does Lyall Mercer's journalism background matter here?",
    answer:
      "Because good media strategy depends on understanding how editors, producers, and reporters think. Former-journalist perspective improves both story judgement and spokesperson preparation.",
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
        eyebrow="Media strategy"
        title="Sustained media presence doesn't happen by accident."
        description="We help you build a sustained media presence that positions you as the trusted voice in your sector. You work directly with advisers who understand how media thinks and moves."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/services/media-strategy/hero.webp",
          alt: "Broadcast studio or media room viewed from behind camera with microphone and warm lighting",
        }}
      />

      <PageProofStrip
        title="Being quoted is not the goal. Being trusted is."
        items={[...proofItems]}
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
                Visibility is not the same thing as positioning.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Strong media strategy is not a sequence of isolated media
                moments. It is a disciplined decision about what your
                organisation should be known for, who should hear it, and why
                journalists should keep coming back to you.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We build media strategies that go beyond press releases and
                  reactive enquiry handling. If your current approach only
                  generates coverage when you have something to announce, and
                  measures success by whether that coverage was positive or
                  negative, you are managing media, not leading it.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We work with your leadership team to define what you want to
                  be known for, identify the journalists and editors who cover
                  your sector and your issues, and build the sustained
                  relationships and content discipline that earns credible
                  coverage over time, not just when you have an announcement
                  to make.
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
                    market positioning.
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
            What good looks like
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What strong media strategy looks like in the market
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            Strong media strategy is visible in the pattern of coverage, not a
            single hit. The organisation becomes a credible source on the issues
            that matter in its sector. Journalists understand what it stands for.
            Executives sound like informed authorities rather than corporate
            placeholders. Commentary appears in the right places, at the right
            times, with a message that can survive scrutiny.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            That outcome requires more than media activity. It requires message
            discipline, editorial judgment, and a view on what your organisation
            should say no to. Premium media strategy is as much about restraint
            as visibility.
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
                audiences, and the cadence of media engagement that builds
                profile without creating noise. The result is a media strategy
                with specific objectives, specific targets, and specific
                metrics.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Journalist and editorial relationships
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Media coverage is built on relationships with specific
                journalists, editors, and producers who cover your sector.
                CRC Public Relations has cultivated these relationships over 25 years of
                corporate PR and journalism practice. We know how newsrooms
                work, what editors are looking for, and how to present your
                organisation as a source that is worth coming back to. We
                introduce your organisation to the right people and build the
                ongoing relationships that generate sustained coverage.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Thought leadership and op-ed placement
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The most credible media presence is earned through consistent,
                substantive commentary on the issues that matter in your
                sector. We work with your senior leaders to develop thought
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
                We understand how newsrooms think because we came from them.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                That background is not a credential line. It shapes how we
                judge stories, prepare spokespeople, and build coverage that
                journalists will actually trust.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  CRC Public Relations founder Lyall Mercer began his career as a journalist.
                  That background is not incidental. It is the foundation of
                  everything we do in media strategy. We do not approach media
                  relations from the perspective of a PR firm trying to manage
                  journalists. We approach it from the perspective of people
                  who understand what editors are looking for, what makes a
                  story worth covering, and what makes an organisation worth
                  calling back.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  This gives our clients a genuine advantage. We know how to
                  frame a story so it is genuinely newsworthy, not just
                  self-promotional. We know which journalists are most
                  receptive to which angles. And we know when to hold a story
                  back and when to push it.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Media training at CRC Public Relations is delivered in partnership with
                  television and radio journalists with decades of broadcast
                  experience, people who have conducted the kinds of interviews
                  your spokespeople need to be ready for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="mediaInterviewGuide"
        variant="dark"
        title="Is your spokesperson ready for the next meaningful interview?"
        description="Download the CRC Public Relations Media Interview Preparation Guide, a practical briefing framework used by executives and communications leaders who need their message to hold up on camera, on radio, and on the record."
        highlights={[
          "Written from a newsroom perspective",
          "Useful before high-stakes interviews",
          "Built for executives and spokespeople",
        ]}
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about media strategy"
      />

      <PageClosingCTA
        title="Ready to build media presence that actually moves the needle?"
        body="Media strategy works when it is consistent, strategic, and built on genuine editorial judgment. We help you earn coverage that strengthens authority rather than just generating noise."
        primaryLabel="Book a media strategy consultation"
      />
    </>
  );
}
