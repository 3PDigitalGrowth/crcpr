# CRC PR homepage alternatives: shared brief (all /alt pages)

Working spec for the /alt1../alt12 homepage design explorations. Every design
agent MUST follow this file exactly. Per-page style direction arrives in the
agent prompt; this file is the contract that applies to all of them.

## Why these pages exist (client feedback, 1 Sep 2026)

Lyall's verdict on the current homepage:

- "It seems all over the place. Random boxes, random messages. The top message
  is fine. But as you scroll down there is no flow of who we are and what we
  stand for."
- "There is a huge box for crisis... the home page can't be too crisis heavy."
- "500+ professionals trained, 15 minutes to respond, How exposed is your
  reputation. It's a dogs breakfast of messaging."
- "Our home page has to profile who we are and what we stand for. It has to
  look professional and corporate."
- "I also don't like the headings font. It's too tall and skinny. The other is
  good." (The tall skinny font is Instrument Serif. Hanken Grotesk is fine.)
- "We want to add photos. The new photos of us and other photos."
- "We got it right with My PR Partner and we love that site."

### What that means for every alt

1. **Narrative flow, not boxes.** The scroll must read as one story:
   who we are -> what we do -> why us -> proof -> who we serve -> the people ->
   invitation to talk. Adjacent sections must feel sequenced, not tiled.
2. **Crisis is one of three equal practices.** Corporate Communications,
   Reputation Management and Crisis Communications get equal visual weight.
   Never a giant crisis tile. The 24/7 crisis line may appear once, quietly.
3. **Stats appear once, grouped, in context.** One disciplined proof moment
   (or none). Never scattered stat tiles. Never the "15 minutes" quote as a
   floating box next to unrelated numbers.
4. **Professional and corporate.** Confident, senior, restrained. The
   reference image gives the aesthetic language; execution stays boardroom
   grade. No gimmicks that undercut authority.
5. **Real photography.** Use the real people photos (inventory below)
   prominently. The firm is its people; show them.
6. **Do NOT use Instrument Serif** (var(--font-display)) anywhere on an alt
   page. Load your own display + body faces via next/font/google inside your
   component. No condensed, tall or skinny display faces (no Anton, Oswald,
   Bebas, Archivo Condensed etc.). No Inter, Roboto, Arial.

## Copy guardrail (hard rule)

**No invented copy.** Every headline, sentence and paragraph must be verbatim
from the APPROVED COPY inventory below (or pulled at runtime from
`siteConfig`). You may:

- use a subset of the copy (not every block must appear),
- reorder blocks,
- split an approved sentence across lines for typographic effect (no word
  changes),
- use single approved words from an approved line as oversized display
  fragments (e.g. "Trust", "Reputation") provided the full approved line
  appears with it or nearby.

You may NOT write new sentences, new taglines, new blurbs, or reworded
variants. UI chrome labels are limited to: the site nav names (Home, About,
Services, Clients, Case Studies, Insights, FAQ, Contact, Media Training,
Pacific), the approved CTA labels below, and neutral single-word controls
(Menu, Close, Next, Back).

Australian English. Never an em dash. Straight quotes.

## Scaffolding contract (identical for every alt)

- Route: `app/alt<N>/page.tsx` = thin server component:
  `export const metadata = { robots: { index: false, follow: false }, title: "Alt <N> | CRC PR homepage concepts" }`
  and render `<Alt<N> />`.
- Component: `components/alt/Alt<N>.tsx`, `"use client"`, fully
  self-contained: fonts via `next/font/google` at module scope, all sections,
  own header and own footer. Do not import the site Nav/Footer or anything
  from `components/redesign/`. `AppShell` already renders /alt* bare.
- May import: `siteConfig` from `@/config/site`, `next/image`, `next/link`,
  `framer-motion`, `lucide-react`. No new dependencies.
- Own header: CRC Public Relations wordmark (typographic, styled to your
  design; the logo file `/images/crc-logo.png` is optional), a few real nav
  links (`/about`, `/services`, `/case-studies`, `/contact`), and the phone
  number `siteConfig.phone.display` linking `siteConfig.phone.href`.
