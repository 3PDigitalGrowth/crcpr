"use client";
import Image from "next/image";
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
import { FAQSection } from "@/components/shared/FAQSection";
import { CaseStudies } from "@/components/shared/CaseStudies";

import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { MediaOutletLogoLink } from "@/components/shared/MediaOutletLogoLink";

interface FAQItem {
  question: string;
  answer: string;
}

interface AlternativeHomeProps {
  faqItems: readonly FAQItem[];
}


const heroPillars = [
  {
    letter: "C",
    word: "Corporate",
    desc: "We help you communicate with clarity and confidence to every stakeholder group, internal and external.",
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
    desc: "We assess your vulnerabilities, protect and defend your reputation, and guide you through challenging issues.",
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
    desc: "We assist you to prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
    href: "/services/crisis-communications",
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

const practiceAreas = [
  {
    title: "Corporate Communications",
    description:
      "Strategic communications counsel that supports your overall objectives, both internally and externally. Whether this be managing stakeholder relationships, achieving media coverage that positions you as a trusted voice of authority, navigating a sensitive announcement, dealing with a challenging media or stakeholder issue, or other needs, we provide the experienced guidance that leaders expect. Our team works directly with you to ensure your messaging is precise, consistent, credible, and effective.",
    href: "/services/corporate-communications",
    linkLabel: "Explore corporate communications",
    imageSrc: "/images/practice-corporate.png",
    imageAlt: "Executive reviewing business strategy documents in a boardroom",
    imageWidth: 1024,
    imageHeight: 686,
    imageOnLeft: true,
    icon: Building2,
  },
  {
    title: "Reputation Management",
    description:
      "Your reputation is the single most valuable asset your organisation holds, and also the most difficult to rebuild once damaged. In this new media, activist and AI age, companies and organisations are more vulnerable than ever before. We help you to identify areas of vulnerability, mitigate risk, and communicate and respond effectively when company, executive or personal reputations are at stake. We will provide objective, honest advice that serves your best interests.",
    href: "/services/reputation-management",
    linkLabel: "Explore reputation management",
    imageSrc: "/images/practice-reputation.png",
    imageAlt: "Confidential reputation exposure review booklet on a desk beside a laptop and coffee",
    imageWidth: 1024,
    imageHeight: 686,
    imageOnLeft: false,
    icon: Shield,
  },
  {
    title: "Crisis Communications",
    description:
      "We help you become crisis ready. When a crisis breaks, the decisions you make in the first 15 minutes can impact the outcome. It is at these times you need objective, strategic advice that only comes from vast experience. We have walked with clients through high profile public issues and crises across Australasia and internationally for more than 20 years and are your guiding force. The wrong advice can lead to disaster. In times of stress, our \u2018outside\u2019 advice and calmness under pressure is vital. 24/7. Confidential. Decisive.",
    href: "/services/crisis-communications",
    linkLabel: "Explore crisis communications",
    imageSrc: "/images/practice-crisis.png",
    imageAlt: "Executive walking past a boardroom while managing an urgent issue",
    imageWidth: 1024,
    imageHeight: 686,
    imageOnLeft: true,
    icon: AlertCircle,
  },
] as const;

const HOMEPAGE_HERO_IMAGE =
  "/images/homepage/" +
  encodeURIComponent("ChatGPT Image Apr 16, 2026, 09_06_29 AM.png");

const sectorCards = [
  {
    title: "Companies & family businesses",
    description:
      "Direct, personal counsel for owners, directors and executives seeking communications solutions and navigating reputation, media and stakeholder challenges.",
    href: "/clients/corporate",
  },
  {
    title: "Government & Public Sector",
    description:
      "Stakeholder, programme, and public communications shaped for scrutiny, accountability, and the unique pressures of the public sector environment.",
    href: "/clients/government",
  },
  {
    title: "Industry and professional associations, peak bodies",
    description:
      "Communication that supports advocacy, influences stakeholders and decision makers, builds member trust and establishes associations as the trusted public voice of their industry.",
    href: "/clients/industry-associations",
  },
  {
    title: "Independent and faith-based schools",
    description:
      "Parent, board, staff and media communications where trust, care and legal precision must work together. We have guided schools across Australia through every challenging issue unique to this sector, and protected reputations.",
    href: "/clients/schools-faith",
  },
  {
    title: "Legal & Professional Services",
    description:
      "Law firms and other professionals have a unique opportunity to become the public voice of authority in their area through strategic media engagement. This helps build trust in their brand and drive business.",
    href: "/clients/corporate",
  },
  {
    title: "Health & Aged Care",
    description:
      "High-stakes stakeholder and reputation advice in heavily scrutinised care environments where public confidence is everything.",
    href: "/clients/corporate",
  },
  {
    title: "Pacific islands",
    description:
      "We are the only Australian corporate PR firm with deep Pacific expertise, assisting Pacific Island governments, NGOs and companies doing business across the region. Cross-cultural communications, international media relations and stakeholder engagement across Pacific contexts.",
    href: "/pacific",
  },
  {
    title: "Faith-based organisations",
    description:
      "Faith-based ministries, churches and charities have unique challenges. We are the only Australian PR firm that provides reputation management and crisis planning, communications and management based on deep understanding of their needs, ethos and culture.",
    href: "/clients/schools-faith",
  },
];

function AlternativeHero() {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col overflow-hidden w-screen"
      style={{ minHeight: "calc(100svh - 4rem)", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Image area fills whatever space the proof strip doesn't need */}
      <div className="relative w-full flex-1 flex">
        <img
          src={HOMEPAGE_HERO_IMAGE}
          alt="Lyall Mercer and Barbara Gorogh, CRC co-founders"
          className="absolute inset-0 h-full w-full object-cover object-right pointer-events-none"
          fetchPriority="high"
        />
        <div className="relative max-w-7xl mx-auto px-6 w-full flex items-center py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-center w-full">
            <div className="lg:col-span-7 relative">
            <div
              className="absolute inset-x-[-1rem] inset-y-[-1.25rem] overflow-hidden rounded-[32px] bg-gradient-to-r from-navy/[0.99] from-[5%] via-navy/[0.98] via-[55%] to-navy/[0.96] shadow-[inset_0_0_120px_rgba(0,0,0,0.12)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:rounded-[32px] before:content-[''] before:bg-[linear-gradient(128deg,rgba(255,255,255,0.07)_0%,transparent_42%,transparent_58%,rgba(255,255,255,0.035)_100%),repeating-linear-gradient(-14deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0)_13px,rgba(255,255,255,0.028)_13px,rgba(255,255,255,0.028)_14px),radial-gradient(ellipse_85%_70%_at_88%_72%,rgba(255,255,255,0.05),transparent_62%)] sm:inset-x-[-1.5rem] sm:inset-y-[-1.5rem] lg:inset-x-[-2rem] lg:inset-y-[-2rem]"
              aria-hidden
            />
            <div className="relative z-10 [text-shadow:0_1px_3px_rgba(0,0,0,0.55),0_2px_12px_rgba(15,31,54,0.45)]">
              <AnimateIn>
                <p className="inline-flex items-center rounded-full border border-white/10 bg-navy/55 px-3 py-1.5 font-sans font-semibold text-off-white text-xs backdrop-blur-sm">
                  Boutique corporate PR · Australia · New Zealand · Pacific
                </p>
              </AnimateIn>

              <AnimateIn delay={150}>
                <h1 className="font-heading font-black text-white text-4xl md:text-6xl lg:text-[64px] leading-[0.95] mt-4">
                  Strategic, proven communications advice.
                </h1>
              </AnimateIn>

              <AnimateIn delay={300}>
                <div className="mt-4 space-y-4">
                  <p className="text-white text-base lg:text-lg leading-relaxed w-full">
                    Whatever your communications objectives, you need experienced
                    counsel you can trust. CRC Public Relations is a boutique
                    corporate PR firm where every client works directly with a
                    principal adviser.
                  </p>
                  <p className="text-white text-base lg:text-lg leading-relaxed w-full">
                    We partner with CEOs, executives, and leaders within
                    companies, industry associations, government, and the
                    not-for-profit sector, assisting them to communicate
                    effectively to key stakeholders, be the public voice of
                    authority in their field through strategic media engagement,
                    protect their reputation, deal with complex issues, and
                    navigate crises with confidence.
                  </p>
                  <p className="text-white text-base lg:text-lg leading-relaxed w-full">
                    We are your trusted adviser and advocate &ndash; and we
                    believe in you.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn delay={450}>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link
                    href="/contact"
                    className="btn-lift inline-flex items-center justify-center gap-2 bg-brand-gold text-navy font-sans font-semibold text-sm leading-snug rounded-[4px] px-6 py-3 shadow-sm hover:bg-gold-light transition antialiased"
                  >
                    <Phone className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                    Book a consultation
                  </Link>
                  <Link
                    href="/contact?source=capability-statement"
                    className="btn-lift inline-flex items-center justify-center gap-2 border border-navy/15 bg-white text-navy font-sans font-semibold text-sm leading-snug rounded-[4px] px-6 py-3 shadow-sm hover:bg-off-white hover:border-navy/25 transition antialiased"
                  >
                    <Download className="size-4" strokeWidth={2} aria-hidden />
                    Request capability statement
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={600}>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-sans font-medium text-white text-[11px]">
                    Expert comments from our advisers have been featured in:
                  </p>
                  <div className="flex flex-wrap gap-5 mt-2">
                    {siteConfig.lyall.mediaLinks.map((link, i) => (
                      <AnimateIn
                        key={link.name}
                        delay={700 + i * 100}
                        as="span"
                        className="inline-block"
                      >
                        <MediaOutletLogoLink
                          href={link.href}
                          name={link.name}
                          logoSrc={link.logoSrc}
                          variant="onDark"
                          tone={link.tone}
                        />
                      </AnimateIn>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
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

    </section>
  );
}

function AlternativePracticeAreas() {
  return (
    <section className="relative bg-off-white py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-navy-mid/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="font-sans font-medium text-brand-gold text-xs text-left">
            Our practice areas
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
            Corporate. Reputation.
            <br />
            Crisis.
          </h2>
        </AnimateIn>

        <div className="mt-16 space-y-10 md:space-y-14">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;

            return (
              <AnimateIn key={area.title} delay={i * 120}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div
                    className={`relative overflow-hidden rounded-lg shadow-sm shadow-navy/10 ${
                      area.imageOnLeft
                        ? "order-1"
                        : "order-1 md:order-2"
                    }`}
                    style={{ aspectRatio: "3 / 2" }}
                  >
                    <Image
                      src={area.imageSrc}
                      alt={area.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover object-top"
                    />
                  </div>

                  <div
                    className={
                      area.imageOnLeft
                        ? "order-2"
                        : "order-2 md:order-1"
                    }
                  >
                    <div className="relative bg-white border border-brand-border rounded-lg p-8 md:p-10 card-border-expand group shadow-sm shadow-navy/5">
                      <div className="h-[3px] bg-brand-gold w-12 group-hover:w-full transition-all duration-700 mb-6" />
                      <Icon
                        className="text-brand-gold"
                        size={32}
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <h3 className="font-heading font-black text-navy text-2xl mt-5">
                        {area.title}
                      </h3>
                      <p className="text-charcoal-mid text-base leading-relaxed mt-4">
                        {area.description}
                      </p>
                      <Link
                        href={area.href}
                        className="inline-flex items-center gap-2 text-link-teal font-sans font-medium text-sm mt-6 group-hover:text-navy group-hover:gap-3 transition-all"
                      >
                        {area.linkLabel} <ArrowRight size={14} aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn>
          <div className="mt-20 md:mt-28 mb-4 max-w-4xl mx-auto text-center">
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mb-8" />
            <blockquote className="font-heading font-black text-navy text-xl md:text-[28px] leading-snug tracking-tight">
              &ldquo;As a boutique PR firm, you deal directly with experienced
              advisers who take a genuine, long-term interest in your
              organisation. It&rsquo;s a partnership, and it makes a huge
              difference to outcomes.&rdquo;
            </blockquote>
            <p className="font-sans font-medium text-text-secondary text-sm mt-6 tracking-wide">
              - Lyall Mercer, Co-founder
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
      <div className="absolute inset-0">
        <Image
          src="/images/assessment-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-navy/75 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs">
                Free assessment
              </p>
              <h2 className="font-heading font-black text-white text-3xl md:text-[38px] leading-[1.1] mt-3">
                How exposed is your organisation&apos;s reputation?
              </h2>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="space-y-4 mt-6">
                <p className="text-white/80 text-base leading-relaxed">
                  Most organisations do not discover their reputation
                  vulnerabilities until a crisis is already underway. Our
                  Reputation vulnerability assessment takes three minutes and
                  identifies exactly where you are exposed, across governance,
                  media, social media, stakeholder relationships, and crisis
                  preparedness.
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  Used by CEOs, communications directors, and board chairs
                  across Australia.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={250} className="lg:col-span-5">
            <div className="relative bg-white border border-brand-border rounded-lg p-8 card-border-expand overflow-hidden shadow-sm shadow-navy/5">
              <h3 className="text-navy font-heading font-black text-lg">
                Reputation vulnerability assessment
              </h3>
              <div className="mt-5 space-y-0">
                {assessmentAreas.map((area, i) => (
                  <AnimateIn key={area} delay={350 + i * 80} as="div">
                    <div className="flex items-center gap-3 py-2.5 border-b border-brand-border last:border-0">
                      <Check
                        className="text-brand-teal shrink-0"
                        size={16}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className="text-text-body text-sm">{area}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
              <Link
                href="/services/reputation-management#reputation-assessment"
                className="btn-lift block bg-brand-teal text-white font-heading font-black text-sm w-full py-4 rounded-[4px] mt-6 hover:bg-link-teal transition text-center"
              >
                Start the free assessment →
              </Link>
              <p className="text-text-caption text-xs mt-3 text-center">
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
    <section className="bg-warm-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs">
                Who we work with
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
                Trusted by leaders across every sector.
              </h2>
              <p className="text-charcoal-mid text-base leading-relaxed mt-6 max-w-xl">
                Our clients are CEOs, managing directors, board chairs, and
                executives across the business and non-profit sectors, as well
                as high profile individuals, who need experienced, direct advice
                when the stakes are highest. They choose CRC Public Relations
                because we offer personal service from an experienced, highly
                qualified team.
              </p>
              <p className="text-charcoal-mid text-base leading-relaxed mt-4 max-w-xl">
                We stand with our clients around the clock, proactively helping
                them grow their public presence and working alongside them
                through challenging times. We take their success personally, and
                we have their back.
              </p>
              <div className="flex flex-col gap-3 mt-8">
                <div className="rounded-xl border border-brand-border bg-navy p-5 text-left">
                  <p className="text-brand-gold text-xs font-medium mb-3">
                    Work with CRC Public Relations
                  </p>
                  <p className="font-heading font-black text-white text-lg leading-snug">
                    Start a direct conversation with an adviser.
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed mt-3">
                    Tell us about the issue, sector pressure, or communications
                    challenge you are facing and we will help identify the right
                    starting point.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-heading font-black text-xs rounded-[4px] px-5 py-3 mt-4 hover:bg-link-teal transition"
                  >
                    Work with us <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectorCards.map((sector, i) => (
                <AnimateIn key={sector.title} delay={i * 80}>
                  <Link
                    href={sector.href}
                    className="card-border-expand block bg-white border border-brand-border rounded-xl p-6 shadow-sm shadow-navy/5 hover:shadow-md transition-all duration-300 group min-h-[138px]"
                  >
                    <p className="font-sans font-medium text-navy text-sm group-hover:text-link-teal transition-colors">
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
    <section className="relative bg-off-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-off-white via-warm-white to-off-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <AnimateIn className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:-ml-4 lg:max-w-[28rem] xl:-ml-8 xl:max-w-[30rem]">
              <Image
                src="/images/lyall-mercer-portrait.png"
                alt="Lyall Mercer standing in a corridor"
                width={682}
                height={1024}
                className="w-full h-auto rounded-[28px] object-contain shadow-sm shadow-navy/10"
              />
            </div>
          </AnimateIn>

          <div className="lg:col-span-7">
            <AnimateIn delay={100}>
              <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
                Lyall Mercer
              </h2>
              <p className="text-brand-teal font-sans font-medium text-lg mt-2">
                Co-founder &amp; Principal Adviser
              </p>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="space-y-5 mt-8">
                <p className="text-text-body text-base leading-relaxed">
                  Lyall Mercer began his career as a journalist, writing for
                  some of Australia&apos;s leading newspapers and magazines.
                  That foundation, understanding exactly how media thinks,
                  moves, and decides what becomes a story, led him into a 25
                  year public relations career delivering high-quality results
                  in the areas of corporate communications and crisis advice.
                </p>
                <p className="text-text-body text-base leading-relaxed">
                  His clients include national and international companies,
                  governments, industry associations, not-for-profit
                  organisations, politicians, heads of state, celebrities, and
                  sporting figures; and he has supported clients and media
                  internationally, coordinating communications strategies and
                  walking clients through issues that have generated intense
                  national and global media exposure.
                </p>
                <p className="text-text-body text-base leading-relaxed">
                  When you choose CRC Public Relations, you&apos;ll deal with
                  various members of our team but Lyall will always be available
                  for you. This level of expertise is why our clients choose us.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={350}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/about/lyall-mercer"
                  className="btn-lift inline-flex items-center gap-2 text-link-teal font-sans font-medium text-sm hover:text-navy hover:gap-3 transition-all"
                >
                  Read Lyall&apos;s full profile <ArrowRight size={14} />
                </Link>
                <a
                  href={siteConfig.lyallMercerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift inline-flex items-center gap-2 text-link-teal font-sans font-medium text-sm hover:text-navy hover:gap-3 transition-all"
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs">
                Ready to work with us
              </p>
            </AnimateIn>

            <AnimateIn delay={150}>
              <h2 className="text-white font-heading font-black text-3xl md:text-[42px] leading-[1.08] mt-4">
                Your reputation is your most valuable asset. Let us help you
                protect it.
              </h2>
            </AnimateIn>

            <AnimateIn delay={300}>
              <p className="text-white/70 text-base leading-relaxed mt-6">
                Whether you need experienced advice on a complex issue, help
                building your public profile, a communications strategy for your
                organisation, or trusted counsel during a crisis, we are your
                adviser and advocate. We believe in you, and we have your back.
              </p>
            </AnimateIn>
          </div>

          <div className="flex flex-col gap-4">
            <AnimateIn delay={450}>
              <Link
                href="/contact"
                className="btn-lift bg-brand-gold text-navy font-heading font-black text-sm w-full py-4 rounded-[4px] hover:bg-gold-light transition inline-flex items-center justify-center gap-2"
              >
                Book a consultation <ArrowRight size={14} aria-hidden />
              </Link>
            </AnimateIn>

            <AnimateIn delay={550}>
              <a
                href={siteConfig.phone.href}
                className="border border-brand-gold/50 text-brand-gold font-heading font-black text-sm w-full py-4 rounded-[4px] hover:bg-brand-gold/10 transition inline-flex items-center justify-center gap-2"
              >
                Call us: {siteConfig.phone.display}{" "}
                <ArrowRight size={14} aria-hidden />
              </a>
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
          <p className="text-brand-gold text-xs font-medium mb-3">
            Client outcomes
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-4">
            Results that speak for themselves.
          </h2>
          <p className="text-charcoal-mid text-base max-w-2xl mb-12 leading-relaxed">
            Three anonymised outcomes that show the kind of strategic work we do
            when policy, reputation, and stakeholder pressure converge.
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

      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium mb-3 text-center">
            Common questions
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
