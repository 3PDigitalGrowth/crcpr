import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title:
    "School Crisis Communications Australia | CRC Public Relations",
  description:
    "Specialist crisis communications and PR for independent schools, Catholic schools, and faith-based organisations. Parent communications, media management, board governance. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "School Crisis Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: siteConfig.crcPrUrl,
  },
  description:
    "Specialist crisis communications and PR for independent schools, Catholic schools, and faith-based organisations across Australia.",
  areaServed: "AU",
  serviceType: "School Communications Consulting",
};

const proofItems = [
  {
    label: "Community trust",
    value: "Pastoral and strategic",
    detail:
      "School and faith-based communications requires compassion, legal discipline, and message control at the same time.",
  },
  {
    label: "Leadership pressure",
    value: "Principal to board",
    detail:
      "We support principals, executive teams, boards, and governing bodies through situations where confidence can shift quickly.",
  },
  {
    label: "Urgent realities",
    value: "24/7 available",
    detail:
      "Serious incidents often happen outside school hours. Early communication decisions still shape the outcome.",
  },
] as const;

const faqs = [
  {
    question: "What kinds of school matters does CRC Public Relations usually support?",
    answer:
      "Typical matters include safeguarding disclosures, staff conduct allegations, serious incidents, parent-confidence issues, social media escalation, governance concerns, and situations where pastoral care, legal risk, and media attention are all in play at once.",
  },
  {
    question: "Can you help with parent communications as well as media response?",
    answer:
      "Yes. In school and faith-based matters, parent and community communication is often more important than media response in the first instance. We help leaders sequence those audiences carefully while keeping the legal and reputational position aligned.",
  },
  {
    question: "Do you work with principals and boards directly?",
    answer:
      "Yes. We regularly support principals, executive teams, governing bodies, and boards where the communication challenge is strategically sensitive and emotionally charged.",
  },
];

