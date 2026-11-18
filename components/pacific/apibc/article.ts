/**
 * The Australia Pacific Islands Business Council's member story about CRC
 * Public Relations, reproduced word for word from apibc.org.au (fetched
 * 18 Nov 2026). Nothing here is CRC's own wording: do not edit, trim or
 * reorder it. Only the quote marks are straightened to match the site.
 *
 * The page that renders it must keep saying who published it. Alex, 18 Nov
 * 2026: no visitor should think CRC wrote this about itself.
 */

export const APIBC_SOURCE = {
  publisher: "Australia Pacific Islands Business Council",
  site: "apibc.org.au",
  /** APIBC's own label on the article image. */
  section: "Member story",
  /** Shown on the original as "Oct 6, 2026". */
  published: "2026-10-06",
  url: "https://apibc.org.au/2026/effective-communication-critical-to-business-success-in-the-pacific-says-crc-public-relations/",
  headline: "Effective communication critical to business success in the Pacific, says CRC Public Relations",
} as const;

export type ArticleBlock =
  /** The original's bold opening paragraph. */
  | { kind: "lead"; text: string }
  | { kind: "p"; text: string }
  /** One or more paragraphs of direct speech that run on from each other. */
  | { kind: "quote"; paras: string[] }
  /** The quote the page sets large. `tail` is the rest of the same paragraph. */
  | { kind: "peak"; quote: string; tail: string }
  /** CRC's download offer. Not part of the article. */
  | { kind: "offer" };

export const APIBC_ARTICLE: ArticleBlock[] = [
  {
    kind: "lead",
    text: "As opportunities for infrastructure development, resilience projects and trade increase across the Pacific, companies, NGOs and governments must place greater emphasis on effective communication and managing reputational risks, according to new APIBC member CRC Public Relations.",
  },
  {
    kind: "p",
    text: "CRC Public Relations has worked across the Pacific since 2011, advising government leaders and assisting Australian companies doing business in the region. Its lead strategist, Lyall Mercer, said increasing geopolitical tensions, misinformation, activism and greater connectivity had changed the communications landscape.",
  },
  {
    kind: "quote",
    paras: [
      '"The spotlight is on the region like never before, and Pacific Islanders are more connected and knowledgeable," Mr Mercer said.',
      "\"Any company operating in the region that doesn't communicate to all stakeholders the 'what and why' of the projects in which they are involved can receive pushback and lose contracts.",
      '"Likewise, wrong messaging by a government can result in the withdrawal of much-needed financial assistance from international partners, but the right public messaging can generate greater investment."',
    ],
  },
  {
    kind: "p",
    text: "Mr Mercer has advised five Pacific heads of state, developed crisis communication plans for Australian companies operating in the region and coordinated international media arrangements for the host nation of a Pacific Islands Forum Leaders meeting.",
  },
  {
    kind: "p",
    text: "He said companies often overlooked the importance of their public voice and the opportunities presented by Pacific media outlets.",
  },
  {
    kind: "quote",
    paras: [
      '"A good online story in a local media outlet can be seen across the world and bring more opportunities.',
      '"Conversely, a negative story, even in one Pacific country, can escalate into an international issue that can bring harm to companies and NGOs."',
    ],
  },
  {
    kind: "p",
    text: "He warned that misinformation, or false information shared in the belief that it is factual, and disinformation, which involves deliberately spreading falsehoods, were widespread on social media, leaving Pacific communities particularly vulnerable.",
  },
  {
    kind: "peak",
    quote: "\"I've seen companies lose billion-dollar Pacific contracts through misinformation,\"",
    tail: "Mr Mercer said.",
  },
  {
    kind: "p",
    text: "He said one of the greatest mistakes any organisation operating in the region could make was assuming it did not need a communications strategy.",
  },
  {
    kind: "quote",
    paras: [
      '"A communications plan is essential and must consider local culture, key stakeholders, proactive messaging, issues management and crisis communications planning."',
    ],
  },
  { kind: "offer" },
  {
    kind: "p",
    text: "CRC Public Relations has also trained Pacific journalists and government media departments and assisted Pacific governments in communicating more effectively with their citizens.",
  },
  {
    kind: "quote",
    paras: [
      '"Sovereignty is vitally important to Pacific Island states, and governments must have both an internal strategy to build trust with their people, and an external strategy to elevate their voice internationally," Mr Mercer said.',
    ],
  },
];

/** The original's closing line, which links to CRC's Pacific page. */
export const APIBC_CLOSING = {
  before: "More information about CRC Public Relations and its Pacific work is available at ",
  label: "https://crcpr.com.au/pacific",
  href: "/pacific",
  after: ".",
} as const;
