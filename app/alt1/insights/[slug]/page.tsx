import type { Metadata } from "next";
import { ArticlePage, articleMetadata, articleParams } from "@/components/altkit/pages/ArticlePage";

export function generateStaticParams() {
  return articleParams("alt1");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return articleMetadata("alt1", params.slug);
}

export default function SignalArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="alt1" slug={params.slug} />;
}
