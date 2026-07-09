"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import "easymde/dist/easymde.min.css";

export function Studio() {
  return <NextStudio config={config} />;
}
