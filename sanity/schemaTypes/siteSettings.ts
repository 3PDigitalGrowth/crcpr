import { defineField, defineType } from "sanity";

/**
 * Singleton document holding all site-wide editable content.
 * Field paths mirror config/site.ts: the build-time pull script merges this
 * document over the static defaults, so only filled-in fields override code.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "contact", title: "Contact details", default: true },
    { name: "links", title: "Links" },
    { name: "stats", title: "Stats and sectors" },
    { name: "lyall", title: "Lyall Mercer" },
    { name: "reach", title: "Media reach snapshot" },
  ],
  fields: [
    defineField({
      name: "phoneDisplay",
      title: "Phone number (as displayed)",
      type: "string",
      description: "For example: 1300 182 186",
      group: "contact",
    }),
    defineField({
      name: "address",
      title: "Office address",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "postcode", title: "Postcode", type: "string" }),
        defineField({ name: "country", title: "Country", type: "string" }),
      ],
    }),
    defineField({
      name: "emails",
      title: "Email addresses",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "general", title: "General enquiries", type: "string" }),
        defineField({ name: "media", title: "Media enquiries", type: "string" }),
        defineField({ name: "newBusiness", title: "New business", type: "string" }),
      ],
    }),
    defineField({
      name: "abn",
      title: "ABN",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "linkedInUrl",
      title: "Company LinkedIn URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "lyallLinkedIn",
      title: "Lyall's LinkedIn URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "lyallTwitter",
      title: "Lyall's X (Twitter) URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "stats",
      title: "Firm stats",
      type: "object",
      group: "stats",
      description: "Shown across the site. Short values, for example 15+ or 100%.",
      fields: [
        defineField({ name: "yearsTrading", title: "Years trading", type: "string" }),
        defineField({ name: "continents", title: "Reach", type: "string" }),
        defineField({ name: "clientRetention", title: "Client retention", type: "string" }),
        defineField({ name: "professionsTrained", title: "Professionals trained", type: "string" }),
      ],
    }),
    defineField({
      name: "sectors",
      title: "Sectors we serve",
      type: "array",
      of: [{ type: "string" }],
      group: "stats",
    }),
    defineField({
      name: "lyall",
      title: "Lyall Mercer profile",
      type: "object",
      group: "lyall",
      fields: [
        defineField({ name: "fullName", title: "Full name", type: "string" }),
        defineField({ name: "title", title: "Role title", type: "string" }),
        defineField({ name: "yearsExperience", title: "Years of experience", type: "string" }),
        defineField({ name: "origin", title: "One-line background", type: "text", rows: 2 }),
        defineField({ name: "quote", title: "Signature quote", type: "text", rows: 3 }),
        defineField({
          name: "mediaOutlets",
          title: "Media outlets (names only)",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "mediaReachSnapshot",
      title: "Media reach snapshot",
      type: "object",
      group: "reach",
      description:
        "The anonymised monthly media coverage example shown on the site.",
      fields: [
        defineField({ name: "period", title: "Month", type: "string" }),
        defineField({
          name: "clientDescriptor",
          title: "Client description (anonymised)",
          type: "string",
        }),
        defineField({ name: "storyCount", title: "Number of stories", type: "number" }),
        defineField({ name: "total", title: "Total placements", type: "number" }),
        defineField({
          name: "breakdown",
          title: "Placement breakdown",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "value", title: "Count", type: "number" }),
              ],
            },
          ],
        }),
        defineField({ name: "source", title: "Verification source line", type: "text", rows: 2 }),
        defineField({ name: "caveat", title: "Caveat line", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
