import { isValidElement, type ComponentProps, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ClosingCTA } from "../blocks";
import { CONCEPTS, routesFor, type ConceptId } from "../concepts";
import { FOUNDERS } from "../data";
import { formatDate, slugify } from "../format";
import { LeadMagnetForm } from "../forms";
import { autoLink, getA1Post, getA1Posts, getToc, relatedServices, splitForInsert, toCard } from "../insights";
import { ReadingProgress, Reveal } from "../motion";
import { PostCard } from "../PostCard";
import { Container, Eyebrow, H2, Section } from "../primitives";

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

export function articleParams(id: ConceptId) {
  return getA1Posts(CONCEPTS[id].base).map((p) => ({ slug: p.slug }));
}

export function articleMetadata(id: ConceptId, slug: string) {
  const post = getA1Post(CONCEPTS[id].base, slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${CONCEPTS[id].name} | CRC Public Relations`,
    description: post.excerpt,
    robots: { index: false, follow: false },
  };
}

export function ArticlePage({ id, slug }: { id: ConceptId; slug: string }) {
  const base = CONCEPTS[id].base;
  const routes = routesFor(base);
  const post = getA1Post(base, slug);
  if (!post) notFound();

  const toc = getToc(post.content);
  const [partOne, partTwo] = splitForInsert(autoLink(post.content, base));
  const magnet = siteConfig.leadMagnets[post.magnet];
  const magnetHeadline = "headline" in magnet ? magnet.headline : null;
  const related = relatedServices(base, post.category);
  const more = getA1Posts(base)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)
    .map(toCard);
  // Most articles open with their excerpt; only show it in the header when they don't.
  const showExcerpt = !post.content.trim().startsWith(post.excerpt.slice(0, 40));

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

      <Section tone="deep" className="pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="orb -right-56 -top-72 h-[44rem] w-[44rem]" aria-hidden />
        <Container>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted">
            <Link href={routes.insights} className="inline-flex items-center gap-1.5 hover:text-fg">
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              Insights
            </Link>
            <span aria-hidden>/</span>
            <span className="text-accent">{post.category}</span>
          </nav>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.35fr,1fr] lg:items-end">
            <Reveal>
              <h1 className="kit-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.08]">{post.title}</h1>
              {showExcerpt ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{post.excerpt}</p> : null}
              <p className="mt-6 text-sm text-muted">
                <span className="font-semibold text-fg">{post.author}</span> &middot; {formatDate(post.date)} &middot;{" "}
                {post.readMins} min read
              </p>
            </Reveal>
            <Reveal delay={0.1} className="kit-r relative aspect-[3/2] overflow-hidden">
              <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="base" className="py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[190px,minmax(0,1fr),260px] xl:gap-14">
          <aside className="hidden lg:block">
            {toc.length >= 2 ? (
              <nav aria-label="In this article" className="sticky top-24">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">In this article</p>
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

          <article className="kit-prose mx-auto w-full max-w-[42rem]">
            <MDXRemote source={partOne} components={mdxComponents} />

            <aside className="glass kit-r my-12 p-6 md:p-7" aria-label={magnet.title}>
              <Eyebrow>Free download</Eyebrow>
              <p className="kit-display mt-3 text-[1.35rem] leading-[1.15] !text-[color:var(--fg)]">
                {magnetHeadline ?? magnet.title}
              </p>
              {magnetHeadline ? <p className="!mt-1.5 text-sm font-semibold !text-[color:var(--accent)]">{magnet.title}</p> : null}
              <div className="mt-5">
                <LeadMagnetForm magnet={post.magnet} layout="row" submitLabel="Send it to me" />
              </div>
            </aside>

            <MDXRemote source={partTwo} components={mdxComponents} />
          </article>

          <aside className="hidden lg:block">
            <div className="glass kit-r sticky top-24 p-5">
              <p className="text-sm font-bold">{FOUNDERS.lyall.name}</p>
              <p className="text-xs text-muted">{FOUNDERS.lyall.role}</p>
              <p className="mt-4 text-[15px] font-bold leading-snug">Need advice on a crisis, issue, or reputation matter?</p>
              <Link href="/contact" className="btn btn-primary mt-4 w-full">
                Get in touch
              </Link>
              <a href={siteConfig.phone.href} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.phone.display}
              </a>
            </div>
          </aside>
        </Container>
      </Section>

      <Section tone="base" className="pb-16 md:pb-20">
        <Container>
          <div className="kit-r mx-auto grid max-w-4xl items-center gap-6 border border-line p-6 sm:grid-cols-[140px,1fr] md:p-8">
            <div className="kit-r-sm relative aspect-[4/5] w-28 overflow-hidden sm:w-full">
              <Image src={FOUNDERS.lyall.photo} alt={`${FOUNDERS.lyall.name}, CRC Public Relations`} fill sizes="140px" className="object-cover object-[50%_15%]" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">{FOUNDERS.lyall.role}</p>
              <p className="kit-display mt-2 text-2xl">{FOUNDERS.lyall.name}</p>
              <p className="mt-1.5 text-sm font-semibold text-accent">{siteConfig.lyall.origin}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{FOUNDERS.lyall.bio[0]}</p>
              <Link href="/about" className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                Read Lyall&apos;s full profile
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="deep" className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Related services</Eyebrow>
            <ul className="mt-5 border-t border-line">
              {related.map((s) => (
                <li key={s.href} className="border-b border-line">
                  <Link href={s.href} className="group block py-4">
                    <span className="flex items-center justify-between gap-4 text-base font-bold">
                      {s.title}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </span>
                    <span className="mt-1 block text-sm text-muted">{s.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-end justify-between gap-6">
              <H2>Related insights</H2>
              <Link href={routes.insights} className="shrink-0 text-sm font-semibold text-accent">
                Insights
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
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
