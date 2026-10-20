"use client";

import { useMemo, useState } from "react";
import type { A1Card } from "./insights";
import { FeaturedPost, PostCard } from "./PostCard";

/** Topic filter over the article grid. Categories come from the articles themselves. */
export function InsightsGrid({ posts }: { posts: A1Card[] }) {
  const [topic, setTopic] = useState<string>("All");
  const topics = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const shown = topic === "All" ? posts : posts.filter((p) => p.category === topic);
  const [lead, ...rest] = shown;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
        {topics.map((t) => {
          const count = t === "All" ? posts.length : posts.filter((p) => p.category === t).length;
          const active = t === topic;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={active}
              onClick={() => setTopic(t)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active ? "border-transparent bg-[#1c74bc] text-white" : "border-line text-fg hover:border-[#1c74bc]"
              }`}
            >
              {t}
              <span className={`ml-2 text-xs ${active ? "text-white/80" : "text-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div aria-live="polite">
        {lead ? (
          <div className="mt-12">
            <FeaturedPost post={lead} />
          </div>
        ) : null}
        {rest.length ? (
          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
