import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

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

const proofItems = [
  {
    label: "Association complexity",
    value: "Multiple audiences",
    detail:
      "Peak bodies communicate to members, boards, regulators, government, media, and the public at the same time.",
  },
  {
    label: "Advocacy pressure",
    value: "Policy-aware",
    detail:
      "The strongest campaigns combine board discipline, member alignment, and public-facing communications that can survive scrutiny.",
  },
  {
    label: "Governance risk",
    value: "Handled early",
    detail:
      "Member conduct issues, board disputes, and regulatory attention rarely stay internal unless they are managed carefully from the outset.",
  },
] as const;

const faqs = [
  {
    question: "What makes association communications different from standard corporate PR?",
    answer:
      "Associations are communicating to members, boards, regulators, government, and media at the same time. The work is more politically and governance-sensitive because member confidence and public advocacy often need to be managed together.",
  },
  {
    question: "Can CRC Public Relations support both advocacy and governance matters?",
    answer:
      "Yes. That combination is one of the reasons associations engage us. We help peak bodies manage policy-facing communication, member trust, board-sensitive issues, and media pressure in the same engagement when needed.",
  },
  {
    question: "Do you work directly with CEOs, executive officers, and boards?",
    answer:
      "Yes. Association work often requires support at CEO, executive officer, chair, and board level, particularly when the issue touches governance, regulation, or member confidence.",
  },
];

const sectorCards = [
  {
    title: "Finance & banking",
    description:
      "When your sector faces regulatory scrutiny, government inquiry, or public trust pressure, your members look to you for leadership. We work directly with CEOs and executive officers of finance and banking peak bodies to navigate member communications, media strategy, and government engagement with the discipline these moments demand.",
  },
  {
    title: "Health & aged care",
    description:
      "Health and aged care associations operate under sustained public and political scrutiny. Whether you are managing Royal Commission legacy, workforce advocacy, or public confidence in the sector, we provide direct senior counsel to your leadership team on the communications strategy that protects your members and your standing.",
  },
  {
    title: "Legal & professional services",
    description:
      "Your association represents the public voice of a profession. We help you strengthen that voice through strategic media engagement, governance communications, and member conduct management. You deal directly with a senior adviser who understands the reputational weight your sector carries.",
  },
  {
    title: "Business & industry",
    description:
      "Business chambers and industry groups need advocacy that influences policy and communications that keep members aligned. We work with your board and executive team on campaigns that are evidence-based, strategically targeted, and designed to be heard by the decision makers who determine the outcome.",
  },
  {
    title: "Construction & property",
    description:
      "Safety, regulation, and stakeholder expectations define the communications landscape for construction and property associations. We help your leadership team manage regulatory reform, safety-related communications, and the media scrutiny that accompanies major industry incidents.",
  },
  {
    title: "Education & training",
    description:
      "Education associations face unique pressure where parent trust, board governance, and community confidence must work together. We have guided school and education peak bodies through some of the most sensitive issues in the sector, working directly with your executive team and board.",
  },
  {
    title: "Resources & energy",
    description:
      "Social licence, environmental scrutiny, and government relations define the operating environment for resources and energy associations. We provide direct senior counsel on the communications strategies that protect your sector\u2019s reputation and advance your advocacy objectives.",
  },
  {
    title: "Other sectors",
    description:
      "Every industry association faces communications challenges unique to its membership and operating environment. If your sector is not listed above, we can still help. Our boutique model means you work directly with experienced senior advisers who will understand your sector quickly and act decisively.",
  },
];

