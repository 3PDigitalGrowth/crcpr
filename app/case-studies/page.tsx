import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CaseStudies } from "@/components/shared/CaseStudies";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { MediaReachSnapshot } from "@/components/shared/MediaReachSnapshot";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { MEDIA } from "@/components/altkit/data";

export const metadata: Metadata = {
  title: "Client Outcomes | CRC Public Relations",
  description:
    "Anonymised case studies from CRC Public Relations client engagements across industry associations, schools, and government.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        photo={{ src: MEDIA.bandTvCameraCrowd, alt: "A television camera operator filming in a crowd" }}
        copyId="case-studies"
        asidePreset="anonymisedOutcomes"
        eyebrow="Client outcomes"
        title="Results when the needs are great and the stakes are high."
        description="Four successful outcomes that show the kind of strategic work we do when policy, reputation, and stakeholder pressure converge."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId="case-studies"
        variant="white"
        title="These examples are anonymised, but they still show the outcomes our work is designed to deliver."
        items={[
          {
            label: "National industry association",
            value: "Legislation scrapped",
            detail:
              "Sector advocacy supported by disciplined communications can move an outcome before the policy is final.",
          },
          {
            label: "Education",
            value: "Zero enrolment loss",
            detail:
              "In sensitive school matters, careful parent, staff and media communication can preserve confidence through recovery.",
          },
          {
            label: "Government",
            value: "Funding secured",
            detail:
              "Strategic communications and stakeholder engagement can materially shape high-value government and development outcomes.",
          },
        ]}
      />

      <MediaReachSnapshot />

      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id="case-studies.t1">Why we show these</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="case-studies.t2">Measurable outcomes based on expert counsel.</T>
            </H2>
            <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id="case-studies.t3">
                Because we prioritise the confidentiality of our clients, we don&apos;t publicise their details. While
                we can point to countless examples of successful outcomes, we have outlined four here. We list them to
                make one important point:
              </T>
            </p>
            <p className="mt-6 border-l-[3px] border-[var(--k-blue)] pl-5 text-lg font-semibold leading-snug">
              <T id="case-studies.t4">What matters are results!</T>
            </p>
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id="case-studies.t5">
                  Many of our clients have been working with us for more than a decade, some from the time we commenced
                  in 2010. They stay with us because we bring results, and through results we have built strong
                  relationships and are now part of their team. We are proud of our record but we are always striving
                  to be better, more creative and more proactive.
                </T>
              </p>
              <p>
                <T id="case-studies.t6">
                  Results mean different things to each client. To some it&apos;s generating public profile that
                  builds enormous trust with their clients, potential clients and other stakeholders who are vital to
                  their success. To others, it&apos;s using media engagement to help them achieve other objectives.
                </T>
              </p>
              <p>
                <T id="case-studies.t7">
                  Of course sometimes media isn&apos;t even part of the strategy. They may need to build trust with
                  their &apos;publics&apos; (stakeholders) through direct engagement, or to be guided through a
                  challenging issue and ensure it doesn&apos;t escalate.
                </T>
              </p>
              <p>
                <T id="case-studies.t8">
                  Others may need to navigate through a major issue or crisis and deal with adversarial stakeholders,
                  social media warriors, or media. Every time, no matter the need, we stand beside you.
                </T>
              </p>
            </div>
          </div>

          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id="case-studies.t10">What the outcomes show</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t11", "Strategic communication moves outcomes", "t12", "The value is not noise or visibility. It is what changed because of the communication strategy adopted."],
                  ["t13", "Not all PR agencies are the same", "t14", "Choosing a PR agency isn't about how slick their marketing is, or their promises. It's about relationship and results."],
                  ["t15", "Stakes are real", "t16", "The matters shown here involve real people and policy, reputational, and organisational consequences."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`case-studies.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`case-studies.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      <Section tone="deep" className="py-11 md:py-14">
        <Container>
          <CaseStudies />
        </Container>
      </Section>

      <InlineEnquirySection
        copyId="case-studies"
        title="Need counsel on a matter where the outcome genuinely matters?"
        body="Whatever your communications need, sensitive issue, or stakeholder engagement challenge with real consequences, we can help shape the result."
        bullets={[
          "Strategic communication for high-stakes matters",
          "Experienced advice before or during scrutiny",
          "Clear next-step recommendations from experienced advisers",
        ]}
        defaultMessage="We would like to discuss a high-stakes communications matter with CRC Public Relations."
        variant="white"
      />

      <PageClosingCTA
        copyId="case-studies"
        title="Outcomes matter more than headlines."
        body="The examples here are anonymised, but they reflect the kinds of policy, reputational, and organisational results clients engage us to pursue when the stakes are real."
      />
    </>
  );
}