- Own footer: contact details from siteConfig, nav links, copyright line, and
  the credit "Proudly supported by 3P Digital" linking to
  https://www.3pdigital.com.au (muted styling, brand-name anchor only).
- Buttons/links: "Book a consultation" -> `/contact`. Phone CTA -> tel link.
  Case studies -> `/case-studies`. Services -> `/services/...` real routes:
  corporate-communications, reputation-management, crisis-communications,
  media-strategy, issues-management, digital-media.
- Video heroes: always render a static poster image (not the video) below the
  `md` breakpoint. `autoPlay muted loop playsInline` + `poster`.
- Respect `useReducedMotion` for any entrance/scroll animation.
- Mobile-first responsive, keyboard focus visible, WCAG AA contrast.
- Styling: Tailwind arbitrary values + inline styles for your own palette.
  Do NOT use the existing navy/gold/teal Tailwind tokens: every alt runs a
  fresh palette (per-page direction in your prompt). Blue and gold are
  explicitly retired for these explorations.
- TypeScript must compile. No `any`. Keep each file self-contained; do not
  edit any existing file.

## APPROVED COPY inventory

### Identity / hero lines

- Eyebrow: "Boutique corporate PR · Australia · New Zealand · Pacific"
- H1: "Strategic, proven communications advice."
- "Whatever your communications objectives, you need experienced counsel you
  can trust."
- "We are your trusted adviser and advocate, and we believe in you."
- "You deal directly with an experienced adviser, not an account manager."
- "24/7 confidential crisis line" + phone 1300 182 186
- CTAs: "Book a consultation", "Start the free assessment", "Send message",
  "Start a conversation.", "View all services", "Explore", "Read Lyall's full
  profile", "Explore crisis communications"

### Practice areas (equal weight)

- Section eyebrow: "Our practice areas"
- Heading: "Corporate. Reputation. Crisis."
- Corporate Communications (link /services/corporate-communications)
- Reputation Management (link /services/reputation-management)
- Crisis Communications (link /services/crisis-communications)
  - Approved crisis blurb: "We help you prevent, prepare for and
    strategically manage crises. 24/7. Confidential. Decisive."
- Specialist services row:
  - "Media relations & strategy" / "Proactive presence and trusted relationships"
  - "Issues management" / "Get ahead before issues become crises"
  - "Digital media" / "Online reputation and social strategy"

### Why boutique (who we are / what we stand for)

- Eyebrow: "Why a boutique firm"
- Quote: "As a boutique PR firm, you deal directly with experienced advisers
  who take a genuine, long-term interest in your organisation. It is a
  partnership, and it makes a huge difference to outcomes."
  Attribution: "Lyall Mercer, co-founder"
- Three pillars:
  1. "Experienced counsel, every time" / "No account managers, no junior
     hand-offs. You work directly with advisers who have managed the
     situations you are facing."
  2. "We know how media thinks" / "A foundation in journalism means we
     understand exactly how a story is made, moved, and decided before it
     ever breaks."
  3. "There when it matters" / "Available 24/7 and strictly confidential.
     When an issue emerges, decisive counsel is one call away."

### Proof (use ONCE, grouped, or skip)

- Stats: "15+ years advising leaders" / "100% client retention" /
  "500+ professionals trained" / "221 placements in one month"
- "Expert commentary from our advisers, featured in" + media outlet logos
  (`siteConfig.lyall.mediaLinks`, logos in /images/media-outlets/)
- Media reach snapshot copy: `siteConfig.mediaReachSnapshot` (headline "What
  proactive media relations can produce in a single month." + body + caveat)
- Assessment block (optional, small): "How exposed is your organisation's
  reputation?" / "Used by CEOs, communications directors and board chairs
  across Australia. 20 questions across 5 risk areas." / "Three minutes. No
  commitment. Results delivered by email." Link the CTA to `/contact` for
  these explorations (do not wire the modal).

### Sectors ("Who we work with")

- Heading: "Trusted by leaders across every sector."
- List: Companies & family businesses; Local & state government; Industry &
  professional associations (/clients/industry-associations); Independent &
  faith-based schools; Legal & professional services; Child care, aged care &
  health; Pacific islands (/pacific); Faith-based organisations; Hospitality;
  High profile individuals

### Case studies

Import `siteConfig.caseStudies` (4 entries: sector, challenge, approach,
outcome, outcomeSub). Section copy: eyebrow "Client outcomes", heading
"Results that speak for themselves."

### Testimonials

- Eyebrow "Client endorsements", heading "Partnerships our clients stand behind."
- "CRC Public Relations has helped us generate major, ongoing, national
  exposure and ensure that our message is widely heard." (CEO, national
  industry association with 14,000 members)
