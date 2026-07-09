"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { markdownSchema } from "sanity-plugin-markdown";
import { projectId, dataset, apiVersion } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "crcpr",
  title: "CRC Public Relations",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    markdownSchema(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // Site settings is a singleton: hide it from the generic "create new" menus.
    newDocumentOptions: (prev) =>
      prev.filter((item) => item.templateId !== "siteSettings"),
    actions: (prev, context) =>
      context.schemaType === "siteSettings"
        ? prev.filter(
            (action) =>
              action.action !== "delete" && action.action !== "duplicate"
          )
        : prev,
  },
});
