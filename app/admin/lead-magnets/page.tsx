import { requireAdmin } from "@/lib/admin/auth";
import { getMergedConfig, getPath } from "@/lib/admin/content";
import { LeadMagnetsForm } from "@/components/admin/LeadMagnetsForm";

export default async function AdminLeadMagnetsPage() {
  requireAdmin();
  const merged = await getMergedConfig();
  const leadMagnets = (getPath(merged, "leadMagnets") ?? {}) as Record<
    string,
    Record<string, unknown>
  >;

  return (
    <main>
      <h1 className="font-heading font-black text-navy text-3xl mb-2">
        Downloads (lead magnets)
      </h1>
      <p className="text-charcoal-mid text-sm leading-relaxed max-w-2xl mb-8">
        The free PDF downloads offered across the site. You can change the
        wording and switch each one on or off. To add a brand new PDF, send the
        file to 3P Digital and we will wire it in.
      </p>
      <LeadMagnetsForm initialValues={leadMagnets} />
    </main>
  );
}
