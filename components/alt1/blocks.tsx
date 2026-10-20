import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { VideoKey } from "./data";
import { Reveal } from "./motion";
import { Container, Eyebrow, VideoFill } from "./primitives";

/** Closing invitation: one glass panel over a real-office loop. */
export function ClosingCTA({
  eyebrow,
  title,
  body,
  primaryLabel = "Book a consultation",
  video = "office",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  video?: VideoKey;
}) {
  return (
    <section className="tone-cta relative overflow-hidden py-24 md:py-36" aria-label={title}>
      <VideoFill video={video} alt="" />
      <div
        className="absolute inset-0"
        style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}
        aria-hidden
      />
      <Container>
        <Reveal className="glass max-w-4xl rounded-[28px] p-8 md:p-12">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className={`font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.03] ${eyebrow ? "mt-6" : ""}`}>
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="btn btn-primary">
              {primaryLabel}
            </Link>
            <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm font-semibold">
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              {siteConfig.phone.display}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
