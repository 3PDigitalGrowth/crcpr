import Link from "next/link";
import type { Metadata } from "next";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { IndustryAssociationsGallery } from "@/components/clients/IndustryAssociationsGallery";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title:
    "Industry Association PR Australia | Communications for Peak Bodies | CRC Public Relations",
  description:
    "Specialist communications counsel for Australian industry and professional associations and peak bodies. Advocacy support, member communications, media relations, and crisis planning. Call 1300 182 186.",
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
    "Specialist communications counsel for Australian industry and professional associations and peak bodies. Advocacy support, member communications, media relations, and crisis planning.",
  areaServed: "AU",
  serviceType: "Industry Association Public Relations",
};

const proofItems = [
  {
    label: "Importance of your voice",
    value: "Trusted authority",
    detail:
      "Member associations and peak bodies must be the trusted public voice of their industry and be heard by their audiences.",
  },
  {
    label: "Vital advocacy support",
    value: "Campaign elevation",
    detail:
      "Advocacy becomes more effective by using PR to influence policy and legislation, building public support and adding pressure.",
  },
  {
    label: "Members become your advocates",
    value: "Member confidence",
    detail:
      "Effective member communication that builds trust means members are informed, aligned, and confident in the association's leadership.",
  },
] as const;

const faqs = [
  {
    question: "What makes association communications different from standard corporate PR?",
    answer:
      "Associations have unique stakeholders, and also carry the authority of their industry. This means they are better placed to be that trusted voice than businesses, however many don't know how. The work is often more politically sensitive, and member confidence and public advocacy often need to be managed together.",
  },
  {
    question: "Do you work directly with CEOs, executive officers, and boards?",
    answer:
      "Yes. Association work often requires support at CEO, executive officer, chair, and board level, particularly when the issue touches governance, regulation, or member confidence.",
  },
];

const sectorCards = [
  {
    title: "Finance, banking, lending",
    description:
      "With extensive experience across Australasia in this sector, we understand the regulatory scrutiny it faces and the need for public trust. We work directly with CEOs and executive officers of finance sector peak bodies to navigate media strategy, member communications, and government advocacy support.",
  },
  {
    title: "Aged care and child care",
    description:
      "Aged care and child care associations operate under sustained public and political scrutiny. Whether you are managing royal commission legacy, workforce challenges, or public confidence in the sector, we provide counsel to your leadership team on the right communications strategy that protects your members and your standing.",
  },
  {
    title: "Professional services",
    description:
      "We have dealt across many professional sectors, and know how to identify unique media opportunities for your association to be the voice of credibility and authority. We help you amplify that voice through strategic media engagement, government and MP communications, and member engagement. You deal directly with an experienced adviser who understands the reputational weight your sector carries.",
  },
  {
    title: "Education & training",
    description:
      "CRC Public Relations is highly respected across the education and schools sectors, and has dealt across every Australian state. Education associations operate in an ever-changing and ever-challenging environment, and provide an important support and advocacy role to their members. We have worked alongside school and education peak bodies to assist their government lobbying efforts.",
  },
  {
    title: "Tourism and accommodation",
    description:
      "The tourism and accommodation sectors, more than many others, must be prepared to respond to outside influences and pressures beyond their control. Strategic communication in this sector means being proactive and reactive in the media, and ensuring your voice is heard amid the many other associations in this space.",
  },
  {
    title: "Trades",
    description:
      "From promoting their industry, to ensuring there is a supply of future tradespeople through apprenticeships and ongoing training, trades is a sector that will thrive in this AI age. However there are specific challenges trades associations face and we have worked closely with associations to maximise their voice, generate new members and support their advocacy through media and communications.",
  },
  {
    title: "Transport",
    description:
      "The transport sector is so important to Australia, and as such has a high profile. We've worked across various areas of transport and understand the need to react quickly when issues arise. We've learnt that the best way to be prepared is with a proactive communications strategy that keeps you on the front foot.",
  },
  {
    title: "Sports",
    description:
      "One of the biggest challenges of sports associations is raising the profile of their sport in an environment where a few larger sports dominate the media coverage. The needs of associations in the sports sector is to craft their own narrative and be creative in their public messaging.",
  },
  {
    title: "Agriculture",
    description:
      "Associations in this sector face many challenges beyond their control, and are faced with a media environment that often doesn't appreciate the importance of the agricultural sector. Yet the right communications and public relations strategy that considers all stakeholders can bring real results.",
  },
  {
    title: "Health and mental health",
    description:
      "There is so much public commentary in the health and mental health space, so how does an association stand out? By positioning itself as the voice of authority in their specific area, and using media and communications to help achieve their important goals and objectives. We have not only supported their advocacy efforts but helped them open new doors and opportunities.",
  },
  {
    title: "Construction & property",
    description:
      "Safety, regulation, and stakeholder expectations can define the communications landscape for construction and property associations. We help your leadership team manage regulatory reform, safety-related communications, and the media scrutiny that accompanies major incidents.",
  },
  {
    title: "Resources & energy",
    description:
      "Activism, environmental scrutiny, and government relationships are ongoing challenges for resources and energy associations. We provide direct counsel on the communications strategies that protect your sector's reputation and advance your advocacy objectives.",
  },
  {
    title: "Faith based associations",
    description:
      "The co-founder of CRC Public Relations has been assisting faith based associations across Australia and the world for more than 20 years, and we understand the unique objectives and challenges they face. From religious discrimination to achieving your mission objectives, we provide experienced, specialty communications counsel.",
  },
  {
    title: "Other sectors",
    description:
      "Every industry association faces communications challenges unique to its membership and operating environment. If your sector is not listed above, we can still help. Our boutique model means you work directly with experienced advisers who will understand your sector quickly and act decisively.",
  },
];

