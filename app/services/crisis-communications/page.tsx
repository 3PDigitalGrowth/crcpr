import type { Metadata } from "next";
import Link from "next/link";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Crisis Communications PR Australia | CRC Public Relations",
  description:
    "Crisis communications counsel and 24/7 crisis response for organisations across Australia. Crisis plans, simulation exercises, spokesperson preparation, and immediate support. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Crisis Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
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
      "Active crisis matters are handled by senior advisers, not passed through a generic agency support model.",
  },
  {
    label: "Preparation",
    value: "Plan, train, test",
    detail:
      "Prepared organisations respond faster because their plans, spokespeople, and escalation pathways have already been tested.",
  },
  {
    label: "Recovery",
    value: "Long-tail thinking",
    detail:
      "We focus not only on the first statement but on the stakeholder trust you will need long after the event has passed.",
  },
] as const;

const faqs = [
  {
    question: "How is this page different from the dedicated crisis response page?",
    answer:
      "This page explains the broader crisis communications service, including planning, simulation, live response, and recovery. The dedicated crisis page is designed specifically for urgent visitors who need immediate support during an active matter.",
  },
  {
    question: "Do you only get involved when the crisis is already public?",
    answer:
      "No. Many organisations engage CRC Public Relations before a crisis becomes public so their plans, spokespeople, and escalation pathways are properly tested. Others call when the matter is already live and immediate senior support is required.",
  },
  {
    question: "What does a crisis communications engagement usually include?",
    answer:
      "Depending on the situation, it can include planning, simulations, spokesperson preparation, first-response messaging, media management, stakeholder communications, and post-crisis recovery advice. The exact mix changes by client and pressure point.",
  },
  {
    question: "Who handles the work during a high-pressure matter?",
    answer:
      "Senior advisers. CRC Public Relations does not route crisis matters through a junior account structure. Active situations are handled directly by experienced advisers with crisis judgement and newsroom understanding.",
  },
];

