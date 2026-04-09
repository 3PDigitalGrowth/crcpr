import type { Metadata } from "next";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Pacific Communications & PR Advisory | CRC Public Relations",
  description:
    "The only Australian corporate PR firm with sustained expertise across Pacific Island nations. Government relations, development communications, cross-cultural stakeholder engagement, and crisis response.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pacific Communications and PR Advisory",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "The only Australian corporate PR firm with sustained expertise across Pacific Island nations. Government relations, development communications, cross-cultural stakeholder engagement, and crisis response.",
  areaServed: [
    "FJ",
    "PG",
    "WS",
    "TO",
    "VU",
    "SB",
    "KI",
    "NR",
    "TV",
    "PW",
    "FM",
    "MH",
    "CK",
    "NU",
    "PF",
    "NC",
    "NZ",
  ],
  serviceType: "Pacific Communications Consulting",
};

const PACIFIC_NATIONS = [
  "Cook Islands",
  "Federated States of Micronesia",
  "Fiji",
  "French Polynesia",
  "Kiribati",
  "Nauru",
  "New Caledonia",
  "Niue",
  "Palau",
  "Papua New Guinea",
  "Republic of Marshall Islands",
  "Samoa",
  "Solomon Islands",
  "Tonga",
  "Tuvalu",
  "Vanuatu",
  "New Zealand",
] as const;

const proofItems = [
  {
    label: "Regional depth",
    value: "Pacific-specific",
    detail:
      "Our advice is built for the political, cultural, and stakeholder realities of Pacific Island nations, not copied from an Australian playbook.",
  },
  {
    label: "Relationship discipline",
    value: "Protocol-aware",
    detail:
      "We understand the weight of community, church, traditional leadership, and the practical importance of sequencing engagement correctly.",
  },
  {
    label: "Cross-border counsel",
    value: "Government to donor",
    detail:
      "We support governments, NGOs, development partners, and Australian organisations operating across the region.",
  },
] as const;

const faqs = [
  {
    question: "What makes Pacific communications advice different from Australian communications advice?",
    answer:
      "Pacific work depends far more heavily on protocol, relationship, local authority structures, and sequencing. Advice that is technically correct in an Australian context can still fail badly if it is culturally or politically misread in a Pacific setting.",
  },
  {
    question: "Who do you work with in the Pacific?",
    answer:
      "We work with Pacific governments, regional organisations, NGOs, development partners, and Australian organisations operating in the region. The common requirement is communications judgement shaped by genuine Pacific experience.",
  },
  {
    question: "Can you help with politically or culturally sensitive Pacific matters?",
    answer:
      "Yes. Those are often the matters where outside advice is most valuable, provided it is informed by regional understanding rather than imported assumptions. Early communication decisions in the Pacific can affect relationships for years.",
  },
];

