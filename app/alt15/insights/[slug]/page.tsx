import type { Metadata } from "next";
import { ArticlePage, articleMetadata, articleParams } from "@/components/altkit/pages/ArticlePage";

export function generateStaticParams() {
  return articleParams("alt15");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return articleMetadata("alt15", params.slug);
}

export default function LineworkArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="alt15" slug={params.slug} />;
}