export default function CrisisCommunicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        asidePreset="crisisTrust"
        eyebrow="Crisis communications"
        title="When a crisis breaks, experience is everything."
        description="24/7 crisis response, crisis communications planning, and simulation exercises. When you need experienced senior counsel, we are available immediately."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/services/crisis-communications/hero.webp",
          alt: "Dimly lit conference room with desk lamp on spread documents and open laptop suggesting a crisis response workspace",
        }}
      />

      <PageProofStrip
        title="The first decisions in a crisis shape everything that follows."
        items={[...proofItems]}
        variant="navy"
      />

      {/* Secondary CTA */}
      <section className="bg-navy pb-16 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <a
            href="tel:1300182186"
            className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-brand-gold hover:text-navy transition"
          >
            Need immediate support? Call now
          </a>
        </div>
      </section>

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/services/crisis-communications/mid-phone.webp"
            imageAlt="Hand reaching for a ringing desk phone in warm office light suggesting an urgent senior call"
            imagePosition="left"
            aspectClass="aspect-[4/3]"
          >
            <div className="max-w-3xl lg:max-w-none">
              <p className="text-brand-gold text-xs font-medium mb-4">
                The first fifteen minutes
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                The damage often starts before the facts are clear.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                In a communications crisis, hesitation and overreaction can be
                equally costly. The organisations that fare best are rarely the
                most eloquent under pressure. They are the most prepared.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Most organisations facing a communications crisis make the
                  same mistakes in the first fifteen minutes: they wait for more
                  information before responding, they respond through the wrong
                  channel, or they say more than they should before the facts
                  are established. Each mistake compounds the one before it.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Our co-founder Lyall Mercer has spent 25 years studying and
                  managing the first moments of corporate crises. His
                  conclusion is unambiguous: the organisations that navigate
                  crises best are not the ones that are most articulate under
                  pressure. They are the ones that have a tested plan, a
                  prepared spokesperson, and senior counsel on the phone before
                  the first journalist calls.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  This is the preparation we provide.
                </p>
              </div>
              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-5">
                  Common first-response failures
                </p>

                <div className="space-y-4">
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Waiting for certainty
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      By the time every detail is confirmed, the narrative is
                      often already moving without you.
                    </p>
                  </div>

                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Using the wrong channel
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Staff, stakeholders, regulators, and media rarely need the
                      same message in the same order.
                    </p>
                  </div>

                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Saying too much too soon
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Early overstatement creates contradictions later and makes
                      recovery materially harder.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-brand-border">
                  <p className="text-brand-gold text-xs font-medium mb-3">
                    What better looks like
                  </p>
                  <p className="text-navy font-sans font-semibold text-base leading-relaxed">
                    A tested plan, a prepared spokesperson, and senior counsel on
                    the phone before the first journalist calls.
                  </p>
                </div>
              </aside>
            </div>
          </ImageTextRow>
        </div>
      </section>

      <InlineEnquirySection
        eyebrow="Confidential enquiry"
        submitLabel="Send confidential enquiry"
        title="Need crisis communications support or preparedness advice?"
        body="Use this form for confidential advice on crisis planning, simulation exercises, spokesperson preparation, or post-crisis recovery. If the matter is already active, call us immediately instead."
        bullets={[
          "Crisis plans, simulation exercises, and spokesperson preparation",
          "Senior support for active incidents and board-facing matters",
          "Post-crisis recovery and stakeholder trust rebuilding",
        ]}
        defaultMessage="We need confidential crisis communications advice."
        variant="white"
      />

      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            What serious organisations expect
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What serious organisations expect from crisis communications counsel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Speed with discipline",
                body: "Fast advice matters, but only if it improves the decision. We move quickly without guessing.",
              },
              {
                title: "Message control",
                body: "Your first statement, board update, staff message, and media response need to hold together under pressure.",
              },
              {
                title: "Senior judgment",
                body: "Crises are not the time to learn on the job. They require judgement built from previous high-stakes situations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-brand-border bg-white p-6"
              >
                <h3 className="font-heading font-black text-navy text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three ways CRC Public Relations supports organisations through crisis */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Three ways we support you through crisis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Crisis preparedness, before it happens
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The best crisis response begins months or years before the
                crisis occurs. We work with organisations to develop crisis
                communications plans, conduct vulnerability assessments that
                identify the specific scenarios most likely to threaten your
                reputation, run crisis simulation exercises that test your people
                and your process under pressure, and train your spokespeople to
                perform at their best when the stakes are highest.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                Organisations with a tested crisis plan respond faster, with
                greater discipline, and with measurably better outcomes than
                those without one. This is not an opinion. It is documented
                consistently across every major crisis communications study of
                the past two decades.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Active crisis response, when it is happening now
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When a crisis is live, CRC Public Relations provides immediate, senior-level
                counsel that brings order to a chaotic situation. We join your
                crisis team, establish media protocols, prepare spokespeople,
                coordinate communications across stakeholder groups, manage
                media enquiries, and provide the strategic direction that keeps
                your organisation ahead of the story.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We are available 24 hours a day, seven days a week. We do not
                pass crisis calls to juniors. Your situation is managed by senior
                advisers with the experience and judgment to make difficult calls
                under pressure.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Post-crisis recovery, rebuilding what matters
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The crisis itself is rarely the whole story. How an organisation
                is perceived after a crisis, whether it is seen as having handled
                itself with integrity, transparency, and accountability, shapes
                its reputation for years. We provide post-crisis communications
                strategy that rebuilds stakeholder trust, addresses the narrative
                established during the event, and positions your organisation
                for long-term recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent block */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-off-white border-2 border-brand-gold rounded-lg p-6">
            <h3 className="font-heading font-black text-navy text-xl mb-3">
              Facing a crisis right now?
            </h3>
            <p className="text-charcoal text-[15px] leading-relaxed mb-6">
              Do not fill out a form. Call us directly, available 24 hours, 7
              days. Every call is treated with absolute confidentiality. You will
              speak to a senior CRC Public Relations adviser, not a receptionist.
            </p>
            <a
              href="tel:1300182186"
              className="block w-full text-center bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
            >
              Call 1300 182 186 now
            </a>
            <p className="text-center mt-4">
              <Link
                href="/crisis"
                className="text-teal text-sm font-medium hover:opacity-80 transition underline"
              >
                Or visit our dedicated crisis response page
              </Link>
            </p>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        title="Does your organisation have a crisis plan that leadership would trust under pressure?"
        description="Download the CRC Public Relations Crisis Communications Plan Template. It is the same framework we use with clients to define first-response ownership, message hierarchy, escalation discipline, and stakeholder sequencing before a live matter strips away thinking time."
        highlights={[
          "Built for boards and executive teams",
          "Useful before simulations and training",
          "Designed for real response pressure",
        ]}
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about crisis communications support"
      />

      <PageClosingCTA
        title="Preparation now is worth far more than response later."
        body="A tested crisis communications capability costs a fraction of a poorly handled incident. If your organisation wants a plan, a simulation, or senior support before the next high-pressure event, talk to us."
        primaryLabel="Book a crisis preparedness consultation"
      />
    </>
  );
}