function AssociationOpening() {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-teal font-sans font-medium text-xs mb-8">
          Why associations need specialist communications counsel
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading font-black text-navy text-3xl leading-tight mb-6">
              Association communications is the most complex brief in Australia.
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-5">
              Industry associations must simultaneously serve members, satisfy regulators,
              engage government, and withstand media scrutiny, often with the same
              communication, at the same time. No other type of organisation carries
              that load.
            </p>
            <p className="text-text-body text-base leading-relaxed mb-8">
              CRC Public Relations has worked with some of Australia&apos;s most prominent peak bodies for
              over 25 years. We understand what boards need, what members expect, and
              what regulators and journalists are looking for. Our approach is always
              tailored to the specific character of your membership, your board,
              and your sector.
            </p>

            <blockquote className="border-l-[3px] border-brand-gold pl-5">
              <p className="text-navy text-sm leading-relaxed italic mb-3">
                &ldquo;CRC Public Relations created national media coverage that energised our
                member base, attracted new members and helped us advance important changes
                for our sector.&rdquo;
              </p>
              <cite className="not-italic text-brand-gold text-xs font-medium">
                Martin Coote, President, Master Locksmiths Association of Australasia
              </cite>
            </blockquote>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                title: "Multiple audiences, one message",
                body: "Members, board, regulators, government, and media all require different things, often simultaneously, and from the same event.",
              },
              {
                num: "2",
                title: "Governance-sensitive by nature",
                body: "Member conduct issues, board disputes, and regulatory attention rarely stay internal without careful, early management.",
              },
              {
                num: "3",
                title: "Advocacy must survive scrutiny",
                body: "The strongest campaigns combine board discipline, member alignment, and public-facing communications that can withstand pressure.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="bg-white border border-brand-border rounded-lg p-5 pl-12 relative shadow-sm shadow-navy/5"
              >
                <span
                  className="absolute left-4 top-5 font-heading font-black text-2xl leading-none"
                  style={{ color: "rgba(201,168,76,0.35)" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                  <p className="text-navy text-sm font-medium mb-1.5">{title}</p>
                <p className="text-text-body text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-brand-border border-t border-brand-border pt-8">
          {[
            { num: "25+", label: "Years advising Australian associations" },
            { num: "15+", label: "National and state peak bodies advised" },
            { num: "100%", label: "Client satisfaction rate" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center px-6">
              <p className="font-heading font-black text-brand-gold text-4xl leading-none mb-2">
                {num}
              </p>
              <p className="text-text-caption text-[10px] leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-gold font-sans font-medium text-xs mb-3">
          Sectors we advise
        </p>
        <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-4">
          Sectors where we advise associations
        </h2>
        <p className="text-text-body text-base leading-relaxed max-w-3xl mb-12">
          We work directly with CEOs, executive officers, and boards of industry
          associations and peak bodies across Australia. Every sector brings
          unique communications challenges. Here is how we help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectorCards.map((card) => (
            <div
              key={card.title}
              className="bg-off-white border border-brand-border rounded-lg p-8 hover:shadow-md hover:shadow-navy/5 transition-shadow duration-200"
            >
              <h3 className="font-heading font-black text-navy text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gold-light border border-brand-gold/30 rounded-lg p-6">
          <div className="flex-1 min-w-0">
            <p className="text-[#7B5A00] text-sm font-medium mb-1">
              Sector not listed?
            </p>
            <p className="text-[#9A7200] text-xs leading-relaxed">
              We work with associations across every industry. If your sector is
              not represented above, get in touch for a confidential conversation
              about how we can help.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-gold text-navy font-heading font-black text-xs px-6 py-3 rounded flex-shrink-0 hover:bg-brand-gold/90 transition-colors whitespace-nowrap"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function IndustryAssociationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Industry associations"
        title="Industry association communications that protects your members, and your standing."
        description="Specialist counsel for peak bodies, member organisations, and industry associations across Australia. Regulatory crisis, member communications, board governance, and public affairs."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Associations need communications advice built for governance, advocacy, and member confidence at once."
        items={[...proofItems]}
      />

      <AssociationOpening />

      <SectorCards />

      {/* How CRC Public Relations works with industry associations */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-12">
            How CRC Public Relations works with industry associations
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
            CRC Public Relations has worked with member associations and peak bodies at the
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
                  Vanessa
                </span>
                , Executive Officer, Christian schools sector
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
                  Peter
                </span>
                , Managing Director, finance broking industry
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="associationCrisisGuide"
        title="Free: Industry association crisis guide"
        description="A practical guide for association CEOs and executive officers covering the crisis types most likely to affect a peak body: regulatory, member conduct, governance, media, and digital pressure, with a framework for managing each."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions from association and peak-body leaders"
      />

      <PageClosingCTA
        title="Association communications challenges are what we do best."
        body="We have spent decades helping associations navigate member expectations, regulatory pressure, governance complexity, and media scrutiny with direct senior counsel."
      />
    </>
  );
}
