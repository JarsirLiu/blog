---
title: "How our models are accelerating protein design and analytical chemistry"
category: "Science"
team: "Interpretability"
summary: "In this post, we share two results showing how models can help life scientists increase the pace of their research, from protein engineering to analytical chemistry."
publishDate: 2026-08-18
author: "Lin Wei, Mark Chen"
tags: ["biology", "chemistry", "evaluation"]
featured: false
coverGradient: "linear-gradient(135deg,#c75f2c 0%,#9c4a1c 60%,#5e2a0d 100%)"
coverLabel: "Protein Design"
lang: en
---

## Overview

We collaborated with three independent labs to test whether a frontier reasoning model could shorten the iteration loop in protein engineering and analytical chemistry workflows.

## Method

For each task, we paired a domain expert with the model acting as a research assistant. The expert retained final decisions on every experiment. We measured time-to-result against a matched human-only baseline.

## Results

Across 142 protein design tasks, expert-plus-model teams reached a viable candidate **3.4× faster** than the baseline (95% CI: 2.9–4.0×), with no statistically significant drop in success rate.

## What we learned

The largest gains came from the model's ability to triage dead-ends quickly. When we asked experts which tasks they would have skipped, we found the model's pre-filter would have removed **62%** of unproductive experiments.

## Next steps

We are extending the protocol to small-molecule discovery and publishing the full benchmark suite under an open license so other labs can replicate the comparison.