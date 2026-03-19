import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Issues Management PR Australia | CRC Public Relations",
  description:
    "Proactive issues management for organisations facing emerging media, regulatory, or stakeholder threats. Senior PR counsel in Brisbane, available nationally. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Issues Management",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Proactive issues management and strategic counsel for organisations facing emerging media, regulatory, or stakeholder threats across Australia.",
  areaServed: "AU",
  serviceType: "Issues Management Consulting",
};

export default function IssuesManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="ISSUES MANAGEMENT"
        title="Get ahead of the issue before the media does."
        description="Proactive identification, monitoring, and strategic management of emerging issues, before they reach crisis point. Senior counsel available nationally."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-[15px] leading-relaxed">
            An issue is not yet a crisis. But without strategic management, it
            will become one.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            Most organisational crises are not sudden events. They are issues
            that were allowed to escalate: a regulatory concern that became a
            formal inquiry, a staff complaint that became a media story, a
            community concern that became an organised campaign. The difference
            between an issue and a crisis is almost always time, and the
            strategic choices made within that time.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            CRC PR specialises in the space between an emerging issue and a full
            crisis, providing the senior counsel, monitoring capability, and
            stakeholder management that can arrest an escalation before it
            becomes unmanageable.
          </p>
        </div>
      </section>

      {/* What issues management looks like in practice */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What issues management looks like in practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Issue identification and environmental scanning
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We conduct systematic monitoring of media, social media,
                government activity, regulatory correspondence, and stakeholder
                behaviour to identify the signals that indicate an emerging
                issue. Most issues announce themselves through patterns of media
                enquiry, regulatory letters, or shifts in stakeholder sentiment
                well before they become public. We are watching for those signals
                on your behalf.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Stakeholder mapping and strategic engagement
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Every issue has a stakeholder landscape: the groups whose
                reaction to the issue will determine its trajectory. We map
                these stakeholders, assess their likely positions, and design
                engagement strategies that either contain the issue or build the
                coalitions needed to manage it. Getting to key stakeholders
                before media do is often the single most important action in
                issues management.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Messaging development and narrative control
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When an issue is developing, your organisation needs a
                consistent, defensible position, one that can be held under
                media scrutiny, in front of regulators, and in conversations
                with your board. We develop that position, test it against the
                hardest questions, and prepare your spokespeople to deliver it
                with authority.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Escalation protocols and crisis readiness
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The transition from issue to crisis is rarely clean. We build
                escalation protocols that give your leadership team a clear
                decision framework: the triggers that move a situation from
                issues management to crisis response, and the actions that
                follow each trigger. This way, when a situation escalates, your
                organisation responds with discipline rather than improvisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eighty per cent of crises were predictable */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Eighty per cent of crises were predictable
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            In 25 years of advising organisations through crises, CRC PR
            founder Lyall Mercer has consistently observed that the vast
            majority of significant reputation events were predictable, not in
            their exact form, but in their general shape. They were visible in
            monitoring data, in stakeholder feedback, in regulatory
            correspondence, in the pattern of media enquiries that preceded the
            story.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            The organisations that manage issues successfully are not lucky.
            They have invested in monitoring systems, stakeholder relationships,
            and the habit of escalating concerns to senior communications
            counsel early, not after the story breaks.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            Retaining CRC PR for issues management is not an admission that
            your organisation has a problem. It is a recognition that every
            organisation has potential issues, and that the cost of managing
            them proactively is a fraction of the cost of managing them once
            they have become crises.
          </p>
        </div>
      </section>

      {/* Callout box */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-off-white border-l-4 border-navy rounded-lg p-6">
            <h3 className="font-heading font-black text-navy text-xl mb-3">
              Issues management is not the same as crisis communications
            </h3>
            <p className="text-charcoal text-[15px] leading-relaxed">
              Issues management is proactive. It operates when an issue is
              developing and the outcome is still shapeable. Crisis
              communications is reactive. It operates when an event has become
              public and the organisation is under active media and stakeholder
              pressure. CRC PR provides both. But the organisations that need
              crisis communications least are the ones that have invested most
              in issues management.
            </p>
            <Link
              href="/insights/issues-management-vs-crisis-communications"
              className="inline-block mt-4 text-teal text-[15px] font-medium hover:opacity-80 transition"
            >
              Read our guide to the difference →
            </Link>
          </div>
        </div>
      </section>

      {/* Lead magnet intro */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-navy text-xl mb-3">
            Does your organisation have an escalation protocol for emerging
            issues?
          </h3>
          <p className="text-charcoal text-[15px] leading-relaxed">
            Download our Crisis Communications Plan Template. It includes the
            escalation framework and decision triggers that our issues
            management clients use to determine when a developing situation
            requires immediate senior response.
          </p>
        </div>
      </section>

      <LeadMagnetBanner magnet="crisisPlanTemplate" variant="dark" />

      {/* Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading font-black text-3xl mb-6">
              Watching an issue develop? Don&apos;t wait.
            </h2>
            <p className="text-white/75 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              The earlier you engage senior communications counsel on a
              developing issue, the more options you have. By the time a story
              breaks or a regulator issues formal correspondence, some of those
              options are no longer available. If you are watching something
              develop in your stakeholder environment, talk to us now, in
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
              >
                BOOK A CONFIDENTIAL CONSULTATION
              </Link>
              <a
                href={siteConfig.phone.href}
                className="text-white/75 font-heading font-black text-sm hover:text-brand-gold transition"
              >
                CALL {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
