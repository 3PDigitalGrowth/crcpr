import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case studies",
  type: "document",
  fields: [
    defineField({
      name: "sector",
      title: "Sector",
      type: "string",
      description: "For example: International legal firm",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "outcome",
      title: "Outcome (headline)",
      type: "string",
      description: "Short and punchy. For example: Legislation scrapped.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "outcomeSub",
      title: "Outcome detail",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "context",
      title: "Situation",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "approach",
      title: "Our approach",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Scales (legal)", value: "Scale" },
          { title: "Building (corporate/association)", value: "Building2" },
          { title: "Graduation cap (education)", value: "GraduationCap" },
          { title: "Landmark (government)", value: "Landmark" },
          { title: "Shield (crisis)", value: "Shield" },
          { title: "Heart pulse (health)", value: "HeartPulse" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "outcome", subtitle: "sector" },
  },
});
