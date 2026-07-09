import type { StructureResolver } from "sanity/structure";

/**
 * Studio sidebar: pins Site settings as a singleton, then the collections
 * in the order the client is most likely to edit them.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("insight").title("Insights (articles)"),
      S.documentTypeListItem("caseStudy").title("Case studies"),
      S.documentTypeListItem("faqItem").title("FAQs"),
      S.documentTypeListItem("leadMagnet").title("Lead magnets (downloads)"),
    ]);
