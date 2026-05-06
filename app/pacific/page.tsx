import type { Metadata } from "next";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import {
  PacificCaseStudies,
  type PacificCaseStudy,
} from "@/components/shared/PacificCaseStudies";
import { PacificFootprintMap } from "@/components/pacific/PacificFootprintMap";

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

const proofItems = [
  {
    label: "Regional depth",
    value: "Pacific-specific",
    detail:
      "Our advice is built for the political, cultural, and stakeholder realities of Pacific Island nations, not copied from a generic playbook.",
  },
  {
    label: "Relationship discipline",
    value: "Protocol-aware",
    detail:
      "We understand the importance of national sovereignty to every Pacific nation, and the respect required to deal across stakeholders.",
  },
  {
    label: "Cross-border counsel",
    value: "Government and corporate",
    detail:
      "We support governments, NGOs, development partners, and Australian and international organisations operating across the region.",
  },
] as const;

const pacificCaseStudies: PacificCaseStudy[] = [
  {
    id: "regional-forum",
    sector: "Regional forum",
    headline: "Major regional political forum — media coordination",
    body: "We coordinated the Pacific and international media operations for a host nation of the Pacific Islands Forum Leaders Meeting, featuring 18 heads of state and government. This involved authorising international media attendance, overseeing the forum media centre, and creating strategies that ensured maximum regional and global coverage while protecting local sensitivities. The timing of the event was in the midst of a high-profile, politically charged debate, meaning we had to deal with unexpected diplomatic issues involving media, political leaders and local authorities. To achieve a successful outcome we worked closely with the host nation's political and executive leaders, their communications team, local media, the Pacific Islands Forum, government representatives across Oceania, and media from the Pacific region, Australia, New Zealand and across the world.",
    image: {
      src: "/images/pacific/case-forum.webp",
      alt: "Pacific regional forum venue exterior at golden hour with flags of Pacific nations on poles, no people",
    },
  },
  {
    id: "national-government",
    sector: "National government",
    headline: "National government — elevated and expanded messaging",
    body: "We created and implemented a communication strategy for a Pacific government with unique geographical challenges. A significant portion of its population lived overseas and those at home resided across many islands, some without internet access. Working directly with the head of state, ministers, and the internal communications team, we reformed and strengthened the government's communications strategy, messaging, and use of its current media channels. We also implemented an effective social media strategy to reach the domestic audience and elevate the government's international voice, and built stronger relationships with independent media. Importantly, we ensured that the work the government was doing in areas like the economy, trade, domestic services, and international relations were supported by impacting communications that build trust and advocacy.",
    image: {
      src: "/images/pacific/case-government.webp",
      alt: "Pacific national parliament or government house with flag pole in late afternoon warm light, no people",
    },
  },
  {
    id: "australian-company",
    sector: "Corporate, in-region",
    headline: "Australian company in Pacific",
    body: "We worked with an Australian company doing major construction and logistics work in the Pacific region. Elevating the challenge, the company was under intense public scrutiny and a regional — sometimes global — media spotlight due to ongoing and highly emotive political issues beyond its control. Our first step was to create a crisis communication plan to ensure the company was prepared, and we worked with the CEO and management team across three countries to ensure it was properly tested. For more than a decade we supported the company with media engagement, proactive messaging across cultural divides, employee engagement, political and government liaison, reputation management and crisis communications. Our strategy and hands-on work played an invaluable part in the company's success, and its subsequent growth, prosperity and diversification.",
    image: {
      src: "/images/pacific/case-company.webp",
      alt: "Working Pacific port at golden hour with container cranes and turquoise harbour, no people",
    },
  },
];

