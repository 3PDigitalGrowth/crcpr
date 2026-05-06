import { siteConfig } from "@/config/site";

export type LeadMagnetKey = keyof typeof siteConfig.leadMagnets;

export interface LeadMagnetMeta {
  title: string;
  description: string;
  fileName: string;
  available?: boolean;
}

export interface FormState {
  status: "idle" | "success" | "error";
  message: string;
}

export interface InsightFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  leadMagnet?: LeadMagnetKey;
}

export interface InsightPost extends InsightFrontmatter {
  slug: string;
  content: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  borderColor: "gold" | "navy";
}

export interface ServiceMeta {
  slug: string;
  title: string;
  description: string;
  icon: string;
  shortDescription: string;
  leadMagnet: LeadMagnetKey;
  activities: string[];
  sectors: string[];
}
