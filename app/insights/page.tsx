import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { getAllInsights } from "@/lib/mdx";

export const metadata = {
  title: "Insights",
  description:
    "Insights, commentary, and crisis thinking from Lyall Mercer and the CRC PR team.",
};

export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="Insights. Commentary. Crisis Thinking."
        description="From Lyall Mercer and the CRC PR team."
      />
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-charcoal-mid text-center text-lg">
              More insights coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-off-white border border-brand-border/50 rounded-lg p-6 hover:border-brand-gold/30 transition"
                >
                  <p className="text-brand-teal text-xs font-medium tracking-[0.14em] uppercase">
                    {post.category}
                  </p>
                  <h3 className="font-heading font-black text-navy text-lg mt-3">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="hover:text-brand-teal transition"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-charcoal-mid text-sm leading-relaxed mt-2 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <footer className="flex justify-between items-center mt-4 pt-4 border-t border-brand-border">
                    <span className="text-charcoal text-xs font-medium">
                      {post.author}
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-charcoal-mid text-xs"
                    >
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </footer>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
