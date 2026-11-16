# Editorial notes: manifesto v2

Companion to `manifesto-v2.md`. `main.md` and `site/index.html` are unchanged.

## 1. What changed, and why

**Opening.** The headline is now the thesis: *Agents invert the economics of software.* The original first sentence is kept whole as the supporting line, because it still works there. A two-sentence statement of opportunity and danger follows. The Zigbox refusal now gets a plain-language setup before the terminal output, and keeps its CI link and the line *Nothing is permitted merely because it is reachable, and the refusal names its cause.*

**01 · The inversion.** The economic argument is now explicit, in four steps:

1. Why the rigorous practices were used selectively: they cost specification, proof and plumbing effort, so teams spent it only where failure was intolerable.
2. What agents make cheap: drafting contracts, property tests, threading capabilities.
3. The essential distinction, stated directly: *Cheap code is not cheap correctness.* Specification and checking remain real work; agents change their price.
4. The risk side: agents act through tools and permissions designed for a trusted, slow person at a keyboard.

The old/new comparison gains an **Authority** row, so the table sets up section 03. The `DateTime`/`Boolean` joke is gone. Its point survives in plain words: *failure stops being a question of whether, and becomes a question of when.*

**02 · Business.** The three questions are kept, reworded for an executive. Each is now a short heading with one concrete follow-up line. The universal answers ("everything," "no," "nobody") are replaced by the brief's suggested challenge, plus one line about accountability: *You are still accountable for it.*

**03 · Builders.** Composition is now the centre of this section:

- The section opens by saying why per-action controls (containers, prompts, human approval) don't settle the problem.
- It works through the customer-records-plus-email example.
- It states the rule as *Authority must not expand silently through composition.*
- It immediately limits the claim: it holds only against a specification and a threat model.

Each principle now says what it adds and is tied back to the business question it answers. That shows how the principles complement each other rather than presenting them as five equivalent assurances.

**04 · Lineage.** The list is now annotated and dated, and each entry is labelled approach, technique, problem or system. A closing sentence says these are different kinds of guarantee: a proof, a confinement mechanism, a type discipline. The prediction now carries a fixed date and explicit confirmation criteria.

**05 · Projects.** The section opens with the brief's bridge sentence. Every maturity claim is restated from the project repositories as of 2026-11-16 (see §3). Licensing moves into a one-line supporting note.

**06 · Close.** *Let's get building* is replaced by the brief's candidate ending, which returns to the fifty-year frame of the opening. The two invitations stay, and each is now tied to the argument: the executive invitation asks for answers to the three questions, and the builder invitation asks the reader to try to exceed a grant.

## 2. Preserved

Kept verbatim or nearly verbatim:

- "We are entering the age of the agent, and we are greeting it by handing agents tools built for humans."
- "Nothing is permitted merely because it is reachable, and the refusal names its cause."
- "The ideas are decades old. The economics are not."
- "Safety has to live in the substrate."
- "An agent is exactly as safe as the person who configured it and the least careful tool it can reach."
- "The first fact makes … The second makes …" (reworded to *affordable / necessary*)
- "I'd rather be checked than believed"
- "Misuse stops being the easy path"
- "Built for people / built for agents"
- "Instructions slipped in by a stranger"
- The three-question structure, the November 2028 prediction, and both invitations.

Dropped:

- **"Software for agents is buttoned down."** This was the heading of section 03 on the live site. It is distinctive, but the composition rule now carries the section. Restore it as the 03 heading if you want it.
- **"Wrapping unsafe parts does not make a safe whole."** The composition example now does this work.

## 3. Claims that need your decision or verification

Checked against `Zigbox/zigbox` and `Zigbox/zigcube` (default branches, cloned 2026-11-16).

1. **Licence conflict — resolved by the author (2026-11-16): both projects are Apache 2.0; Zigbox's MIT `LICENSE` file is the error and will be fixed there.** `main.md` and the site say both projects are Apache 2.0 with a no-relicensing pledge. That is true of Zigcube: its `LICENSE` file is Apache 2.0 and the pledge is in its README.
   - Zigbox's `LICENSE` file is **MIT** ("Copyright (c) 2026 DailyWombat"), and its README's licence section says MIT.
   - Zigbox's `docs/SPEC.md` and `site/index.html` say Apache 2.0 with the pledge.
   - The draft keeps the claim but marks it with an inline `[EDITORIAL]` flag. Resolve it in the Zigbox repository before publication, or narrow the claim to Zigcube.
