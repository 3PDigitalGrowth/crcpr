import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { getAllInsights } from "@/lib/mdx";

export const metadata = {
  title: "Insights",
  description:
    "Insights, commentary, and crisis thinking from Lyall Mercer and the CRC Public Relations team.",
};

export default function InsightsPage() {
  const posts = getAllInsights();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      <PageHero
        asidePreset="editorialInsights"
        eyebrow="Insights"
        title="Insights. Commentary. Crisis thinking."
        description="From Lyall Mercer and the CRC Public Relations team."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/insights/hero.webp",
          alt: "Hands holding a broadsheet newspaper at an outdoor cafe table in warm morning light, face not visible",
        }}
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
              "Our insights support the wider advisory system by connecting thought leadership to preparedness and next-step action.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                How to use these insights
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Practical thinking for leaders under pressure.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Our insights are written for leaders who need clearer
                judgement, not more commentary. The focus is practical: what
                matters, where organisations usually misread the pressure, and
                what experienced advisers would be watching before the situation
                escalates.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  The themes are consistent with the firm&apos;s work across
                  crisis, reputation, media, and stakeholder communication.
                  Articles are designed to be useful on their own, then
                  naturally lead to the next step if your matter is live,
                  emerging, or strategically sensitive.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What you&apos;ll find here
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    What matters most
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Fast clarity on the issues, judgements, and signals that
                    usually shape the outcome.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Common leadership blind spots
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Where organisations often misread scrutiny, timing, and
                    stakeholder pressure.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Practical next steps
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Articles that stand on their own, but also point clearly to
                    the next decision when the matter is live.
                  </p>
                </div>
              </div>
            </aside>
          </div>
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
                    <p className="text-brand-gold text-xs font-medium">
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
                    <p className="text-charcoal text-xs font-medium">
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
                    <p className="text-brand-teal text-xs font-medium">
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
        magnet="crisisReadinessChecklist"
        variant="light"
        title="Is your organisation prepared for a crisis?"
        description="Help future-proof your organisation by identifying areas of vulnerability and risk that can lead to reputational damage. This is by no means an exhaustive list but it's a great start. Used by Australian communications teams, HR managers, and executive leaders. 30 questions to assess your organisation's real crisis readiness, with an action plan for every gap."
      />

      <PageClosingCTA
        title="Need advice on a live issue, a crisis, or a reputation question?"
        body="If an article has raised a question about your organisation's exposure, the right next step is usually a confidential conversation with an experienced adviser."
      />
    </>
  );
}
