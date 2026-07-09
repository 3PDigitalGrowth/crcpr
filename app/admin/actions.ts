"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  adminConfigured,
  createSession,
  destroySession,
  requireAdmin,
  verifyPassword,
} from "@/lib/admin/auth";
import {
  ContentStoreError,
  ValidationError,
  deleteInsight,
  getInsight,
  isValidSlug,
  saveInsight,
  saveLeadMagnets,
  saveSection,
  slugify,
  uploadImage,
} from "@/lib/admin/content";
import { getAdminSection, leadMagnetFields } from "@/config/adminSections";

export interface ActionResult {
  ok: boolean;
  message: string;
}

function friendlyError(err: unknown): ActionResult {
  if (err instanceof ValidationError) return { ok: false, message: err.message };
  if (err instanceof ContentStoreError) return { ok: false, message: err.message };
  console.error("[admin] action failed:", err);
  return {
    ok: false,
    message: "Something went wrong saving your change. Try again, or contact 3P Digital if it keeps happening.",
  };
}

const SAVED_MESSAGE =
  "Saved. Your change is publishing now and will be live on the site in about 2 minutes.";

/* ---------------------------- auth ---------------------------- */

export async function loginAction(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  if (!adminConfigured()) {
    return {
      ok: false,
      message: "The editor is not set up yet (ADMIN_PASSWORD is missing). Contact 3P Digital.",
    };
  }
  const password = String(formData.get("password") ?? "");
  if (!verifyPassword(password)) {
    // Slow down brute-force attempts a little; real protection is the
    // password strength plus Vercel's upstream rate limiting.
    await new Promise((resolve) => setTimeout(resolve, 750));
    return { ok: false, message: "That password is not right. Try again." };
  }
  createSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  destroySession();
  redirect("/admin/login");
}

/* ------------------------- site sections ---------------------- */

export async function saveSectionAction(
  sectionSlug: string,
  payload: Record<string, unknown>
): Promise<ActionResult> {
  requireAdmin();
  const section = getAdminSection(sectionSlug);
  if (!section) return { ok: false, message: "Unknown content section." };
  try {
    await saveSection(section, payload);
    revalidatePath("/admin/content/" + sectionSlug);
    return { ok: true, message: SAVED_MESSAGE };
  } catch (err) {
    return friendlyError(err);
  }
}

export async function saveLeadMagnetsAction(
  payload: Record<string, Record<string, unknown>>
): Promise<ActionResult> {
  requireAdmin();
  try {
    await saveLeadMagnets(leadMagnetFields, payload);
    revalidatePath("/admin/lead-magnets");
    return { ok: true, message: SAVED_MESSAGE };
  } catch (err) {
    return friendlyError(err);
  }
}

/* --------------------------- articles ------------------------- */

export interface ArticlePayload {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  leadMagnet: string;
  body: string;
  isNew: boolean;
}

export async function saveArticleAction(
  payload: ArticlePayload
): Promise<ActionResult> {
  requireAdmin();
  try {
    const slug = payload.isNew
      ? slugify(payload.slug || payload.title)
      : payload.slug;
    if (!isValidSlug(slug)) {
      return { ok: false, message: "The article needs a valid URL slug (lowercase letters, numbers, hyphens)." };
    }
    if (payload.isNew && (await getInsight(slug))) {
      return { ok: false, message: `An article already exists at /insights/${slug}. Pick a different title or slug.` };
    }
    await saveInsight({ ...payload, slug });
    revalidatePath("/admin/articles");
    return {
      ok: true,
      message: `${SAVED_MESSAGE} It will appear at /insights/${slug}.`,
    };
  } catch (err) {
    return friendlyError(err);
  }
}

export async function deleteArticleAction(slug: string): Promise<ActionResult> {
  requireAdmin();
  try {
    await deleteInsight(slug);
    revalidatePath("/admin/articles");
    return { ok: true, message: "Article deleted. The site updates in about 2 minutes." };
  } catch (err) {
    return friendlyError(err);
  }
}

/* ---------------------------- images -------------------------- */

export async function uploadImageAction(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  requireAdmin();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, message: "Choose an image file first." };
  }
  try {
    const uploaded = await uploadImage(file);
    revalidatePath("/admin/images");
    return {
      ok: true,
      message: `Uploaded. Use this path where an image is needed: ${uploaded.src}`,
    };
  } catch (err) {
    return friendlyError(err);
  }
}
