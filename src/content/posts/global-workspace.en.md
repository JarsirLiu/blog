---
title: "A global workspace in language models"
category: "Interpretability"
team: "Interpretability"
summary: "New interpretability research reveals an emergent mental workspace in our models that holds internal thoughts that don't appear in the model's output."
publishDate: 2026-07-06
author: "Sasha Park"
tags: ["interpretability", "circuits", "mechanistic"]
featured: false
coverGradient: "linear-gradient(135deg,#2c3e50 0%,#5d6f7e 60%,#a4b3bd 100%)"
coverLabel: "Global Workspace"
lang: en
---

## Summary

We report the discovery of a recurring activation pattern that resembles a *global workspace* — a cognitive architecture proposed by Baars and others — in a 70B-parameter model.

## Evidence

Using sparse autoencoders and targeted activation patching, we identified a small set of attention heads that broadcast intermediate representations to downstream layers. Suppressing these heads degrades multi-step reasoning by 18–24% across three benchmarks, even when the prompt-level inputs are unchanged.

## Why it matters

This is the first clear mechanistic evidence that modern LLMs maintain an *internal* scratch space distinct from their verbal output. It opens a route to monitor and audit the latent reasoning of a deployed model without observing its chain-of-thought.

## Limitations

Our interventions are coarse-grained. We cannot yet pinpoint the semantic role of each specific content item inside this "workspace" — that is the focus of next steps.