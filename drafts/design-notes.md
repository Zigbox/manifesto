# Design notes: visual revision

Direction: a technical publication rather than a product page. Swiss editorial grid, Bell Labs report conventions (numbered sections, figures with captions, references), and restrained industrial brutalism (hairline rules, mono labels, few fills). The identity is unchanged: colours, the three typefaces, the square-and-diamond mark, Zigbox amber and Zigcube blue.

## Grid and measures

| Token | Value | Used for |
| --- | --- | --- |
| `--w-read` | 680px | prose, ledes, questions |
| `--w-wide` | 1000px | diagrams, comparison table, principles, bibliography, projects |
| `--w-display` | 1180px | hero headline, prediction, closing |
| `--rail` | 120px | left rail (section number + category) |

- Above 900px each section is a two-column grid, `rail | content`. The rail holds a large mono-lit section numeral (`01`) and a category label (`THE INVERSION`). It is sticky within its section, so the reader always knows where they are.
- The right margin is used only for short annotations (`aside.note`, 12–13px mono): the CI reference next to the terminal, the "conceptual" caption, the Hardy cross-reference beside the composition rule. Below 1200px these fall back into the flow as footnote-style lines.
- Below 900px the rail becomes an inline eyebrow above the heading. One column throughout, no horizontal scroll down to 320px.

## Section rhythm

Padding varies with importance, not uniformly:

| Weight | Padding (block) | Sections |
| --- | --- | --- |
| Major | `clamp(56px, 7vw, 80px)` | Hero, 01, 03, Prediction, Closing |
| Standard | `clamp(44px, 5vw, 64px)` | 02, 04, 05 |

Sections are separated by a full-width 1px rule. The hero's terminal band and the prediction are the two full-bleed dark moments.

## Type scale

All sizes use `clamp()`. No all-caps body text; caps appear only in mono labels of 1–3 words.

| Role | Face | Size |
| --- | --- | --- |
| H1 | Familjen Grotesk 700, tracking −0.035em | `clamp(2.4rem, 6.2vw, 5.125rem)` (82px at display width) |
| Proposition (max. 3 on the page) | Familjen Grotesk 700 | `clamp(1.75rem, 3.4vw, 2.75rem)` (44px) |
| H2 | Familjen Grotesk 700 | `clamp(1.6rem, 2.6vw, 2.25rem)` (36px) |
| Business questions | Familjen Grotesk 700 | `clamp(1.4rem, 2.4vw, 1.9rem)` (30px) |
| Prediction date | Familjen Grotesk 700 | `min(clamp(2.5rem, 6.2vw, 5rem), 11cqi)` (80px; capped by its column) |
| Statement (secondary tier) | Familjen Grotesk 500 | `clamp(1.2rem, 1.8vw, 1.45rem)` |
| Section numeral | IBM Plex Mono 400 | `clamp(1.75rem, 2.6vw, 2.125rem)` (34px) |
| Body | IBM Plex Sans 400 | `clamp(1rem, .94rem + .15vw, 1.0625rem)` (16–17px), line-height 1.6 |
| Annotation / label | IBM Plex Mono 400–500 | 12–13px |
| Terminal | IBM Plex Mono | 13–14px |

The three propositions: (1) "The first fact makes the old discipline affordable. The second makes it necessary." (2) "Authority must not expand silently through composition." (3) the closing two lines.

## Density pass (2026-11-16)

Scale and spacing were reduced by about 25–30% without changing the components, colours or contrast. Measured at 1440px:

| | Before | After |
| --- | --- | --- |
| Hero headline | 112px | 82px |
| Section heading | 48px | 36px |
| Proposition | 62px | 44px |
| Business question | 46px | 30px |
| Body | 19px | 17px |
| Section numeral | 52px | 34px |
| Rail | 168px | 120px |
| Section padding (std / major) | 104 / 160px | 64 / 80px |
| Fig. 1 height | 405px | 324px |
| Prediction date | 124px | 80px |
| Page height | 12,939px | 9,499px (−27%) |

