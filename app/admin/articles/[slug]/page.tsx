import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import { getInsight } from "@/lib/admin/content";
import { ArticleForm } from "@/components/admin/ArticleForm";

export default async function AdminEditArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  requireAdmin();
  const article = await getInsight(params.slug);
  if (!article) notFound();

  return (
    <main>
      <h1 className="font-heading font-black text-navy text-3xl mb-2">
        Edit article
      </h1>
      <p className="text-charcoal-mid text-sm mb-8">
        Live at{" "}
        <a
          href={`/insights/${article.slug}`}
          target="_blank"
          rel="noreferrer"
          className="text-navy underline underline-offset-2"
        >
          /insights/{article.slug}
        </a>
      </p>
      <ArticleForm isNew={false} initial={article} />
    </main>
  );
}
