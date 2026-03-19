import type { MetadataRoute } from "next";
import { getInsightSlugs } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

const BASE_URL = siteConfig.crcPrUrl;

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/corporate-communications", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/reputation-management", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/issues-management", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/crisis-communications", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/media-strategy", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/digital-media", priority: 0.8, changeFrequency: "monthly" },

  { path: "/clients", priority: 0.8, changeFrequency: "monthly" },
  { path: "/clients/corporate", priority: 0.7, changeFrequency: "monthly" },
  { path: "/clients/government", priority: 0.7, changeFrequency: "monthly" },
  { path: "/clients/industry-associations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/clients/schools-faith", priority: 0.7, changeFrequency: "monthly" },

  { path: "/crisis", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pacific", priority: 0.7, changeFrequency: "monthly" },
  { path: "/media-training", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" },

  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/lyall-mercer", priority: 0.7, changeFrequency: "monthly" },

  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },

  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const insightSlugs = getInsightSlugs();
  const insightPages: MetadataRoute.Sitemap = insightSlugs.map((slug) => ({
    url: `${BASE_URL}/insights/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...insightPages];
}
