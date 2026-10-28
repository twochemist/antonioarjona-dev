---
title: CAN Sensor Node
summary: An electronics concept for a compact sensor acquisition module, from analogue inputs and CAN messages to a browser-based diagnostic view.
img: can-sensor-node.svg
alt: Concept architecture showing sensor inputs, a proposed microcontroller and CAN link to a diagnostic interface
prio: 490
status: 2
kind: Concept design
links: []
responsibilities:
  - Electronics concept
  - Embedded architecture
  - Test planning
---

## Design brief

How could a small sensor module make commissioning and fault diagnosis easier on a bench-scale machine? This original design study proposes a reusable acquisition node with clear channel status and a documented message format.

**Current state: concept design.** The deliverables are this technical brief, the architecture diagram and the validation plan. A PCB, firmware and hardware measurements have not yet been produced.

## Proposed scope

- Four low-voltage analogue sensor channels on a protected bench supply.
- A microcontroller with a CAN interface and a separate transceiver.
- A configurable node identifier, a heartbeat and per-channel diagnostic status.
- A diagnostic screen showing raw readings, engineering units and stale data.

The concept is intended for a laboratory demonstrator. Electrical protection, component selection and PCB layout would need to be designed and reviewed before a hardware build.

## Architecture and decisions

A sensor input would pass through conditioning and protection before conversion. Firmware would publish readings and health information over CAN. A separate gateway would translate the messages for a browser interface, keeping presentation concerns outside the acquisition node.

A fixed, versioned message definition would specify units, scaling, invalid values and update intervals. Separating sensor validity from the numeric value would help distinguish a real zero from a disconnected sensor.

## Example data contract

An illustrative gateway record:

```json
{
  "nodeId": 3,
  "channel": "temperature_1",
  "value": 24.5,
  "unit": "degC",
  "quality": "valid",
  "sequence": 128
}
```

This is a proposed software contract, not a recorded hardware measurement.

## Validation plan

1. Review the input range, protection strategy and proposed components.
2. Exercise valid, out-of-range and disconnected-sensor conditions with a simulator.
3. Check message decoding, sequence tracking and heartbeat loss.
4. Build a bench prototype and compare readings with a reference instrument.
5. Document results and limitations before considering a custom PCB.

## Inspiration

[Tal Zaitsev’s SENSE2CAN case study](https://www.talzaitsev.com/portfolio/rf-19-sense2can-sensor-modules) is a reference for documenting requirements, trade-offs and hardware debugging. This concept is an independent exercise; it is not a reproduction of that project or work performed for Tesla.
