# Chambers site port: the whole site in the approved design

Client approval, 17 Nov 2026: "Please create the whole site in this version
(white option)", meaning crcpr.vercel.app/alt2?theme=white (concept 2,
Chambers). Every public page now renders inside the Chambers frame on the white
background. This file is the contract for porting a page.

## What is already done

- `components/altkit/SiteShell.tsx` wraps every public route (via
  `components/layout/AppShell.tsx`): framed canvas, Chambers header with About,
  Services and Clients dropdowns, kit footer. Fixed to the white theme. The old
  `Nav`, `Footer`, `DesktopStickyBar` and `MobileCallBar` are no longer mounted.
- `/` renders the approved `Alt2Home`. `/services/crisis-communications`,
  `/insights` and `/insights/[slug]` render the approved Chambers pages from
  `components/altkit/pages/` with `id="site"`.
- The shared page blocks were re-skinned in place with the same props, so their
  copy and editor tags are untouched: `PageHero` (new optional `photo` prop;
  `heroImage` and `heroVideo` are ignored), `PageProofStrip`,
  `InlineEnquirySection`, `FAQSection`, `LeadMagnetBanner`, `PageClosingCTA`,
  `ImageTextRow` (drops any image that is not a real CRC photo),
  `CapabilityDownload`, `MediaReachSnapshot`.
- Reference port: `app/services/corporate-communications/page.tsx`. Read it
  before porting anything; copy its patterns.

## Copy rule (hard)

No new copy anywhere. Every visible string must already be on the site as it
stood before the port (`git show main:<path>` for the old page, plus
`config/site.ts`, `config/pageHeroAsides.ts`, `components/altkit/data.ts`).

- Allowed: drop sections, drop sentences or list items, reorder blocks, move a
  sentence to a different block, split one approved sentence across lines.
- Not allowed: new sentences, new headings, reworded or shortened sentences,
  new labels. Do not "fix" grammar or wording.
- Keep every `<T id="...">` wrapper and its exact id around the copy it already
  wraps (the /admin visual editor saves against those ids). Dropped copy simply
  loses its tag.
- Keep `metadata`, `jsonLd` and the data arrays (`faqs`, `proofItems`...)
  exactly as they are.
- Check: `python scripts/check-copy.py <file> ...` must print `ok` for every
  file you touched.

## Design vocabulary

Imports: `Section`, `Container`, `Eyebrow`, `H2` from
`@/components/altkit/primitives`; `Reveal` from `@/components/altkit/motion`;
`PHOTOS` from `@/components/altkit/data`; `T` from `@/components/editable`.

| Need | Use |
| --- | --- |
| Section | `<Section tone="base" className="py-11 md:py-14"><Container>`; `tone="deep"` is the pale grey band, use it for one or two sections a page, never two in a row |
| Eyebrow | `<Eyebrow>` (CRC blue, tracked capitals) |
| Heading | `<H2 className="mt-3">` (Archivo capitals). `h3`: `kit-display text-[15px] uppercase leading-snug`, or `text-base font-bold` inside lists |
| Body | `text-[15px] leading-relaxed text-muted`; lead line `text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]` |
| Numbered steps | ledger rows: `border-t border-line` wrapper, rows `grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr]`, number `kit-display text-sm text-accent` as `01.` |
| Point list (title + line) | `divide-y divide-[var(--line)]` rows, title `kit-display text-[15px] uppercase`, line `text-sm text-muted` |
| Framed aside | `kit-r border border-line p-6 md:p-8` |
| Side-by-side cells | `ledger` class (hairline columns, stacks on phones); add `ledger-wide` for 4+ cells |
| Two-column text | `grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14` |
| Quote | `border-l-[3px] border-[var(--k-blue)] pl-5`, text `text-lg font-semibold leading-snug` |
| Link list | rows `group flex items-center justify-between border-b border-line py-5`, label `kit-display uppercase`, `ArrowUpRight` in `text-accent` |
| Text link | `inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent` + `ArrowUpRight` |
| Buttons | `btn btn-primary`, `btn btn-quiet` |
| Colours | `text-fg`, `text-muted`, `text-accent`, `border-line`, `bg-card`; CSS vars `var(--line)`, `var(--k-blue)` |

Never use the old tokens: `navy`, `navy-mid`, `brand-gold`, `gold-light`,
`brand-teal`, `link-teal`, `charcoal*`, `warm-white`, `off-white`,
`text-body`, `text-caption`, `brand-border`, `font-heading`, `v2-glass-dark`,
`rounded-[1.5rem]` / `rounded-[2.5rem]`. Grep your file for them when done.

## Photography

Lyall, 1 Nov 2026: far fewer photos, far fewer of Lyall and Barbara; inner
pages lean on office shots or no photo at all; no AI video anywhere. So:

- No generated images (anything under `/images/` outside `/images/crc-2026/`)
  and no video. Remove `heroImage` / `heroVideo` props and `ImageTextRow`
  wrappers; keep the text.
- At most one real photo per page, only where the page is about the firm or its
  people, from `PHOTOS` (`/images/crc-2026/photos/`), via `PageHero`'s `photo`
  prop or a `kit-r` framed image. Most service and sector pages run none.
- Logos (media outlets, client marks) are fine.

## House rules

Australian English, straight quotes, no em dashes in anything you write
(markup, comments). Keep focus states and alt text. Mobile first: check 390px.

## Checking your page

- `npx tsc --noEmit -p .` (whole project must stay clean).
- `python scripts/check-copy.py <files>` prints `ok`.
- The dev server runs at http://localhost:3123 and hot-reloads. Screenshot with
  the scratch `shoot.py` the brief points to, at 1440 and 390, and look at
  every section. Never run `next build` or start a second dev server (it
  clobbers `.next` for everyone).
