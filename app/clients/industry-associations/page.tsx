import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
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
    question: "Can CRC PR support both advocacy and governance matters?",
    answer:
      "Yes. That combination is one of the reasons associations engage us. We help peak bodies manage policy-facing communication, member trust, board-sensitive issues, and media pressure in the same engagement when needed.",
  },
  {
    question: "Do you work directly with CEOs, executive officers, and boards?",
    answer:
      "Yes. Association work often requires support at CEO, executive officer, chair, and board level, particularly when the issue touches governance, regulation, or member confidence.",
  },
];

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

      <PageProofStrip
        title="Associations need communications advice built for governance, advocacy, and member confidence at once."
        items={[...proofItems]}
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

      <section className="bg-off-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            The questions association CEOs usually face
          </h2>
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            How much do we tell members now? When do we go to the board? What
            do we say publicly if government, media, and members all expect
            different things at the same time? Associations need a communications
            approach that recognises those tensions rather than pretending they
            can be simplified away.
          </p>
        </div>
      </section>

      <InlineEnquirySection
        title="Need communications counsel for an association or peak body?"
        body="CRC PR works with association CEOs, executive officers, and boards that need confident advice on member communications, regulatory pressure, advocacy, and governance-sensitive matters."
        bullets={[
          "Member, board, and regulator communication support",
          "Association issue, crisis, and advocacy planning",
          "Senior counsel for governance-sensitive matters",
        ]}
        defaultMessage="We need confidential communications advice for an industry association or peak body."
        variant="white"
      />

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

      <LeadMagnetBanner
        magnet="associationCrisisGuide"
        title="Free: Industry Association Crisis Guide"
        description="A practical guide for association CEOs and executive officers covering the crisis types most likely to affect a peak body: regulatory, member conduct, governance, media, and digital pressure, with a framework for managing each."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions from association and peak-body leaders"
      />

      <PageClosingCTA
        title="Association communications challenges are what we do best."
        body="CRC PR has spent decades helping associations navigate member expectations, regulatory pressure, governance complexity, and media scrutiny with direct senior counsel."
      />
    </>
  );
}
