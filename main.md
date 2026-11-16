# The Age of the Agent: A Software Manifesto

Alex Zuzin · November 4, 2026 · revised November 16, 2026

---

## Agents invert the economics of software.

We are entering the age of the agent, and we are greeting it by handing agents tools built for humans.

The careful work we skipped because it was expensive is now cheap enough to do. The tools we skipped it in are now dangerous enough to require it.

The difference fits in one command. A program in a Zigbox container tries to reach the internet. It was never granted a network, so it has none, and the runtime says why:

```
$ zbx run alpine -- wget -qO- https://example.com
wget: bad address 'example.com'
zbx: network: none (grant with --net)
(exit 1)
```

[✓ Recorded in CI · Zigbox M5](https://github.com/Zigbox/zigbox/actions/runs/40751616386)

Nothing is permitted merely because it is reachable, and the refusal names its cause.

---

## 01 · The inversion

For fifty years, software has been built for a world where human attention is scarce and human effort expensive.

Formal methods, explicit contracts, strong types and capability-based design were never wrong. They were expensive: specifications to write, proofs to maintain, authority to thread through every interface. So they were used where failure was intolerable and skipped almost everywhere else.

Agents make much of that labor cheap: drafting contracts, writing property tests, threading capabilities through an API. Work that was rationed becomes abundant.

Cheap code is not cheap correctness. Someone must still decide what the system should do, and something must still check that it does. Agents change what that work costs. They do not make it disappear.

The same agents also act. They run commands and move data and money through tools and permissions designed for a person at a keyboard, someone assumed to mean well and to notice when something looks wrong. An agent may be mistaken, pursuing the wrong goal, or following instructions slipped in by a stranger. It acts faster than anyone can watch.

| | Built for people | Built for agents |
|---|---|---|
| **Effort** | Scarce. Spend it on the demo. | Cheap. Spend it on guarantees. |
| **Rigor** | Where failure was intolerable. | Wherever it matters. |
| **Actor** | One person, trusted, slow. | Many agents, untrusted, fast. |
| **Authority** | Whatever the user can reach. | Only what was granted. |

The first fact makes the old discipline affordable. The second makes it necessary.

Today, an agent is exactly as safe as the person who configured it and the least careful tool it can reach. At scale, failure stops being a question of whether, and becomes a question of when.

---

## 02 · If you run a business

Before an agent gets near anything that matters, answer three questions.

**1. What can it touch?**
Not what it is meant to do: what it is able to do. Which systems, data and accounts, and who decided?

**2. When it is wrong, will you know, and can you contain it?**
Is there a record of what it did, and a boundary the damage cannot cross?

**3. What can your approved tools do together?**
Each tool passed review. Did anyone review the combinations?

If you cannot answer these questions precisely, you do not know the authority you have delegated. You are still accountable for it.

---

## 03 · If you build software: software for agents is buttoned down

Containers, permission prompts and a human approving each step help. They do not solve the problem, because each judges one action at a time. The danger is often a sequence of permitted actions.

An agent may read customer records, to answer support tickets. It may send email, to reach suppliers. Neither permission is wrong. Together, unless something forbids it, they let the agent mail the customer database to anyone, including whoever planted instructions in the last ticket it read. No single step was unauthorized. The combination was never authorized at all.

**Authority must not expand silently through composition.**

No system guarantees that in general; it holds only against a specification and a threat model. What a substrate can do is make authority explicit, enforce it below the agent, and make what it permits checkable.

> Safety has to live in the substrate.

Each principle covers a gap the others leave:

- **No ambient authority.** An agent holds explicit, unforgeable grants, and nothing else. Question 1 gets an answer.
- **Explicit contracts, bounded effects.** Every operation declares what it needs and what it may change, so composition can be analyzed: a record read under one grant leaves through another only if a contract allows it. Question 3 gets an answer.
- **Invalid operations unrepresentable, where practical.** A call the types forbid cannot be written, so it never needs refusing. Where types cannot reach, the runtime refuses.
- **Predictable, observable, contained failure.** When the other layers miss, damage stops at a boundary and leaves a record. Question 2 gets an answer.
- **Legible semantics, actionable errors.** A refusal says what was refused, why, and which grant would allow it. Misuse stops being the easy path; correct use stays easy.

---

## 04 · None of this is new

The ideas are decades old. The economics are not.

- **1966 · Capability security** ([Dennis and Van Horn](https://dl.acm.org/doi/10.1145/365230.365252)). *Approach.* Authority is a token you hold, not a place you can reach.
- **1969 · Formal methods** ([Hoare](https://dl.acm.org/doi/10.1145/363235.363259)). *Approach.* A program's behavior can be proved against a specification.
- **1986 · Design by contract** ([Meyer, Eiffel](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract_%28tm%29%2C_Assertions_and_Exceptions)). *Approach.* Preconditions, postconditions and invariants belong to the interface.
- **1988 · Effect systems** ([Lucassen and Gifford](https://dl.acm.org/doi/10.1145/73560.73564)). *Technique.* Types record what a computation may do, not only what it returns.
- **1988 · The confused deputy** ([Hardy](https://dl.acm.org/doi/10.1145/54289.871709)). *Problem.* The composition problem, named: a program holding two legitimate authorities is tricked into combining them.
- **2009 · [seL4](https://sel4.systems/).** *System.* A capability-based microkernel whose implementation is machine-checked against its specification, under stated assumptions.
- **2010 · [Capsicum](https://www.cl.cam.ac.uk/research/security/capsicum/).** *System.* Capabilities in FreeBSD, confining existing Unix programs with modest changes.
- **2015 · [Rust](https://www.rust-lang.org/).** *System.* An industrial language whose types rule out data races and memory errors in safe code.

These are different guarantees: a proof, a confinement mechanism, a type discipline. None was free, and each was adopted where someone could afford it. That is what agents change.

> **Prediction · by November 2028**
>
> A significant agent incident will be publicly traced not to one bad tool but to the composition of tools that each passed review.
>
> It counts if a post-mortem, regulatory filing or credible investigation attributes material harm (disclosed data, lost money, a customer-facing outage) to an AI agent, and names as its cause a combination of individually approved tools or permissions, none unsafe alone. If none is on the public record by then, I was wrong, and I will say so here.

---

## 05 · What's being built

If authority is to be explicit, it must be enforced below the agent. If systems are to compose safely, the boundaries between them must be explicit too.

Zigbox and Zigcube are experiments in both. I would rather be checked than believed: a milestone counts only when its demo passes on a clean machine in CI, and the run is linked.

**Zigbox** · container runtime · no daemon, no root · *public beta (0.5.1)*
Linux privileges cut to a minimal allowlist, seccomp on, network off unless granted. Images can be required to be signed before they run. Every refusal is a coded diagnostic naming its cause and its fix. Tested against a simulated host that injects faults at every step.
[Site, roadmap and demos](https://zigbox.org/zigbox/) · [Source](https://github.com/Zigbox/zigbox) · CI: [no network unless granted](https://github.com/Zigbox/zigbox/actions/runs/40751616386), [signatures and run policy](https://github.com/Zigbox/zigbox/actions/runs/42959822443)

**Zigcube** · orchestrates Zigbox workloads · *pre-alpha*
Demonstrated: placement and failover across nodes, and jobs whose only route out is a declared relay. Designed, not yet built: services that talk only along declared grants, and nodes that re-check trust before running anything, so a compromised control plane cannot run unsigned code.
[Site, roadmap and demos](https://zigbox.org/zigcube/) · [Source](https://github.com/Zigbox/zigcube) · CI: [relay-only egress](https://github.com/Zigbox/zigcube/actions/runs/43143701151)

*Licensing.* Both projects are Apache 2.0, with a written pledge never to relicense, made in public. DCO sign-off, no CLA. Nothing here locks you in.

---

## 06 · Get involved

If you are deciding how much authority to give agents, bring me your answers to the three questions, or the places you could not answer them. [contact]

If you build or run infrastructure, try Zigbox. Try to make it do something it was not granted, and tell me where it did.

We spent fifty years making software easier to write.

Now we have the means, and the need, to make it harder to misuse.
