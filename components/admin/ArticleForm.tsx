"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  saveArticleAction,
  deleteArticleAction,
  type ActionResult,
  type ArticlePayload,
} from "@/app/admin/actions";

const inputClass =
  "w-full rounded border border-brand-border px-3 py-2 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-navy/30";
const labelClass = "block text-navy text-sm font-medium mb-1";
const helpClass = "text-charcoal-mid text-xs mt-1";

const categories = [
  "Crisis Communications",
  "Media Strategy",
  "Reputation Management",
  "Corporate Communications",
  "Issues Management",
  "Media Training",
];

type ArticleValues = Omit<ArticlePayload, "isNew">;

export function ArticleForm({
  isNew,
  initial,
}: {
  isNew: boolean;
  initial: ArticleValues;
}) {
  const router = useRouter();
  const [values, setValues] = useState<ArticleValues>(initial);
  const [result, setResult] = useState<ActionResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const set = <K extends keyof ArticleValues>(key: K, value: ArticleValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setResult(null);
  };

  const leadMagnetOptions = Object.entries(siteConfig.leadMagnets).map(
    ([key, magnet]) => ({ key, title: magnet.title })
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(async () => {
          setResult(await saveArticleAction({ ...values, isNew }));
        });
      }}
      className="space-y-5 max-w-2xl"
    >
      <div>
        <label className={labelClass}>Title</label>
        <input
          type="text"
          className={inputClass}
          value={values.title}
          onChange={(event) => set("title", event.target.value)}
          required
        />
        {isNew && (
          <p className={helpClass}>
            The web address is created from the title automatically.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Publish date</label>
          <input
            type="date"
            className={inputClass}
            value={values.date}
            onChange={(event) => set("date", event.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Author</label>
          <input
            type="text"
            className={inputClass}
            value={values.author}
            onChange={(event) => set("author", event.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Category</label>
          <select
            className={inputClass}
            value={values.category}
            onChange={(event) => set("category", event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Download to promote (optional)</label>
          <select
            className={inputClass}
            value={values.leadMagnet}
            onChange={(event) => set("leadMagnet", event.target.value)}
          >
            <option value="">None</option>
            {leadMagnetOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Excerpt</label>
        <textarea
          className={inputClass}
          rows={3}
          value={values.excerpt}
          onChange={(event) => set("excerpt", event.target.value)}
        />
        <p className={helpClass}>
          One or two sentences shown on the Insights page listing.
        </p>
      </div>

      <div>
        <label className={labelClass}>Article body</label>
        <textarea
          className={`${inputClass} font-mono text-[13px] leading-relaxed`}
          rows={24}
          value={values.body}
          onChange={(event) => set("body", event.target.value)}
        />
        <p className={helpClass}>
          Simple formatting: ## Section heading, **bold**, - bullet point. A
          blank line starts a new paragraph. To add an image, upload it on the
          Images page then write: ![description](/images/uploads/your-image.jpg)
        </p>
      </div>

      {result && (
        <p
          role="status"
          className={`text-sm rounded border px-4 py-3 ${
            result.ok
              ? "text-green-800 bg-green-50 border-green-200"
              : "text-red-800 bg-red-50 border-red-200"
          }`}
        >
          {result.message}
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="bg-navy text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-navy/90 disabled:opacity-60"
        >
          {isPending ? "Saving..." : "Save and publish"}
        </button>

        {!isNew && (
          <button
            type="button"
            disabled={isPending}
            onClick={() => {
              if (
                window.confirm(
                  "Delete this article? It will be removed from the site within a couple of minutes."
                )
              ) {
                startTransition(async () => {
                  const deleteResult = await deleteArticleAction(values.slug);
                  if (deleteResult.ok) {
                    router.push("/admin/articles");
                  } else {
                    setResult(deleteResult);
                  }
                });
              }
            }}
            className="text-red-700 text-sm font-medium hover:underline disabled:opacity-60"
          >
            Delete article
          </button>
        )}
      </div>
    </form>
  );
}
