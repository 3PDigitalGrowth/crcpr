import type { Metadata } from "next";
import { ArticlePage, articleMetadata, articleParams } from "@/components/altkit/pages/ArticlePage";

export function generateStaticParams() {
  return articleParams("alt13");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return articleMetadata("alt13", params.slug);
}

export default function LetterheadArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="alt13" slug={params.slug} />;
}
