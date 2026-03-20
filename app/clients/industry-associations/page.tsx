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

type Sector =
  | "all"
  | "finance"
  | "health"
  | "legal"
  | "business"
  | "construction"
  | "education"
  | "resources"
  | "other";

interface Association {
  abbr: string;
  name: string;
  subsector: string;
  href: string;
  sector: Exclude<Sector, "all">;
}

const ASSOCIATIONS: Association[] = [
  { abbr: "ABA", name: "Australian Banking Association", subsector: "Banking", href: "https://www.aba.org.au", sector: "finance" },
  { abbr: "FBAA", name: "Finance Brokers Association of Australia", subsector: "Finance broking", href: "https://www.fbaa.com.au", sector: "finance" },
  { abbr: "MFAA", name: "Mortgage & Finance Association of Australia", subsector: "Mortgage broking", href: "https://www.mfaa.com.au", sector: "finance" },
  { abbr: "FPA", name: "Financial Planning Association of Australia", subsector: "Financial planning", href: "https://www.fpa.com.au", sector: "finance" },
  { abbr: "FSC", name: "Financial Services Council of Australia", subsector: "Financial services", href: "https://www.fsc.org.au", sector: "finance" },
  { abbr: "ICA", name: "Insurance Council of Australia", subsector: "Insurance", href: "https://www.insurancecouncil.com.au", sector: "finance" },
  { abbr: "ASFA", name: "Association of Superannuation Funds of Australia", subsector: "Superannuation", href: "https://www.asfa.asn.au", sector: "finance" },
  { abbr: "AMA", name: "Australian Medical Association", subsector: "Medical professionals", href: "https://www.ama.com.au", sector: "health" },
  { abbr: "APHA", name: "Australian Private Hospitals Association", subsector: "Private hospitals", href: "https://www.apha.org.au", sector: "health" },
  { abbr: "LASA", name: "Leading Age Services Australia", subsector: "Aged care", href: "https://www.lasa.asn.au", sector: "health" },
  { abbr: "PHA", name: "Public Health Association of Australia", subsector: "Public health", href: "https://www.phaa.net.au", sector: "health" },
  { abbr: "ACSA", name: "Aged Care Industry Association", subsector: "Community care", href: "https://www.acsa.asn.au", sector: "health" },
  { abbr: "APA", name: "Australian Physiotherapy Association", subsector: "Allied health", href: "https://www.physiotherapy.asn.au", sector: "health" },
  { abbr: "LCA", name: "Law Council of Australia", subsector: "Legal profession", href: "https://www.lawcouncil.asn.au", sector: "legal" },
  { abbr: "CPA", name: "CPA Australia", subsector: "Accounting", href: "https://www.cpaaustralia.com.au", sector: "legal" },
  { abbr: "CA", name: "Chartered Accountants ANZ", subsector: "Accounting", href: "https://www.charteredaccountantsanz.com", sector: "legal" },
  { abbr: "AHRI", name: "Australian HR Institute", subsector: "Human resources", href: "https://www.ahri.com.au", sector: "legal" },
  { abbr: "AICD", name: "Australian Institute of Company Directors", subsector: "Governance", href: "https://www.aicd.com.au", sector: "legal" },
  { abbr: "Ai", name: "Australian Industry Group", subsector: "Manufacturing, services", href: "https://www.aigroup.com.au", sector: "business" },
  { abbr: "BCA", name: "Business Council of Australia", subsector: "Large business", href: "https://www.businesscouncil.com.au", sector: "business" },
  { abbr: "ACCI", name: "Australian Chamber of Commerce & Industry", subsector: "Commerce", href: "https://www.acci.asn.au", sector: "business" },
  { abbr: "COSBOA", name: "Council of Small Business Organisations", subsector: "Small business", href: "https://www.cosboa.org.au", sector: "business" },
  { abbr: "NRA", name: "National Retail Association", subsector: "Retail", href: "https://www.nra.com.au", sector: "business" },
  { abbr: "NFF", name: "National Farmers Federation", subsector: "Agriculture", href: "https://www.nff.org.au", sector: "business" },
  { abbr: "HIA", name: "Housing Industry Association", subsector: "Residential construction", href: "https://www.hia.com.au", sector: "construction" },
  { abbr: "MBA", name: "Master Builders Australia", subsector: "Commercial construction", href: "https://www.masterbuilders.com.au", sector: "construction" },
  { abbr: "PCA", name: "Property Council of Australia", subsector: "Property", href: "https://www.propertycouncil.com.au", sector: "construction" },
  { abbr: "AIBS", name: "Australian Institute of Building Surveyors", subsector: "Building surveying", href: "https://www.aibs.com.au", sector: "construction" },
  { abbr: "ISA", name: "Independent Schools Australia", subsector: "Independent schools", href: "https://www.isa.edu.au", sector: "education" },
  { abbr: "AACS", name: "Australian Association of Christian Schools", subsector: "Christian schools", href: "https://www.aacs.org.au", sector: "education" },
  { abbr: "UA", name: "Universities Australia", subsector: "Higher education", href: "https://www.universitiesaustralia.edu.au", sector: "education" },
  { abbr: "TDA", name: "TAFE Directors Australia", subsector: "VET / TAFE", href: "https://www.tda.edu.au", sector: "education" },
  { abbr: "MCA", name: "Minerals Council of Australia", subsector: "Mining", href: "https://www.minerals.org.au", sector: "resources" },
  { abbr: "AEC", name: "Australian Energy Council", subsector: "Energy", href: "https://www.energycouncil.com.au", sector: "resources" },
  { abbr: "APPEA", name: "Australian Petroleum Production & Exploration Association", subsector: "Oil & gas", href: "https://www.appea.com.au", sector: "resources" },
  { abbr: "MLAA", name: "Master Locksmiths Association of Australasia", subsector: "Security", href: "https://www.locksmiths.com.au", sector: "other" },
  { abbr: "PRIA", name: "Public Relations Institute of Australia", subsector: "Communications", href: "https://www.pria.com.au", sector: "other" },
  { abbr: "AIIA", name: "Australian Information Industry Association", subsector: "Technology", href: "https://www.aiia.com.au", sector: "other" },
];

