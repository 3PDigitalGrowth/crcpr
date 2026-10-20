import type { Metadata } from "next";
import { isValidElement, type ComponentProps, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ClosingCTA } from "@/components/alt1/blocks";
import { A1_ROUTES, FOUNDERS, PHOTOS } from "@/components/alt1/data";
import { formatDate, slugify } from "@/components/alt1/format";
import { LeadMagnetForm } from "@/components/alt1/forms";
import {
  autoLink,
  getA1Post,
  getA1Posts,
  getToc,
  RELATED_SERVICES,
  splitForInsert,
  toCard,
} from "@/components/alt1/insights";
import { ReadingProgress, Reveal } from "@/components/alt1/motion";
import { PostCard } from "@/components/alt1/PostCard";
import { Container, Eyebrow, H2, Section } from "@/components/alt1/primitives";

export function generateStaticParams() {
  return getA1Posts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getA1Post(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Alt 1 | CRC Public Relations`,
    description: post.excerpt,
    robots: { index: false, follow: false },
  };
}

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children);
  return "";
}

function MdxAnchor({ href = "", children, ...rest }: ComponentProps<"a">) {
  if (href.startsWith("/")) return <Link href={href}>{children}</Link>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

const mdxComponents = {
  a: MdxAnchor,
  h2: ({ children }: { children?: ReactNode }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
  h3: ({ children }: { children?: ReactNode }) => <h3 id={slugify(textOf(children))}>{children}</h3>,
};

export default function Alt1ArticlePage({ params }: { params: { slug: string } }) {
  const post = getA1Post(params.slug);
  if (!post) notFound();

  const toc = getToc(post.content);
  const [partOne, partTwo] = splitForInsert(autoLink(post.content));
  const magnet = siteConfig.leadMagnets[post.magnet];
  const magnetHeadline = "headline" in magnet ? magnet.headline : null;
  const related = RELATED_SERVICES[post.category] ?? RELATED_SERVICES["Crisis Communications"];
  const more = getA1Posts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)
    .map(toCard);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "CRC Public Relations", url: "https://crcpr.com.au" },
    image: post.image,
  };

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---------- HERO ---------- */}
      <Section tone="deep" className="pb-0">
        <div className="orb -right-56 -top-72 h-[56rem] w-[56rem]" aria-hidden />
        <Container className="pt-10 md:pt-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted">
            <Link href={A1_ROUTES.insights} className="inline-flex items-center gap-1.5 hover:text-fg">
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              Insights
            </Link>
            <span aria-hidden>/</span>
            <span className="text-accent">{post.category}</span>
          </nav>
          <Reveal>
            <h1 className="font-display mt-8 max-w-5xl text-[clamp(2.1rem,5.2vw,4.5rem)] leading-[1.02] tracking-[-0.01em]">
              {post.title}
            </h1>
            {/* Most articles open with their excerpt; only show it here when they don't. */}
            {post.content.trim().startsWith(post.excerpt.slice(0, 40)) ? null : (
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{post.excerpt}</p>
            )}
            <div className="mt-8 flex items-center gap-4">
              <span className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src={PHOTOS.lyallNavyClose} alt="" fill sizes="48px" className="object-cover object-[50%_12%]" />
              </span>
              <div className="text-sm">
                <p className="font-semibold">{post.author}</p>
                <p className="text-muted">
                  {formatDate(post.date)} &middot; {post.readMins} min read
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[28px] md:aspect-[21/9]">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1400px) 1320px, 100vw" className="object-cover" />
          </Reveal>
        </Container>
        <div className="h-16 md:h-24" />
      </Section>

      {/* ---------- BODY ---------- */}
      <Section tone="base" className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[200px,minmax(0,1fr),300px] xl:gap-16">
          <aside className="hidden lg:block">
            {toc.length >= 2 ? (
              <nav aria-label="In this article" className="sticky top-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">In this article</p>
                <ol className="mt-4 space-y-3 border-l border-line">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="-ml-px block border-l-2 border-transparent pl-4 text-sm leading-snug text-muted transition-colors hover:border-[#1c74bc] hover:text-fg"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
          </aside>

          <article className="a1-prose mx-auto w-full max-w-[44rem]">
            <MDXRemote source={partOne} components={mdxComponents} />

            <aside className="glass my-14 rounded-[24px] p-6 md:p-8" aria-label={magnet.title}>
              <Eyebrow>Free download</Eyebrow>
              <p className="font-display mt-4 text-[1.6rem] leading-[1.1] !text-[color:var(--fg)]">
                {magnetHeadline ?? magnet.title}
              </p>
              {magnetHeadline ? <p className="!mt-2 text-sm font-semibold !text-[color:var(--accent)]">{magnet.title}</p> : null}
              <div className="mt-6">
                <LeadMagnetForm magnet={post.magnet} layout="row" submitLabel="Send it to me" />
              </div>
            </aside>

            <MDXRemote source={partTwo} components={mdxComponents} />
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-5">
              <div className="glass rounded-[24px] p-6">
                <div className="flex items-center gap-3">
                  <span className="relative h-14 w-14 overflow-hidden rounded-2xl">
                    <Image src={PHOTOS.lyallNavyClose} alt="" fill sizes="56px" className="object-cover object-[50%_12%]" />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{FOUNDERS.lyall.name}</p>
                    <p className="text-xs text-muted">{FOUNDERS.lyall.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-base font-bold leading-snug">Need advice on a crisis, issue, or reputation matter?</p>
                <Link href="/contact" className="btn btn-primary mt-5 w-full">
                  Get in touch
                </Link>
                <a href={siteConfig.phone.href} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      {/* ---------- AUTHOR ---------- */}
      <Section tone="base" className="pb-20 md:pb-28">
        <Container>
          <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-[28px] border border-line p-6 md:grid-cols-[220px,1fr] md:p-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
              <Image src={PHOTOS.lyallBlazer} alt={`${FOUNDERS.lyall.name}, CRC Public Relations`} fill sizes="220px" className="object-cover object-[50%_15%]" />
            </div>
            <div>
              <Eyebrow>{FOUNDERS.lyall.role}</Eyebrow>
              <p className="font-display mt-4 text-3xl">{FOUNDERS.lyall.name}</p>
              <p className="mt-2 text-sm font-semibold text-accent">{siteConfig.lyall.origin}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">{FOUNDERS.lyall.bio[0]}</p>
              <Link href="/about" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Read Lyall&apos;s full profile
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- RELATED ---------- */}
      <Section tone="deep" className="py-24 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr,1.2fr] lg:gap-20">
            <div>
              <Eyebrow>Related services</Eyebrow>
              <ul className="mt-6 border-t border-line">
                {related.map((s) => (
                  <li key={s.href} className="border-b border-line">
                    <Link href={s.href} className="group block py-5">
                      <span className="flex items-center justify-between gap-4 text-lg font-bold">
                        {s.title}
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                      </span>
                      <span className="mt-1 block text-sm text-muted">{s.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-end justify-between gap-6">
                <H2 className="!text-[clamp(1.8rem,3.4vw,2.6rem)]">Related insights</H2>
                <Link href={A1_ROUTES.insights} className="shrink-0 text-sm font-semibold text-accent">
                  Insights
                </Link>
              </div>
              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                {more.map((p) => (
                  <PostCard key={p.slug} post={p} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ClosingCTA
        title="Need advice on a crisis, issue, or reputation matter?"
        body="Our articles are designed to clarify the issue. If you need to apply that thinking to a live situation, the next step is a confidential conversation."
        primaryLabel="Get in touch"
        video="phone"
      />
    </>
  );
}
