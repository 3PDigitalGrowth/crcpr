import type { Metadata } from "next";
import { ArticlePage, articleMetadata, articleParams } from "@/components/altkit/pages/ArticlePage";

export function generateStaticParams() {
  return articleParams("alt3");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return articleMetadata("alt3", params.slug);
}

export default function EmberArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="alt3" slug={params.slug} />;
}
