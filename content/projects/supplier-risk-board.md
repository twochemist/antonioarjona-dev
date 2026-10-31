---
title: Supplier Risk Board
summary: Bringing supplier issues, risk priorities and next actions into one view. A working frontend portfolio app using simulated manufacturing data.
img: supplier-risk-board.svg
alt: Supplier Risk Board interface with risk indicators and supplier issues
prio: 500
status: 1
kind: Working portfolio app
links:
  - title: Source on GitHub
    url: https://github.com/twochemist/supplier-risk-board
responsibilities:
  - Frontend
  - TypeScript
  - Industrial workflows
---

## The problem

When several suppliers have open issues, quality problems, delivery delays and corrective actions can end up spread across spreadsheets, emails and meeting notes. It becomes harder to see what puts production at risk and who needs to act next.

My work in supplier qualification led me to explore a simpler review workflow. Supplier Risk Board brings issues into one view so a team can ask: what needs attention first, what action is due, and what is still open?

## Scope and contribution

The application brings together KPI cards, risk and status filters, due-date sorting and a local create-issue workflow. Sample issues include dimensional deviations, delivery delays, containment actions and automation downtime.

My contribution is the frontend application and its issue-review workflow, applying an industrial context to interface design and data presentation.

## Technical decisions

- **Next.js and TypeScript:** a component-based interface with typed issue data.
- **Tailwind CSS:** consistent layouts and styling for the dashboard.
- **Local React state:** a focused first version that lets the interaction be explored without a backend.
- **Simulated data:** portfolio examples without supplier or employer information.

## Evidence and current state

The source repository is linked alongside this case study. This is a portfolio application using mock manufacturing data. The create-issue workflow runs locally; the project does not claim a production deployment, persistent shared storage or integration with a live supplier system.

## What this version helps me explore

Keeping the data in local React state lets me focus on the review workflow before introducing shared storage. The question is whether the interface makes priorities and next actions clear; it does not yet test how a team would use it together.

## Next iteration

A future version could add persistent storage, authenticated users and an action history. Those are extensions to evaluate, rather than features of the current version.
