import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
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
      <header id="hero-section" className="bg-navy py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-teal text-xs font-medium">
            {post.category}
          </p>
          <h1 className="text-white font-heading font-black text-3xl md:text-[42px] leading-[1.1] mt-4">
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
      </header>

      <article className="bg-warm-white py-16">
        <div
          className="max-w-3xl mx-auto px-6 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:text-navy prose-p:text-text-body prose-p:leading-relaxed prose-a:text-link-teal prose-a:no-underline hover:prose-a:text-navy prose-strong:text-text-body prose-li:text-text-body"
        >
          <MDXRemote
            source={post.content}
            components={mdxComponents}
          />
        </div>
      </article>

      {post.leadMagnet ? (
        <LeadMagnetBanner
          magnet={post.leadMagnet}
          variant="light"
          title="If this article has highlighted a gap, start with a practical resource."
          description="CRC Public Relations resources are designed to turn a general insight into a concrete next step for leadership teams managing risk, preparedness, and communication discipline."
        />
      ) : null}

      {relatedPosts.length > 0 ? (
        <section className="bg-off-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading font-black text-navy text-2xl mb-8">
              Related insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="rounded-lg border border-brand-border bg-off-white p-6"
                >
                  <p className="text-brand-teal text-xs font-medium">
                    {related.category}
                  </p>
                  <h3 className="font-heading font-black text-navy text-lg mt-3">
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
            <div
              className="w-16 h-16 rounded-full bg-navy-mid shrink-0"
              aria-hidden
            />
            <div>
              <p className="font-heading font-black text-navy text-lg">
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
                className="inline-block text-link-teal text-sm font-medium mt-4 hover:text-navy hover:underline"
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
