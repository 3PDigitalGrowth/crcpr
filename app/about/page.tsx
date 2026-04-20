import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";
import { PAGE_HERO_ASIDES } from "@/config/pageHeroAsides";

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
      "Purpose-built for corporate reputation, issues, crisis, stakeholder pressure, and sensitive advisory work.",
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
    portraitSrc: "/images/about/lyall-mercer-portrait.png",
    size: "md" as const,
    name: "Lyall Mercer",
    role: siteConfig.lyall.title,
    summary: siteConfig.lyall.origin,
    bio: [
      "Lyall Mercer began his career as a journalist before building one of Australasia's most respected crisis communications and reputation advisory practices. His media background shapes how he reads pressure, understands the story behind the story, and prepares leaders for scrutiny that can move faster than their internal decision-making.",
      "Over more than 25 years, he has advised companies, governments, associations, schools, and senior executives across Australia, the Pacific, and internationally. Clients engage Lyall when the matter requires senior judgement, calm counsel, and direct access to someone who has seen how high-stakes situations actually unfold.",
    ],
  },
  {
    initials: "BG",
    portraitSrc: "/images/about/barbara-gorogh-portrait.png",
    size: "md" as const,
    name: "Barbara Gorogh",
    role: "Co-founder, My PR Partner",
    summary:
      "Senior communications strategist focused on training, practitioner development, and workshop delivery.",
    bio: [
      "Barbara Gorogh is the co-founder of My PR Partner, CRC Public Relations' training platform for communications practitioners and spokesperson development. Her work sits at the intersection of communications capability, practical training design, and the delivery of programmes that help leaders perform more confidently under pressure.",
      "She brings deep experience in communications education, practitioner support, and the translation of crisis and media strategy into practical development programmes. Barbara plays a central role in how CRC Public Relations turns senior advisory experience into structured training for organisations and professionals across Australia.",
    ],
  },
] as const;

export default function AboutPage() {
  const aside = PAGE_HERO_ASIDES.editorialInsights;

  return (
    <>
      {/* Unified hero: image, title & aside, proof strip */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-navy border-b border-white/5"
      >
        <div
          className="absolute inset-x-0 top-0 h-[560px] md:h-[720px] pointer-events-none"
          aria-hidden
        >
          <Image
            src="/images/about/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,43,74,0.72)] via-[rgba(26,43,74,0.92)] to-[#1A2B4A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-24 pb-12 md:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-end">
            <div className="max-w-4xl">
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                About us
              </p>
              <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.02] max-w-4xl">
                About CRC Public Relations
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-2xl">
                Boutique corporate PR. 25 years of trusted counsel for CEOs,
                directors, and senior executives across Australia, the Pacific,
                and internationally.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  Book a consultation
                </Link>
                <a
                  href={siteConfig.phone.href}
                  className="text-brand-gold text-sm font-heading font-black hover:text-gold-light transition-colors"
                >
                  Or call {siteConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.03] rounded-lg p-6 backdrop-blur-[2px]">
              <p className="text-white/35 text-xs mb-4">Direct senior counsel</p>
              <div className="space-y-4">
                <div>
                  <p className="font-heading font-black text-brand-gold text-2xl">
                    {siteConfig.stats.yearsTrading}
                  </p>
                  <p className="text-white/60 text-sm">
                    Years advising leaders in high-stakes environments
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-heading font-black text-white text-lg">
                    {aside.title}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    {aside.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="h-px bg-white/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-14 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-sans font-medium text-xs mb-4">
              Why CRC Public Relations
            </p>
            <h2 className="font-heading font-black text-white text-3xl">
              CRC Public Relations exists for leaders who need judgement, not
              volume.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {proofItems.map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="border border-white/10 bg-white/[0.03] rounded-lg p-6"
              >
                <p className="text-brand-gold text-xs font-medium mb-3">
                  {item.label}
                </p>
                <p className="font-heading font-black text-white text-2xl">
                  {item.value}
                </p>
                <p className="text-sm leading-relaxed mt-3 text-white/60">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading font-black text-navy text-3xl">
              How we work
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
        title="Start a direct conversation"
        body="If your situation is sensitive or high-stakes, the first step is a short, confidential conversation. You will speak with an experienced adviser, not an account team."
        bullets={[
          "Direct access to experienced advisers",
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
                  <PortraitPlaceholder
                    size={member.size}
                    initials={undefined}
                    imageSrc={member.portraitSrc}
                    imageAlt={member.name}
                    imageObjectClassName={
                      member.initials === "BG"
                        ? "object-[center_12%]"
                        : undefined
                    }
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <CapabilityDownload />
      </div>

      <PageClosingCTA
        title="Considering engaging us?"
        body="If you have read this page and think CRC Public Relations may be the right partner for your organisation, the next step is a direct conversation. We will listen first, then come back with a clear view of whether we are the right fit and what that engagement could look like."
      />
    </>
  );
}
