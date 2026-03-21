import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { MyPRPartnerCTA } from "@/components/shared/MyPRPartnerCTA";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";

export const metadata: Metadata = {
  title: "Lyall Mercer: Founder & Principal Advisor",
  description:
    "Lyall Mercer is the founder of CRC Public Relations. Former journalist, Australasia's leading crisis communications advisor, with 25+ years advising companies, governments, and high-profile individuals.",
};

export default function LyallMercerPage() {
  return (
    <>
      <PageHero
        eyebrow="FOUNDER & PRINCIPAL ADVISOR"
        title="Lyall Mercer"
        description="Founder of CRC Public Relations. Former journalist, trusted crisis advisor, and senior counsellor to leaders facing scrutiny, pressure, and reputational risk."
        ctaLabel="WORK WITH LYALL"
        ctaHref="/contact"
      />

      <PageProofStrip
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
            value: "25+ years",
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

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <PortraitPlaceholder size="lg" />
            <div className="mt-8">
              <h4 className="text-xs font-sans font-medium text-charcoal-mid tracking-[0.14em] uppercase mb-3">
                As seen in
              </h4>
              <ul className="list-none p-0 m-0">
                {siteConfig.lyall.mediaLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-gold hover:underline block py-1"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-navy font-heading font-black text-2xl">
              The journalist who became Australasia&apos;s leading crisis
              communications advisor
            </h2>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
              Lyall Mercer began his career as a journalist, writing for some of
              Australia&apos;s leading newspapers. That foundation,
              understanding exactly how media thinks, moves, and decides what
              becomes a story, is what makes his approach to corporate
              communications and crisis advice unlike any other.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              Over the past 25 years, Lyall has built a reputation across
              Australasia as a leader in corporate public relations, reputation
              and issues management, and crisis communications.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              He has advised national and international companies, governments,
              senior executives, politicians, celebrities, and sporting figures,
              and has worked with clients and media on every continent.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              Lyall is a sought-after conference speaker, delivering keynotes and
              workshops on crisis communications, reputation management, and media
              strategy across Australia and the Pacific.
            </p>

            <blockquote className="border-l-[3px] border-brand-gold pl-6 py-4 mt-8 bg-off-white rounded-r-lg">
              <p className="italic text-charcoal text-lg">
                {siteConfig.lyall.quote}
              </p>
              <footer className="text-brand-gold font-medium text-sm mt-2">
                Lyall Mercer
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-navy rounded-lg p-8 my-10">
            <p className="text-brand-teal text-xs font-medium tracking-[0.14em] uppercase mb-3">
              LYALL&apos;S SIGNATURE FRAMEWORK
            </p>
            <h2 className="font-heading font-black text-white text-3xl mb-4">
              The 15 Minutes Principle
            </h2>
            <blockquote className="border-l-4 border-brand-gold pl-5 mb-5">
              <p className="text-white/85 text-lg italic leading-relaxed">
                &ldquo;You have 15 minutes to respond to an emerging crisis before you start to lose control of the message. After that window closes, you&apos;re no longer shaping the story; you&apos;re responding to it.&rdquo;
              </p>
            </blockquote>
            <p className="text-white/65 text-base leading-relaxed mb-5">
              Developed over 25 years of crisis communications practice across Australia and internationally, the 15 Minutes Principle is Lyall&apos;s framework for crisis response discipline. It has been shared with executives, boards, and communications teams across Australia, the USA, and Canada.
            </p>
            <Link href="/insights/the-15-minutes-principle" className="text-brand-gold text-sm font-medium hover:underline">
              Read the full 15 Minutes Principle article →
            </Link>
          </div>

          <div className="my-10">
            <h2 className="font-heading font-black text-navy text-2xl mb-6">Areas of specialist expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { area: "Crisis Communications", desc: "25 years of crisis counsel across every sector and severity level, from governance failures to safety incidents, media exposés, and social media firestorms." },
                { area: "Reputation Management", desc: "Vulnerability assessments, reputation monitoring, and long-term reputation protection strategies for organisations under scrutiny or at risk." },
                { area: "Industry Associations", desc: "Deep experience with peak bodies, member organisations, and regulatory engagement, including some of Australia's most prominent national associations." },
                { area: "Schools & Faith-Based Organisations", desc: "Specialist crisis communications for independent schools, Catholic systems, and faith-based organisations navigating sensitive disclosures and media attention." },
                { area: "Pacific Communications", desc: "Cross-cultural communications, government relations, and crisis response across the Pacific Islands. The only Australian PR firm with sustained practice in this region." },
                { area: "Media Training", desc: "Spokesperson preparation and hostile media workshops delivered in partnership with television and radio journalists. Clients include executives, politicians, and sporting figures." },
              ].map(({ area, desc }) => (
                <div key={area} className="bg-off-white border border-brand-border rounded-lg p-5">
                  <p className="font-heading font-black text-navy text-sm mb-2">{area}</p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-10">
            <h2 className="font-heading font-black text-navy text-2xl mb-4">Speaking and training</h2>
            <p className="text-charcoal text-base leading-relaxed mb-4">
              Lyall is a sought-after keynote speaker and workshop facilitator on crisis communications, reputation management, and media strategy. He has delivered programmes across Australia, the USA, and Canada, including at the Australian Catholic Bishops Conference.
            </p>
            <p className="text-charcoal text-base leading-relaxed mb-6">
              For speaking enquiries, visit{" "}
              <a href={siteConfig.lyallMercerUrl} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">lyallmercer.com</a>
              . For crisis communications training and masterclasses, visit{" "}
              <a href={siteConfig.myPrPartnerUrl} target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">myprpartner.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
          <a
            href={siteConfig.lyallMercerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline font-medium"
          >
            → Visit lyallmercer.com for the full profile
          </a>
          <MyPRPartnerCTA
            title="Need training, workshops, or practical communications development?"
            description="My PR Partner is CRC PR's training platform for communications practitioners, spokesperson development, crisis workshops, and practical support between major advisory engagements."
            buttonLabel="EXPLORE MY PR PARTNER"
          />
        </div>
      </section>

      <LeadMagnetBanner
        magnet="mediaInterviewGuide"
        variant="light"
        title="Want to see the kind of media preparation Lyall expects before a high-pressure interview?"
        description="Download the CRC PR Media Interview Preparation Guide. It reflects the practical, journalist-informed approach Lyall Mercer brings to media strategy, spokesperson readiness, and executive preparation."
      />

      <InlineEnquirySection
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
        title="Work directly with Lyall Mercer."
        body="For advisory, commentary, speaking, or high-stakes communications matters, get in touch and we will route the conversation appropriately."
        primaryLabel="WORK WITH LYALL"
      />
    </>
  );
}
