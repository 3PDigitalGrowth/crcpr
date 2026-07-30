import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";
import { T } from "@/components/editable";

export const metadata: Metadata = {
  title: "About CRC Public Relations",
  description:
    "CRC Public Relations is a boutique corporate PR firm providing trusted counsel for CEOs, directors, and executives across Australia, the Pacific, and internationally.",
};

const STATS = [
  { value: "2010", label: "Year of commencement" },
  { value: "International", label: "Media relations across the world" },
  { value: "100%", label: "Client satisfaction" },
] as const;

const proofItems = [
  {
    label: "Our firm",
    value: "Boutique by design",
    detail:
      "CRC Public Relations is deliberately structured to provide personal counsel by senior strategists.",
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
    portraitSrc: siteConfig.lyall.portraitSrc,
    size: "md" as const,
    name: "Lyall Mercer",
    role: "Co-founder & principal adviser",
    summary:
      "Former journalist; one of Australasia's leading public relations and crisis communications strategists.",
    bio: [
      "For more than 25 years, Lyall has advised national and international companies and organisations, governments, senior executives, politicians, celebrities and sporting figures across Australia, the Pacific, and internationally. He has coordinated international media conferences, walked clients though issues that have generated intense national and global media exposure, and has been a keynote speaker and presenter at corporate, industry and faith-based conferences across Australia and the USA. As an expert commentator in the area of crisis communications, Lyall has been quoted or interviewed by news organisations from around the world.",
      "Clients engage Lyall when the matter requires senior judgement, calm counsel, and direct access to someone who has seen how high-stakes situations actually unfold.",
    ],
  },
  {
    initials: "BG",
    portraitSrc: "/images/about/barbara-gorogh-portrait.png",
    size: "md" as const,
    name: "Barbara Gorogh",
    role: "Co-founder and director",
    summary:
      "Senior communications strategist focused on client relations, media relations and practitioner development.",
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
            className="object-cover object-center md:hidden"
          />
          <video
            className="absolute inset-0 hidden size-full object-cover md:block"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/about/hero-poster.jpg"
            aria-hidden
          >
            <source src="/images/about/hero-ambient.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,28,52,0.94)_0%,rgba(16,28,52,0.84)_46%,rgba(16,28,52,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-24 pb-12 md:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-end">
            <div className="max-w-4xl">
              <p className="mb-4 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                <span className="h-px w-8 bg-current opacity-50" aria-hidden />
                <T id="about.t1">
                About us
                </T>
              </p>
              <h1 className="font-heading text-white text-[3.25rem] sm:text-6xl lg:text-[4.5rem] leading-[0.98] tracking-[-0.02em] [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] max-w-4xl">
                <T id="about.t2">
                About CRC Public Relations
                </T>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-2xl">
                <T id="about.t3">
                Boutique corporate PR. Trusted counsel for CEOs, directors, and
                executives across Australia, the Pacific, and internationally.
                </T>
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light"
                >
                  <T id="about.t4">
                  Book a consultation
                  </T>
                </Link>
                <a
                  href={siteConfig.phone.href}
                  className="font-sans text-sm font-semibold text-brand-gold transition-colors hover:text-gold-light"
                >
                  Or call {siteConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="v2-glass-dark rounded-[1.75rem] p-6">
              <p className="text-white/45 text-xs mb-4"><T id="about.t20">Direct strategic counsel</T></p>
              <div className="space-y-4">
                <div>
                  <p className="font-heading text-brand-gold text-4xl leading-none">
                    {siteConfig.stats.yearsTrading}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    <T id="about.t5">
                    Years serving organisations across Australia and the Pacific
                    </T>
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-heading text-white text-xl">
                    <T id="about.t6">
                    Clear thinking, applied
                    </T>
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    <T id="about.t7">
                    A perspective that brings clarity and results, valued by our clients.
                    </T>
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
            <p className="mb-4 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
              <span className="h-px w-8 bg-current opacity-50" aria-hidden />
              <T id="about.t8">
              Why CRC Public Relations
              </T>
            </p>
            <h2 className="font-heading text-white text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              <T id="about.t9">
              CRC Public Relations exists to promote, protect and be advocates
              for our clients.
              </T>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {proofItems.map((item, __ti) => (
              <div
                key={`${item.label}-${item.value}`}
                className="v2-glass-dark rounded-[1.75rem] p-6"
              >
                <p className="text-brand-gold text-xs font-medium mb-3">
                  <T id={`about.proofItems.${__ti}.label`}>{item.label}</T>
                </p>
                <p className="font-heading text-white text-2xl">
                  <T id={`about.proofItems.${__ti}.value`}>{item.value}</T>
                </p>
                <p className="text-sm leading-relaxed mt-3 text-white/60">
                  <T id={`about.proofItems.${__ti}.detail`}>{item.detail}</T>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-[#F5F2EC]"
        />
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-navy text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              <T id="about.t10">
              How we work
              </T>
            </h2>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
              <T id="about.t11">
              Being &apos;boutique and personal&apos; means that unlike many PR
              companies, at CRC Public Relations you&apos;ll deal directly with
              senior and experienced PR and crisis communications strategists who take a
              genuine, long-term interest in your organisation. We take your
              needs and your success personally, and we have your back.
              </T>
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              <T id="about.t12">
              For over 15 years, CRC Public Relations has ensured that every
              client engagement is led by advisers with deep expertise in
              corporate communications, reputation management, and crisis
              response.
              </T>
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              <T id="about.t13">
              Our clients include national and international companies,
              charities, industry associations, independent schools, faith-based
              organisations, high-profile sports people and celebrities, and
              Pacific governments and NGOs.
              </T>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat, __ti) => (
              <div key={stat.label}>
                <p className="font-heading text-brand-gold text-4xl leading-none">
                  <T id={`about.STATS.${__ti}.value`}>{stat.value}</T>
                </p>
                <p className="text-charcoal-mid text-sm mt-2"><T id={`about.STATS.${__ti}.label`}>{stat.label}</T></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2.5rem] border border-brand-border bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="bg-navy p-8 md:p-12 flex flex-col justify-between gap-12">
                <div>
                  <p className="mb-4 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                    <span className="h-px w-8 bg-current opacity-50" aria-hidden />
                    <T id="about.t14">
                    Our mission
                    </T>
                  </p>
                  <h2 className="font-heading text-white text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
                    <T id="about.t15">
                    Promote, protect and advocate when reputation matters.
                    </T>
                  </h2>
                </div>
                <p className="text-white/65 text-[15px] leading-relaxed max-w-md">
                  <T id="about.t16">
                  The work is practical, direct and always tied to the client&apos;s
                  best interests.
                  </T>
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {missionItems.map((item, index) => (
                    <div
                      key={item}
                      className="relative rounded-[1.5rem] border border-brand-border bg-warm-white/70 backdrop-blur p-6"
                    >
                      <p className="font-heading text-brand-gold/70 tabular-nums text-sm mb-5">
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

      <InlineEnquirySection copyId="about"
        title="Start a direct conversation"
        body="If your situation is sensitive or high-stakes, the first step is a short, confidential conversation. You will speak with an experienced adviser."
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
            <p className="mb-4 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
              <span className="h-px w-8 bg-current opacity-50" aria-hidden />
              <T id="about.t17">
              Leadership team
              </T>
            </p>
            <h2 className="font-heading text-navy text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              <T id="about.t18">
              Our team
              </T>
            </h2>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
              <T id="about.t19">
              CRC Public Relations is intentionally principal-led. The people you
              meet are the people who shape the advice, lead the work, and stay
              close to the matter when judgement matters most.
              </T>
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member, __ti) => (
              <div
                key={member.name}
                className="rounded-[1.5rem] border border-brand-border bg-warm-white/70 backdrop-blur p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="relative shrink-0">
                    <div
                      className="absolute -inset-3 rounded-[2rem] border border-brand-gold/35"
                      aria-hidden
                    />
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
                      className="relative"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-brand-teal text-xs font-medium mb-3">
                      <T id={`about.teamMembers.${__ti}.initials`}>{member.initials}</T>
                    </p>
                    <h3 className="font-heading text-navy text-2xl leading-tight">
                      <T id={`about.teamMembers.${__ti}.name`}>{member.name}</T>
                    </h3>
                    <p className="text-brand-gold text-sm font-medium mt-2">
                      <T id={`about.teamMembers.${__ti}.role`}>{member.role}</T>
                    </p>
                    <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                      <T id={`about.teamMembers.${__ti}.summary`}>{member.summary}</T>
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

      <PageClosingCTA copyId="about"
        title="Considering engaging us?"
        body="If you have read this page and think CRC Public Relations may be the right partner for your organisation, the next step is a direct conversation. We will listen first, then come back with a clear view of whether we are the right fit and what that engagement could look like."
      />
    </>
  );
}
