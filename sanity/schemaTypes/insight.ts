import { defineField, defineType } from "sanity";

export const insight = defineType({
  name: "insight",
  title: "Insights (articles)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Publish date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Lyall Mercer",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Shown on the Insights listing page and in link previews.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Crisis Communications",
          "Media Strategy",
          "Reputation Management",
          "Corporate Communications",
          "Issues Management",
          "Media Training",
        ],
      },
    }),
    defineField({
      name: "leadMagnet",
      title: "Lead magnet to promote (optional)",
      type: "string",
      description: "Code key of the download to show at the end of the article.",
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
        ],
      },
    }),
    defineField({
      name: "body",
      title: "Article body",
      type: "markdown",
      description: "Use ## for section headings and standard markdown for lists and bold text.",
    }),
  ],
  orderings: [
    {
      title: "Publish date (newest first)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "date" },
  },
});
