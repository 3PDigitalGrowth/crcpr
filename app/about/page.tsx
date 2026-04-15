import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";

export const metadata: Metadata = {
  title: "About CRC Public Relations",
  description:
    "CRC Public Relations is a boutique corporate PR firm founded by Lyall Mercer. 25 years of experience across Australia, the Pacific, and internationally.",
};

const STATS = [
  { value: "25+", label: "Years of experience" },
  { value: "Every continent", label: "Global reach" },
  { value: "100%", label: "Client satisfaction" },
  { value: "500+", label: "Professionals trained" },
] as const;

const proofItems = [
  {
    label: "Firm model",
    value: "Boutique by design",
    detail:
      "CRC Public Relations is deliberately structured around direct senior counsel rather than a layered agency model.",
  },
  {
    label: "Operating focus",
    value: "High-stakes only",
    detail:
      "The firm is built for corporate reputation, issues, crisis, stakeholder pressure, and sensitive advisory work.",
  },
  {
    label: "Regional reach",
    value: "Australia and Pacific",
    detail:
      "Clients include companies, governments, associations, schools, and Pacific organisations operating in demanding environments.",
  },
] as const;

const teamMembers = [
  {
    initials: "LM",
    size: "md" as const,
    name: "Lyall Mercer",
    role: siteConfig.lyall.title,
    summary: siteConfig.lyall.origin,
    bio: [
      "Lyall Mercer began his career as a journalist before building one of Australasia's most respected crisis communications and reputation advisory practices. His media background shapes how he reads pressure, understands the story behind the story, and prepares leaders for scrutiny that can move faster than their internal decision-making.",
      "Over more than 25 years, he has advised companies, governments, associations, schools, and senior executives across Australia, the Pacific, and internationally. Clients engage Lyall when the matter requires senior judgement, calm counsel, and direct access to someone who has seen how high-stakes situations actually unfold.",
    ],
    links: [
      { label: "Full profile", href: "/about/lyall-mercer", internal: true },
      { label: "lyallmercer.com", href: siteConfig.lyallMercerUrl },
      { label: "LinkedIn", href: siteConfig.lyallLinkedIn },
      { label: "X / Twitter", href: siteConfig.lyallTwitter },
    ],
  },
  {
    initials: "BG",
    size: "md" as const,
    name: "Barbara Gorogh",
    role: "Co-founder, My PR Partner",
    summary:
      "Senior communications strategist focused on training, practitioner development, and workshop delivery.",
    bio: [
      "Barbara Gorogh is the co-founder of My PR Partner, CRC Public Relations' training platform for communications practitioners and spokesperson development. Her work sits at the intersection of communications capability, practical training design, and the delivery of programmes that help leaders perform more confidently under pressure.",
      "She brings deep experience in communications education, practitioner support, and the translation of crisis and media strategy into practical development programmes. Barbara plays a central role in how CRC Public Relations turns senior advisory experience into structured training for organisations and professionals across Australia.",
    ],
    links: [
      { label: "My PR Partner", href: siteConfig.myPrPartnerUrl },
      { label: "CRC Public Relations LinkedIn", href: siteConfig.linkedInUrl },
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        asidePreset="editorialInsights"
        eyebrow="About us"
        title="About CRC Public Relations"
        description="Boutique corporate PR. 25 years of trusted counsel for CEOs, directors, and senior executives across Australia, the Pacific, and internationally."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/about/hero.webp",
          alt: "Brisbane CBD and Story Bridge at golden hour from riverside with warm reflections",
        }}
      />

      <PageProofStrip
        title="CRC Public Relations exists for leaders who need judgement, not volume."
        items={[...proofItems]}
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading font-black text-navy text-3xl">
              The firm
            </h2>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
              CRC Public Relations was founded on a simple principle: that
              organisations facing their most significant communications
              challenges deserve direct access to experienced, senior advisers,
              not account managers or junior staff.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              For over 25 years, CRC Public Relations has provided that access. We are a
              boutique firm by design. Every client engagement is led by a
              senior adviser with deep expertise in corporate communications,
              reputation management, and crisis response.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              Our clients include national and international companies, Federal and State
              Government departments, industry associations, independent schools,
              faith-based organisations, health and aged care providers, and
              Pacific governments and NGOs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-black text-brand-gold text-4xl">
                  {stat.value}
                </p>
                <p className="text-charcoal-mid text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-navy text-3xl">
            Our mission
          </h2>
          <p className="italic text-charcoal text-base leading-relaxed mt-6">
            Being boutique and personal means that unlike many PR firms, at CRC
            Public Relations you will deal directly with senior and experienced
            advisers who take a genuine, long-term interest in your organisation.
          </p>
        </div>
      </section>

      <InlineEnquirySection
        title="Need to speak with the firm directly?"
        body="CRC Public Relations exists for organisations that want senior communications counsel from the first conversation. If your situation is sensitive, high-stakes, or too important for a junior handoff, get in touch."
        bullets={[
          "Direct access to experienced senior advisers",
          "Support across corporate, crisis, reputation, and stakeholder matters",
          "Confidential review of the situation before recommending a next step",
        ]}
        defaultMessage="We would like to speak directly with CRC Public Relations about a sensitive communications matter."
        variant="white"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-sans font-medium text-xs mb-4">
              Leadership team
            </p>
            <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight">
              Our team
            </h2>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
              CRC Public Relations is intentionally senior-led. The people you meet are the
              people who shape the advice, lead the work, and stay close to the
              matter when judgement matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-[28px] border border-brand-border bg-off-white p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* TODO: Replace with real portrait from photo shoot */}
                  <PortraitPlaceholder
                    size={member.size}
                    initials={member.initials === "LM" ? undefined : member.initials}
                  />

                  <div className="flex-1">
                    <p className="text-brand-teal text-xs font-medium mb-3">
                      {member.initials}
                    </p>
                    <h3 className="font-heading font-black text-navy text-2xl leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-brand-gold text-sm font-medium mt-2">
                      {member.role}
                    </p>
                    <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                      {member.summary}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  {member.bio.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-charcoal-mid text-[15px] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-brand-border">
                  <div className="rounded-xl bg-white border border-brand-border p-5">
                    <p className="text-brand-teal text-xs font-medium mb-3">
                      Contact
                    </p>
                    <div className="space-y-2 text-sm">
                      <a
                        href={`mailto:${siteConfig.email.newBusiness}`}
                        className="block text-navy hover:text-brand-gold transition-colors"
                      >
                        {siteConfig.email.newBusiness}
                      </a>
                      <a
                        href={siteConfig.phone.href}
                        className="block text-navy hover:text-brand-gold transition-colors"
                      >
                        {siteConfig.phone.display}
                      </a>
                      <p className="text-charcoal-mid leading-relaxed">
                        {siteConfig.address.street}, {siteConfig.address.city}{" "}
                        {siteConfig.address.state} {siteConfig.address.postcode}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white border border-brand-border p-5">
                    <p className="text-brand-teal text-xs font-medium mb-3">
                      Links
                    </p>
                    <div className="space-y-2 text-sm">
                      {member.links.map((link) =>
                        "internal" in link && link.internal ? (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="block text-navy hover:text-brand-gold transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-navy hover:text-brand-gold transition-colors"
                          >
                            {link.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <CapabilityDownload />
      </div>

      <PageClosingCTA
        title="Need to speak with the firm directly?"
        body="We work with organisations that want senior communications counsel from the first conversation. If your situation is sensitive, high-stakes, or simply too important for a junior handoff, get in touch."
      />
    </>
  );
}
