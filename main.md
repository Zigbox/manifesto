The Age of the Agent: A Software Manifesto

[Your name], [date]

We are entering the age of the agent, and we are greeting it by handing agents tools built for humans.

Those tools were built for a world where human attention is scarce. For fifty years software has been optimized to get a person from idea to working demo with the least friction. Safety and correctness, with a few noble exceptions, were afterthoughts, because they cost effort that people didn’t have.

Agents invert that. Their effort is nearly free, so the careful work humans skipped is finally affordable. Their behavior can’t be trusted, whether through honest error, misaligned goals, or instructions slipped in by a stranger, so that careful work is finally necessary. The first fact makes safe software cheap to build. The second makes it urgent.

Today, an agent is exactly as safe as the person who configured it and the least careful tool it can reach. At scale, a catastrophic failure stops being an if and becomes a when: a DateTime, not a Boolean. We may already be at that scale.

What it means if you run a business. Before an agent gets near anything that matters, ask three questions:

What can it touch by default, and who decided that?
When it’s wrong, can you see it and contain it before the damage spreads?
When you combine two tools you’ve each approved, who checked the combination?

If the honest answers are “everything,” “no,” and “nobody,” the exposure is already in your systems.

What it means if you build software. Sandboxing the old tools, with containers, permission prompts, and a human in the loop, helps but doesn’t solve it. Wrapping unsafe parts does not make a safe whole. Safety has to live in the substrate. Software for agents is buttoned down:

It exposes the smallest useful set of capabilities, with explicit contracts, bounded effects, and no ambient authority (nothing is permitted merely because it is reachable).
Invalid operations are unrepresentable wherever practical.
Failures are predictable, contained, and observable, and refusals say what was refused and why.
Above all, composing safe components never silently produces an unsafe system.

Agents still need software they can read: clear semantics, honest errors, stable interfaces. What changes is that misuse stops being the easy path.

None of this is new. Capability security, formal methods, effect systems, and design by contract are decades old, and projects like seL4, Capsicum, and Rust showed what they buy. What’s new is the economics.

My prediction: within two years, a major agent incident will be traced not to one bad tool but to the composition of tools that each passed review.

What I’m doing about it

I’d rather be checked than believed, so I’m building it. Both projects are pre-alpha, and each milestone ships only when its demo runs start to finish on a clean machine.

Zigbox is a container runtime with no daemon and no root. Capabilities are denied by default, networking is off unless granted, and every refusal names its cause. It’s tested against a simulated host with faults injected at every step, and its demos are recorded in CI.
Zigcube orchestrates Zigbox workloads. Services talk only along declared grants, and every node re-checks trust before running anything, so a compromised control plane can’t run unsigned code.

Both are Apache 2.0 with a written pledge never to relicense, decided in public. Nothing here locks you in.

If you’re deciding how much authority to give agents, [contact].
If you build or run infrastructure, try Zigbox, break it, and tell me where.

Let’s get building.
