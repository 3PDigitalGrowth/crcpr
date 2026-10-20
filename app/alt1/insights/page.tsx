import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCTA } from "@/components/alt1/blocks";
import { InsightsGrid } from "@/components/alt1/InsightsGrid";
import { getA1Posts, toCard } from "@/components/alt1/insights";
import { Reveal } from "@/components/alt1/motion";
import { Container, Eyebrow, H2, MediaMarquee, Section, VideoFill } from "@/components/alt1/primitives";
import { ResourceCard } from "@/components/alt1/ResourceCard";
import { PHOTOS } from "@/components/alt1/data";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Insights | Alt 1 | CRC Public Relations",
  description: "Insights, commentary, and crisis thinking from Lyall Mercer and the CRC Public Relations team.",
};

export default function Alt1InsightsPage() {
  const posts = getA1Posts();

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="tone-deep relative flex min-h-[620px] items-end overflow-hidden md:min-h-[74vh]">
        <VideoFill video="office" alt="The CRC Public Relations office" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[color-mix(in_srgb,var(--bg)_40%,transparent)] to-transparent" aria-hidden />
        <Container className="w-full pb-14 pt-32 md:pb-20">
          <Reveal className="glass-strong max-w-3xl rounded-[28px] p-8 md:p-12">
            <Eyebrow>Insights</Eyebrow>
            <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,5.2rem)] uppercase leading-[0.95]">
              Insights. Commentary. Crisis thinking.
            </h1>
            <p className="mt-6 text-base text-muted md:text-lg">From Lyall Mercer and the CRC Public Relations team.</p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- ALL ARTICLES ---------- */}
      <Section tone="base" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr,1fr] lg:gap-16">
            <H2 className="max-w-xl !text-[clamp(1.8rem,3.4vw,2.8rem)]">
              Our insights are written for leaders who need clearer judgement, not more commentary.
            </H2>
            <p className="max-w-xl self-end text-base leading-relaxed text-muted md:text-lg">
              The focus is practical: what matters, where organisations usually misread the pressure, and what
              experienced advisers would be watching before the situation escalates.
            </p>
          </div>
          <div className="mt-14">
            <InsightsGrid posts={posts.map(toCard)} />
          </div>
        </Container>
      </Section>

      {/* ---------- RESOURCES ---------- */}
      <section className="tone-deep relative overflow-hidden py-24 md:py-32" aria-labelledby="a1-resources">
        <Image src={PHOTOS.officeBooth} alt="" fill sizes="100vw" className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-[var(--bg)] opacity-[0.86]" aria-hidden />
        <div className="orb -right-40 -top-40 h-[40rem] w-[40rem]" aria-hidden />
        <Container>
          <H2 className="max-w-3xl">
            <span id="a1-resources">Resources</span>
          </H2>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr,1fr,1fr]">
            <ResourceCard magnet="crisisReadinessChecklist" featured />
            <ResourceCard magnet="corpCommsChecklist" />
            <ResourceCard magnet="publicVoiceSteps" />
          </div>
        </Container>
      </section>

      {/* ---------- MEDIA ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <MediaMarquee />
        </Container>
      </Section>

      <ClosingCTA
        title="Need advice on a crisis, issue, or reputation matter?"
        body="Our articles are designed to clarify the issue. If you need to apply that thinking to a live situation, the next step is a confidential conversation."
        primaryLabel="Get in touch"
        video="pair"
      />
    </>
  );
}
