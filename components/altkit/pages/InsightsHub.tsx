import { ClosingCTA } from "../blocks";
import type { ConceptId } from "../concepts";
import { CONCEPTS } from "../concepts";
import { InsightsGrid } from "../InsightsGrid";
import { getA1Posts, toCard } from "../insights";
import { Reveal } from "../motion";
import { Container, Eyebrow, H2, MediaMarquee, Section } from "../primitives";
import { ResourceCard } from "../ResourceCard";

/** Insights hub, shared by every concept. One photograph (the lead article). */
export function InsightsHub({ id }: { id: ConceptId }) {
  const posts = getA1Posts(CONCEPTS[id].base);

  return (
    <>
      <Section tone="deep" className="pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="orb -right-48 -top-56 h-[38rem] w-[38rem]" aria-hidden />
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Insights</Eyebrow>
            <h1 className="kit-display kit-h1 mt-5">Insights. Commentary. Crisis thinking.</h1>
            <p className="mt-5 text-base text-muted md:text-lg">From Lyall Mercer and the CRC Public Relations team.</p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="base" className="py-14 md:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr,1fr] lg:gap-14">
            <H2 className="max-w-xl">
              Our insights are written for leaders who need clearer judgement, not more commentary.
            </H2>
            <p className="max-w-xl self-end text-base leading-relaxed text-muted">
              The focus is practical: what matters, where organisations usually misread the pressure, and what
              experienced advisers would be watching before the situation escalates.
            </p>
          </div>
          <div className="mt-12">
            <InsightsGrid posts={posts.map(toCard)} />
          </div>
        </Container>
      </Section>

      <Section tone="deep" className="py-16 md:py-20" ariaLabel="Resources">
        <div className="orb -left-40 -top-40 h-[34rem] w-[34rem]" aria-hidden />
        <Container>
          <H2>Resources</H2>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr,1fr,1fr]">
            <ResourceCard magnet="crisisReadinessChecklist" featured />
            <ResourceCard magnet="corpCommsChecklist" />
            <ResourceCard magnet="publicVoiceSteps" />
          </div>
        </Container>
      </Section>

      <Section tone="base" className="py-12 md:py-14">
        <Container>
          <MediaMarquee />
        </Container>
      </Section>

      <ClosingCTA
        title="Need advice on a crisis, issue, or reputation matter?"
        body="Our articles are designed to clarify the issue. If you need to apply that thinking to a live situation, the next step is a confidential conversation."
        primaryLabel="Get in touch"
      />
    </>
  );
}
