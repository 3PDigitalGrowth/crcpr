import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import { getAdminSection } from "@/config/adminSections";
import { getMergedConfig, getPath } from "@/lib/admin/content";
import { SectionForm } from "@/components/admin/SectionForm";

export default async function AdminSectionPage({
  params,
}: {
  params: { section: string };
}) {
  requireAdmin();
  const section = getAdminSection(params.section);
  if (!section) notFound();

  const merged = await getMergedConfig();
  const initialValues: Record<string, unknown> = {};
  for (const field of section.fields) {
    initialValues[field.path] = getPath(merged, field.path);
  }

  return (
    <main>
      <h1 className="font-heading font-black text-navy text-3xl mb-2">
        {section.title}
      </h1>
      <p className="text-charcoal-mid text-sm leading-relaxed max-w-2xl mb-8">
        {section.description}
      </p>
      <SectionForm section={section} initialValues={initialValues} />
    </main>
  );
}
