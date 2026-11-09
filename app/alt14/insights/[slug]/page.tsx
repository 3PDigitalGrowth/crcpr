import type { Metadata } from "next";
import { ArticlePage, articleMetadata, articleParams } from "@/components/altkit/pages/ArticlePage";

export function generateStaticParams() {
  return articleParams("alt14");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return articleMetadata("alt14", params.slug);
}

export default function PrivateOfficeArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="alt14" slug={params.slug} />;
}
