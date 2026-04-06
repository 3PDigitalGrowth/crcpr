"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  Download,
  Phone,
  Shield,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";
import { FAQSection } from "@/components/shared/FAQSection";
import { CaseStudies } from "@/components/shared/CaseStudies";
import { MyPRPartnerCTA } from "@/components/shared/MyPRPartnerCTA";
import { HomeCrisisLeadMagnet } from "@/components/home/HomeCrisisLeadMagnet";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

interface FAQItem {
  question: string;
  answer: string;
}

interface AlternativeHomeProps {
  faqItems: readonly FAQItem[];
}

const stats = [
  { value: siteConfig.stats.yearsTrading, label: "Years Experience" },
  { value: siteConfig.stats.continents, label: "Global Reach" },
  { value: siteConfig.stats.clientRetention, label: "Client Satisfaction" },
  { value: siteConfig.stats.professionsTrained, label: "Professionals Trained" },
];

const heroPillars = [
  {
    letter: "C",
    word: "Corporate",
    desc: "We help you communicate with clarity and confidence across every stakeholder group, internal and external.",
    href: "/services/corporate-communications",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    letter: "R",
    word: "Reputation",
    desc: "We assess your vulnerabilities and protect what matters most, before and after an issue surfaces.",
    href: "/services/reputation-management",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    letter: "C",
    word: "Crisis",
    desc: "We guide you through a crisis and help you prepare before one arrives. 24/7. Confidential. Decisive.",
    href: "/crisis",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const assessmentAreas = [
  "Media and spokesperson readiness",
  "Crisis planning and testing",
  "Stakeholder trust and relationships",
  "Digital and social media exposure",
  "Governance and board communications",
];

const sectorCards = [
  {
    title: "Private Companies & Family Businesses",
    description:
      "Direct, personal counsel for owners and directors navigating reputation, media, and stakeholder challenges where the business and the brand are inseparable.",
    href: "/clients/corporate",
  },
  {
    title: "Government & Public Sector",
    description:
      "Stakeholder, programme, and public communications shaped for scrutiny, accountability, and the unique pressures of the public sector environment.",
    href: "/clients/government",
  },
  {
    title: "Industry Associations",
    description:
      "Member, advocacy, and governance communications for peak bodies under pressure. We understand the politics of member organisations and the scrutiny that comes with public advocacy.",
    href: "/clients/industry-associations",
  },
  {
    title: "Independent Schools & Faith-Based Organisations",
    description:
      "Parent, board, and incident communications where trust, care, and legal precision must work together. We have helped schools through some of the most sensitive situations in the sector.",
    href: "/clients/schools-faith",
  },
  {
    title: "Legal & Professional Services",
    description:
      "Authority-building, issue response, and partner-level communications for firms whose reputation is their primary business asset.",
    href: "/clients/corporate",
  },
  {
    title: "Health & Aged Care",
    description:
      "High-stakes stakeholder and reputation advice in heavily scrutinised care environments where public confidence is everything.",
    href: "/clients/corporate",
  },
  {
    title: "Pacific Governments & NGOs",
    description:
      "Cross-cultural communications and stakeholder engagement across Pacific contexts. We are the only Australian corporate PR firm with deep Pacific expertise.",
    href: "/pacific",
  },
];

function AlternativeHero() {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col bg-gradient-to-b from-navy via-navy to-navy-mid overflow-hidden"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <div className="hero-accent-line" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative flex-1 max-w-7xl mx-auto px-6 w-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 pt-12 pb-8 lg:pt-16 lg:pb-10">
          <div className="lg:col-span-7 relative z-10">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
                Boutique Corporate PR · Brisbane · Australia · The Pacific
              </p>
            </AnimateIn>

            <AnimateIn delay={150}>
              <h1 className="font-heading font-black text-white text-4xl md:text-6xl lg:text-[64px] leading-[0.95] mt-4">
                Senior advice for senior people.
              </h1>
            </AnimateIn>

            <AnimateIn delay={300}>
              <p className="text-[rgba(245,242,236,0.75)] text-base lg:text-lg leading-relaxed w-full mt-4">
                When your reputation is at stake, you need experienced counsel
                you can trust, not a junior account manager reading from a
                playbook. CRC Public Relations is a boutique corporate PR firm
                where every client works directly with a senior adviser. We help
                CEOs, board chairs, and senior executives across private
                companies, industry associations, government, and the
                not-for-profit sector to protect their reputation, manage issues
                before they escalate, and navigate crises with confidence.
              </p>
            </AnimateIn>

            <AnimateIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/contact"
                  className="btn-lift inline-flex items-center justify-center gap-2 bg-brand-gold text-navy font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-6 py-3 hover:bg-gold-light transition"
                >
                  <Phone className="size-4" strokeWidth={2} aria-hidden />
                  Book a Confidential Consultation
                </Link>
                <Link
                  href="/contact?source=capability-statement"
                  className="btn-lift inline-flex items-center justify-center gap-2 border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-6 py-3 hover:bg-brand-gold/10 transition"
                >
                  <Download className="size-4" strokeWidth={2} aria-hidden />
                  Request Capability Statement
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={600}>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-sans font-medium text-white/40 text-[11px] tracking-widest uppercase">
                  Lyall Mercer: As Seen In
                </p>
                <div className="flex flex-wrap gap-5 mt-2">
                  {siteConfig.lyall.mediaLinks.map((link, i) => (
                    <AnimateIn
                      key={link.name}
                      delay={700 + i * 100}
                      as="span"
                      className="inline-block"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading font-black text-white/25 text-sm hover:text-white/50 transition"
                      >
                        {link.name}
                      </a>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <PortraitPlaceholder size="lg" className="mx-auto" />
          </div>
        </div>
      </div>

      <div
        className="relative bg-[#0F1F36] border-t border-white/[0.06]"
        role="list"
        aria-label="CRC Public Relations core practice areas"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
            {heroPillars.map((pillar) => (
              <Link
                key={pillar.word}
                href={pillar.href}
                role="listitem"
                className="flex items-start gap-3 px-0 md:px-5 py-3.5 group transition-colors duration-150 hover:bg-white/[0.03] first:md:pl-0 last:md:pr-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold/50"
              >
                <span
                  className="font-heading font-black text-brand-gold text-2xl leading-none mt-0.5 w-5 flex-shrink-0 select-none"
                  aria-hidden="true"
                >
                  {pillar.letter}
                </span>

                <div className="flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {pillar.icon}
                </div>

                <div className="min-w-0">
                  <p className="font-heading font-black text-white text-sm tracking-wide mb-1 group-hover:text-brand-gold transition-colors">
                    {pillar.word}
                  </p>
                  <p className="text-white/35 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[#0F1F36]">
        <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.08] py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={i < 3 ? "lg:border-r lg:border-white/[0.08]" : ""}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-heading font-black text-brand-gold text-2xl lg:text-3xl"
                />
                <p className="font-sans font-medium text-white/40 text-[10px] tracking-widest uppercase mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AlternativePracticeAreas() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-navy-mid/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase text-left">
            Our practice areas
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
            Corporate. Reputation.
            <br />
            Crisis.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
          <AnimateIn className="lg:col-span-7">
            <div className="relative bg-off-white rounded-lg p-10 h-full card-border-expand group">
              <div className="h-[3px] bg-brand-gold w-16 group-hover:w-full transition-all duration-700 mb-8" />
              <Building2
                className="text-brand-gold"
                size={36}
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="font-heading font-black text-navy text-2xl mt-5">
                Corporate Communications
              </h3>
              <p className="text-charcoal-mid text-base leading-relaxed mt-4 max-w-2xl">
                Strategic counsel for how your organisation communicates,
                internally and externally. Whether you are managing stakeholder
                relationships, positioning your leadership team, or navigating a
                sensitive announcement, we provide the experienced guidance that
                senior leaders expect. We work directly with you, not through
                layers of account managers, to ensure your messaging is precise,
                consistent, and credible.
              </p>
              <Link
                href="/services/corporate-communications"
                className="inline-flex items-center gap-2 text-brand-gold font-sans font-medium text-sm mt-6 group-hover:gap-3 transition-all"
              >
                Explore corporate communications <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </AnimateIn>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimateIn delay={150}>
              <div className="relative bg-off-white rounded-lg p-8 card-border-expand group">
                <div className="h-[3px] bg-brand-gold w-12 group-hover:w-full transition-all duration-700 mb-6" />
                <Shield
                  className="text-brand-gold"
                  size={28}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="font-heading font-black text-navy text-xl mt-4">
                  Reputation Management
                </h3>
                <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                  Your reputation is the single most valuable asset your
                  organisation holds, and also the most difficult to rebuild
                  once damaged. We help you understand where your
                  vulnerabilities sit, put the right protections in place, and
                  respond effectively when your reputation comes under pressure.
                  Our approach is practical and tailored to your organisation,
                  because no two reputation risks are the same.
                </p>
                <Link
                  href="/services/reputation-management"
                  className="inline-flex items-center gap-2 text-brand-gold font-sans font-medium text-sm mt-6 group-hover:gap-3 transition-all"
                >
                  Explore reputation management <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="relative bg-off-white rounded-lg p-8 card-border-expand group">
                <div className="h-[3px] bg-brand-gold w-12 group-hover:w-full transition-all duration-700 mb-6" />
                <AlertCircle
                  className="text-brand-gold"
                  size={28}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="font-heading font-black text-navy text-xl mt-4">
                  Crisis Communications
                </h3>
                <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                  When a crisis breaks, the decisions you make in the first
                  fifteen minutes will define the outcome. We have been in the
                  room during some of Australia&apos;s most significant crises,
                  advising the people who had to make those calls. We bring that
                  experience to every engagement. 24/7. Confidential. Decisive.
                </p>
                <Link
                  href="/services/crisis-communications"
                  className="inline-flex items-center gap-2 text-brand-gold font-sans font-medium text-sm mt-6 group-hover:gap-3 transition-all"
                >
                  Explore crisis communications <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn>
          <div className="mt-20 md:mt-28 mb-4 max-w-4xl mx-auto text-center">
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mb-8" />
            <blockquote className="font-heading font-black text-navy text-xl md:text-[28px] leading-snug tracking-tight">
              &ldquo;Being boutique means you deal directly with senior advisers
              who take a genuine, long-term interest in your organisation. That
              is a deliberate choice. It is how we do our best work.&rdquo;
            </blockquote>
            <p className="font-sans font-medium text-brand-gold text-sm mt-6 tracking-wide">
              - Lyall Mercer, Founder
            </p>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mt-8" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function AlternativeAssessment() {
  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid/50 to-navy" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-teal text-xs tracking-[0.14em] uppercase">
                Free Assessment
              </p>
              <h2 className="font-heading font-black text-white text-3xl md:text-[38px] leading-[1.1] mt-3">
                How exposed is your organisation&apos;s reputation?
              </h2>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="space-y-4 mt-6">
                <p className="text-white/70 text-base leading-relaxed">
                  Most organisations do not discover their reputation
                  vulnerabilities until a crisis is already underway. Our
                  Reputation Vulnerability Assessment takes three minutes and
                  identifies exactly where you are exposed, across governance,
                  media, social media, stakeholder relationships, and crisis
                  preparedness.
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  Used by CEOs, communications directors, and board chairs
                  across Australia.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={250} className="lg:col-span-5">
            <div className="relative bg-navy-mid/80 backdrop-blur-sm border border-brand-gold/15 rounded-lg p-8 card-border-expand overflow-hidden">
              <h3 className="text-white font-heading font-black text-lg">
                Reputation Vulnerability Assessment
              </h3>
              <div className="mt-5 space-y-0">
                {assessmentAreas.map((area, i) => (
                  <AnimateIn key={area} delay={350 + i * 80} as="div">
                    <div className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                      <Check
                        className="text-brand-teal shrink-0"
                        size={16}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className="text-white/70 text-sm">{area}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
              <Link
                href="/services/reputation-management#reputation-assessment"
                className="btn-lift block bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] mt-6 hover:bg-gold-light transition text-center"
              >
                Start the Free Assessment →
              </Link>
              <p className="text-white/50 text-xs mt-3 text-center">
                Three minutes. No commitment. Results delivered by email.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function AlternativeClients() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
                Who We Work With
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
                Trusted by senior leaders across every sector.
              </h2>
              <p className="text-charcoal-mid text-base leading-relaxed mt-6 max-w-xl">
                Our clients are CEOs, managing directors, board chairs, and
                senior executives who need experienced, direct advice when the
                stakes are highest. They choose CRC PR because they work with
                the people who actually do the work, not a team of junior staff
                learning on the job.
              </p>
              <p className="text-charcoal-mid text-base leading-relaxed mt-4 max-w-xl">
                We stand with our clients around the clock, proactively helping
                them grow their public presence and working alongside them
                through times of crisis. We take their success personally, and
                we have their back.
              </p>
              <div className="flex flex-col gap-3 mt-8">
                <div className="rounded-xl border border-brand-border bg-navy p-5 text-left">
                  <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3">
                    Work With CRC PR
                  </p>
                  <p className="font-heading font-black text-white text-lg leading-snug">
                    Start a confidential conversation with a senior adviser.
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed mt-3">
                    Tell us about the issue, sector pressure, or communications
                    challenge you are facing and we will help identify the right
                    starting point.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-5 py-3 mt-4 hover:bg-gold-light transition"
                  >
                    WORK WITH US <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
                <MyPRPartnerCTA
                  compact
                  title="Not ready for a retainer?"
                  description="Start with My PR Partner for practical communications training, resources, and support designed for teams building internal capability."
                  buttonLabel="START WITH MY PR PARTNER"
                  className="text-left"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectorCards.map((sector, i) => (
                <AnimateIn key={sector.title} delay={i * 80}>
                  <Link
                    href={sector.href}
                    className="card-border-expand block bg-off-white border border-brand-border/30 rounded-xl p-6 hover:border-brand-gold/20 hover:shadow-md hover:shadow-brand-gold/5 transition-all duration-300 group min-h-[138px]"
                  >
                    <p className="font-sans font-medium text-navy text-sm group-hover:text-brand-gold transition-colors">
                      {sector.title}
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed mt-3">
                      {sector.description}
                    </p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlternativeAbout() {
  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-mid" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <AnimateIn className="lg:col-span-5">
            <div className="relative lg:-ml-4 xl:-ml-8">
              <PortraitPlaceholder size="lg" />
            </div>
          </AnimateIn>

          <div className="lg:col-span-7">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-teal text-xs tracking-[0.14em] uppercase">
                The Adviser Behind the Firm
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <h2 className="font-heading font-black text-white text-3xl md:text-[42px] leading-[1.05] mt-3">
                Lyall Mercer
              </h2>
              <p className="text-brand-gold font-sans font-medium text-lg mt-2">
                Founder &amp; Principal Adviser
              </p>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="space-y-5 mt-8">
                <p className="text-white/75 text-base leading-relaxed">
                  Lyall Mercer began his career as a journalist, writing for
                  some of Australia&apos;s leading newspapers. That foundation,
                  understanding exactly how media thinks, moves, and decides
                  what becomes a story, is what makes his approach to corporate
                  communications and crisis advice unlike any other.
                </p>
                <p className="text-white/75 text-base leading-relaxed">
                  Over the past 25 years, Lyall has built a reputation across
                  Australasia as a trusted adviser in corporate public
                  relations, reputation and issues management, and crisis
                  communications. He has advised CEOs, directors, politicians,
                  and senior executives across private companies, industry
                  associations, government departments, and not-for-profit
                  organisations, and has worked with clients and media on every
                  continent.
                </p>
                <p className="text-white/75 text-base leading-relaxed">
                  Clients choose to work with Lyall because they deal directly
                  with him. There is no handoff to a junior team. When you
                  engage CRC PR, you get the adviser whose name is on the door.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={350}>
              <blockquote className="border-l-[3px] border-brand-gold pl-6 mt-8">
                <p className="font-sans italic text-white/85 text-base leading-relaxed">
                  &ldquo;You have fifteen minutes to respond to an emerging
                  crisis before you start to lose control of the message.&rdquo;
                </p>
                <cite className="font-sans font-medium text-brand-gold text-sm mt-3 not-italic block">
                  - Lyall Mercer
                </cite>
              </blockquote>
            </AnimateIn>

            <AnimateIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/about/lyall-mercer"
                  className="btn-lift inline-flex items-center gap-2 text-brand-gold font-sans font-medium text-sm hover:gap-3 transition-all"
                >
                  Read Lyall&apos;s full profile <ArrowRight size={14} />
                </Link>
                <a
                  href={siteConfig.lyallMercerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift inline-flex items-center gap-2 text-brand-teal font-sans font-medium text-sm hover:gap-3 transition-all"
                >
                  View media appearances <ArrowRight size={14} />
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlternativeCTA() {
  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-off-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <AnimateIn>
            <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
              Ready to Work With Us
            </p>
          </AnimateIn>

          <AnimateIn delay={150}>
            <h2 className="text-white font-heading font-black text-3xl md:text-[42px] leading-[1.08] mt-4">
              Your reputation is your most valuable asset. Let us help you
              protect it.
            </h2>
          </AnimateIn>

          <AnimateIn delay={300}>
            <p className="text-white/70 text-base leading-relaxed mt-6 mb-12">
              Whether you need experienced advice on a complex issue, help
              building your public profile, a communications strategy for your
              organisation, or trusted counsel during a crisis, we are your
              adviser and advocate. We believe in you, and we have your back.
            </p>
          </AnimateIn>

          <div className="max-w-[500px] mx-auto flex flex-col gap-4">
            <AnimateIn delay={450}>
              <Link
                href="/contact"
                className="btn-lift bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-gold-light transition inline-flex items-center justify-center gap-2"
              >
                Book a Confidential Consultation <ArrowRight size={14} aria-hidden />
              </Link>
            </AnimateIn>

            <AnimateIn delay={550}>
              <a
                href={siteConfig.phone.href}
                className="border border-brand-gold/50 text-brand-gold font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-brand-gold/10 transition inline-flex items-center justify-center gap-2"
              >
                Call Us: {siteConfig.phone.display}{" "}
                <ArrowRight size={14} aria-hidden />
              </a>
            </AnimateIn>

            <AnimateIn delay={650}>
              <MyPRPartnerCTA
                variant="dark"
                compact
                title="Not ready for a retainer?"
                description="My PR Partner gives teams and leaders practical PR training, tools, and communications support when they need capability-building before a full advisory engagement."
                buttonLabel="EXPLORE MY PR PARTNER"
                className="mt-2 text-left"
              />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AlternativeHome({ faqItems }: AlternativeHomeProps) {
  return (
    <>
      <AlternativeHero />
      <AlternativePracticeAreas />
      <AlternativeAssessment />
      <AlternativeClients />
      <AlternativeAbout />
      <HomeTestimonials />

      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3">
            Client Outcomes
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-4">
            Results that speak for themselves.
          </h2>
          <p className="text-charcoal-mid text-base max-w-2xl mb-12 leading-relaxed">
            We don&apos;t discuss client engagements without permission. These
            three anonymised outcomes represent the kind of work we do when the
            stakes are highest.
          </p>
          <CaseStudies />
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="text-brand-gold font-medium text-sm hover:underline"
            >
              Read more about how we work →
            </Link>
          </div>
        </div>
      </section>

      <HomeCrisisLeadMagnet />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3 text-center">
            Common Questions
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-10 text-center">
            Frequently asked questions.
          </h2>
          <FAQSection title={false} embedded items={faqItems} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-brand-teal text-sm font-medium hover:underline"
            >
              View all questions →
            </Link>
          </div>
        </div>
      </section>

      <AlternativeCTA />
    </>
  );
}
