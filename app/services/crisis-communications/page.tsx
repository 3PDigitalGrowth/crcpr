import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

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

export default function CrisisCommunicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="CRISIS COMMUNICATIONS"
        title="When a crisis breaks, experience is everything."
        description="24/7 crisis response, crisis communications planning, and simulation exercises for organisations that understand the cost of being unprepared."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      {/* Secondary CTA */}
      <section className="bg-navy pb-16 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <a
            href="tel:1300182186"
            className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-brand-gold hover:text-navy transition"
          >
            NEED IMMEDIATE SUPPORT? CALL NOW
          </a>
        </div>
      </section>

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-[15px] leading-relaxed">
            Most organisations facing a communications crisis make the same
            mistakes in the first fifteen minutes: they wait for more information
            before responding, they respond through the wrong channel, or they
            say more than they should before the facts are established. Each
            mistake compounds the one before it.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            CRC PR founder Lyall Mercer has spent 25 years studying and managing
            the first moments of corporate crises. His conclusion is
            unambiguous: the organisations that navigate crises best are not the
            ones that are most articulate under pressure. They are the ones that
            have a tested plan, a prepared spokesperson, and senior counsel on
            the phone before the first journalist calls.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            This is the preparation we provide.
          </p>
        </div>
      </section>

      {/* Three ways CRC PR supports organisations through crisis */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Three ways CRC PR supports organisations through crisis
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
                When a crisis is live, CRC PR provides immediate, senior-level
                counsel that brings order to a chaotic situation. We join your
                crisis team, establish media protocols, prepare spokespeople,
                coordinate communications across stakeholder groups, manage
                media enquiries, and provide the strategic direction that keeps
                your organisation ahead of the story.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We are available 24 hours a day, seven days a week. We do not
                pass crisis calls to juniors. Your situation is managed by senior
                advisors with the experience and judgment to make difficult calls
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
              speak to a senior CRC PR advisor, not a receptionist.
            </p>
            <a
              href="tel:1300182186"
              className="block w-full text-center bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
            >
              CALL 1300 182 186 NOW
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

      {/* Lead magnet intro */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-navy text-xl mb-3">
            Does your organisation have a crisis plan that has actually been
            tested?
          </h3>
          <p className="text-charcoal text-[15px] leading-relaxed">
            Most organisations have a crisis plan they approved and filed. Very
            few have tested it under simulated pressure. Download our Crisis
            Communications Plan Template as a starting point, the same framework
            we use with our clients to build plans that work when it matters.
          </p>
        </div>
      </section>

      <LeadMagnetBanner magnet="crisisPlanTemplate" />

      {/* Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading font-black text-3xl mb-6">
              Preparation now is worth ten times the cost of response later.
            </h2>
            <p className="text-white/75 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              A crisis communications retainer with CRC PR costs a fraction of
              what a poorly managed crisis costs in media management, reputation
              recovery, and lost stakeholder confidence. The organisations that
              invest in preparation do so because they understand this
              arithmetic, and because they have seen what happens to those that
              don&apos;t.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
            >
              BOOK A CRISIS PREPAREDNESS CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
