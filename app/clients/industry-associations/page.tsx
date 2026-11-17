import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { FramedVideo } from "@/components/altkit/media";
import { MEDIA } from "@/components/altkit/data";

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
      "The co-founder of CRC Public Relations has been assisting faith based associations across Australia and the world for more than 25 years, and we understand the unique objectives and challenges they face. From religious discrimination to achieving your mission objectives, we provide experienced, specialty communications counsel.",
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
      "If your association is not the voice of authority in your industry, someone else will be, and this will dilute your message. A public voice will elevate your profile and exposure to those who are important to your success, including governments, MPs, suppliers, members and other across your industry. We help you build and manage media relationships across general and industry-specific media, and social media, as well as preparing your senior people to represent your association and sector with credibility.",
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

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page. The
   generated imagery, the duplicate opening quote and the "sector not listed"
   strip (which repeats the Other sectors entry) were dropped. */

const P = "clients-industry-associations";

export default function IndustryAssociationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        photo={{ src: MEDIA.bandConferenceStage, alt: "A large industry conference audience in front of the stage" }}
        copyId={P}
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
      />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="We create communications strategies that meet your specific and unique objectives."
        items={[...proofItems]}
      />

      {/* ---------- WHY ASSOCIATIONS ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
            <div>
              <Eyebrow>
                <T id={`${P}.t1`}>Why associations need specialist communications counsel</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id={`${P}.t2`}>Association communications is unlike any other.</T>
              </H2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  <T id={`${P}.t3`}>
                    Industry and professional associations are engaged on multiple fronts. While being over existing
                    and new regulations, developing training, and engaging with multiple stakeholders including
                    governments, they must also serve their members, many who are not engaged or don&apos;t
                    understand the hard work the association does. In some cases there is also government,
                    regulatory or media scrutiny around their industry or members. No other type of organisation
                    carries that load.
                  </T>
                </p>
                <p>
                  <T id={`${P}.t4`}>
                    CRC Public Relations has worked with Australian and New Zealand peak bodies, and industry and
                    professional associations for 15 years. We understand the needs of boards, executive management
                    and members, and the continual quest to advocate for members and the industry. Our approach is
                    always tailored to the specific character of your membership, your board, and your sector.
                  </T>
                </p>
                <p>
                  <T id={`${P}.t5`}>
                    Importantly, we also understand how to ensure that associations maximise their public and media
                    voice to achieve their objectives, and how communications can attract new, and retain current,
                    members.
                  </T>
                </p>
              </div>
            </div>
            <Reveal className="lg:pt-10">
              <FramedVideo src={MEDIA.videoIndustryAssociations} poster={MEDIA.videoIndustryAssociationsPoster} label="Video: the core needs of every industry association" className="mb-6" />
              <aside className="kit-r border border-line p-6 md:p-8">
                <p className="text-lg font-semibold leading-snug">
                  <T id={`${P}.t8`}>
                    CRC Public Relations can create a public relations strategy that will advance these objectives
                    for your association:
                  </T>
                </p>
                <ul className="mt-5 divide-y divide-[var(--line)]">
                  {associationObjectives.map((objective) => (
                    <li key={objective} className="py-3 text-sm leading-relaxed text-muted first:pt-0 last:pb-0">
                      {objective}
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>

          <div className="ledger mt-12">
            {[
              { num: "15+", label: "Years advising Australian associations" },
              { num: "30+", label: "National and state peak bodies advised" },
              { num: "100%", label: "Client satisfaction rate" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="kit-display text-4xl leading-none text-accent">{num}</p>
                <p className="mt-2 text-sm leading-snug text-muted">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- SECTORS ---------- */}
      <Section tone="base" className="pb-11 pt-0 md:pb-14">
        <Container>
          <div className="border-t border-line pt-11 md:pt-14">
            <div className="grid gap-5 lg:grid-cols-[1fr,1fr] lg:items-end lg:gap-14">
              <div>
                <Eyebrow>
                  <T id={`${P}.t9`}>Sectors we advise</T>
                </Eyebrow>
                <H2 className="mt-3">
                  <T id={`${P}.t10`}>Sectors where we advise associations</T>
                </H2>
              </div>
              <p className="text-[15px] leading-relaxed text-muted lg:pb-1">
                <T id={`${P}.t11`}>
                  We work directly with CEOs, executive officers, and boards of industry and professional
                  associations and peak bodies across Australia and New Zealand. Every sector brings unique
                  communications challenges. Here is how we help.
                </T>
              </p>
            </div>
            <div className="mt-8 grid gap-x-14 md:grid-cols-2">
              {sectorCards.map((card, __ti) => (
                <div key={card.title} className="border-t border-line py-6">
                  <h3 className="kit-display text-[15px] uppercase leading-snug">
                    <T id={`${P}.sectorCards.${__ti}.title`}>{card.title}</T>
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                    <T id={`${P}.sectorCards.${__ti}.description`}>{card.description}</T>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- HOW WE WORK ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container>
          <H2 className="max-w-3xl">
            <T id={`${P}.t15`}>How CRC Public Relations works with industry and professional associations</T>
          </H2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            <T id={`${P}.t16`}>
              We help industry and professional associations and peak bodies achieve their overall objectives
              through effective media and communication strategies that consider all stakeholders.
            </T>
          </p>
          <div className="mt-8 border-t border-line">
            {associationServiceCards.map((card, __ti) => (
              <Reveal key={card.title} delay={__ti * 0.05}>
                <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr] md:items-baseline md:gap-8">
                  <span className="kit-display text-sm text-accent">{`0${__ti + 1}.`}</span>
                  <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
                    <T id={`${P}.associationServiceCards.${__ti}.title`}>{card.title}</T>
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">
                    <T id={`${P}.associationServiceCards.${__ti}.description`}>{card.description}</T>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- TESTIMONIALS ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
            <T id={`${P}.t17`}>
              CRC Public Relations has worked with member associations and peak bodies at the state and national
              level, across financial services, education, health, and community sectors.
            </T>
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
            <figure className="border-l-[3px] border-[var(--k-blue)] pl-5">
              <blockquote className="text-lg font-semibold leading-snug">
                <T id={`${P}.t18`}>
                  &quot;CRC Public Relations created national media coverage that energised our member base,
                  attracted new members and helped us advance important changes for our sector.&quot;
                </T>
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <span className="font-semibold text-fg">
                  <T id={`${P}.t19`}>Martin Coote</T>
                </span>
                <T id={`${P}.t20`}>, President, Master Locksmiths Association of Australasia</T>
              </figcaption>
            </figure>
            <figure className="border-l-[3px] border-[var(--k-blue)] pl-5">
              <blockquote className="text-lg font-semibold leading-snug">
                <T id={`${P}.t21`}>
                  &quot;CRC Public Relations has helped us generate major, ongoing, national exposure and ensure
                  that our message is widely heard.&quot;
                </T>
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <span className="font-semibold text-fg">
                  <T id={`${P}.t22`}>Peter</T>
                </span>
                <T id={`${P}.t23`}>, CEO, national industry association with 14,000 members</T>
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <LeadMagnetBanner
        magnet="associationsPRChecklist"
        eyebrow="Free resource"
        title="Elevate your voice and build trust"
        description="Is your industry or professional association communicating in a way that builds member trust, supports your advocacy, and builds trust with stakeholders including government and regulators? Are you the voice the media seeks out for regular expert commentary? This checklist is created from 15+ years of association experience and is a great place to start."
        highlights={[
          "Built from 15+ years of association advisory work",
          "Covers member trust, advocacy, and media authority",
          "We'll send it the moment it is published",
        ]}
        whatYouGetBody="A practical PR and communications strategy checklist for industry and professional associations. Sign up now and we'll email it the moment it goes live."
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions from association and peak-body leaders"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="Association communications challenges are what we do best."
        body="We have spent many years helping associations elevate their public voice, achieve successful outcomes, build member trust and support, and deal with media scrutiny."
      />
    </>
  );
}