export default function SchoolsFaithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        asidePreset="clientsBreadth"
        eyebrow="Independent schools & faith-based organisations"
        title="School crisis communications that protects students, staff, and the community's trust."
        description="Specialist crisis response, parent communications, and media management for school leaders and faith-based organisations, when pastoral responsibility and strategic communications must work together."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/clients/schools-faith/hero.webp",
          alt: "Australian independent school heritage building with courtyard and trees in dappled morning light, no people",
        }}
      />

      <PageProofStrip
        title="In schools and faith-based organisations, confidence is built or lost through communication speed, care, and discipline."
        items={[...proofItems]}
      />

      {/* Opening */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/clients/schools-faith/mid-chapel.webp"
            imageAlt="School chapel interior with timber pews and warm light through arched windows, serene and empty"
            imagePosition="left"
          >
            <div className="max-w-3xl lg:max-w-none">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Sector reality
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                In this sector, communication is judged by care as much as
                control.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                When your school or organisation faces a serious matter, the
                real challenge is responding with accuracy, compassion, and
                discipline while trust is already under pressure.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Your communications challenges are unlike those of any other
                  sector. When an incident occurs, whether it is a safeguarding
                  matter, a staff conduct issue, a governance concern, or a
                  social media controversy, the audience is not just media and
                  regulators. It is parents who entrust you with the care of
                  their children, alumni who carry your school&apos;s reputation
                  into the world, and a faith community that expects its values
                  to be reflected in how your organisation responds to
                  difficulty.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The legal obligations are significant. The pastoral duty is
                  equally significant. The communications challenge is managing
                  both simultaneously, responding with the transparency that
                  parents demand, the discretion that legal obligations require,
                  and the compassion that your community deserves.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  CRC Public Relations works with independent schools, Catholic
                  school networks, and faith-based organisations across
                  Australia. Lyall Mercer has presented at the Australian
                  Catholic Bishops Conference and has developed crisis
                  communications frameworks used by school networks across the
                  country. We understand the unique pressures of school and
                  faith-based communications, and the very high stakes of
                  getting them wrong.
                </p>
              </div>
              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-5">
                  What makes this different
                </p>

                <div className="space-y-4">
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      More than media pressure
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Parents, boards, alumni, parish communities, and regulators
                      all shape the response environment.
                    </p>
                  </div>

                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Pastoral and legal duties
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Leaders must show compassion without compromising legal,
                      safeguarding, or governance obligations.
                    </p>
                  </div>

                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Trust moves quickly
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      The first messages often shape parent confidence and wider
                      community sentiment for much longer than expected.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </ImageTextRow>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                First-hour judgment
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                What schools usually need help deciding first
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                The first questions are rarely about wording alone. They are
                about sequence, disclosure, and how to communicate care without
                creating unnecessary exposure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {[
                  "Who needs to be told first?",
                  "What can we say to parents now?",
                  "What do we hold back while the legal position is still moving?",
                  "How do we show compassion without creating avoidable exposure?",
                ].map((question) => (
                  <div
                    key={question}
                    className="rounded-lg border border-brand-border bg-white p-6"
                  >
                    <p className="font-sans font-semibold text-navy text-base leading-relaxed">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                Why the first hour matters
              </p>
              <p className="text-charcoal-mid text-sm leading-relaxed">
                These are the decisions that shape trust in the first hour and
                set the tone for every parent, staff, board, and community
                communication that follows.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <InlineEnquirySection
        title="Need confidential advice for a school or faith-based matter?"
        body="CRC Public Relations advises school leaders, boards, and faith-based organisations facing parent concern, media attention, governance pressure, or a sensitive incident. If it is urgent, call us now."
        bullets={[
          "Parent, staff, and community communication support",
          "Principal, board, and spokesperson advice",
          "Urgent incident response and preparedness planning",
        ]}
        defaultMessage="We need confidential advice for a school or faith-based communications matter."
        variant="white"
      />

      {/* How CRC Public Relations supports schools and faith-based organisations */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-sans font-medium text-xs mb-4">
              How we support
            </p>
            <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
              How CRC Public Relations supports schools and faith-based organisations
            </h2>
            <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
              The need is rarely just media advice. School leaders usually need
              a response model that protects students, reassures families, and
              keeps governance, legal, and public communication aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: "Crisis communications and incident response",
                body: "When a serious incident occurs, we help leaders respond clearly, compassionately, and without compromising legal process. That includes immediate counsel on parent messaging, principal briefings, media enquiries, and coordinated communication across staff, boards, and the wider community.",
              },
              {
                title: "Parent and community communications",
                body: "We help schools develop parent and community messaging that is honest, appropriately bounded, and built to maintain confidence. The aim is to show care and transparency without prejudicing outcomes or creating avoidable exposure.",
              },
              {
                title: "Media relations and spokesperson support",
                body: "When attention is sustained, the school's communications posture needs to be equally disciplined. We manage enquiries, prepare principals and spokespeople for interviews, and develop holding statements and media strategy that can hold up across the full coverage period.",
              },
              {
                title: "Board, governance, and digital escalation",
                body: "We advise boards and councils on governance communication, the boundary between oversight and operations, and how to communicate confidentially during sensitive matters. We also help schools prepare for social media escalation, where a single post, video, or anonymous complaint can drive community pressure within hours.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-brand-border bg-white p-7 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <div className="inline-flex items-center rounded-full bg-off-white px-3 py-1 text-[11px] font-medium text-brand-teal">
                  Support area
                </div>
                <h3 className="font-heading font-black text-navy text-xl leading-snug mt-4 mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="border-l-4 border-brand-gold pl-6">
            <p className="text-charcoal text-[15px] leading-relaxed italic">
              &ldquo;CRC Public Relations has developed a crisis
              communications plan for Christian schools and has assisted
              many of our member schools across Australia to effectively
              communicate when issues have arisen.&rdquo;
            </p>
            <footer className="mt-4 text-charcoal-mid text-sm">
              Executive Officer, Christian schools sector
            </footer>
          </blockquote>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="schoolsPlaybook"
        title="Free: School crisis communications playbook"
        description="A practical guide for school leaders covering the crisis scenarios most likely to affect independent, Catholic, and faith-based schools, including parent communications, media response, and early leadership decisions."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions from school and faith-based leaders"
        expandable={false}
      />

      <PageClosingCTA
        title="School crises do not follow business hours."
        body="When a serious incident affects a school or faith-based organisation, the communication decisions made in the first hour shape trust for months. We are available 24/7 because the most sensitive matters rarely arrive at a convenient time."
      />
    </>
  );
}