const faqs = [
  {
    question: "What makes Pacific communications advice different from Australian communications advice?",
    answer:
      "The Pacific region is one family but many different cultures, objectives, government systems, media environments, and priorities. Each nation also has different communication channels available, and this means that what works in Australia or some other areas may not work in a Pacific setting.",
  },
  {
    question: "Who do you work with in the Pacific?",
    answer:
      "We work with Pacific governments, regional organisations, Pacific based companies, NGOs, development partners, and Australian and international companies and organisations that are investing or doing business with Pacific nations.",
  },
  {
    question: "Can you help with politically or culturally sensitive Pacific matters?",
    answer:
      "Yes. These are matters where our experience is extremely valued and necessary. At these times, strategy must be created with regional understanding rather than imported assumptions. Early communication decisions in the Pacific can affect relationships for years.",
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
        asidePreset="pacificRegional"
        eyebrow="Pacific advisory"
        title="The Pacific region demands communications expertise that most public relations firms don't have."
        description="We are the only Australian corporate PR firm with deep, sustained expertise across Pacific Island nations, assisting Pacific governments and companies to communicate effectively within their nation and internationally."
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
        testimonial={{
          quote:
            "CRC Public Relations has worked extensively across the Pacific Region providing high-level advice to governments.",
          attribution: [
            "His Excellency Baron Waqa",
            "Former President, Republic of Nauru",
            "Secretary General, Pacific Islands Forum",
          ],
          highlightLastLine: true,
          portrait: {
            src: "/images/pacific/baron-waqa.png",
            alt: "His Excellency Baron Waqa, Secretary General of the Pacific Islands Forum and former President of the Republic of Nauru",
          },
        }}
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
                  The Pacific region is made up of many nations, each with its
                  own people, culture, customs and history. It is a wonderfully
                  colourful region, and exceptionally important to the world in
                  the current geopolitical environment.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Each Pacific government is unique, but has a common goal to
                  meet the needs of its people. We help governments communicate
                  more effectively to the people of their nation, while also
                  elevating their international voice to help them build the
                  trust required to achieve national objectives.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We also assist companies that deal across the region, those
                  who are based in the region and others who interact through
                  business, trade, development, or the not-for-profit sector.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Our Pacific advisory work is built on 15 years of direct
                  engagement with Pacific Island governments, development
                  partners, regional organisations, private sector clients, and
                  media operating across the Pacific. We have worked in the
                  region long enough to understand what genuine cultural
                  sensitivity and relationship-based counsel means in practice.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  If your organisation operates within the Pacific, or is an
                  Australian or international company with Pacific operations,
                  international development organisation, Pacific government,
                  or NGO &mdash; we provide the communications and media
                  expertise the region demands.
                </p>
              </div>
              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-5">
                  What serious Pacific work requires
                </p>
                <div className="space-y-4">
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Country-specific understanding
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Advice must reflect an understanding of the realities of
                      each nation, and cannot be generic.
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Respect for sovereignty
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Knowledge of the ways governments work and respect for
                      their sovereignty helps to shape trust.
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Media knowledge
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Being aware of how media outlets and journalists operate
                      in each nation creates maximum impact.
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
                  Pacific opportunities
                </p>
                <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
                  The Pacific region has long been under-estimated and
                  under-valued.
                </h2>
                <p className="text-charcoal text-[15px] leading-relaxed font-medium mb-6">
                  No longer. The issues that currently impact the world are
                  elevating the region&apos;s profile.
                </p>
                <div className="space-y-6">
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    Security, trade, climate change, economic resilience,
                    foreign aid, and international partnerships are all
                    extremely important issues for every nation in the region,
                    yet their voices have been overpowered by louder voices
                    across the globe.
                  </p>
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    CRC Public Relations is changing this by assisting Pacific
                    governments to understand the power of effective
                    communication that creates the domestic stability required
                    to govern effectively, and helps attract international
                    attention, development and financial support.
                  </p>
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    The Pacific also provides unique opportunities for companies
                    and organisations investing, doing business and offering
                    services across the region. CRC Public Relations has worked
                    alongside many companies and organisations who grasped
                    these opportunities, resulting in benefits and growth for
                    them and the region.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg bg-white border border-brand-border p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-2">
                    Proactive governments
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Pacific governments are embracing better communication
                    domestically and internationally to achieve their
                    objectives.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-brand-border p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-2">
                    Not-for-profits
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    NGOs across the Pacific do important work, yet effective
                    media engagement outside the region can increase support.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-brand-border p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-2">
                    Companies
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The opportunity for business across the Pacific region is
                    increased with Pacific-specific communications and media
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pacific experience */}
      <section
        id="pacific-experience"
        className="bg-off-white py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-brand-gold text-xs font-medium mb-4">
              Anonymised outcomes
            </p>
            <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
              Our Pacific experience
            </h2>
            <p className="text-charcoal text-[15px] leading-relaxed">
              While our work is confidential, here are three anonymised outcomes
              that showcase our Pacific region experience. All of these required
              both working from our Australian-based office and at times being
              onsite in various areas across the Pacific islands.
            </p>
          </div>
          <PacificCaseStudies items={pacificCaseStudies} />
        </div>
      </section>

      <InlineEnquirySection
        title="Need communications advice for a Pacific matter?"
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
                with a single channel or tone. Development programmes,
                government initiatives, and private sector expansion each
                require a focused communications strategy.
              </p>
            </div>
          </ImageTextRow>
        </div>
      </section>

      {/* Pacific footprint */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 items-start">
            <div>
              <h2 className="font-heading font-black text-navy text-3xl">
                Our Pacific footprint
              </h2>
              <p className="text-charcoal-mid text-base mt-4 max-w-2xl">
                We have worked with clients, stakeholders and media across the
                following Pacific Island nations and territories:
              </p>
            </div>
            <aside className="rounded-lg border border-brand-border bg-white p-6 lg:mt-2">
              <p className="font-heading font-black text-brand-gold text-5xl leading-none">
                17
              </p>
              <p className="text-navy font-sans font-semibold text-sm mt-2">
                nations &amp; territories
              </p>
              <p className="text-charcoal-mid text-sm leading-relaxed mt-3">
                Spanning Micronesia, Melanesia and Polynesia &mdash; with New
                Zealand as a regional anchor.
              </p>
            </aside>
          </div>

          <div className="mt-10">
            <PacificFootprintMap />
          </div>
        </div>
      </section>

      {/* Pacific communications services */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-12">
            Pacific communications services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-off-white border-l-[3px] border-brand-gold rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Development communications
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Australia, New Zealand, and international development partners
                invest significantly in Pacific development programmes in
                health, infrastructure, governance, and climate adaptation.
                Communicating these programmes effectively requires navigating
                relationships with government counterparts, communities, local
                and regional media, and international stakeholders with cultural
                precision and strategic clarity.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We work with development organisations, NGOs, and donor agencies
                to develop communications strategies that are culturally
                appropriate, politically navigable, and effective in building
                the community understanding and support that development
                programmes require to succeed.
              </p>
            </div>

            <div className="bg-off-white border-l-[3px] border-brand-gold rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Cross-cultural stakeholder engagement
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                In Pacific contexts, stakeholder engagement is not only about
                communications, but relationships. In many areas, there is
                shared responsibility and leadership between government,
                community, traditional, and church leaders, and this must be
                considered.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                When required, we harness the knowledge and understanding of
                governments and other stakeholders in each country and local
                community to ensure that messaging respects cultures and
                protocols.
              </p>
            </div>

            <div className="bg-off-white border-l-[3px] border-brand-gold rounded-lg p-8">
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Pacific crisis communications
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Crisis communications in Pacific Island nations presents
                challenges that do not exist in Australian or many other
                international contexts. These include geography, scattered
                communities, limited media outlets or experience, tight
                community connections, lack of internet coverage, and government
                actions. There are also specific reputational risks for foreign
                organisations that are perceived as having handled an incident
                without cultural respect.
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
            Communications that understands Pacific culture is not optional. It
            is essential.
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            The Pacific region has a long history of external organisations
            &mdash; government, commercial, and philanthropic &mdash; arriving
            with good intentions and communications approaches designed for
            other contexts. The results have often been, at best, ineffective.
            At worst, they have damaged relationships and trust.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            We approach Pacific communications with the same values that guide
            all of our work: that the most effective communications is always
            built on a genuine understanding of your audience. In Pacific
            contexts, this means respecting the sovereignty of Pacific nations
            and their intimate knowledge and understanding on their own region.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            We do not offer a &apos;Pacific communications package.&apos; We
            offer the same specialist counsel, adapted to the specific
            cultural and political environment of the nation, community, and
            issue you are working in.
          </p>
        </div>
      </section>

      <FAQSection
        items={faqs}
        titleText="Common questions about Pacific advisory work"
        expandable={false}
      />

      <PageClosingCTA
        title="Working in the Pacific? Talk to the firm that genuinely knows the region."
        body="Whether you are operating across multiple Pacific jurisdictions or preparing for a single sensitive engagement, we provide communications counsel grounded in regional experience."
        primaryLabel="Book a Pacific advisory consultation"
      />
    </>
  );
}
