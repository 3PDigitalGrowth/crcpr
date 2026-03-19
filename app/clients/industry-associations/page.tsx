import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title:
    "Industry Association PR Australia | Communications for Peak Bodies | CRC Public Relations",
  description:
    "Specialist PR and communications counsel for Australian industry associations and peak bodies. Regulatory crisis, member communications, board governance, and advocacy campaigns. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industry Association PR and Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Specialist PR and communications counsel for Australian industry associations and peak bodies. Regulatory crisis, member communications, board governance, and advocacy campaigns.",
  areaServed: "AU",
  serviceType: "Industry Association Public Relations",
};

export default function IndustryAssociationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="INDUSTRY ASSOCIATIONS"
        title="Industry association communications that protects your members, and your standing."
        description="Specialist counsel for peak bodies, member organisations, and industry associations across Australia. Regulatory crisis, member communications, board governance, and public affairs."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      {/* Opening */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-[15px] leading-relaxed">
            Industry associations occupy a unique and often exposed position in
            Australian public life. They must simultaneously represent the
            interests of their members, maintain productive relationships with
            regulators and government, manage the expectations of the public and
            media, and govern themselves with the transparency that scrutiny now
            demands of peak bodies.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            When an issue surfaces, whether it is a regulatory challenge, a
            member controversy, a governance dispute, or a media story about
            sector behaviour, the association&apos;s response must be swift,
            precise, and strategically coordinated across all of these audiences
            simultaneously. The communications challenge for an association in
            crisis is substantially more complex than for a private company
            facing the same type of event.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            CRC PR has worked with some of Australia&apos;s most prominent
            industry associations and peak bodies over 25 years. We understand
            the specific dynamics of member communications, board governance,
            advocacy under media pressure, and the regulatory environment in
            which associations operate. Our approach is always tailored to the
            specific character of your membership, your board, and your sector.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            We provide the strategic counsel and hands-on support that
            association CEOs and executive officers need, particularly when the
            stakes are highest.
          </p>
        </div>
      </section>

      {/* How CRC PR works with industry associations */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-12">
            How CRC PR works with industry associations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-brand-border rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-lg mb-3">
                Regulatory crisis communications
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                When a government inquiry, regulatory action, or adverse
                legislative proposal threatens your sector, your
                association&apos;s response, to members, to government, to
                media, and to the public, needs to be coordinated and strategic.
                We develop the communications frameworks, stakeholder engagement
                plans, and media strategies that give your association maximum
                influence during regulatory processes.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-lg mb-3">
                Member communications strategy
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                Your members need to trust that their association is representing
                them effectively, and they need to be kept informed when the
                environment in which they operate is changing. We help
                associations develop member communications strategies that build
                trust, manage expectations during difficult periods, and maintain
                the confidence that sustains membership.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-lg mb-3">
                Board governance and stakeholder communications
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                Association boards operate under scrutiny that is increasing as
                regulatory expectations for governance transparency rise. We
                help associations communicate their governance arrangements
                clearly, prepare for questions about board decision-making under
                pressure, and manage the communications dimension of internal
                disputes before they become external ones.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-lg mb-3">
                Public affairs and advocacy
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                When your association needs to shift a government position, build
                a public case, or mobilise stakeholder support for a policy
                objective, communications strategy is central to the outcome. We
                work with associations on public affairs campaigns that are
                evidence-based, strategically targeted, and designed to be heard
                by the audiences that determine the outcome.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-lg mb-3">
                Crisis communications planning for associations
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                Every association has scenarios that could produce a reputation
                crisis: a member misconduct matter, a data breach, a governance
                failure, a public dispute between board members. We work with
                associations to develop crisis communications plans specific to
                the scenarios most likely in their sector, and to test those
                plans before they are needed.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-lg mb-3">
                Media relations and spokesperson preparation
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                Your CEO and board chair are your association&apos;s public face.
                Their credibility with journalists, government officials, and the
                public is a significant asset, or liability. We build and manage
                media relationships on your behalf, and prepare your senior
                people to represent your sector with authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-charcoal-mid text-sm italic mb-6">
            CRC PR has worked with member associations and peak bodies at the
            state and national level, across financial services, education,
            health, and community sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <figure className="border-l-[3px] border-brand-gold bg-off-white p-6 rounded-lg">
              <blockquote className="text-charcoal text-[15px] leading-relaxed">
                &ldquo;CRC Public Relations has developed a crisis
                communications plan for Christian schools and has assisted many
                of our member schools across Australia to effectively
                communicate when issues have arisen.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-charcoal-mid">
                <span className="font-sans font-semibold text-navy">
                  Vanessa Cheng
                </span>
                , Executive Officer, Australian Association of Christian Schools
              </figcaption>
            </figure>

            <figure className="border-l-[3px] border-brand-gold bg-off-white p-6 rounded-lg">
              <blockquote className="text-charcoal text-[15px] leading-relaxed">
                &ldquo;CRC Public Relations has helped us generate major,
                ongoing, national exposure and ensure that our message is widely
                heard.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-charcoal-mid">
                <span className="font-sans font-semibold text-navy">
                  Peter White AM
                </span>
                , Managing Director, Finance Brokers Association of Australia
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-navy text-2xl md:text-3xl mb-4">
            Free: Industry Association Crisis Guide
          </h2>
          <p className="text-charcoal-mid text-[15px] leading-relaxed mb-8">
            A practical guide for association CEOs and executive officers
            covering the five types of crisis most likely to affect a peak body:
            regulatory, member conduct, governance, media, and digital, with a
            framework for managing each. Used by associations across Australia.
          </p>
          <LeadMagnetBanner magnet="associationCrisisGuide" />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-white text-2xl md:text-3xl">
            Association communications challenges are what we do best.
          </h2>
          <p className="text-blue-100 text-[15px] leading-relaxed mt-6">
            CRC PR has spent 25 years helping associations navigate the
            intersection of member expectations, regulatory pressure, and media
            scrutiny. If you are facing a communications challenge, or building
            the capability to handle one when it comes, we would like to hear
            about your situation.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
          >
            BOOK A CONFIDENTIAL CONSULTATION
          </Link>
        </div>
      </section>
    </>
  );
}
