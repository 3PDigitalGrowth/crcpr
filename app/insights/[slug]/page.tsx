import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";
import { siteConfig } from "@/config/site";
import { getAllInsights, getInsightBySlug, getInsightSlugs } from "@/lib/mdx";

// NOTE: requires @tailwindcss/typography plugin in tailwind.config.ts

function MdxAnchor(props: React.ComponentProps<"a">) {
  const href = props.href ?? "";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={props.className}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      />
    );
  }
  return <a {...props} />;
}

const mdxComponents = {
  a: MdxAnchor,
};

export async function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getInsightBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function InsightPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getInsightBySlug(params.slug);
  if (!post) notFound();
  const relatedPosts = getAllInsights()
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.category === post.category)
    .slice(0, 3);

  return (
    <>
      <header id="hero-section" className="relative overflow-hidden bg-navy py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-link-teal">
            <span className="h-px w-8 bg-current opacity-50" aria-hidden />
            {post.category}
          </p>
          <h1 className="font-heading text-white text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] mt-4 [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
            {post.title}
          </h1>
          <p className="text-white/50 text-sm mt-4">
            {post.author} ·{" "}
            {new Date(post.date).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-b from-transparent to-[#F5F2EC]"
        />
      </header>

      <article className="bg-warm-white py-16">
        <div
          className="max-w-3xl mx-auto px-6 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-normal prose-headings:text-navy prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-text-body prose-p:leading-relaxed prose-ol:text-text-body prose-ul:text-text-body prose-li:text-text-body prose-li:leading-relaxed prose-blockquote:border-l-brand-gold prose-blockquote:bg-off-white prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-charcoal prose-a:text-link-teal prose-a:no-underline hover:prose-a:text-navy prose-strong:text-navy"
        >
          <MDXRemote
            source={post.content}
            components={mdxComponents}
          />
        </div>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="bg-off-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-navy text-3xl leading-tight tracking-[-0.01em] mb-8">
              Related insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="rounded-[1.5rem] border border-brand-border bg-warm-white/70 backdrop-blur p-6"
                >
                  <p className="text-brand-teal text-xs font-medium">
                    {related.category}
                  </p>
                  <h3 className="font-heading text-navy text-xl mt-3">
                    <Link href={`/insights/${related.slug}`}>
                      {related.title}
                    </Link>
                  </h3>
                  <p className="text-charcoal-mid text-sm leading-relaxed mt-3">
                    {related.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-warm-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <PortraitPlaceholder
              size="xs"
              variant="avatar"
              className="rounded-full"
              imageSrc={siteConfig.lyall.portraitSrc}
              imageAlt={siteConfig.lyall.fullName}
            />
            <div>
              <p className="font-heading text-navy text-xl">
                {siteConfig.lyall.fullName}
              </p>
              <p className="text-brand-teal text-sm font-medium mt-1">
                {siteConfig.lyall.title}
              </p>
              <p className="text-charcoal-mid text-sm leading-relaxed mt-3">
                {siteConfig.lyall.origin}
              </p>
              <Link
                href="/insights"
                className="inline-block text-link-teal text-sm font-medium mt-4 transition hover:text-navy"
              >
                Read more from Lyall →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageClosingCTA
        title="Need advice on a crisis, issue, or reputation matter?"
        body="Our articles are designed to clarify the issue. If you need to apply that thinking to a live situation, the next step is a confidential conversation."
        primaryLabel="Get in touch"
      />
    </>
  );
}
