---
title: Supplier Risk Board
summary: A frontend portfolio application for reviewing supplier issues, prioritising risk and tracking actions using simulated manufacturing data.
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

Supplier issues involve more than a status. Quality, manufacturing and supply teams need to understand the risk, the next action and the due date. This portfolio application explores how to make that information easier to review in one place.

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

## Next iteration

A future version could add persistent storage, authenticated users and an action history. Those are extensions to evaluate, rather than features of the current version.
