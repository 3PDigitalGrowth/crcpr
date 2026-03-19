import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title:
    "Online Reputation Management Australia | CRC Public Relations",
  description:
    "Senior-level online reputation management, digital crisis response, and social media strategy for Australian organisations. The same PR expertise, applied to digital channels.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Reputation Management",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Senior-level online reputation management, digital crisis response, and social media strategy for Australian organisations.",
  areaServed: "AU",
  serviceType: "Online Reputation Management",
};

export default function DigitalMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="DIGITAL MEDIA & ONLINE REPUTATION"
        title="Your reputation doesn't stop at the newsroom door."
        description="Online reputation management, social media strategy, and digital crisis response. Senior PR counsel applied to the digital channels where reputations are increasingly won and lost."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-[15px] leading-relaxed">
            Ten years ago, a corporate reputation crisis typically began with a
            phone call from a journalist. Today, it is more likely to begin with
            a tweet, a LinkedIn post, or a one-star Google review that gets
            picked up by a media outlet monitoring social media for stories.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            The speed of the digital environment has not made traditional PR
            expertise less relevant. It has made it more urgent. The
            communications disciplines that determine how a reputation crisis
            unfolds, message clarity, stakeholder management, spokesperson
            preparation, narrative control, are the same in digital channels as
            they are in traditional media. What changes is the timeframe. What
            used to take days now takes minutes.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            CRC PR applies its 25 years of corporate communications and crisis
            expertise to digital channels, not as a social media agency, but as
            a senior communications adviser that understands how digital and
            traditional media interact, and how to manage your reputation across
            both simultaneously.
          </p>
        </div>
      </section>

      {/* Digital communications services */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Digital communications services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Online reputation monitoring and management
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We establish systematic monitoring of your organisation&apos;s
                online presence across news media, social platforms, review
                sites, and forums, tracking sentiment, identifying emerging
                threats, and providing the early-warning capability that allows
                you to respond before a digital issue becomes a media story. We
                also work with organisations on strategies to build positive
                digital presence that creates resilience against future
                reputation threats.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Social media strategy and governance
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                A social media strategy that is not aligned with your
                organisation&apos;s communications posture and risk profile is a
                liability. We help organisations develop social media strategies
                that reflect their brand authority, define the topics they should
                and should not comment on, and establish the governance
                frameworks, including approval workflows, escalation protocols,
                and crisis response procedures, that protect against the most
                common social media risks.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Digital crisis response
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When a social media incident escalates, whether it is a viral
                negative post, an organised pile-on, or a digital petition, the
                response framework is the same as for a traditional media
                crisis: fast, disciplined, and strategically directed. We
                provide immediate digital crisis counsel, prepare holding
                statements for digital channels, advise on whether to engage or
                not engage, and manage the response across platforms in
                coordination with your communications team.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Content strategy and online authority
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Organisations with strong online authority, consistent,
                substantive digital content that establishes them as trusted
                voices in their sector, are significantly more resilient to
                reputation attacks than organisations with thin or inconsistent
                digital presence. We work with organisations to develop content
                strategies that build this authority over time, including
                executive thought leadership, corporate commentary, and digital
                publication planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital reputation management is still reputation management */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Digital reputation management is still reputation management
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            The market is full of digital agencies and social media managers who
            claim expertise in online reputation management. Most of them
            understand platforms. Fewer of them understand reputation: the
            strategic, relational, and communicative disciplines that determine
            whether an organisation emerges from a crisis with its trust intact.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            CRC PR is not a digital agency. We are a corporate communications
            and reputation firm that has developed the digital capability our
            clients need because the digital environment now demands it. When
            you retain CRC PR for digital reputation management, you are
            retaining the same senior-level counsel, the same journalistic
            judgment, and the same crisis experience that we bring to our
            traditional media work.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            The platforms are different. The expertise required is the same.
          </p>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-navy text-xl mb-3">
            How exposed is your organisation&apos;s digital reputation?
          </h3>
          <p className="text-charcoal text-[15px] leading-relaxed">
            Our Reputation Vulnerability Assessment includes a specific digital
            exposure module, evaluating your social media governance, online
            monitoring capability, and readiness to respond to a digital crisis.
            It takes 3 minutes and tells you exactly where you are exposed.
          </p>
        </div>
      </section>

      <LeadMagnetBanner magnet="reputationAssessment" />

      {/* Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading font-black text-3xl mb-6">
              Your organisation is being talked about online right now.
            </h2>
            <p className="text-white/75 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              The question is whether you know about it, and whether you are
              prepared to respond. We can help you find out, and build the
              capability to manage your digital reputation with the same rigour
              you bring to your traditional communications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
            >
              BOOK A DIGITAL REPUTATION REVIEW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
