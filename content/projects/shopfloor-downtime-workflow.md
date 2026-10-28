---
title: Shopfloor Downtime Workflow
summary: An automation concept connecting machine events with operator explanations and a shift-review interface, using a fictional production cell.
img: shopfloor-downtime.svg
alt: Concept workflow from machine events through an edge adapter to operator input and a shift review
prio: 480
status: 2
kind: Concept design
links: []
responsibilities:
  - Workflow design
  - OT/IT architecture
  - Operator interface
---

## The operational question

A machine signal can tell a team when a process stopped. It rarely explains the whole reason. This design study asks how machine events and operator context could form a useful, reviewable downtime record.

**Current state: concept design for a fictional production cell.** The case contains a proposed workflow, data model and validation plan. There is no live PLC connection, deployed automation system or measured production improvement.

## Proposed workflow

1. An edge adapter reads machine state through a read-only integration.
2. The event service records a transition from running to stopped.
3. An operator reviews the event and selects or adds a reason.
4. A shift-review screen groups events by duration and reason, highlighting unclassified stops.

The operator explanation would remain separate from the raw machine event. An edit history would make later corrections traceable.

## System boundaries

The proposed adapter could use OPC UA or MQTT, depending on the available machine interface. It would publish normalised events to an application service, with durable event storage and a browser interface for review.

This is a monitoring and reporting concept. Machine control and safety functions remain outside its scope. A stale connection would be shown as unknown rather than interpreted as a stopped machine.

## Proposed data model

| Record | Information |
| --- | --- |
| Machine event | Event ID, asset ID, state, source timestamp, receive timestamp |
| Downtime interval | Start event, end event, duration, review status |
| Operator annotation | Reason code, comment, author, change timestamp |

## Design decisions to test

- Separate planned stops from unplanned stops before comparing shift performance.
- Preserve source timestamps and tolerate delayed delivery.
- Deduplicate replayed events with a stable event identifier.
- Keep short interruptions visible, with an explicit grouping rule for shift summaries.
- Display missing data instead of silently filling gaps.

## Validation plan

Use a deterministic event replay for a fictional assembly cell. Test normal cycles, short stops, duplicate messages, disconnected periods, delayed events and a shift boundary. Compare the resulting intervals with a hand-calculated reference before adding a real machine connector.

## Inspiration and next build

[Heisenware](https://heisenware.com/) provides a useful reference for connecting industrial data to browser-based shopfloor applications. This study applies that workflow idea independently; it does not claim a partnership or implementation using the Heisenware platform.

The next practical step would be an event simulator and a small operator-review prototype. These are proposed next steps, not existing features.
