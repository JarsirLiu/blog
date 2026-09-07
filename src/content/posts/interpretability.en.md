---
title: "When models start to 'think': how interpretability lets us see inside language models"
category: "Interpretability"
team: "Interpretability"
summary: "The more capable language models become, the more they resemble a black box we cannot open. This post surveys three lines of interpretability research and uses a concrete 'global workspace' case to show why — and how — we try to understand these systems."
publishDate: 2026-09-05
author: "Lin Wei, Aisha Khan"
tags: ["interpretability", "mechanistic", "alignment", "evaluation"]
featured: true
coverGradient: "linear-gradient(135deg,#2f4858 0%,#5b7a99 55%,#c9b08a 100%)"
coverLabel: "Interpretability"
lang: en
---

## Introduction

In just a few years, large language models have moved from "tools that complete sentences" to "collaborators that reason step by step." Alongside that leap in capability, an old question has grown more urgent: we do not really understand *why* these systems produce a given answer.

For a search engine, we can audit its ranking rules. For a calculator, we can trace every operation. But a model trained on enormous amounts of data, with hundreds of billions of parameters, has decision paths that no human wrote line by line and that are hard to observe directly. It is more like a machine we built without ever receiving the blueprint.

**Interpretability** research aims to draw that blueprint — not by attaching natural-language labels, but by locating where knowledge is stored, how computation flows between layers, and which internal circuit is responsible for a given behavior.

## Where the black box comes from

To see why models are hard to interpret, consider how they are built.

Modern language models are trained almost entirely by **predicting the next token**: given a passage, the model guesses the next word, and the gap between its guess and the truth is gradually shrunk. Throughout this process, no one tells the model "grammar should be represented this way" or "facts should be stored that way." Every capability and structure emerges spontaneously as the model minimizes prediction error.

This leads to two consequences:

- **Representations are distributed and high-dimensional.** A concept (such as "Paris") does not live in a labeled drawer; it is spread across a pattern in which thousands of neurons co-activate in a particular way.
- **Behavior has no explicit symbolic rules.** The model is not running an "if… then…" program; it is performing geometric transformations in a continuous vector space.

So interpretability is not "reading source code." It is reverse-engineering the machine's operating principles from the running system.

## Three lines of research

Interpretability advances along three complementary paths that differ in scale and method.

### Probing and representation analysis

The first family of work asks: **does the model form recognizable concepts internally?**

Researchers train a small "probe" classifier that takes a layer's activations as input and predicts whether the text carries some property (tense, sentiment, entity type). If the probe recovers the property with high accuracy, that property is encoded in that layer's representation.

These methods are cheap and broad, good for drawing a map of "what the model knows." Their limitation is clear too: a probe can only show that information *exists*, not how the model *uses* it.

### Attribution and feature visualization

The second family is closer to "why this answer."

Through **attribution**, we can decompose the final output back onto the contributions of input tokens: which words did the model "pay attention to"? Through **feature visualization**, we can observe which input patterns a neuron or direction is most sensitive to.

This lets us give a "post-hoc" explanation for a single prediction. But it still explains statistical correlation, not the model's internal causal mechanism.

### Mechanistic interpretability

The third path is the most ambitious, and closest to our long-term goal: **understanding the model's actual computational circuits.**

It reverse-engineers the model as a circuit — not the output, but what each layer, each attention head, and each residual connection actually computes, and how those sub-functions combine into whole behaviors. Figure 1 shows a simplified flow: an input sequence passes layer by layer through "attention" and "feed-forward" sub-layers, traveling along the residual stream; the path that is activated and drives the final result is the circuit we want to locate.

<figure>
  <img src="/images/fig-interp-1.svg" alt="Information flowing between Transformer layers, with one activated circuit highlighted as responsible for the output" />
  <figcaption>Figure 1 · Information flows between Transformer layers; the orange path is an activated circuit that dominates the final output.</figcaption>
</figure>

The appeal of mechanistic interpretability is that once we locate a circuit, we can not only explain a behavior but **predict and intervene** on it — for example, suppressing a direction to remove a model's bias.

## A concrete example: an internal "workspace"

Abstract methods matter less than a real case. In recent work we found evidence that models may contain a structure resembling the cognitive-science notion of a "global workspace."

Roughly, when answering questions that require multi-step reasoning, the model appears to **broadcast** the most relevant information into a shared "workspace" that functional modules can read and write. As Figure 2 shows: modules such as perception, language, planning, and memory sit quietly until, while "organizing reasoning in language," the language module activates and writes its state into the central workspace, which then coordinates the next step.

<figure>
  <img src="/images/fig-interp-2.svg" alt="Global workspace diagram: functional modules surround a central node, one of which is activated and broadcasts to the center" />
  <figcaption>Figure 2 · The global workspace hypothesis: during reasoning, the model broadcasts the currently relevant module's state to a shared center, which coordinates subsequent computation.</figcaption>
</figure>

The value of this observation is that it turns the vague intuition "the model is thinking" into a **testable structural hypothesis** — we can design experiments to check whether such a shared center really exists, when it fires, and what fills it.

## How far can we trust these explanations?

The easiest way to misuse interpretability is to treat it as "the model confessing its motives." We must be clear:

- **Explanations are approximations of the model, not its confession.** Any visualization, attribution, or probe is an external, approximate reconstruction that may be biased.
- **There is a risk of adversarial explanations.** An explanation looking reasonable does not mean it reflects the true causal mechanism; the model may hide one real path behind another that merely "looks right."
- **Faithfulness matters far more than readability.** An explanation that is dull for humans but precisely reflects the internal mechanism is worth far more than one that is pretty but distorted.

So we treat interpretability findings as **hypotheses to be verified**, confirmed by independent intervention experiments rather than a single visualization.

## Conclusion

Interpretability is not about wrapping models in stories humans can read. It is about preserving our ability to **understand, predict, and constrain** them as they grow more powerful. It is both the foundational engineering of safety research and a stance: when a system begins to affect the real world, we have a responsibility to understand how it works, rather than settling for "it looks fine on the test set."

The road is long. But each circuit located and each hypothesis verified lets a little light into the black box.

> This is the first post in the "Interpretability" series. In the next one we will take apart, concretely, how a single attention head performs the basic operation of "copying."
