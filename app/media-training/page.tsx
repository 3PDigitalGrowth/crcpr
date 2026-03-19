import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title:
    "Media Training Australia | Executive & Spokesperson Training | CRC Public Relations",
  description:
    "Professional media training delivered by former broadcast journalists. Spokesperson training, hostile interview preparation, and on-camera coaching for executives and communications teams across Australia.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Media Training",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Professional media training delivered by former broadcast journalists. Spokesperson training, hostile interview preparation, and on-camera coaching for executives and communications teams across Australia.",
  areaServed: "AU",
  serviceType: "Media Training",
};

const WHO_NEEDS_ITEMS = [
  "You have one or more executives who regularly speak to media, or will need to",
  "Your industry is under regulatory or public scrutiny",
  "You have a board-level spokesperson who has not been trained in the past 12 months",
  "Your organisation has experienced a crisis in the past and your response was not as confident as you would have wanted",
  "You are preparing for a major announcement, a controversy, or a period of heightened media interest",
  "Your team handles media enquiries but has never received formal training on how to do so",
] as const;

export default function MediaTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="MEDIA TRAINING"
        title="Media training from people who have sat on the other side of the camera."
        description="Spokesperson training, hostile interview preparation, and on-camera coaching delivered by former television and radio journalists with decades of broadcast experience."
        ctaLabel="BOOK A MEDIA TRAINING SESSION"
        ctaHref="/contact"
      />

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-[15px] leading-relaxed">
            Most media training focuses on technique: bridging phrases, body
            language, staying on message. These things matter. But the most
            common failure point in a media interview is not technique. It is
            lack of preparation for the specific questions a journalist is
            likely to ask.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            Generic media training produces spokespeople who know how to bridge
            but cannot answer the hardest question about their own organisation.
            CRC PR media training begins not with technique, but with
            intelligence: understanding the story the journalist is building,
            the questions they are most likely to ask, and the specific
            vulnerabilities in your organisation&apos;s position that a skilled
            interviewer will find.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            Our training is delivered by former television and radio journalists
            who have conducted the kinds of interviews your executives need to
            be ready for. They know what interviewers are looking for, how
            hostile interviews are constructed, and what the difference looks
            like between a spokesperson who holds their position and one who
            does not.
          </p>
        </div>
      </section>

      {/* Training programs */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Training programs for every situation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Spokesperson and on-camera training
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Intensive one-on-one or small group sessions that prepare
                executives, senior managers, and communications staff for
                television, radio, and press conference appearances. Sessions
                are conducted using real broadcast equipment and recorded for
                review, because watching yourself on camera is the fastest path
                to genuine improvement.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                Every session covers: message development and prioritisation,
                bridging and refocusing techniques, body language and presence
                on camera, handling off-topic questions, and managing the
                emotional pressure of a live interview. We use real scenarios
                from your sector, not generic examples.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Hostile media and crisis interview preparation
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                For senior leaders who may face adversarial media questioning
                during a regulatory inquiry, a crisis event, or a contentious
                public debate, we run intensive workshops that simulate the
                specific conditions they are likely to face.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                These sessions include: mock hostile interviews conducted by
                former journalists, coaching on how to hold your position under
                sustained pressure, training in recognising the techniques
                journalists use to provoke unrehearsed responses, and the
                development of a personal communications strategy for
                high-stakes appearances.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                PR fundamentals: team workshops
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                For communications teams and new spokespeople who need a solid
                foundation in media relations, we deliver practical workshops
                that cover: how newsrooms work and how journalists make story
                decisions, how to develop and hold a key message position, the
                mechanics of a media interview across print, broadcast, and
                digital, and how to build and maintain productive media
                relationships.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Online and remote media training
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Full media training programs delivered via video conferencing
                for organisations with distributed teams, interstate offices,
                or Pacific Island locations. We use broadcast-quality recording
                and playback to maintain the same rigour as in-person sessions.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                Remote delivery also allows us to work with multiple
                participants across multiple locations simultaneously,
                particularly useful for organisations preparing a leadership
                team for a major announcement or issue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who needs media training */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Who needs media training
          </h2>
          <div className="bg-off-white border border-brand-border rounded-lg p-6 md:p-8">
            <p className="text-charcoal text-[15px] leading-relaxed mb-6">
              If any of the following describe your organisation, media training
              is a priority:
            </p>
            <ul className="space-y-4">
              {WHO_NEEDS_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-charcoal text-[15px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-navy text-xl mb-3">
            Download the Media Interview Preparation Guide
          </h3>
          <p className="text-charcoal text-[15px] leading-relaxed">
            The pre-interview checklist and briefing framework we give to every
            executive before a media interview. Covers hostile interview
            preparation, on-camera presence, message prioritisation, and the
            questions every spokesperson should be able to answer before they
            walk in.
          </p>
        </div>
      </section>

      <LeadMagnetBanner magnet="mediaInterviewGuide" />

      {/* Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading font-black text-3xl mb-6">
              Every spokesperson is a risk until they are prepared.
            </h2>
            <p className="text-white/75 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              Media training is not an investment you should make the day before
              an interview. It is an investment you make when things are quiet,
              so that your spokespeople perform when things are not.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
              >
                BOOK A MEDIA TRAINING SESSION
              </Link>
              <a
                href="tel:1300182186"
                className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-brand-gold hover:text-navy transition"
              >
                Questions about our programs? Call 1300 182 186
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
