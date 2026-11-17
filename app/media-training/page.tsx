import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { FramedPhoto } from "@/components/altkit/media";
import { MEDIA } from "@/components/altkit/data";

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
  "You have one or more executives who regularly speak to media, or are likely to soon",
  "Your industry is under regulatory or public scrutiny",
  "You have a board-level spokesperson who has not been trained in the past 12 months",
  "Your organisation has experienced a crisis before and the response was not as confident as it needed to be",
  "You are preparing for a major announcement, a controversy, or a period of heightened media interest",
  "Your team handles media enquiries but has never received formal spokesperson training",
] as const;

const proofItems = [
  {
    label: "Trainer perspective",
    value: "Journalist-led",
    detail:
      "Training is delivered by people who know how interviews are framed, where pressure comes from, and what weak answers sound like.",
  },
  {
    label: "Practical rehearsal",
    value: "Real scenarios",
    detail:
      "Sessions are built around your issues, your likely questions, and the interviews your leaders are actually going to face.",
  },
  {
    label: "Executive confidence",
    value: "Prepared spokespeople",
    detail:
      "The goal is not a performance. It is a spokesperson who can answer difficult questions with control, clarity, and credibility.",
  },
] as const;

const faqs = [
  {
    question: "Who should attend media training?",
    answer:
      "Usually the people most likely to be quoted, filmed, or called when pressure rises: executives, subject matter experts, board-level spokespeople, and communications leaders responsible for supporting them.",
  },
  {
    question: "Is CRC Public Relations' media training generic or tailored?",
    answer:
      "Tailored. Sessions are built around your issues, likely lines of questioning, and the specific vulnerabilities a skilled interviewer would test, rather than generic interview exercises.",
  },
  {
    question: "Can you run hostile interview or crisis-specific sessions?",
    answer:
      "Yes. We regularly run hostile interview rehearsal and crisis-specific training for leaders preparing for media pressure around regulatory, governance, operational, or reputational issues.",
  },
];

const P = "media-training";

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated hero imagery and video were dropped and the boxed cards became
   hairline ledgers. */

