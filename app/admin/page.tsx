import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import { adminSections } from "@/config/adminSections";
import { listInsights } from "@/lib/admin/content";

export default async function AdminDashboard() {
  requireAdmin();
  let articleCount: number | null = null;
  try {
    articleCount = (await listInsights()).length;
  } catch {
    articleCount = null;
  }

  return (
    <main>
      <h1 className="font-heading font-black text-navy text-3xl mb-2">
        Welcome
      </h1>
      <p className="text-charcoal text-sm leading-relaxed max-w-2xl mb-8">
        Edit your website content here. Every change you save is published
        automatically and is live on the site in about 2 minutes. Nothing goes
        live until you press Save, and 3P Digital can restore any earlier
        version if you ever need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        <Link
          href="/admin/editor"
          className="block bg-navy text-white rounded-lg p-5 hover:bg-navy/90 sm:col-span-2"
        >
          <p className="font-heading font-black text-lg mb-1">
            Edit pages visually →
          </p>
          <p className="text-white/75 text-sm leading-relaxed">
            View the live site and click any highlighted text or image to
            change it in place, then press Save.
          </p>
        </Link>
        {adminSections.map((section) => (
          <Link
            key={section.slug}
            href={`/admin/content/${section.slug}`}
            className="block bg-white border border-brand-border rounded-lg p-5 hover:border-navy/40"
          >
            <p className="font-heading font-black text-navy text-lg mb-1">
              {section.title}
            </p>
            <p className="text-charcoal-mid text-sm leading-relaxed">
              {section.description}
            </p>
          </Link>
        ))}
        <Link
          href="/admin/lead-magnets"
          className="block bg-white border border-brand-border rounded-lg p-5 hover:border-navy/40"
        >
          <p className="font-heading font-black text-navy text-lg mb-1">
            Downloads (lead magnets)
          </p>
          <p className="text-charcoal-mid text-sm leading-relaxed">
            Titles, descriptions and availability of the free PDF downloads.
          </p>
        </Link>
        <Link
          href="/admin/articles"
          className="block bg-white border border-brand-border rounded-lg p-5 hover:border-navy/40"
        >
          <p className="font-heading font-black text-navy text-lg mb-1">
            Insights articles
          </p>
          <p className="text-charcoal-mid text-sm leading-relaxed">
            Write, edit and remove articles on the Insights page.
            {articleCount !== null ? ` ${articleCount} published.` : ""}
          </p>
        </Link>
        <Link
          href="/admin/images"
          className="block bg-white border border-brand-border rounded-lg p-5 hover:border-navy/40"
        >
          <p className="font-heading font-black text-navy text-lg mb-1">
            Images
          </p>
          <p className="text-charcoal-mid text-sm leading-relaxed">
            Upload images and copy their paths for use in articles and
            profiles.
          </p>
        </Link>
      </div>
    </main>
  );
}