export default function PacificPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Pacific advisory"
        title="The Pacific demands communications expertise that most Australian firms don't have."
        description="We are the only Australian corporate PR firm with deep, sustained expertise across Pacific Island nations: government relations, development communications, cross-cultural stakeholder engagement, and crisis response."
        ctaLabel="Work with us in the Pacific"
        ctaHref="/contact"
        heroImage={{
          src: "/images/pacific/hero.webp",
          alt: "Pacific island coastline with turquoise water, palms, and settlement in golden hour light",
        }}
      />

      <PageProofStrip
        title="Pacific advisory work succeeds when communication respects context, protocol, and relationship."
        items={[...proofItems]}
      />

      {/* Opening */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/pacific/mid-meeting-house.webp"
            imageAlt="Pacific meeting house with traditional roofline and tropical vegetation in warm golden light, no people"
            imagePosition="left"
          >
            <div className="max-w-3xl lg:max-w-none">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Pacific context
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                The Pacific is not one communications market. It is a region of
                distinct political, cultural, and media realities.
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The Pacific region is not a single market. It is seventeen
                  distinct nations, each with its own governance systems,
                  cultural protocols, media environments, and communication
                  expectations. What works in corporate communications in
                  Brisbane or Sydney will not work, and can actively harm
                  relationships, if applied without adaptation to Fiji, Papua
                  New Guinea, or the Solomon Islands.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Most Australian communications firms with Pacific clients
                  treat the region as an extension of their domestic practice.
                  We do not. Our Pacific advisory work is built on 25
                  years of direct engagement with Pacific Island governments,
                  development partners, regional organisations, and private
                  sector clients operating across the Pacific. We have worked in
                  the region long enough to understand what genuine cultural
                  sensitivity, adapted communications, and relationship-based
                  counsel means in practice.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  For organisations operating in or with the Pacific, whether
                  Australian companies with Pacific operations, international
                  development organisations, Pacific governments, or NGOs, we
                  provide the communications expertise that the region
                  demands.
                </p>
              </div>
              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-5">
                  What serious Pacific work requires
                </p>
                <div className="space-y-4">
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Country-specific judgement
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Advice must reflect the realities of each nation, not a
                      generic regional shorthand.
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Protocol-aware sequencing
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      The order in which leaders, communities, governments, and
                      partners hear from you shapes trust.
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Relationship protection
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Short-term communications decisions can have long-term
                      diplomatic, community, and reputational consequences.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </ImageTextRow>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-lg border border-brand-border bg-off-white p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
              <div className="max-w-3xl">
                <p className="text-brand-gold text-xs font-medium mb-4">
                  Why generic advice fails
                </p>
                <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
                  Why generic communications advice fails in the Pacific
                </h2>
                <div className="space-y-6">
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    The most common mistake external organisations make in
                    Pacific communications is assuming that process equals
                    legitimacy. It does not. Formal consultation can still fail
                    if the real authority structure has not been understood, if
                    cultural protocols are rushed, or if a message is
                    technically correct but relationally tone-deaf.
                  </p>
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    Effective Pacific communications requires more than
                    translation. It requires judgement about who should hear a
                    message first, what needs to happen before a public position
                    is taken, and how the long-term relationship will be
                    affected by the short-term decision.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg bg-white border border-brand-border p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-2">
                    Formal process is not enough
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    A consultation can tick every procedural box and still fail
                    because the real authority structures were missed.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-brand-border p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-2">
                    Timing shapes legitimacy
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Who hears a message first, and when, often matters as much
                    as the message itself.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-brand-border p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-2">
                    Relationship damage lasts
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    A short-term communications mistake can affect trust with
                    governments, communities, and partners for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineEnquirySection
        title="Need senior communications advice for a Pacific matter?"
        body="We work with Pacific governments, regional organisations, NGOs, development partners, and Australian organisations operating in the region. If the matter is culturally or politically sensitive, early advice matters."
        bullets={[
          "Pacific government and donor-facing communications support",
          "Cross-cultural stakeholder engagement planning",
          "Crisis and issue advice for region-specific matters",
        ]}
        defaultMessage="We need Pacific communications or stakeholder engagement advice."
        variant="white"
      />

      <section className="bg-off-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/pacific/mid-harbour.webp"
            imageAlt="Pacific harbour with outrigger canoes near a wharf, turquoise water and green hills"
            imagePosition="right"
            aspectClass="aspect-[4/3]"
          >
            <div>
              <p className="text-brand-gold text-xs font-medium mb-3">
                Trade, development, and daily life
              </p>
              <h2 className="font-heading font-black text-navy text-2xl md:text-3xl leading-tight mb-4">
                Pacific communications sits at the intersection of tradition and
                modern institutions.
              </h2>
              <p className="text-charcoal-mid text-[15px] leading-relaxed">
                From ports and provincial centres to capitals and regional
                forums, the audiences you need to influence are rarely reached
                with a single channel or tone. Development programmes, government
                relations, and private sector expansion each require sequencing
                that respects local authority.
              </p>
            </div>
          </ImageTextRow>
        </div>
      </section>

      {/* Pacific footprint */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl">
            Our Pacific footprint
          </h2>
          <p className="text-charcoal-mid text-base mt-4">
            We have worked with clients and stakeholders across the following
            Pacific Island nations and territories:
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {PACIFIC_NATIONS.map((nation) => (
              <span
                key={nation}
                className="bg-white border border-brand-border rounded-[4px] px-4 py-2 text-sm text-navy font-sans font-medium"
              >
                {nation}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pacific communications services */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-12">
            Pacific communications services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-off-white border-l-[3px] border-brand-gold rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Pacific government relations
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Pacific Island governments operate at the intersection of
                domestic political pressures, regional multilateral commitments,
                and relationships with international development partners.
                Communications strategy in this environment requires an
                understanding of the specific cultural and diplomatic protocols
                that govern how governments engage publicly, and how they do not.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We provide strategic communications counsel for Pacific Island
                governments engaging with international partners, donor
                agencies, regional bodies, and domestic audiences. We understand
                the realities of Pacific governance: the role of traditional
                leadership, the weight of community consultation, and the
                particular communication sensitivities that arise in small
                communities where every public statement has personal as well as
                political consequences.
              </p>
            </div>

            <div className="bg-off-white border-l-[3px] border-brand-gold rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Development communications
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Australia, New Zealand, and international development partners
                invest significantly in Pacific development programmes in health,
                infrastructure, governance, and climate adaptation.
                Communicating these programmes effectively requires navigating
                relationships with government counterparts, communities, and
                international stakeholders with cultural precision and strategic
                clarity.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We work with development organisations, NGOs, and donor agencies
                to develop communications strategies that are culturally
                appropriate, politically navigable, and effective in building the
                community understanding and support that development programmes
                require to succeed.
              </p>
            </div>

            <div className="bg-off-white border-l-[3px] border-brand-gold rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Cross-cultural stakeholder engagement
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                In Pacific contexts, stakeholder engagement is not a
                communications discipline. It is a relationship discipline.
                Community leaders, traditional authorities, church leaders, and
                civil society organisations must be engaged through protocols
                that reflect their role and authority. Skipping these protocols,
                or conducting them perfunctorily, can undermine years of
                relationship building in a single interaction.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We bring direct experience of cross-cultural engagement across
                Pacific nations, including an understanding of the specific
                protocols in different countries and communities, the appropriate
                sequencing of consultation, and the communication formats that
                are genuinely inclusive rather than procedurally compliant.
              </p>
            </div>

            <div className="bg-off-white border-l-[3px] border-brand-gold rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Pacific crisis communications
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Crisis communications in Pacific Island nations presents
                challenges that do not exist in Australian contexts: limited
                media infrastructure, intense community proximity (in small
                island nations, everyone knows everyone), significant social
                media penetration in some markets and almost none in others, and
                the specific reputational risks that arise for organisations,
                particularly foreign ones, that are perceived as having handled
                an incident without cultural respect.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We provide crisis communications counsel for organisations
                operating in the Pacific, drawing on our direct knowledge of the
                region&apos;s media environments, stakeholder landscapes, and
                cultural expectations to develop responses that protect both
                reputation and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Communications that respects Pacific culture is not optional. It is
            essential.
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            The Pacific region has a long history of external organisations,
            government, commercial, and philanthropic, arriving with good
            intentions and communications approaches designed for other contexts.
            The results have been, at best, ineffective. At worst, they have
            damaged relationships that took years to build.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            We approach Pacific communications from the same principle
            that guides all of our work: that the most effective communications
            is always built on a genuine understanding of your audience. In
            Pacific contexts, this means understanding specific cultural
            protocols, the role of traditional and church leadership in community
            life, the sensitivity around land and sovereignty issues, and the
            different expectations around time, consultation, and relationship in
            different Pacific nations.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            We do not offer a &apos;Pacific communications package.&apos; We
            offer the same senior-level counsel, adapted to the specific
            cultural and political environment of the nation, community, and
            issue you are working in.
          </p>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="pacificGuide"
        title="Free: Pacific Stakeholder Engagement Guide"
        description="A practical guide to cross-cultural communications and stakeholder engagement across Pacific Island nations. Covers protocol, government relations, development communication, and the decisions that protect long-term relationships in Pacific contexts."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about Pacific advisory work"
      />

      <PageClosingCTA
        title="Working in the Pacific? Talk to the firm that genuinely knows the region."
        body="Whether you are operating across multiple Pacific jurisdictions or preparing for a single sensitive engagement, we provide senior communications counsel grounded in regional experience."
        primaryLabel="Book a Pacific advisory consultation"
      />
    </>
  );
}
