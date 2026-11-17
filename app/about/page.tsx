import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { FOUNDERS_ALT, PHOTOS } from "@/components/altkit/data";
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
    portraitSrc: PHOTOS.lyallNavyClose,
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
    portraitSrc: PHOTOS.barbaraBrownClose,
    size: "md" as const,
    name: "Barbara Gorogh",
    // Lyall, 20 Oct 2026: Barbara's role is Director of Operations (as on the approved homepage).
    role: "Director of Operations",
    summary:
      "Senior communications strategist focused on client relations, media relations and practitioner development.",
    bio: [
      "Barbara has worked across Australia and the Pacific region for more than a decade, dealing with companies, organisations and governments in the area of corporate communications and reputation management. She has overseen major online corporate and government communications campaigns designed to achieve vital client objectives, and developed a specialty area in reputation management in the B2C environment. Barbara also oversees digital and social media strategies for our clients - which form an important part of every public relations, reputation and crisis strategy - and the development of our digital team based across Australia and the Pacific.",
      "Barbara's work in the media monitoring space ensures our clients are ahead of the stories that matter.",
    ],
  },
] as const;

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page. The
   hero video and image, the glass cards and the stacked portrait frames were
   dropped; the two initials labels went with them. */

export default function AboutPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section id="hero-section" className="tone-base relative overflow-hidden">
        <Container className="pb-11 pt-12 md:pb-14 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),300px] lg:items-end lg:gap-14">
            <div className="max-w-3xl">
              <Eyebrow>
                <T id="about.t1">About us</T>
              </Eyebrow>
              <h1 className="kit-display kit-h1-page mt-5">
                <T id="about.t2">About CRC Public Relations</T>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-[17px]">
                <T id="about.t3">
                  Boutique corporate PR. Trusted counsel for CEOs, directors, and executives across Australia, the
                  Pacific, and internationally.
                </T>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link href="/contact" className="btn btn-primary">
                  <T id="about.t4">Book a consultation</T>
                </Link>
                <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  Or call {siteConfig.phone.display}
                </a>
              </div>
            </div>

            <aside className="kit-r border border-line p-5 md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                <T id="about.t20">Direct strategic counsel</T>
              </p>
              <p className="kit-display mt-3 text-[2rem] leading-none text-accent">{siteConfig.stats.yearsTrading}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <T id="about.t5">Years serving organisations across Australia and the Pacific</T>
              </p>
              <div className="my-4 h-px bg-[var(--line)]" />
              <p className="kit-display text-[15px] uppercase leading-snug">
                <T id="about.t6">Clear thinking, applied</T>
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                <T id="about.t7">A perspective that brings clarity and results, valued by our clients.</T>
              </p>
            </aside>
          </div>

          <div className="kit-r relative mt-10 aspect-[16/9] overflow-hidden md:aspect-[3/1]">
            <Image
              src={PHOTOS.foundersStudio}
              alt={FOUNDERS_ALT}
              fill
              priority
              sizes="(min-width: 1200px) 1140px, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 9%" }}
            />
          </div>
        </Container>
      </section>

      {/* ---------- WHY CRC ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container>
          <Eyebrow>
            <T id="about.t8">Why CRC Public Relations</T>
          </Eyebrow>
          <H2 className="mt-3 max-w-3xl">
            <T id="about.t9">CRC Public Relations exists to promote, protect and be advocates for our clients.</T>
          </H2>
          <div className="ledger mt-8">
            {proofItems.map((item, __ti) => (
              <div key={`${item.label}-${item.value}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  <T id={`about.proofItems.${__ti}.label`}>{item.label}</T>
                </p>
                <p className="kit-display mt-2 text-[clamp(1.2rem,1.9vw,1.5rem)] uppercase leading-tight">
                  <T id={`about.proofItems.${__ti}.value`}>{item.value}</T>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <T id={`about.proofItems.${__ti}.detail`}>{item.detail}</T>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- HOW WE WORK ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <H2>
              <T id="about.t10">How we work</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="about.t11">
                  Being &apos;boutique and personal&apos; means that unlike many PR companies, at CRC Public
                  Relations you&apos;ll deal directly with senior and experienced PR and crisis communications
                  strategists who take a genuine, long-term interest in your organisation. We take your needs and your
                  success personally, and we have your back.
                </T>
              </p>
              <p>
                <T id="about.t12">
                  For over 15 years, CRC Public Relations has ensured that every client engagement is led by advisers
                  with deep expertise in corporate communications, reputation management, and crisis response.
                </T>
              </p>
              <p>
                <T id="about.t13">
                  Our clients include national and international companies, charities, industry associations,
                  independent schools, faith-based organisations, high-profile sports people and celebrities, and
                  Pacific governments and NGOs.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-2">
            <div className="divide-y divide-[var(--line)] border-y border-line">
              {STATS.map((stat, __ti) => (
                <div key={stat.label} className="py-5">
                  <p className="kit-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-accent">
                    <T id={`about.STATS.${__ti}.value`}>{stat.value}</T>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-muted">
                    <T id={`about.STATS.${__ti}.label`}>{stat.label}</T>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- MISSION ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id="about.t14">Our mission</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="about.t15">Promote, protect and advocate when reputation matters.</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id="about.t16">The work is practical, direct and always tied to the client&apos;s best interests.</T>
            </p>
          </div>
          <div className="border-t border-line">
            {missionItems.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr] md:items-baseline md:gap-6">
                  <span className="kit-display text-sm text-accent">{`0${index + 1}.`}</span>
                  <p className="text-[15px] leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <InlineEnquirySection
        copyId="about"
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

      {/* ---------- TEAM ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <Eyebrow>
            <T id="about.t17">Leadership team</T>
          </Eyebrow>
          <H2 className="mt-3">
            <T id="about.t18">Our team</T>
          </H2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            <T id="about.t19">
              CRC Public Relations is intentionally principal-led. The people you meet are the people who shape the
              advice, lead the work, and stay close to the matter when judgement matters most.
            </T>
          </p>

          <div className="mt-8 border-t border-line">
            {teamMembers.map((member, __ti) => (
              <Reveal key={member.name} delay={__ti * 0.05}>
                <div className="grid gap-6 border-b border-line py-8 md:grid-cols-[12rem,1fr] lg:grid-cols-[12rem,0.8fr,1.2fr] lg:gap-10">
                  <PortraitPlaceholder
                    size={member.size}
                    initials={undefined}
                    imageSrc={member.portraitSrc}
                    imageAlt={member.name}
                  />
                  <div>
                    <h3 className="kit-display text-[clamp(1.2rem,1.9vw,1.5rem)] uppercase leading-tight">
                      <T id={`about.teamMembers.${__ti}.name`}>{member.name}</T>
                    </h3>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      <T id={`about.teamMembers.${__ti}.role`}>{member.role}</T>
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed">
                      <T id={`about.teamMembers.${__ti}.summary`}>{member.summary}</T>
                    </p>
                  </div>
                  <div className="space-y-4 md:col-span-2 lg:col-span-1">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph} className="text-[15px] leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="base" className="pb-11 md:pb-14">
        <Container>
          <div className="max-w-3xl">
            <CapabilityDownload />
          </div>
        </Container>
      </Section>

      <PageClosingCTA
        copyId="about"
        title="Considering engaging us?"
        body="If you have read this page and think CRC Public Relations may be the right partner for your organisation, the next step is a direct conversation. We will listen first, then come back with a clear view of whether we are the right fit and what that engagement could look like."
      />
    </>
  );
}
