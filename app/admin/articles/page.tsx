import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import { listInsights } from "@/lib/admin/content";

export default async function AdminArticlesPage() {
  requireAdmin();
  const articles = await listInsights();

  return (
    <main>
      <div className="flex items-center justify-between gap-4 mb-2">
        <h1 className="font-heading font-black text-navy text-3xl">
          Insights articles
        </h1>
        <Link
          href="/admin/articles/new"
          className="bg-navy text-white rounded px-4 py-2 text-sm font-medium hover:bg-navy/90 shrink-0"
        >
          + New article
        </Link>
      </div>
      <p className="text-charcoal-mid text-sm leading-relaxed max-w-2xl mb-8">
        Articles published on the Insights page. Changes and new articles are
        live on the site about 2 minutes after you save.
      </p>

      <div className="space-y-3 max-w-2xl">
        {articles.length === 0 && (
          <p className="text-charcoal-mid text-sm">No articles yet.</p>
        )}
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/admin/articles/${article.slug}`}
            className="block bg-white border border-brand-border rounded-lg px-5 py-4 hover:border-navy/40"
          >
            <p className="font-heading font-black text-navy text-base mb-0.5">
              {article.title || article.slug}
            </p>
            <p className="text-charcoal-mid text-xs">
              {article.date}
              {article.category ? ` · ${article.category}` : ""}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
