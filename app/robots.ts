import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/email-preview/"],
    },
    sitemap: "https://crcpr.com.au/sitemap.xml",
  };
}
