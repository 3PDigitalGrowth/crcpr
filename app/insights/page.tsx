import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { getAllInsights } from "@/lib/mdx";

export const metadata = {
  title: "Insights",
  description:
    "Insights, commentary, and crisis thinking from Lyall Mercer and the CRC PR team.",
};

export default function InsightsPage() {
  const posts = getAllInsights();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="Insights. Commentary. Crisis Thinking."
        description="From Lyall Mercer and the CRC PR team."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Our insights exist to help leaders make better decisions under pressure."
        items={[
          {
            label: "Perspective",
            value: "Practitioner-led",
            detail:
              "Articles are grounded in real crisis, reputation, and communications advisory experience rather than general marketing opinion.",
          },
          {
            label: "Usefulness",
            value: "Decision-ready",
            detail:
              "The aim is practical clarity: what matters, what to avoid, and what leaders should do next.",
          },
          {
            label: "Authority flow",
            value: "Linked to counsel",
            detail:
              "Insights support the wider CRC PR system by connecting thought leadership to advisory, preparedness, and next-step action.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            CRC PR insights are written for leaders who need clearer judgement, not more
            commentary. The focus is practical: what matters, where organisations
            usually misread the pressure, and what experienced advisors would be
            watching before the situation escalates.
          </p>
          <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
            The themes are consistent with the firm&apos;s work across crisis,
            reputation, media, and stakeholder communication. Articles are designed to
            be useful on their own, then naturally lead to the next step if your matter
            is live, emerging, or strategically sensitive.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-charcoal-mid text-center text-lg">
              More insights coming soon.
            </p>
          ) : (
            <>
              {featuredPost ? (
                <article className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 rounded-lg border border-brand-border bg-off-white p-8 md:p-10 mb-10">
                  <div>
                    <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase">
                      Featured insight
                    </p>
                    <h2 className="font-heading font-black text-navy text-3xl mt-4">
                      <Link href={`/insights/${featuredPost.slug}`} className="hover:text-brand-teal transition">
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-charcoal-mid text-base leading-relaxed mt-4">
                      {featuredPost.excerpt}
                    </p>
                    <Link
                      href={`/insights/${featuredPost.slug}`}
                      className="inline-block mt-6 text-brand-gold font-medium hover:underline"
                    >
                      Read the full article →
                    </Link>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-brand-border pt-6 lg:pt-0 lg:pl-8">
                    <p className="text-charcoal text-xs font-medium uppercase tracking-wide">
                      {featuredPost.category}
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed mt-4">
                      By {featuredPost.author}
                    </p>
                    <time
                      dateTime={featuredPost.date}
                      className="text-charcoal-mid text-sm block mt-2"
                    >
                      {new Date(featuredPost.date).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </article>
              ) : null}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
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
            </>
          )}
        </div>
      </section>

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        variant="light"
        title="Want a practical framework before the next issue becomes urgent?"
        description="Download the CRC PR Crisis Communications Plan Template. It is a useful next step if one of these articles has highlighted a gap in your organisation's preparedness, escalation, or message discipline."
      />

      <PageClosingCTA
        title="Need advice on a live issue, a crisis, or a reputation question?"
        body="If an article has raised a question about your organisation's exposure, the right next step is usually a confidential conversation with a senior advisor."
      />
    </>
  );
}