- In-section gaps (table, figures, composition, rule, principles, verdict, closing) were reduced by roughly a third. Card padding, table cells and diagram nodes were tightened proportionally.
- The question stagger is now 56 / 112px. The closing block is `min(60vh, 640px)` rather than 84vh.
- **Prediction overflow.** The date was sized from the viewport and filled about 95% of its column with fallback fonts. Wider font metrics (Safari, or a failed web-font load) pushed it past the column. It is now capped by its own column width (`container-type:inline-size` on the body, `11cqi`), so it keeps at least 40% headroom at every width.
- **Closing mark.** The rotated square stuck out of its box by about 5px. It is now inset by 16%.

## Graphic vocabulary

Four primitives, drawn as 16px SVG symbols (`currentColor`, 1.5px stroke, square caps) and as their large equivalents in the diagrams. They are used only where they carry meaning: the hero band, the composition diagram and its legend, and the project lists. They are not a decorative icon set.

| Primitive | Glyph | Meaning |
| --- | --- | --- |
| Contained | solid square with a dot inside | a workload inside a boundary; demonstrated |
| Granted | arrow passing through a gap in the boundary | an explicit grant |
| Denied | arrow stopped by a bar at the boundary (accent) | a refusal |
| Composed | two squares joined at a diamond | two grants combined |

Line vocabulary in diagrams:
- **Solid boundary**: authorized.
- **Connector**: attempted composition.
- **Dashed red boundary**: authority not established.
- **Bar on a connector**: refused.

Every state has a text label as well; colour is never the only signal.

## Figures

- **Fig. 1 (01): the inversion.** Inline SVG. Two curves on an unnumbered axis from "Human-directed software" to "Agent-directed software": *cost of careful engineering* falls (dashed, ink) and *need for reliable control* rises (solid, accent). Their crossing is marked with the diamond. It is captioned "Conceptual: the curves show direction, not measured data." Labels are HTML, so they reflow and theme with the page.
- **Fig. 2 (03): composition.** Grant A and grant B in solid boxes, each marked GRANTED. A bracket connector joins them at a diamond node (A ∘ B) and runs to a dashed red box, "disclose customer records externally", marked NOT GRANTED, with the refusal bar. A legend sits below. Both grants are drawn identically and neutrally, so neither looks unsafe alone. The figure stacks vertically on narrow screens.

Both figures have a `figcaption` and a screen-reader description.

## Components

- **Hero.** The headline spans the display width. The ledes sit at reading width, and the byline is mono metadata. Below them is a full-bleed dark band in four steps: setup sentence → terminal (real output, static) → CI evidence link → principle line in display type.
- **Comparison (01).** A semantic `<table>` with row headers. The agents column is tinted `--accent-soft`. On phones each row becomes a stacked pair.
- **Questions (02).** Large statements with mono labels `01 / REACH`, `02 / FAILURE`, `03 / COMPOSITION`, separated by hairlines. They are staggered on desktop, which is optional.
- **Principles (03).** A typographic two-column list: label and title on the left, text on the right, hairline rules, and right-aligned cross-references (`→ 01 Reach`). The first principle is set larger.
- **Bibliography (04).** Numbered references [1]–[8] in two groups: *Concepts and techniques* and *Implementations*. Each entry has a kind label, a linked title, a citation line and an annotation. Years appear only where the link sources them.
- **Prediction.** A dark panel at display width. The date is large and in accent, the claim is in display type, and the criteria are smaller beneath a rule labelled "Counts if".
- **Projects (05).** The cards are kept, with amber and blue top rules. Demonstrated items use the solid Contained glyph; planned items use a dashed, hollow version and sit under a "Designed, not yet built" label. Licensing is a single small-print line.
- **Closing.** A near-full-viewport statement. The first line is muted and the second is ink. The two invitations below are plain editorial links.

## Motion and accessibility

- Static page. The only transitions are on link underlines and colour on hover/focus (120ms), and these are removed under `prefers-reduced-motion`.
- Visible 2px accent focus ring; a skip link; one `h1`; `h2` per section; figures use `role="img"` with a description.
- Contrast is AA in both themes, checked with axe-core.
- `og.png` is re-rendered with the new headline. The mark and dark band are kept.

## Copy changes in this revision

