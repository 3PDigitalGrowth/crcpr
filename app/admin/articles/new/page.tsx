import { requireAdmin } from "@/lib/admin/auth";
import { ArticleForm } from "@/components/admin/ArticleForm";

export default function AdminNewArticlePage() {
  requireAdmin();
  const today = new Date().toISOString().slice(0, 10);

  return (
    <main>
      <h1 className="font-heading font-black text-navy text-3xl mb-8">
        New article
      </h1>
      <ArticleForm
        isNew
        initial={{
          slug: "",
          title: "",
          date: today,
          author: "Lyall Mercer",
          excerpt: "",
          category: "Crisis Communications",
          leadMagnet: "",
          body: "",
        }}
      />
    </main>
  );
}
