import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";

export const metadata: Metadata = {
  title: "About CRC Public Relations",
  description:
    "CRC Public Relations is a boutique corporate PR firm providing trusted counsel for CEOs, directors, and executives across Australia, the Pacific, and internationally.",
};

const STATS = [
  { value: "25+", label: "Years of team experience" },
  { value: "Worldwide", label: "Supporting clients around the world" },
  { value: "100%", label: "Client satisfaction" },
] as const;

const proofItems = [
  {
    label: "Firm model",
    value: "Boutique by design",
    detail:
      "CRC Public Relations is deliberately structured to provide personal counsel by experienced strategists.",
  },
  {
    label: "Operating focus",
    value: "Objective, honest advice",
    detail:
      "Providing objective, honest advice to clients that serves their best interests and helps meet their objectives.",
  },
  {
    label: "Regional reach",
    value: "Australia, NZ and Pacific",
    detail:
      "Clients include companies, governments, associations, charities, schools, and faith-based organisations.",
  },
] as const;

const missionItems = [
  "To promote, protect and be advocates for our clients.",
  "To stand with them 24/7, proactively helping them grow and working with them to weather the storm through times of crisis.",
  "To provide objective, honest advice to clients that serves their best interests and helps meet their objectives.",
  "To always be looking ahead on behalf of our clients, helping them to identify vulnerabilities, minimise risks, and protect their reputation, brand, values, and revenue.",
] as const;

const teamMembers = [
  {
    initials: "LM",
    portraitSrc: "/images/about/lyall-mercer-portrait.png",
    size: "md" as const,
    name: "Lyall Mercer",
    role: "Co-founder & principal adviser",
    summary:
      "Former journalist; one of Australasia's leading public relations and crisis communications strategists.",
    bio: [
      "Lyall's career spans journalism, public relations, and high-stakes communications for national and international companies and organisations, governments, executives, politicians, celebrities and sporting figures across Australia, the Pacific, and internationally. He has coordinated international media conferences, walked clients through issues that have generated intense national and global media exposure, and has been a keynote speaker and presenter at corporate, industry and faith-based conferences across Australia and the USA. As an expert commentator in the area of crisis communications, Lyall has been quoted or interviewed by news organisations from around the world.",
      "Clients engage Lyall when the matter requires experienced judgement, calm counsel, and direct access to someone who has seen how high-stakes situations actually unfold.",
    ],
  },
  {
    initials: "BG",
    portraitSrc: "/images/about/barbara-gorogh-portrait.png",
    size: "md" as const,
    name: "Barbara Gorogh",
    role: "Co-founder and director",
    summary:
      "Experienced communications strategist focused on client relations, media relations and practitioner development.",
    bio: [
      "Barbara has worked across Australia and the Pacific region for more than a decade, dealing with companies, organisations and governments in the area of corporate communications and reputation management. She has overseen major online corporate and government communications campaigns designed to achieve vital client objectives, and developed a specialty area in reputation management in the B2C environment. Barbara also oversees digital and social media strategies for our clients - which form an important part of every public relations, reputation and crisis strategy - and the development of our digital team based across Australia and the Pacific.",
      "Barbara's work in the media monitoring space ensures our clients are ahead of the stories that matter.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Unified hero: image, title, right box, proof strip */}
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
                Boutique corporate PR. Trusted counsel for CEOs, directors, and
                executives across Australia, the Pacific, and internationally.
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
              CRC Public Relations exists to promote, protect and be advocates
              for our clients.
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
              Being &quot;boutique and personal&quot; means that unlike many PR
              companies, at CRC Public Relations you&apos;ll deal directly with
              experienced PR and crisis communications strategists who take a
              genuine, long-term interest in your organisation. We take your
              needs and your success personally, and we have your back.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              For over 15 years, CRC Public Relations has ensured that every
              client engagement is led by advisers with deep expertise in
              corporate communications, reputation management, and crisis
              response.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              Our clients include national and international companies,
              charities, industry associations, independent schools, faith-based
              organisations, high-profile sports people and celebrities, and
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

      <section className="bg-off-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[28px] border border-brand-border bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="bg-navy p-8 md:p-12 flex flex-col justify-between gap-12">
                <div>
                  <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                    Our mission
                  </p>
                  <h2 className="font-heading font-black text-white text-3xl md:text-4xl leading-tight">
                    Promote, protect and advocate when reputation matters.
                  </h2>
                </div>
                <p className="text-white/65 text-[15px] leading-relaxed max-w-md">
                  The work is practical, direct and always tied to the client&apos;s
                  best interests.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {missionItems.map((item, index) => (
                    <div
                      key={item}
                      className="relative rounded-2xl border border-brand-border bg-off-white p-6"
                    >
                      <p className="font-heading font-black text-brand-gold text-sm mb-5">
                        0{index + 1}
                      </p>
                      <p className="text-charcoal text-[15px] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
              CRC Public Relations is intentionally principal-led. The people you
              meet are the people who shape the advice, lead the work, and stay
              close to the matter when judgement matters most.
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