2. **Zigbox maturity has moved.** The manifesto site says "Pre-alpha · M7 shipped", and `main.md` says "Both projects are pre-alpha". Zigbox's README now describes 0.5.1 as "an honest public beta for Debian and Fedora": M0 to M10 are demonstrated, and M9 and M10 are marked experimental. The draft says *public beta (0.5.1)*. Update `SITE.zigboxStage` when you implement.
3. **Zigcube claims were overstated.** The current manifesto states two things in the present tense:
   - "Services talk only along declared grants" is milestone C4 (Mesh).
   - "Every node re-checks trust … a compromised control plane can't run unsigned code" is milestone C6 (Trust).

   Both are marked "Not started" / `plan` in the Zigcube README and site. What is demonstrated today is C0, C1 and C2 plus B1 to B3, and the draft cites B3 (relay-only egress for jobs, [run](https://github.com/Zigbox/zigcube/actions/runs/43143701151)). The draft labels C4 and C6 as *designed, not yet built*. The repository has a `src/job_trust.zig`; if any node-side signature check already ships for jobs, you may be able to claim part of this. Confirm before strengthening the wording. The site's stage pill "Pre-alpha · C1 shipped" is also stale. The Zigcube site says "Pre-alpha · B2 shipped, B3 demonstrated".
4. **"Capabilities denied by default."** In Zigbox this means *Linux* capabilities dropped to a minimal allowlist (SPEC, M2). A systems reader will notice that these are not the object capabilities the manifesto argues for. The draft now says "Linux privileges cut to a minimal allowlist, seccomp on, network off unless granted" to avoid the conflation. Keep it that way.
5. **"Each milestone ships only when its demo runs on a clean machine."** This is broadly true: Zigbox demos run in fresh Ubuntu VMs in CI, and Zigcube marks a milestone demonstrated only when `demo-cN` is green in CI. There are exceptions:
   - M4b (Mac) was demonstrated by hand on the owner's Mac.
   - Zigcube B1 and B2 shipped without their 24-hour fleet runs, by recorded decision.

   The draft says "a milestone counts only when its demo passes on a clean machine in CI, and the run is linked". Either accept that M4b is an exception or drop "in CI".
6. **"Every refusal is a coded diagnostic naming its cause and its fix."** The evidence is that every CLI error and doctor failure is coded, with cause and fix (README, M0 slices 4–5). "Every refusal … its fix" across all commands is slightly stronger than what I verified. Consider "its cause and, where there is one, its fix."
7. **The prediction.**
   - *Date.* The site computes the deadline as publication + 2 years from `SITE.date` = 2026-11-04, which gives November 2028. The draft fixes the month in the text. Do not let a republication move it.
   - *Confirmation.* An incident counts only with public attribution of material harm to an agent, with the cause named as a combination of individually approved tools or permissions. Researcher proofs of concept do not count.
   - *Prior demonstrations.* Proofs of concept of this pattern were already public in 2025, for example prompt-injection data exfiltration through combined MCP tools, and the widely cited "lethal trifecta" framing. Citing them would strengthen the argument and pre-empt "this already happened". I have not added them; verify the specific sources if you want them.
8. **Lineage.** All four DOIs were checked against Crossref and resolve to the named papers. Dates are of the cited work, not of the idea's origin:
   - Hoare 1969 stands for formal methods; Floyd (1967) and Turing (1949) are earlier.
   - The term "design by contract" dates from Meyer's work around 1986 and the Eiffel language. Its standard exposition is 1988–1992.

   The confused deputy (Hardy, 1988) is the one **new** reference. It is the classic name for exactly the composition problem in 03, so it repairs provenance rather than adding a concept. Cut it if you prefer the original seven.
9. **New lines to approve.** The draft introduces two new aphorisms:
   - *A prompt is a request. A capability is a fact.*
   - *Cheap code is not cheap correctness.*

   Both are intended to be quotable. Keep or cut on voice grounds.
10. **Byline date** is a placeholder. The site uses 2026-11-04.

## 4. Length

The draft runs about **1,240 words**, counted without the project cards, the licensing note, links and the terminal block. That is above the 900–1,100 target. The excess is mostly material the brief asked for: the worked composition example (≈70), the prediction's confirmation criteria (≈60) and the annotated lineage (≈150).

If you need to cut, in order of least loss:

1. Fold the comparison table's **Rigor** row into **Effort**.
2. Drop the confused-deputy entry.
3. Shorten each principle to its first sentence plus "Question N gets an answer".
4. Merge 01's final two paragraphs.
