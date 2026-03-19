import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

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

export default function SchoolsFaithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="SCHOOLS & FAITH-BASED ORGANISATIONS"
        title="School crisis communications that protects students, staff, and the community's trust."
        description="Specialist crisis response, parent communications, and media management for school leaders and faith-based organisations, when pastoral responsibility and strategic communications must work together."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      {/* Opening */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-[15px] leading-relaxed">
            Schools and faith-based organisations face communications
            challenges that are unlike those of any other sector. When an
            incident occurs, whether it is a safeguarding matter, a staff
            conduct issue, a governance concern, or a social media
            controversy, the audience is not just media and regulators. It
            is parents who entrust you with the care of their children,
            alumni who carry your school&apos;s reputation into the world,
            and a faith community that expects its values to be reflected in
            how your organisation responds to difficulty.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            The legal obligations are significant. The pastoral duty is
            equally significant. The communications challenge is managing
            both simultaneously, responding with the transparency that
            parents demand, the discretion that legal obligations require,
            and the compassion that the community deserves.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            CRC PR has worked with independent schools, Catholic school
            networks, and faith-based organisations across Australia for
            over 25 years. Lyall Mercer has presented at the Australian
            Catholic Bishops Conference and has developed crisis
            communications frameworks used by school networks across the
            country. We understand the unique pressures of school and
            faith-based communications, and the very high stakes of getting
            them wrong.
          </p>
        </div>
      </section>

      {/* How CRC PR supports schools and faith-based organisations */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-12">
            How CRC PR supports schools and faith-based organisations
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Crisis communications and incident response
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When a serious incident occurs at your school, a
                safeguarding disclosure, a medical emergency, an allegation
                against staff, or a sudden death in the school community,
                your first communications obligation is to your students and
                their families. We help you discharge that obligation
                clearly, compassionately, and in a way that does not
                compromise legal processes or create new liability.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We provide immediate senior counsel: drafting parent
                communications, preparing your principal for media
                enquiries, advising on social media response, and
                coordinating messaging across your board, staff, and
                community simultaneously.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Parent and community communications
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Parent communications during a crisis is one of the most
                difficult communications challenges a school leader faces.
                The instinct is to communicate as much as possible, as fast
                as possible, but the legal and pastoral reality is more
                nuanced. We help school leaders develop parent
                communications that are honest, appropriately bounded, and
                designed to maintain community confidence without
                prejudicing outcomes.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Media relations and spokesperson support
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When media interest in an incident at your school is
                sustained, the school&apos;s communications posture must be
                equally sustained. We manage media enquiries, prepare your
                principal or spokesperson for on-camera and print media
                appearances, and develop holding statements and media
                strategies that maintain your school&apos;s position
                throughout the coverage period.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Board and governance communications
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                School boards and councils face specific governance
                communications challenges, managing the boundary between
                board oversight and operational management during a crisis,
                and communicating with parents about governance processes
                without compromising confidentiality. We advise boards and
                councils on their communications obligations and help them
                discharge those obligations clearly.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Social media and online reputation
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Social media has fundamentally changed the speed and
                character of school crises. A single parent post, a student
                video, or an anonymous complaint on a school review forum
                can generate sustained community attention within hours. We
                help schools develop social media governance frameworks
                before incidents occur, and provide rapid response counsel
                when a social media situation escalates.
              </p>
            </div>
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
              Vanessa Cheng, Executive Officer, Australian Association of
              Christian Schools
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-navy text-xl mb-3">
            Free: School Crisis Communications Playbook
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            A practical guide for school leaders covering the five most
            common school crisis scenarios: safeguarding disclosures, staff
            conduct allegations, medical emergencies, social media
            incidents, and governance challenges. Includes parent
            communication templates and a media response framework.
            Developed from 25 years of working with Australian school
            networks.
          </p>
        </div>
      </section>

      <LeadMagnetBanner magnet="schoolsPlaybook" />

      {/* Closing CTA */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-white text-2xl md:text-3xl">
            School crises don&apos;t follow business hours.
          </h2>
          <p className="text-white/75 text-[15px] leading-relaxed mt-6 max-w-2xl mx-auto">
            When a serious incident occurs at your school, the
            communications decisions you make in the first hour shape the
            response of your community for months. CRC PR is available 24
            hours a day, seven days a week, because the incidents that
            require the most careful communications response tend to occur
            on weekends and during school holidays.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 mt-8 hover:bg-gold-light transition"
          >
            BOOK A CONSULTATION
          </Link>
          <p className="mt-4">
            <a
              href={siteConfig.phone.href}
              className="text-teal text-sm hover:opacity-80 transition"
            >
              For urgent situations, call {siteConfig.phone.display},
              available 24/7
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
