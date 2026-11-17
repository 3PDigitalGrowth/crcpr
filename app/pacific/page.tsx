import type { Metadata } from "next";
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
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";

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
    headline: "Major regional political forum: media coordination",
    body: "We coordinated the Pacific and international media operations for a host nation of the Pacific Islands Forum Leaders Meeting, featuring 18 heads of state and government. This involved authorising international media attendance, overseeing the forum media centre, and creating strategies that ensured maximum regional and global coverage while protecting local sensitivities. The timing of the event was in the midst of a high-profile, politically charged debate, meaning we had to deal with unexpected diplomatic issues involving media, political leaders and local authorities. To achieve a successful outcome we worked closely with the host nation's political and executive leaders, their communications team, local media, the Pacific Islands Forum, government representatives across Oceania, and media from the Pacific region, Australia, New Zealand and across the world.",
    image: {
      src: "/images/pacific/case-forum-pif.png",
      alt: "49th Pacific Islands Forum leaders seated at the conference table, Republic of Nauru, September 2018",
    },
  },
  {
    id: "national-government",
    sector: "National government",
    headline: "National government: elevated and expanded messaging",
    body: "We created and implemented a communication strategy for a Pacific government with unique geographical challenges. A significant portion of its population lived overseas and those at home resided across many islands, some without internet access. Working directly with the head of state, ministers, and the internal communications team, we reformed and strengthened the government's communications strategy, messaging, and use of its current media channels. We also implemented an effective social media strategy to reach the domestic audience and elevate the government's international voice, and built stronger relationships with independent media. Importantly, we ensured that the work the government was doing in areas like the economy, trade, domestic services, and international relations were supported by impacting communications that build trust and advocacy.",
    image: {
      src: "/images/pacific/case-government-island.png",
      alt: "Aerial view of a Pacific island resort with turquoise water, white sand beach, and tropical vegetation",
    },
  },
  {
    id: "australian-company",
    sector: "Corporate, in-region",
    headline: "Australian company in the Pacific",
    body: "We worked with an Australian company doing major construction and logistics work in the Pacific region. Elevating the challenge, the company was under intense public scrutiny and a regional (sometimes global) media spotlight due to ongoing and highly emotive political issues beyond its control. Our first step was to create a crisis communication plan to ensure the company was prepared, and we worked with the CEO and management team across three countries to ensure it was properly tested. For more than a decade we supported the company with media engagement, proactive messaging across cultural divides, employee engagement, political and government liaison, reputation management and crisis communications. Our strategy and hands-on work played an invaluable part in the company's success, and its subsequent growth, prosperity and diversification.",
    image: {
      src: "/images/pacific/case-company-construction.png",
      alt: "Aerial view of a major Pacific port construction site with cranes, containers, and turquoise water",
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

const pacificServices = [
  {
    tid: "t38",
    title: "Development communications",
    paras: [
      ["t39", "Australia, New Zealand, and international development partners invest significantly in Pacific development programmes in health, infrastructure, governance, and climate adaptation. Communicating these programmes effectively requires navigating relationships with government counterparts, communities, local and regional media, and international stakeholders with cultural precision and strategic clarity."],
      ["t40", "We work with development organisations, NGOs, and donor agencies to develop communications strategies that are culturally appropriate, politically navigable, and effective in building the community understanding and support that development programmes require to succeed."],
    ],
  },
  {
    tid: "t41",
    title: "Cross-cultural stakeholder engagement",
    paras: [
      ["t42", "In Pacific contexts, stakeholder engagement is not only about communications, but relationships. In many areas, there is shared responsibility and leadership between government, community, traditional, and church leaders, and this must be considered."],
      ["t43", "When required, we harness the knowledge and understanding of governments and other stakeholders in each country and local community to ensure that messaging respects cultures and protocols."],
    ],
  },
  {
    tid: "t44",
    title: "Pacific crisis communications",
    paras: [
      ["t45", "Crisis communications in Pacific Island nations presents challenges that do not exist in Australian or many other international contexts. These include geography, scattered communities, limited media outlets or experience, tight community connections, lack of internet coverage, and government actions. There are also specific reputational risks for foreign organisations that are perceived as having handled an incident without cultural respect."],
      ["t46", "We provide crisis communications counsel for organisations operating in the Pacific, drawing on our direct knowledge of the region's media environments, stakeholder landscapes, and cultural expectations to develop responses that protect both reputation and relationships."],
    ],
  },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery and video were removed. */

export default function PacificPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero copyId="pacific"
        asidePreset="pacificRegional"
        eyebrow="Pacific advisory"
        title="The Pacific region demands communications expertise that most public relations firms don't have."
        description="We are the only Australian corporate PR firm with deep, sustained expertise across Pacific Island nations, assisting Pacific governments and companies to communicate effectively within their nation and internationally."
        ctaLabel="Work with us in the Pacific"
        ctaHref="/contact"
      />

      <PageProofStrip copyId="pacific"
        variant="navy"
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
        }}
      />

      {/* ---------- OPENING ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id="pacific.t1">Pacific context</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="pacific.t2">
                The Pacific is not one communications market. It is a region of
                distinct political, cultural, and media realities.
              </T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="pacific.t3">
                  The Pacific region is made up of many nations, each with its
                  own people, culture, customs and history. It is a wonderfully
                  colourful region, and exceptionally important to the world in
                  the current geopolitical environment.
                </T>
              </p>
              <p>
                <T id="pacific.t4">
                  Each Pacific government is unique, but has a common goal to
                  meet the needs of its people. We help governments communicate
                  more effectively to the people of their nation, while also
                  elevating their international voice to help them build the
                  trust required to achieve national objectives.
                </T>
              </p>
              <p>
                <T id="pacific.t5">
                  We also assist companies that deal across the region, those
                  who are based in the region and others who interact through
                  business, trade, development, or the not-for-profit sector.
                </T>
              </p>
              <p>
                <T id="pacific.t6">
                  Our Pacific advisory work is built on 15 years of direct
                  engagement with Pacific Island governments, development
                  partners, regional organisations, private sector clients, and
                  media operating across the Pacific. We have worked in the
                  region long enough to understand what genuine cultural
                  sensitivity and relationship-based counsel means in practice.
                </T>
              </p>
              <p>
                <T id="pacific.t7">
                  If your organisation operates within the Pacific, or is an
                  Australian or international company with Pacific operations,
                  international development organisation, Pacific government,
                  or NGO, we provide the communications and media
                  expertise the region demands.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id="pacific.t8">What serious Pacific work requires</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t9", "Country-specific understanding", "t10", "Advice must reflect an understanding of the realities of each nation, and cannot be generic."],
                  ["t11", "Respect for sovereignty", "t12", "Knowledge of the ways governments work and respect for their sovereignty helps to shape trust."],
                  ["t13", "Media knowledge", "t14", "Being aware of how media outlets and journalists operate in each nation creates maximum impact."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`pacific.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`pacific.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- OPPORTUNITIES ---------- */}
      <Section tone="base" className="pb-11 md:pb-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id="pacific.t15">The opportunities in and for the Pacific region</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="pacific.t16">
                The Pacific region has long been under-estimated and under-valued.
              </T>
            </H2>
            <p className="mt-6 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id="pacific.t17">
                No longer. The issues that currently impact the world are
                elevating the region&apos;s profile.
              </T>
            </p>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="pacific.t18">
                  Security, trade, climate change, economic resilience,
                  foreign aid, and international partnerships are all
                  extremely important issues for every nation in the region,
                  yet their voices have been overpowered by louder voices
                  across the globe.
                </T>
              </p>
              <p>
                <T id="pacific.t19">
                  CRC Public Relations is changing this by assisting Pacific
                  governments to understand the power of effective
                  communication that creates the domestic stability required
                  to govern effectively, and helps attract international
                  attention, development and financial support.
                </T>
              </p>
              <p>
                <T id="pacific.t20">
                  The Pacific also provides unique opportunities for companies
                  and organisations investing, doing business and offering
                  services across the region. CRC Public Relations has worked
                  alongside many companies and organisations who grasped
                  these opportunities, resulting in benefits and growth for
                  them and the region.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <div className="divide-y divide-[var(--line)] border-y border-line">
              {[
                ["t21", "Proactive governments", "t22", "Pacific governments are embracing better communication domestically and internationally to achieve their objectives."],
                ["t23", "Not-for-profits", "t24", "NGOs across the Pacific do important work, yet effective media engagement outside the region can increase support."],
                ["t25", "Companies", "t26", "The opportunity for business across the Pacific region is increased with Pacific-specific communications and media strategies."],
              ].map(([tid, title, bid, body]) => (
                <div key={tid} className="py-5">
                  <p className="kit-display text-[15px] uppercase">
                    <T id={`pacific.${tid}`}>{title}</T>
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    <T id={`pacific.${bid}`}>{body}</T>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- OUR PACIFIC EXPERIENCE ---------- */}
      <Section id="pacific-experience" tone="deep" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr,1fr] lg:items-end lg:gap-14">
            <div>
              <Eyebrow>
                <T id="pacific.t27">Successful outcomes</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id="pacific.t28">Our Pacific experience</T>
              </H2>
            </div>
            <p className="text-[15px] leading-relaxed text-muted lg:pb-1">
              <T id="pacific.t29">
                While our work is confidential, here are three anonymised outcomes
                that showcase our Pacific region experience. All of these required
                both working from our Australian-based office and at times being
                onsite in various areas across the Pacific islands.
              </T>
            </p>
          </div>
          <div className="mt-8">
            <PacificCaseStudies items={pacificCaseStudies} />
          </div>
        </Container>
      </Section>

      <InlineEnquirySection copyId="pacific"
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

      {/* ---------- TRADE, DEVELOPMENT, DAILY LIFE ---------- */}
      <Section tone="base" className="pb-11 md:pb-14">
        <Container className="grid gap-5 lg:grid-cols-[1fr,1fr] lg:items-end lg:gap-14">
          <div>
            <Eyebrow>
              <T id="pacific.t30">Trade, development, and daily life</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="pacific.t31">
                Pacific communications sits at the intersection of tradition and
                modern institutions.
              </T>
            </H2>
          </div>
          <p className="text-[15px] leading-relaxed text-muted lg:pb-1">
            <T id="pacific.t32">
              From ports and provincial centres to capitals and regional
              forums, the audiences you need to influence are rarely reached
              with a single channel or tone. Development programmes,
              government initiatives, and private sector expansion each
              require a focused communications strategy.
            </T>
          </p>
        </Container>
      </Section>

      {/* ---------- PACIFIC FOOTPRINT ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr),300px] lg:items-end lg:gap-14">
            <div>
              <H2>
                <T id="pacific.t33">Our Pacific footprint</T>
              </H2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                <T id="pacific.t34">
                  We have worked with clients, stakeholders and media across the
                  following Pacific Island nations and territories:
                </T>
              </p>
            </div>
            <aside className="kit-r border border-line bg-card p-6">
              <p className="kit-display text-5xl leading-none text-accent">17</p>
              <p className="kit-display mt-3 text-[15px] uppercase leading-snug">
                <T id="pacific.t35">nations &amp; territories</T>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <T id="pacific.t36">
                  Spanning Micronesia, Melanesia and Polynesia, with New
                  Zealand as a regional anchor.
                </T>
              </p>
            </aside>
          </div>
          <div className="mt-8">
            <PacificFootprintMap />
          </div>
        </Container>
      </Section>

      {/* ---------- PACIFIC COMMUNICATIONS SERVICES ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <H2 className="max-w-3xl">
            <T id="pacific.t37">Pacific communications services</T>
          </H2>
          <div className="mt-8 border-t border-line">
            {pacificServices.map((svc, i) => (
              <Reveal key={svc.tid} delay={i * 0.05}>
                <div className="grid gap-3 border-b border-line py-7 lg:grid-cols-[3rem,0.8fr,1.4fr] lg:gap-8">
                  <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                  <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
                    <T id={`pacific.${svc.tid}`}>{svc.title}</T>
                  </h3>
                  <div className="space-y-4 text-[15px] leading-relaxed text-muted">
                    {svc.paras.map(([pid, text]) => (
                      <p key={pid}>
                        <T id={`pacific.${pid}`}>{text}</T>
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- CULTURE ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container>
          <div className="max-w-3xl">
            <H2>
              <T id="pacific.t47">
                Communications that understands Pacific culture is not optional. It
                is essential.
              </T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="pacific.t48">
                  The Pacific region has a long history of external organisations
                  (government, commercial, and philanthropic) arriving
                  with good intentions and communications approaches designed for
                  other contexts. The results have often been, at best, ineffective.
                  At worst, they have damaged relationships and trust.
                </T>
              </p>
              <p>
                <T id="pacific.t49">
                  We approach Pacific communications with the same values that guide
                  all of our work: that the most effective communications is always
                  built on a genuine understanding of your audience. In Pacific
                  contexts, this means respecting the sovereignty of Pacific nations
                  and their intimate knowledge and understanding on their own region.
                </T>
              </p>
              <p>
                <T id="pacific.t50">
                  We do not offer a &apos;Pacific communications package.&apos; We
                  offer the same specialist counsel, adapted to the specific
                  cultural and political environment of the nation, community, and
                  issue you are working in.
                </T>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection copyId="pacific"
        items={faqs}
        titleText="Common questions about Pacific advisory work"
        expandable={false}
      />

      <PageClosingCTA copyId="pacific"
        title="Working in the Pacific? Talk to the firm that genuinely knows the region."
        body="Whether you are operating across multiple Pacific jurisdictions or preparing for a single sensitive engagement, we provide communications counsel grounded in regional experience."
        primaryLabel="Book a Pacific advisory consultation"
      />
    </>
  );
}
