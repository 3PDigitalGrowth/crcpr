import type { Metadata } from "next";
import { ArticlePage, articleMetadata, articleParams } from "@/components/altkit/pages/ArticlePage";

export function generateStaticParams() {
  return articleParams("alt2");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return articleMetadata("alt2", params.slug);
}

export default function ChambersArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="alt2" slug={params.slug} />;
}
