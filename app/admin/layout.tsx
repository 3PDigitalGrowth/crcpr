import type { Metadata } from "next";
import Link from "next/link";
import { isAuthenticated } from "@/lib/admin/auth";
import { logoutAction } from "./actions";
import { adminSections } from "@/config/adminSections";

export const metadata: Metadata = {
  title: "Content editor | CRC Public Relations",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated()) {
    return <div className="min-h-screen bg-off-white">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-off-white">
      <header className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-heading font-black text-lg leading-tight">
              CRC Public Relations
            </p>
            <p className="text-white/70 text-xs">Website content editor</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white underline underline-offset-2"
            >
              View site
            </a>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-white/80 hover:text-white underline underline-offset-2"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <nav className="text-sm">
          <p className="text-charcoal-mid text-xs font-medium uppercase tracking-wide mb-2">
            Content
          </p>
          <ul className="space-y-1 mb-6">
            {adminSections.map((section) => (
              <li key={section.slug}>
                <Link
                  href={`/admin/content/${section.slug}`}
                  className="block rounded px-3 py-2 text-charcoal hover:bg-white hover:text-navy"
                >
                  {section.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/admin/lead-magnets"
                className="block rounded px-3 py-2 text-charcoal hover:bg-white hover:text-navy"
              >
                Downloads (lead magnets)
              </Link>
            </li>
          </ul>
          <p className="text-charcoal-mid text-xs font-medium uppercase tracking-wide mb-2">
            Publishing
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href="/admin/articles"
                className="block rounded px-3 py-2 text-charcoal hover:bg-white hover:text-navy"
              >
                Insights articles
              </Link>
            </li>
            <li>
              <Link
                href="/admin/images"
                className="block rounded px-3 py-2 text-charcoal hover:bg-white hover:text-navy"
              >
                Images
              </Link>
            </li>
          </ul>
        </nav>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
