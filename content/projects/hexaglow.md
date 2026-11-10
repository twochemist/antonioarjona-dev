---
title: HexaGlow — Modular WLED Wall Light
summary: A modular wall-light concept with 3D-printed hexagons, addressable LEDs and music-reactive scenes on an ESP32.
img: hexaglow/warm.jpg
alt: Concept render of graphite hexagonal wall lights glowing amber above a wooden desk
prio: 475
status: 2
kind: Concept design
links:
  - title: OpenSCAD concept model
    url: /projects/hexaglow/hexagon-module.scad
  - title: WLED documentation
    url: https://kno.wled.ge/
responsibilities:
  - Lighting design
  - 3D modelling
  - Embedded configuration
---

## Summary

HexaGlow explores how a wall light made from seven 3D-printed hexagons could work as warm ambient lighting or react to music. An ESP32 running WLED controls the addressable LEDs, while an opal diffuser softens the light from each module.

**Current state: concept design.** The OpenSCAD file contains the proposed module geometry. The gallery contains AI-generated concept renders. Hardware testing and photographs are planned for the bench prototype.

## Backstory

Working on automotive lighting made me curious about what happens between an LED and the surface you actually see. With HexaGlow, I wanted to explore that on a smaller scale. How far should the diffuser sit from the LEDs before the individual points of light blend together?

## Objectives

1. Compare 12 mm and 16 mm between the proposed LED plane and the diffuser. Photograph both with the same exposure and compare visible hotspots and dark corners.
2. Check whether the diffuser can be lifted out and the strip reached without disturbing the adjacent modules.
3. Run a warm static scene and a music-reactive scene on one module, then check power and segment mapping on three connected modules.

## Features

- A 145 mm flat-to-flat graphite hexagon with a recessed opal diffuser and a rear cable opening.
- Addressable LEDs and Wi-Fi controls through the WLED web interface.
- A digital I²S microphone for music-reactive effects.
- A parametric OpenSCAD model with adjustable depth and diffuser clearance. Mounting and diffuser retention still need to be designed and tested.

## Pinout & Wiring

Proposed signals for a classic ESP32 with an INMP441 microphone and a 5 V addressable RGB strip. Confirm the exact board pinout before wiring.

- **LED data** — GPIO 18 → 5 V logic-level shifter → first strip DIN.
- **Microphone clock and frame sync** — GPIO 26 → SCK/BCLK, GPIO 25 → WS.
- **Microphone data** — GPIO 32 ← SD. Connect L/R to GND to select the left channel.
- **Power and ground** — Supply the microphone from 3.3 V and the strip from a regulated 5 V supply sized and fused for the intended load. Connect controller, shifter, microphone and strip grounds. Power the controller through its supported input.

![Proposed signal flow from the I²S microphone through the ESP32 to the addressable LED strip](/projects/hexaglow/wiring.svg)

In WLED, set the LED output to GPIO 18 and enter the measured pixel count. Enable Generic I²S audio, enter the three microphone GPIOs and restart the controller. The current limit will be set after confirming the strip and supply. [WLED wiring guide](https://kno.wled.ge/basics/getting-started/) · [Audio Reactive WLED](https://kno.wled.ge/advanced/audio-reactive/)

## WLED Configuration & Code

The warm scene sends a solid amber colour to segment 0 on the local WLED controller. Replace `WLED_IP` with the controller address.

```bash
curl -X POST "http://WLED_IP/json/state" \
  -H "Content-Type: application/json" \
  -d '{
    "on": true,
    "bri": 64,
    "seg": [{
      "id": 0,
      "fx": 0,
      "col": [[255, 168, 80]]
    }]
  }'
```

For the music scene, choose an audio-reactive effect and a blue-violet palette in WLED. Save it as preset 2 to recall it with this JSON request body.

```json
{"on": true, "ps": 2}
```

These examples describe the planned bench setup. The final preset export will record the tested effect, microphone gain and LED segment boundaries. [WLED JSON API](https://kno.wled.ge/interfaces/json-api/)

## Gallery

The amber image at the top shows the intended desk scene.

<figure>
  <img src="/projects/hexaglow/music.jpg" alt="Hexagonal wall light modules in a blue and violet lighting scene" loading="lazy" width="1440">
  <figcaption>Concept render · blue and violet music scene.</figcaption>
</figure>

<figure class="mt-8">
  <img src="/projects/hexaglow/module.jpg" alt="Exploded view of a hexagonal wall light showing the diffuser, LED strip and graphite housing" loading="lazy" width="1440">
  <figcaption>Concept illustration · one module separated into diffuser, LED strip and housing.</figcaption>
</figure>

## Inspiration

The starting point was the [hexagonal WLED wall light on Instructables](https://www.instructables.com/Hexagon-WLED-Wall-Light-Art-3D-Printed-ESP32-Sound/). HexaGlow uses its own module geometry, layout and concept imagery.