const associationObjectives = [
  "You become the public voice of authority for your industry - trusted by the media.",
  "Your advocacy efforts to influence policy and legislation will be more effective.",
  "You build stronger trust and greater credibility with members, media and government.",
  "Your member value, engagement and retention is increased.",
  "Your members are more informed, aligned and confident in your leadership.",
  "You manage negative issues with confidence.",
  "Your entire industry's reputation is protected and strengthened.",
] as const;

const associationServiceCards = [
  {
    title: "Media relations and spokesperson preparation",
    description:
      "If your association is not the voice of authority in your industry, someone else will be, and this will dilute your message. A public voice will elevate your profile and exposure to those who are important to your success, including governments, MPs, suppliers, members and others across your industry. We help you build and manage media relationships across general and industry-specific media, and social media, as well as preparing your leaders to represent your association and sector with credibility.",
  },
  {
    title: "Advocacy support",
    description:
      "When your association needs to shift a government position, build a public case, create public awareness, or mobilise stakeholder support for a policy objective, an effective communications strategy is central to the outcome. We work with associations on public affairs campaigns and messaging that build connection with key stakeholders, bring public support, and help influence decisions and impact.",
  },
  {
    title: "Member communications strategy",
    description:
      "Are your members advocates or adversaries? Many members don't know what their association does, which is why we help you communicate with them in a way that informs them not only about issues that affect them, but what your association is doing for them. We help associations develop member communications strategies that build trust, manage expectations during difficult periods, and maintain the confidence that sustains membership.",
  },
  {
    title: "Issues and crisis communications planning for associations",
    description:
      "Every association deals with challenging issues that could escalate, and sometimes larger issues become a reputational crisis. Whether this is a member misconduct matter, data breach, public or group opposition, or a government or regulator decision that will adversely affect your industry, we assist you to be prepared for scenarios most likely in your sector.",
  },
  {
    title: "Regulatory crisis communications",
    description:
      "When a government inquiry, regulatory action, or adverse legislative proposal threatens your sector, your association's response to members, government, and the public via media and social media engagement, must be coordinated and strategic. We have worked across these very issues with associations, and have created the communications frameworks, stakeholder engagement plans, and media strategies that have helped bring the desired results by maximising your influence during these processes.",
  },
  {
    title: "Campaign support",
    description:
      "Along with the broader messaging, associations often have specific short-term campaign objectives. These may be to promote employment in the industry, celebrate leading members or make the public aware of an important matter. We support your efforts through ensuring that the right messaging is heard by the right people using mainstream, industry and social media.",
  },
] as const;

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
              Association communications is unlike any other.
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-5">
              Industry and professional associations are engaged on multiple
              fronts. While being over existing and new regulations, developing
              training, and engaging with multiple stakeholders including
              governments, they must also serve their members, many who are not
              engaged or don&apos;t understand the hard work the association does. In
              some cases there is also government, regulatory or media scrutiny
              around their industry or members. No other type of organisation
              carries that load.
            </p>
            <p className="text-text-body text-base leading-relaxed mb-5">
              CRC Public Relations has worked with Australian and New Zealand
              peak bodies, and industry and professional associations for 15
              years. We understand the needs of boards, executive management and
              members, and the continual quest to advocate for members and the
              industry. Our approach is always tailored to the specific character
              of your membership, your board, and your sector.
            </p>
            <p className="text-text-body text-base leading-relaxed mb-8">
              Importantly, we also understand how to ensure that associations
              maximise their public and media voice to achieve their objectives,
              and how communications can attract new, and retain current,
              members.
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

          <div className="bg-white border border-brand-border rounded-lg p-8 shadow-sm shadow-navy/5">
            <p className="font-heading font-black text-navy text-xl leading-snug mb-5">
              CRC Public Relations can create a public relations strategy that
              will advance these objectives for your association:
            </p>
            <ul className="space-y-3">
              {associationObjectives.map((objective) => (
                <li
                  key={objective}
                  className="flex gap-3 text-text-body text-sm leading-relaxed"
                >
                  <span className="mt-2 size-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-brand-border border-t border-brand-border pt-8">
          {[
            { num: "15+", label: "Years advising Australian associations" },
            { num: "30+", label: "National and state peak bodies advised" },
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
          and professional associations and peak bodies across Australia and
          New Zealand. Every sector brings unique communications challenges.
          Here is how we help.
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
        asidePreset="clientsBreadth"
        eyebrow="Industry associations"
        title="Industry and professional association communications have specific needs and objectives"
        description="Specialist counsel for peak bodies, industry and professional associations across Australia, that positions you as the voice of authority, elevates your advocacy, and builds stakeholder and member trust."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        asideHighlight={{
          title: "Proven results",
          body: "Documented, impacting and consistent results achieved for national and state associations across many sectors.",
        }}
        heroImage={{
          src: "/images/clients/industry-associations/hero-conference.png",
          alt: "Industry association conference auditorium with attendees standing before a large stage, screens, and stage lighting",
        }}
      />

      <PageProofStrip
        title="We create communications strategies that meet your specific and unique objectives."
        items={[...proofItems]}
      />

      <AssociationOpening />

      <SectorCards />

      {/* How CRC Public Relations works with industry and professional associations */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/clients/industry-associations/mid-stage.png"
            imageAlt="National industry conference 'Empower Excellence' with two speakers on stage and seated delegates in the audience"
            imagePosition="left"
          >
            <div>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-4">
                How CRC Public Relations works with industry and professional associations
              </h2>
              <p className="text-charcoal-mid text-[15px] leading-relaxed max-w-xl">
                We help industry and professional associations and peak bodies
                achieve their overall objectives through effective media and
                communication strategies that consider all stakeholders.
              </p>
            </div>
          </ImageTextRow>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16">
            {associationServiceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-brand-border rounded-lg p-8"
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
                Executive Officer, Christian schools sector
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
                , CEO, national industry association with 14,000 members
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Industry events gallery */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-brand-gold text-xs font-sans font-medium uppercase tracking-[0.18em] mb-4">
                Industry events
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-[1.15]">
                On the ground with Australia&rsquo;s industry associations
              </h2>
              <p className="text-charcoal-mid text-[15px] leading-relaxed mt-5 max-w-md">
                Conferences, exhibition floors, panel discussions, and member
                networking are the moments where association communications
                matters most. We have supported industry and professional
                associations behind the scenes at events of every size&mdash;
                helping leaders prepare, message clearly, and stay close to
                members when matters become contested.
              </p>
              <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4 max-w-md">
                A small selection of events we&rsquo;ve been a part of, from
                state forums to national conferences.
              </p>
            </div>

            <div>
              <IndustryAssociationsGallery />
            </div>
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
        body="We have spent many years helping associations elevate their public voice, achieve successful outcomes, build member trust and support, and deal with media scrutiny."
      />
    </>
  );
}
