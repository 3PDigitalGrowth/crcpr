import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { MEDIA } from "@/components/altkit/data";

export const metadata: Metadata = {
  title: "Sector Expertise",
  description:
    "We work with companies, family businesses, government departments, industry associations, independent schools, and organisations across every sector.",
};

const sectors = [
  {
    title: "Industry associations",
    body: "Regulatory crisis, member communications, board governance, public affairs, and advocacy campaigns for Australia's peak bodies and associations.",
    href: "/clients/industry-associations",
  },
  {
    title: "Schools & faith-based organisations",
    body: "Parent communications, media management, governance support, and crisis response for independent schools, Catholic schools, and faith-based organisations.",
    href: "/clients/schools-faith",
  },
  {
    title: "Companies & family businesses",
    body: "Direct communications counsel and reputation management for owners, directors, and executives of companies, family businesses, and professional services firms.",
    href: "/clients/corporate",
  },
  {
    title: "Government",
    body: "Federal and state government departments, statutory authorities, and public sector organisations requiring strategic communications and stakeholder engagement.",
    href: "/clients/government",
  },
];

const proofItems = [
  {
    label: "Sector depth",
    value: "Not generic PR",
    detail:
      "We work best where sector complexity shapes the communications problem as much as the message itself.",
  },
  {
    label: "Leadership access",
    value: "Principal access",
    detail:
      "Clients work directly with experienced advisers who understand high-stakes governance, media, and stakeholder pressure.",
  },
  {
    label: "Preparedness",
    value: "Proof and process",
    detail:
      "Each sector approach is informed by real-world issues, crisis response, and the practical needs of leadership teams under pressure.",
  },
] as const;

const faqs = [
  {
    question: "Which sectors does CRC Public Relations work with most often?",
    answer:
      "CRC Public Relations works most often with corporate organisations, government departments and authorities, industry associations, schools and faith-based organisations, and clients operating across the Pacific. The common thread is high-stakes communication rather than industry category alone.",
  },
  {
    question: "Do you adapt your advice by sector, or is it the same service everywhere?",
    answer:
      "The advisory model stays consistent: direct counsel from experienced advisers. The stakeholder logic, proof points, protocol, and communication sequence change materially by sector. That is why sector expertise matters.",
  },
  {
    question: "What if our situation crosses more than one sector?",
    answer:
      "That is common. Many matters involve overlapping pressures such as governance, regulation, media, and community trust. We help identify which audience and risk dynamics matter most, then build the communication approach around that reality.",
  },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery, video and the per-sector "free resource" lines were dropped. */

const P = "clients";

export default function ClientsPage() {
  return (
    <>
      <PageHero
        photo={{ src: MEDIA.bandSydneyHarbour, alt: "Sydney Harbour and the city skyline" }}
        copyId={P}
        asidePreset="clientsBreadth"
        eyebrow="Sector expertise"
        title="Deep expertise across every sector."
        description="We work directly with CEOs, directors, and executives who recognise the value of experienced counsel and treat reputation as a strategic asset."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      {/* ---------- THE SECTOR PAGES ---------- */}
      <Section tone="base" className="pb-11 md:pb-14">
        <Container>
          <div className="border-t border-line">
            {sectors.map((sector, i) => (
              <Reveal key={sector.href} delay={i * 0.05}>
                <Link
                  href={sector.href}
                  className="group grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr,2rem] md:items-baseline md:gap-8"
                >
                  <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                  <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight transition-transform duration-300 group-hover:translate-x-1.5">
                    {sector.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">{sector.body}</p>
                  <ArrowUpRight className="hidden h-5 w-5 self-center text-accent md:block" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- WHY SECTOR CONTEXT MATTERS ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t1`}>Why sector context matters</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t2`}>
                The communications challenge changes with the environment around it.
              </T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t3`}>
                Sector expertise matters because stakeholder expectations, governance realities, and the likely
                points of reputational pressure change dramatically between a company, a government agency, a peak
                body, or a school.
              </T>
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t4`}>
                  A message that feels disciplined in one environment can be tone-deaf in another.
                </T>
              </p>
              <p>
                <T id={`${P}.t5`}>
                  We work best in sectors where communication is inseparable from trust, authority, and strategic
                  judgement. That is why the pages below are organised around leadership pressure points rather than
                  broad industry labels.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t6`}>What changes by sector</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t7", "Stakeholder expectations", "t8", "The audience that matters most, and what they need to hear, differs sharply by sector."],
                  ["t9", "Governance realities", "t10", "Listed, public, member-based, and community institutions all carry different approval paths and accountability pressures."],
                  ["t11", "Pressure points", "t12", "The reputational flashpoints are rarely identical, even when the communication discipline required is equally high."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      <LeadMagnetBanner magnet="crisisReadinessChecklist" variant="light" />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="The communications challenge changes by sector. The stakes do not."
        items={[...proofItems]}
      />

      <InlineEnquirySection
        copyId={P}
        title="Need advice tailored to your sector?"
        body="If your situation is shaped by sector-specific governance, stakeholder, or community pressures, we can help you work out the right starting point and the right communication approach."
        bullets={[
          "Sector-aware message and stakeholder strategy",
          "Direct counsel for high-stakes matters",
          "Help identifying the right service and first move",
        ]}
        defaultMessage="We would like sector-specific communications advice."
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions about CRC Public Relations' sector expertise"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="Ready to discuss your communications needs?"
        body="If you are working through a sector-specific issue, an emerging reputation risk, or a pressure point that needs experienced judgment, we can help you work out the right next step."
        secondaryLabel="Explore My PR Partner"
        secondaryHref={siteConfig.myPrPartnerUrl}
        secondaryDescription="CRC Public Relations' training and support platform for communications teams, practitioners, and leaders who want practical guidance between major advisory engagements."
      />
    </>
  );
}