The argument text is unchanged. Everything below is labelling, wording inside the diagrams, or moved text.

**Removed**
- Hero CTA buttons "Read the manifesto" and "See what's being built". The page now runs declaration → demonstration → argument without a funnel; the header nav still links to both.
- The three-column licensing block ("Apache 2.0 / Decided in public / No lock-in"). It is replaced by the one-line licensing note from `manifesto-v2.md`. The sentence "The pledge was made in the open, where it can be held to." is gone; "made in public" carries it.
- Years for Design by contract (1986), seL4 (2009), Capsicum (2010) and Rust (2015). The linked sources don't state them, and the brief asks for no unsourced dates. Restore them if you're happy to vouch for them.

**Added: labels**
- Demonstration step labels: Setup, Output, Evidence, Principle. Terminal bar: "static transcript".
- Question labels: "01 / Reach", "02 / Failure", "03 / Composition". Principle cross-references now read "→ Answers 01 / Reach" (was "→ Q1").
- "Table 1 · Two design assumptions". "Fig. 1 · Conceptual: the curves show direction, not measured data." "Fig. 2 · Two approved grants combine into an authority nobody approved." (the old diagram's aria-label, now visible).
- Fig. 1 labels: "Need for reliable control increases", "Cost of careful engineering decreases", "The inversion", "Human-directed software", "Agent-directed software".
- Fig. 2 legend (four lines) and states: "A · Granted", "B · Granted", "A ∘ B · Not granted · Refused".
- Bibliography group headings "Concepts and techniques" and "Implementations", reference numbers [1]–[8], and full citations for the four DOI papers (verified against Crossref). Meyer is cited as "B. Meyer and the Eiffel language. Linked: Eiffel documentation, …".
- "Each principle covers a gap the others leave" (from `manifesto-v2.md`; the live site had dropped it).
- Prediction rail: "Stated November 4, 2026", from `SITE.date`. The deadline text stays fixed.
- Margin notes: "Sources for each are in § 04, references [1]–[4]." and "The classic name for this failure is the confused deputy: Hardy, 1988, [5]."
- Projects key: "Built and running" / "Designed, not yet built".

**Reworded**
- Fig. 2 grant B: "send email" → "send external email". Composite: "customer records → any address" → "disclose customer records externally". Both follow the brief. The prose example is unchanged.
- CI badge: "✓ recorded in CI · M5" → "✓ Recorded in CI · Zigbox M5 · run 40751616386". It has moved from the terminal bar into the Evidence step.
- Invitation buttons → text links: "Get in touch →", "Try Zigbox →".
- Licensing note: "Licensing. Both projects are Apache 2.0, with a written pledge never to relicense, made in public. DCO sign-off, no CLA. Nothing here locks you in." (as in `manifesto-v2.md`).
- OG image: the headline is now "Agents invert the economics of software."; the quote "Safety has to live in the substrate." is dropped; the eyebrow reads "The Age of the Agent · a manifesto". `og:image:alt` is updated to match.
- The closing keeps "the means, and the need, to" with commas. The brief quoted it with em dashes; I kept the published punctuation.

## Validation (2026-11-16)

- **axe-core 4.10** (WCAG 2.0/2.1 A and AA, plus best-practice): 0 violations at 320, 375, 768, 1024, 1280 and 1440px, in both light and dark.
  - The first run found two issues, both fixed:
    - The Zigbox amber (`#b86a00`) was under AA as text on white. Light mode now uses `--box-ink #8f5200` for amber text; the amber rule and glyphs are unchanged.
    - The margin notes were `<aside>` landmarks nested in sections; they are now plain paragraphs.
- **Overflow:** `scrollWidth == innerWidth` at every width and theme; no element extends past the viewport.
- **Console:** no page or console errors.
- **Keyboard:** the tab order follows the reading order, starting with the skip link, and every control shows the 2px focus ring.
- **Structure:** one `h1`, an `h2` for each section, and every original anchor ID is present (`top`, `inversion`, `business`, `builders`, `lineage`, `prediction`, `building`, `contact`, `contact-btn`).
- **Motion:** none beyond 120ms colour and underline transitions, which are removed under `prefers-reduced-motion`.
