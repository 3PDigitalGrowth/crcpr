import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { siteConfig } from "@/config/site";
import { getInsightBySlug, getInsightSlugs } from "@/lib/mdx";

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

  return (
    <>
      <header className="bg-navy py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-teal text-xs font-medium tracking-[0.14em] uppercase">
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

      <article className="bg-white py-16">
        <div
          className="max-w-3xl mx-auto px-6 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:text-navy prose-p:text-charcoal prose-p:leading-relaxed prose-a:text-brand-gold prose-strong:text-charcoal prose-li:text-charcoal"
        >
          <MDXRemote
            source={post.content}
            components={mdxComponents}
          />
        </div>
      </article>

      {post.leadMagnet ? (
        <LeadMagnetBanner magnet={post.leadMagnet} />
      ) : null}

      <section className="bg-off-white py-12">
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
                className="inline-block text-brand-gold text-sm font-medium mt-4 hover:underline"
              >
                Read more from Lyall →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white text-lg font-medium mb-6">
            Have a crisis communications question?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
