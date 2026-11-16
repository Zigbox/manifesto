# Presentation notes: manifesto v2

These are recommendations only; none of them is implemented. They refer to class names in `site/index.html`. Keep the type stack (Familjen Grotesk, IBM Plex Sans and Mono), the palette tokens, the terminal band, the dark mode and the breakpoints at 820px and 560px.

**Rhythm.** Read top to bottom, the page should alternate between argument (prose), comparison, example and evidence:

| Section | Pattern |
| --- | --- |
| Hero | argument + evidence (terminal) |
| 01 | argument → comparison (`.invert`) → argument |
| 02 | argument (numbered statements) |
| 03 | argument → example (diagram) → principles |
| 04 | sequence → evidence (prediction) |
| 05 | evidence (project cards) |
| 06 | invitation → closing line |

Today, sections 02 to 05 are all bordered cards. The main change is to remove most of those boxes, so that the boxes that remain mean something.

## Hero (`.hero`)

- **`h1`.** Change it to *Agents invert the economics of software.* Use `<em>` (accent red) on *invert*, or on nothing at all. Don't colour the whole clause, as the current headline does.
- **`.lede`.** Use the original sentence, *We are entering the age of the agent, and greeting it by handing agents tools built for humans.* Follow it with the two-sentence opportunity/danger line, either as a second `.lede` paragraph or as the first sentence of the CTA area. Keep `max-width:40ch`.
- **Terminal setup sentence.** Add one muted sentence immediately above `.term`, styled like `.term-note`: "A program in a Zigbox container tries to reach the internet. It was never granted a network." The terminal then reads as evidence for a stated claim.
- Keep `.term`, the `.rec` CI badge (M5, run 40751616386) and `.term-note` unchanged.

## 01 · The inversion (`#inversion`)

- **Comparison.** Keep `.invert` as the one comparison on the page. Add the **Authority** row ("Whatever the user can reach" / "Only what was granted"). The **Rigor** row replaces "Safety and correctness".
- **Placement.** Put the "Cheap code is not cheap correctness" paragraph *before* `.invert`, as a standalone paragraph in `.prose`. It is the hinge of the argument, so don't bury it after the table.
- **The old `.pull` line.** Remove the `DateTime`/`Boolean` pull quote. Reuse the `.pull` style for "The first fact makes the old discipline affordable. The second makes it necessary." That line is the section's thesis. Drop the inline `code` styling from `.pull`.

## 02 · Business (`#business`)

- **Drop the cards.** Replace the three `.qs` cards with large numbered statements in a single column:
  - Use a big mono accent numeral (`01`, `02`, `03`), styled from the current `::before`, in the left gutter.
  - Set the question in the display face at roughly `h2` size.
  - Put the one-line follow-up below it in `--muted`.
  - Use no borders or background, and 32–40px between items.
- Delete `.bad` (the "honest answer" lines).
- Keep `.verdict` but promote it to `.pull` styling, since it is the section's conclusion: "If you cannot answer these questions precisely, you do not know the authority you have delegated."

## 03 · Builders (`#builders`)

- **Composition diagram.** Place one diagram after the example paragraph and before the rule. Make it a small inline SVG that uses existing tokens only:
  - Two grant boxes: `read customer records` and `send email`. Draw each in `--line` borders with a green (`--ok`) tick, labelled "approved".
  - Arrows from both boxes converge on a third, dashed box: `customer records → external address`, in `--accent`, labelled "never approved".
  - The caption is the rule: **Authority must not expand silently through composition.**
  - No icons, no people, no robot imagery. It must read the same in light and dark (use `currentColor` and the tokens).
- **Principles.** Replace the `.principles` grid of cards with a definition list:
  - Each term in mono accent (from the current `.tag`), followed by a one-line explanation.
  - A hairline `--line` rule between items, without boxes.
  - Give the three principles that answer a business question a small right-aligned mono marker (`→ Q1`, `→ Q3`, `→ Q2`). This ties 03 visually back to 02.
- **`.principles .top`.** Remove it. Its line ("Composing safe components …") is superseded by the diagram's caption.

## 04 · Lineage (`#lineage`)

- **Annotated sequence.** Replace both `.lineage` grids and the 7 separate cards with a single vertical timeline:
  - A 1px `--line` rule on the left.
  - A mono year at each node.
  - The name in the display face, then a mono kind label (`approach`, `technique`, `problem`, `system`) in `--muted`.
  - A one-line annotation, with the source link on the name.
- **Two columns on desktop.** Above 820px the timeline can run in two columns: ideas from 1966 to 1988 on the left, systems from 2009 to 2015 on the right. Below 820px it is one column.
- **`.econ`.** Keep it as the closing box of the sequence, now carrying "These are different guarantees … That is what agents change."
- **Prediction (`.predict`).** Keep the dark panel as it is. Set the `.when` label to a fixed "Prediction · by November 2028", rather than computing it from `SITE.date`, so a republish can't move the deadline. Add the confirmation criteria as a second, smaller paragraph in body type (`--term-dim`) under the display-type claim.

## 05 · Projects (`#building`)

- **Bridge.** Put the two-sentence bridge in `.sec-head p`, replacing "Both projects are pre-alpha…", which is no longer true of Zigbox.
- **Cards.** Keep the `.proj.box` and `.proj.cube` cards with their amber and blue.
  - *Pills.* Update `SITE.zigboxStage` to "Public beta · 0.5.1" and `SITE.zigcubeStage` to "Pre-alpha · B3 demonstrated", once the editorial notes are resolved.
  - *Zigcube list.* Split it into two labelled groups, "Demonstrated" and "Designed, not yet built". Give the second group a hollow bullet so maturity is visible at a glance.
  - *Evidence.* Add the CI evidence links to `.go`, using the same green `.rec` badge style as the hero. Never show a badge for anything that isn't demonstrated.
- **`.pledge`.** Replace the three-column block with one line of muted small print under the cards (the licensing note). Licensing supports the argument; it isn't one of its propositions.

## 06 · Close (`#contact`)

- **`.join`.** Keep two invitations, but drop the card boxes. Use two plain columns, each with an `h3` and one sentence, and a text link or `.btn` (one primary, one default). It should read as an invitation, not a pricing table.
- **`.closing`.** Move the closing two lines to the very end, after the invitations, in `.closing` display type.
  - Set them as two lines with a deliberate break after "write."
  - Keep the `.mark` glyph after "misuse."
  - Nothing should follow them except the footer.

## Navigation

- **`nav`.** Rename "The inversion" only if the 01 heading changes. Consider adding "Prediction" (`#prediction`), which is the most linkable element on the page.

## Don't

- No stock or AI imagery, decorative animation, metrics that the repos can't back, logos of third-party systems in the lineage, or new colours.
- No "recorded in CI" badge that links to anything other than the specific green run.
