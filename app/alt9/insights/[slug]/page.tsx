import type { Metadata } from "next";
import { ArticlePage, articleMetadata, articleParams } from "@/components/altkit/pages/ArticlePage";

export function generateStaticParams() {
  return articleParams("alt9");
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return articleMetadata("alt9", params.slug);
}

export default function GalleryArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePage id="alt9" slug={params.slug} />;
}
