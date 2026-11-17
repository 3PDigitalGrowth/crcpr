import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { MyPRPartnerCTA } from "@/components/shared/MyPRPartnerCTA";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";
import { MediaOutletLogoLink } from "@/components/shared/MediaOutletLogoLink";
import Link from "next/link";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { MEDIA, PHOTOS } from "@/components/altkit/data";
import { T } from "@/components/editable";
import { FramedPhoto } from "@/components/altkit/media";

export const metadata: Metadata = {
  title: "Lyall Mercer: co-founder & principal adviser",
  description:
    "Lyall Mercer is the co-founder of CRC Public Relations. Former journalist and trusted crisis communications adviser with a career spanning media, PR, and high-stakes communications.",
};

const expertiseAreas = [
  { area: "Crisis Communications", desc: "Crisis counsel across every sector and severity level, from governance failures to safety incidents, media exposés, and social media firestorms." },
  { area: "Reputation Management", desc: "Vulnerability assessments, reputation monitoring, and long-term reputation protection strategies for organisations under scrutiny or at risk." },
  { area: "Industry Associations", desc: "Deep experience with peak bodies, member organisations, and regulatory engagement, including some of Australia's most prominent national associations." },
  { area: "Schools & Faith-Based Organisations", desc: "Specialist crisis communications for independent schools, Catholic systems, and faith-based organisations navigating sensitive disclosures and media attention." },
  { area: "Pacific Communications", desc: "Cross-cultural communications, government relations, and crisis response across the Pacific Islands. The only Australian PR firm with sustained practice in this region." },
  { area: "Media Training", desc: "Spokesperson preparation and hostile media workshops delivered in partnership with television and radio journalists. Clients include executives, politicians, and sporting figures." },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page. The
   generated hero and journalist images were dropped; the portrait is the one
   real photograph of Lyall on the page. */

export default function LyallMercerPage() {
  return (
    <>
      <PageHero
        copyId="about-lyall-mercer"
        asidePreset="editorialInsights"
        eyebrow="co-founder & principal adviser"
        title="Lyall Mercer"
        description="Co-founder of CRC Public Relations. Former journalist and trusted crisis adviser to leaders facing scrutiny, pressure, and reputational risk."
        ctaLabel="Work with Lyall"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId="about-lyall-mercer"
        variant="navy"
        title="Lyall Mercer is trusted when the matter requires judgement, not performance."
        items={[
          {
            label: "Background",
            value: "Journalist first",
            detail:
              "His media background informs how he assesses risk, narrative pressure, and what public scrutiny is likely to do next.",
          },
          {
            label: "Advisory depth",
            value: "Career depth",
            detail:
              "He has advised companies, governments, associations, schools, and high-profile individuals through high-stakes situations.",
          },
          {
            label: "Working style",
            value: "Direct and measured",
            detail:
              "Clients engage Lyall for practical judgement, clear recommendations, and calm counsel when the stakes are high.",
          },
        ]}
      />

      {/* ---------- THE JOURNALIST, THE PORTRAIT ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,340px),1fr] lg:gap-14">
          <div>
            <Reveal>
              <PortraitPlaceholder
                size="fluid"
                initials={undefined}
                imageSrc={PHOTOS.lyallNavyClose}
                imageAlt={siteConfig.lyall.fullName}
                className="max-w-[18rem] lg:max-w-sm"
              />
            </Reveal>
            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted">
                <T id="about-lyall-mercer.t4">As seen in</T>
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
                {siteConfig.lyall.mediaLinks.map((item) => (
                  <MediaOutletLogoLink
                    key={item.name}
                    href={item.href}
                    name={item.name}
                    logoSrc={item.logoSrc}
                    variant="onLight"
                    tone={item.tone}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <H2>
              <T id="about-lyall-mercer.t1">The journalist who became a trusted crisis communications adviser</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="about-lyall-mercer.t2">
                  Lyall Mercer began his career as a journalist, writing for some of Australia&apos;s leading
                  newspapers. That foundation, understanding exactly how media thinks, moves, and decides what becomes
                  a story, is what makes his approach to corporate communications and crisis advice unlike any other.
                </T>
              </p>
              <p>
                <T id="about-lyall-mercer.t3">
                  His clients include national and international companies, governments, industry associations,
                  not-for-profit organisations, politicians, celebrities, and sporting figures, and he has worked with
                  clients and media across Australia, the Pacific, North America, Europe, Asia, and other international
                  markets.
                </T>
              </p>
              <p>
                <T id="about-lyall-mercer.t5">
                  Clients choose to work with Lyall because they deal directly with him. While you&apos;ll get to know
                  other members of our team, he is always involved.
                </T>
              </p>
              <p>
                <T id="about-lyall-mercer.t6">
                  Lyall is a sought-after conference speaker, delivering keynotes and workshops on crisis
                  communications, reputation management, and media strategy across Australia and the Pacific.
                </T>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- THE 15 MINUTES PRINCIPLE ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id="about-lyall-mercer.t8">Lyall&apos;s signature framework</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="about-lyall-mercer.t9">The 15 Minutes Principle</T>
            </H2>
            <FramedPhoto
              src={MEDIA.tvStudioRunSheet}
              alt="A television studio camera with the show's run sheet clipped to it"
              className="mt-8"
            />
          </div>
          <div>
            <blockquote className="border-l-[3px] border-[var(--k-blue)] pl-5">
              <p className="text-lg font-semibold leading-snug">
                <T id="about-lyall-mercer.t10">
                  &quot;You have 15 minutes to respond to an emerging crisis before you start to lose control of the
                  message. After that window closes, you&apos;re no longer shaping the story; you&apos;re responding to
                  it.&quot;
                </T>
              </p>
            </blockquote>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              <T id="about-lyall-mercer.t11">
                Developed through Lyall&apos;s crisis communications practice across Australia and internationally, the
                15 Minutes Principle is his framework for crisis response discipline. It has been shared with
                executives, boards, and communications teams across Australia, the USA, and Canada.
              </T>
            </p>
            <Link
              href="/insights/the-15-minutes-principle"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent"
            >
              <T id="about-lyall-mercer.t12">Read the full 15 Minutes Principle article →</T>
            </Link>
          </div>
        </Container>
      </Section>

      <LeadMagnetBanner
        magnet="publicVoiceSteps"
        variant="light"
        title="Are you ready to raise your public profile and be the trusted voice of authority for your area of expertise?"
        description="Download the CRC Public Relations '5 steps to becoming a trusted public voice', and drive new clients and staff through the credibility this brings. Applies to companies, non-profits, governments, professional services firms, schools and associations."
      />

      {/* ---------- AREAS OF EXPERTISE ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <H2 className="max-w-3xl">
            <T id="about-lyall-mercer.t15">Areas of specialist expertise</T>
          </H2>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            {expertiseAreas.map(({ area, desc }) => (
              <div key={area} className="border-t border-line py-6">
                <h3 className="kit-display text-[15px] uppercase leading-snug">{area}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- SPEAKING AND TRAINING ---------- */}
      <Section tone="base" className="pb-11 md:pb-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <H2>
              <T id="about-lyall-mercer.t16">Speaking and training</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="about-lyall-mercer.t13">
                  Lyall is a sought-after keynote speaker and workshop facilitator on crisis communications,
                  reputation management, and media strategy. He has delivered programmes across Australia, the USA, and
                  Canada, including at the Australian Catholic Bishops Conference.
                </T>
              </p>
              <p>
                For speaking enquiries, visit{" "}
                <a
                  href={siteConfig.lyallMercerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  <T id="about-lyall-mercer.t17">lyallmercer.com</T>
                </a>
                . For crisis communications training and masterclasses, visit{" "}
                <a
                  href={siteConfig.myPrPartnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  <T id="about-lyall-mercer.t18">myprpartner.com</T>
                </a>
                .
              </p>
            </div>
            <a
              href={siteConfig.lyallMercerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent"
            >
              <T id="about-lyall-mercer.t14">→ Visit lyallmercer.com for the full profile</T>
            </a>
          </div>
          <Reveal className="lg:pt-2">
            <FramedPhoto src={MEDIA.conferenceAudience} alt="A conference audience during a speaking session" className="mb-6" />
            <MyPRPartnerCTA
              title="Need training, workshops, or practical communications development?"
              description="My PR Partner is CRC Public Relations' training platform for communications practitioners, spokesperson development, crisis workshops, and practical support between major advisory engagements."
              buttonLabel="Explore My PR Partner"
            />
          </Reveal>
        </Container>
      </Section>

      <InlineEnquirySection
        copyId="about-lyall-mercer"
        title="Need Lyall's advice on a high-stakes matter?"
        body="Use this form for confidential advisory, speaking, commentary, or specialist crisis and reputation enquiries involving Lyall Mercer."
        bullets={[
          "Crisis and reputation advisory enquiries",
          "Speaking, media, and expert commentary requests",
          "Senior counsel for leaders under pressure",
        ]}
        defaultMessage="We would like to discuss advisory or speaking work with Lyall Mercer."
        variant="white"
      />

      <PageClosingCTA
        copyId="about-lyall-mercer"
        title="Work directly with Lyall Mercer."
        body="For advisory, commentary, speaking, or high-stakes communications matters, get in touch and we will route the conversation appropriately."
        primaryLabel="Work with Lyall"
      />
    </>
  );
}