export default function MediaTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        photo={{ src: MEDIA.bandCameraMonitor, alt: "A camera operator and director watching a monitor during filming" }} copyId={P}
        asidePreset="mediaTraining"
        eyebrow="Media training"
        title="Media training from people who have sat on the other side of the camera."
        description="Spokesperson training, hostile interview preparation, and on-camera coaching delivered by former television and radio journalists with decades of broadcast experience."
        ctaLabel="Book a media training session"
        ctaHref="/contact"
      />

      <PageProofStrip copyId={P}
        title="Good media training improves judgement, not just technique."
        items={[...proofItems]}
      />

      {/* ---------- WHAT BETTER TRAINING LOOKS LIKE ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t1`}>What better training looks like</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t2`}>The real risk is not poor technique. It is poor preparation.</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t3`}>
                A spokesperson can look polished and still lose the interview. The difference usually comes down to
                whether they are ready for the real pressure points in the story.
              </T>
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t4`}>
                  Most media training focuses on technique: bridging phrases, body language, staying on message.
                  These things matter. But the most common failure point in a media interview is not technique. It
                  is lack of preparation for the specific questions a journalist is likely to ask.
                </T>
              </p>
              <p>
                <T id={`${P}.t5`}>
                  Generic media training produces spokespeople who know how to bridge but cannot answer the hardest
                  question about their own organisation. Our media training begins not with technique, but with
                  intelligence: understanding the story the journalist is building, the questions they are most
                  likely to ask, and the specific vulnerabilities in your organisation&apos;s position that a
                  skilled interviewer will find. Every session is designed and reviewed by an experienced adviser.
                </T>
              </p>
              <p>
                <T id={`${P}.t6`}>
                  Our training is delivered by former television and radio journalists who have conducted the kinds
                  of interviews your executives need to be ready for. They know what interviewers are looking for,
                  how hostile interviews are constructed, and what the difference looks like between a spokesperson
                  who holds their position and one who does not.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <FramedPhoto src={MEDIA.mediaTrainingInterview} alt="A spokesperson in a filmed interview set-up" className="mb-6" />
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t7`}>Technique is not enough</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t8", "Bridging without substance", "t9", "Executives can sound polished while still failing to answer the real question being tested."],
                  ["t10", "Generic rehearsal", "t11", "Practice is weak if it is not built around your actual vulnerabilities, timing, and likely scrutiny."],
                  ["t12", "False confidence", "t13", "A confident spokesperson can still lose control if the preparation has not matched the pressure."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- WHAT EXECUTIVES GET WRONG ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container>
          <Eyebrow>
            <T id={`${P}.t14`}>Executive mistakes</T>
          </Eyebrow>
          <H2 className="mt-3 max-w-3xl">
            <T id={`${P}.t15`}>What executives usually get wrong</T>
          </H2>
          <p className="mt-5 max-w-2xl text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
            <T id={`${P}.t16`}>
              The most common failure in a difficult interview is not saying too little. It is assuming that
              confidence alone will carry the day.
            </T>
          </p>
          <div className="ledger mt-8">
            {[
              {
                title: "Confidence without structure",
                body: "A polished executive can still lose control if their answers are not built around the real pressure points in the story.",
              },
              {
                title: "Style before substance",
                body: "Strong delivery does not help if the underlying answer is vague, evasive, or strategically weak.",
              },
              {
                title: "Missing the real question",
                body: "Our training prepares for the question behind the question, so responses stay credible under pressure rather than merely rehearsed.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-sm font-bold">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <InlineEnquirySection copyId={P}
        title="Planning a training session for your executives or spokespersons?"
        body="We run one-to-one, small-group, crisis-specific, and board-level media training for organisations that want stronger performance before the next difficult interview."
        bullets={[
          "Executive, spokesperson, and board-level media training",
          "Hostile interview rehearsal and crisis scenario preparation",
          "Sessions tailored to your organisation, not generic examples",
        ]}
        defaultMessage="We are interested in a media training session for our executives or spokespersons."
        variant="white"
      />

      {/* ---------- TRAINING PROGRAMMES ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <H2 className="max-w-3xl">
            <T id={`${P}.t17`}>Training programmes for every situation</T>
          </H2>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            <div className="border-t border-line py-6">
              <h3 className="kit-display text-[15px] uppercase leading-snug">
                <T id={`${P}.t18`}>Spokesperson and on-camera training</T>
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t19`}>
                  Intensive one-on-one or small group sessions that prepare executives, managers, and communications
                  staff for television, radio, and press conference appearances. Sessions are conducted using real
                  broadcast equipment and recorded for review, because watching yourself on camera is the fastest
                  path to genuine improvement.
                </T>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t20`}>
                  Every session covers: message development and prioritisation, bridging and refocusing techniques,
                  body language and presence on camera, handling off-topic questions, and managing the emotional
                  pressure of a live interview. We use real scenarios from your sector, not generic examples.
                </T>
              </p>
            </div>
            <div className="border-t border-line py-6">
              <h3 className="kit-display text-[15px] uppercase leading-snug">
                <T id={`${P}.t21`}>Hostile media and crisis interview preparation</T>
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t22`}>
                  For leaders who may face adversarial media questioning during a regulatory inquiry, a crisis
                  event, or a contentious public debate, we run intensive workshops that simulate the specific
                  conditions they are likely to face.
                </T>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t23`}>
                  These sessions include: mock hostile interviews conducted by former journalists, coaching on how
                  to hold your position under sustained pressure, training in recognising the techniques journalists
                  use to provoke unrehearsed responses, and the development of a personal communications strategy
                  for high-stakes appearances.
                </T>
              </p>
            </div>
            <div className="border-t border-line py-6">
              <h3 className="kit-display text-[15px] uppercase leading-snug">
                <T id={`${P}.t24`}>PR fundamentals: team workshops</T>
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t25`}>
                  For communications teams and new spokespeople who need a solid foundation in media relations, we
                  deliver practical workshops that cover: how newsrooms work and how journalists make story
                  decisions, how to develop and hold a key message position, the mechanics of a media interview
                  across print, broadcast, and digital, and how to build and maintain productive media
                  relationships.
                </T>
              </p>
            </div>
            <div className="border-t border-line py-6">
              <h3 className="kit-display text-[15px] uppercase leading-snug">
                <T id={`${P}.t26`}>Online and remote media training</T>
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t27`}>
                  Full media training programmes delivered via video conferencing for organisations with distributed
                  teams, interstate offices, or Pacific Island locations. We use broadcast-quality recording and
                  playback to maintain the same rigour as in-person sessions.
                </T>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t28`}>
                  Remote delivery also allows us to work with multiple participants across multiple locations
                  simultaneously, particularly useful for organisations preparing a leadership team for a major
                  announcement or issue.
                </T>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- WHO NEEDS MEDIA TRAINING ---------- */}
      <Section tone="deep" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t29`}>Readiness check</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t30`}>Who needs media training</T>
            </H2>
            <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t31`}>
                If several of these sound familiar, media training is no longer a nice-to-have. It is part of basic
                executive preparedness.
              </T>
            </p>
          </div>
          <ul className="divide-y divide-[var(--line)] border-y border-line">
            {WHO_NEEDS_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3.5 py-4">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden />
                <span className="text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <LeadMagnetBanner
        magnet="mediaInterviewGuide"
        variant="light"
        title="Download the Media Interview Preparation Guide"
        description="The pre-interview checklist and briefing framework we give to executives before meaningful media appearances. Covers hostile interview preparation, on-camera presence, message prioritisation, and the questions every spokesperson should be able to answer before walking in."
      />

      <FAQSection copyId={P}
        items={faqs}
        titleText="Common questions about media training"
        expandable={false}
      />

      <PageClosingCTA copyId={P}
        title="Every spokesperson is a risk until they are prepared."
        body="Media training is an investment you make before the difficult interview, not the day after it. We prepare leaders for the questions they are actually likely to face."
        primaryLabel="Book a media training session"
      />
    </>
  );
}
