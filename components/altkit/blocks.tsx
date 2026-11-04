import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "./motion";
import { Container, Eyebrow } from "./primitives";

/** Closing invitation: one glass panel over soft brand light. No imagery. */
export function ClosingCTA({
  eyebrow,
  title,
  body,
  primaryLabel = "Book a consultation",
  center = false,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  center?: boolean;
}) {
  return (
    <section className="tone-cta relative overflow-hidden py-20 md:py-24" aria-label={title}>
      <div className="orb -right-40 -top-48 h-[36rem] w-[36rem]" aria-hidden />
      <div className="orb -bottom-56 -left-40 h-[30rem] w-[30rem]" aria-hidden />
      <Container>
        <Reveal className={`glass kit-r max-w-3xl p-8 md:p-10 ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow ? <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow> : null}
          <h2 className={`kit-display kit-h2 ${eyebrow ? "mt-5" : ""}`}>{title}</h2>
          <p className={`mt-5 max-w-2xl text-base leading-relaxed text-muted ${center ? "mx-auto" : ""}`}>{body}</p>
          <div className={`mt-8 flex flex-wrap items-center gap-5 ${center ? "justify-center" : ""}`}>
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