const SECTORS: { key: Sector; label: string }[] = [
  { key: "all", label: "All sectors" },
  { key: "finance", label: "Finance" },
  { key: "health", label: "Health" },
  { key: "legal", label: "Legal & Professional" },
  { key: "business", label: "Business" },
  { key: "construction", label: "Construction" },
  { key: "education", label: "Education" },
  { key: "resources", label: "Resources" },
  { key: "other", label: "Other" },
];

const SECTOR_LABELS: Record<Exclude<Sector, "all">, string> = {
  finance: "Finance & Banking",
  health: "Health & Aged Care",
  legal: "Legal & Professional Services",
  business: "Business & Industry",
  construction: "Construction & Property",
  education: "Education & Training",
  resources: "Resources & Energy",
  other: "Other Sectors",
};

const SECTOR_ORDER: Exclude<Sector, "all">[] = [
  "finance",
  "health",
  "legal",
  "business",
  "construction",
  "education",
  "resources",
  "other",
];

function getActiveSector(value?: string): Sector {
  return SECTORS.some((sector) => sector.key === value)
    ? (value as Sector)
    : "all";
}

function AssociationOpening() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-teal font-sans font-medium text-xs tracking-[0.18em] uppercase mb-8">
          Why associations need specialist communications counsel
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading font-black text-white text-3xl leading-tight mb-6">
              Association communications is the most complex brief in Australia.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-5">
              Industry associations must simultaneously serve members, satisfy regulators,
              engage government, and withstand media scrutiny, often with the same
              communication, at the same time. No other type of organisation carries
              that load.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              CRC PR has worked with some of Australia&apos;s most prominent peak bodies for
              over 25 years. We understand what boards need, what members expect, and
              what regulators and journalists are looking for. Our approach is always
              tailored to the specific character of your membership, your board,
              and your sector.
            </p>

            <blockquote className="border-l-[3px] border-brand-gold pl-5">
              <p className="text-white/80 text-sm leading-relaxed italic mb-3">
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
                className="bg-white/[0.05] border border-white/10 rounded-lg p-5 pl-12 relative"
              >
                <span
                  className="absolute left-4 top-5 font-heading font-black text-2xl leading-none"
                  style={{ color: "rgba(201,168,76,0.35)" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <p className="text-white/85 text-sm font-medium mb-1.5">{title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8">
          {[
            { num: "25+", label: "Years advising Australian associations" },
            { num: "15+", label: "National and state peak bodies advised" },
            { num: "100%", label: "Client satisfaction rate" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center px-6">
              <p className="font-heading font-black text-brand-gold text-4xl leading-none mb-2">
                {num}
              </p>
              <p className="text-white/35 text-[10px] tracking-wide uppercase leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssociationsDirectory({ activeSector }: { activeSector: Sector }) {
  const grouped = ASSOCIATIONS.reduce<Record<string, Association[]>>(
    (acc, association) => {
      if (activeSector !== "all" && association.sector !== activeSector) return acc;
      if (!acc[association.sector]) acc[association.sector] = [];
      acc[association.sector].push(association);
      return acc;
    },
    {},
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-gold font-sans font-medium text-xs tracking-[0.18em] uppercase mb-3">
          Associations Directory
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading font-black text-navy text-4xl mb-2">
              Major Australian industry associations.
            </h2>
            <p className="text-charcoal-mid text-base max-w-xl">
              A reference directory of Australia&apos;s peak bodies and industry associations.
              Filter by sector. Every entry links to the association&apos;s official website.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {SECTORS.map(({ key, label }) => {
            const isActive = activeSector === key;
            const href =
              key === "all"
                ? "/clients/industry-associations"
                : `/clients/industry-associations?sector=${key}`;

            return (
              <Link
                key={key}
                href={href}
                className={`text-xs font-medium px-4 py-2 rounded transition-colors duration-150 ${
                  isActive
                    ? "bg-navy text-white"
                    : "bg-off-white border border-brand-border text-charcoal-mid hover:border-navy hover:text-navy"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="border border-brand-border rounded-lg overflow-hidden">
          {SECTOR_ORDER.map((sectorKey) => {
            const sectorAssociations = grouped[sectorKey];
            if (!sectorAssociations || sectorAssociations.length === 0) return null;

            return (
              <div key={sectorKey} className="border-b border-brand-border last:border-b-0">
                <div className="flex items-center gap-3 px-5 py-3 bg-off-white">
                  <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-charcoal-mid">
                    {SECTOR_LABELS[sectorKey]}
                  </span>
                  <span className="text-[9px] text-charcoal-mid bg-white border border-brand-border rounded-full px-2 py-0.5">
                    {sectorAssociations.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-border">
                  {sectorAssociations.map((association) => (
                    <a
                      key={association.abbr}
                      href={association.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 px-5 py-4 hover:bg-off-white transition-colors duration-150 group border-b border-brand-border last:border-b-0 sm:last:border-b"
                    >
                      <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 bg-[#E8EBF0] text-navy text-[9px] font-bold tracking-wide leading-tight text-center">
                        {association.abbr}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-medium text-charcoal leading-snug mb-0.5 group-hover:text-navy transition-colors">
                          {association.name}
                        </p>
                        <p className="text-[10px] text-charcoal-mid">{association.subsector}</p>
                      </div>
                      <span className="text-charcoal-mid text-xs flex-shrink-0 mt-1 group-hover:text-brand-gold transition-colors">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-5 pt-5 border-t border-brand-border">
          <p className="text-brand-teal text-sm font-medium">
            Association not listed?{" "}
            <a href="/contact" className="underline hover:text-brand-teal/80">
              Contact us →
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gold-light border border-brand-gold/30 rounded-lg p-5">
          <div className="w-10 h-10 bg-brand-gold rounded flex items-center justify-center flex-shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A2B4A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#7B5A00] text-sm font-medium mb-0.5">
              Is your association dealing with a communications challenge?
            </p>
            <p className="text-[#9A7200] text-xs leading-relaxed">
              CRC PR provides specialist counsel for peak bodies, regulatory crisis,
              advocacy, member communications, and board governance. Confidential,
              senior-level advice.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-brand-gold text-navy font-heading font-black text-[9px] tracking-widest uppercase px-5 py-2.5 rounded flex-shrink-0 hover:bg-brand-gold/90 transition-colors whitespace-nowrap"
          >
            BOOK A CONSULTATION →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function IndustryAssociationsPage({
  searchParams,
}: {
  searchParams?: { sector?: string };
}) {
  const activeSector = getActiveSector(searchParams?.sector);

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

      <AssociationOpening />

      <AssociationsDirectory activeSector={activeSector} />

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
