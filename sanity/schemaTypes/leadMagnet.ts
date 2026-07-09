import { defineField, defineType } from "sanity";

/**
 * Lead magnets are keyed: the "key" must match the identifier the code uses
 * (for example crisisPlanTemplate). Editors change titles, descriptions and
 * availability; developers add new keys in code first.
 */
export const leadMagnet = defineType({
  name: "leadMagnet",
  title: "Lead magnets (downloads)",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Code key",
      type: "string",
      description:
        "Must match the site code. Do not change without checking with 3P Digital.",
      options: {
        list: [
          "reputationAssessment",
          "crisisPlanTemplate",
          "mediaInterviewGuide",
          "trustedVoiceGuide",
          "associationCrisisGuide",
          "schoolsPlaybook",
          "pacificGuide",
          "corpCommsChecklist",
          "publicVoiceSteps",
          "crisisReadinessChecklist",
          "associationsPRChecklist",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline (optional)",
      type: "string",
      description: "Used by some banners, for example: Is your organisation prepared for a crisis?",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "fileName",
      title: "PDF file name",
      type: "string",
      description: "The file must exist in the site's public/downloads folder.",
    }),
    defineField({
      name: "available",
      title: "Available for download",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "key" },
  },
});
