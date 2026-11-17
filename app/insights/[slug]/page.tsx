import type { Metadata } from "next";
import { ArticlePage, articleParams } from "@/components/altkit/pages/ArticlePage";
import { getA1Post } from "@/components/altkit/insights";
import { CONCEPTS } from "@/components/altkit/concepts";

export function generateStaticParams() {
  return articleParams("site");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getA1Post(CONCEPTS.site.base, params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="site" slug={params.slug} />;
}