- "CRC Public Relations developed a crisis communications plan for our schools
  and has assisted many of our member schools across Australia to communicate
  effectively when issues have arisen." (Executive Officer, Christian schools
  sector)
- "The invaluable customer relations support from CRC Public Relations helps
  ensure a high level of trust in, and growth for, our chain of more than 50
  restaurants." (Director, hospitality sector)
- "100% of our consulting clients would recommend CRC Public Relations to a
  peer." (CRC Public Relations Client Survey)

### Founder

- Eyebrow: "Co-founder & principal adviser". Name: "Lyall Mercer"
- Bio 1: "Lyall began his career as a journalist, writing for some of
  Australia's leading newspapers and magazines. That foundation, understanding
  exactly how media thinks, moves and decides what becomes a story, led him
  into a 25 year public relations career spanning every continent."
- Bio 2: "When you choose CRC Public Relations, you will deal with various
  members of our team, but Lyall will always be available for you. This level
  of expertise is why our clients choose us."
- Origin line: "Former journalist and Australasia's leading crisis
  communications adviser."
- Quote (use sparingly, never as a floating box): "You have 15 minutes to
  respond before you start to lose control of the message."

### FAQ (optional)

`siteConfig.faqs` (7 questions). Heading: "Common questions." Eyebrow "Good
to know".

### Final CTA

- Eyebrow: "Ready to work with us"
- "Trust is your most valuable asset. Let us help you build it."
- "Whether you need experienced advice on a complex issue, help building your
  public profile, a communications strategy, or trusted counsel during a
  crisis, we are your adviser and advocate. We believe in you, and we have
  your back."

## Asset inventory (public/)

Real people (prioritise these; the client asked for photos of the team):
- /images/lyall-mercer-portrait.png (full-length, transparent-ish studio)
- /images/about/lyall-mercer-portrait.png (crop to top for headshot)
- /images/about/barbara-gorogh-portrait.png (Barbara Gorogh)
- /images/homepage/MyPrPartnerHeadshots2025-14.jpg (real photoshoot frame, large)

Editorial / atmosphere:
- /images/redesign-v2/bento-corporate.png, bento-reputation.png,
  bento-crisis.png (practice-area photography)
- /images/redesign-v2/hero-ambient.png, navy-anchor.png
- /images/homepage/hero-abstract.webp, editorial-glass-bokeh.png
- /images/about/hero.webp, mid-journalism.webp, editorial-advisory-chairs.png
- /images/case-studies/editorial-podium.png, hero.webp
- /images/insights/editorial-broadsheets.png
- /images/redesign/hero-skyline.png, hero-meeting.png, boardroom-aerial.png,
  interview.png, sectors.png (large files, use sparingly)
- Sector/service imagery under /images/clients/** and /images/services/**

Video loops (each has a poster nearby):
- /images/redesign/hero.mp4 (city/office ambient, poster /images/redesign-v2/hero-ambient.png)
- /images/about/hero-ambient.mp4 (poster /images/about/hero-poster.jpg)
- /images/services/hero-ambient.mp4 (poster /images/services/hero-poster.jpg)
- /images/clients-index/hero-ambient.mp4 (poster /images/clients-index/hero-poster.jpg)
- /images/media-training/hero-ambient.mp4 (poster /images/media-training/hero-poster.jpg)
- /images/pacific/hero-ambient.mp4 (poster /images/pacific/hero-poster.jpg)

Media outlet logos: /images/media-outlets/{abc,the-australian,daily-telegraph,afr,sky-news,ap,aap,abc-radio,news-app}.png
Logo: /images/crc-logo.png
