---
title: HexaGlow Wall Light
summary: A modular wall-light concept with 3D-printed hexagons, addressable LEDs and music-reactive scenes on an ESP32.
img: hexaglow/music.jpg
alt: Concept render of graphite hexagonal wall lights glowing blue and violet above a wooden desk
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

## Overview

HexaGlow is a personal project exploring modular lighting using 3D-printed hexagons, addressable LEDs, and an ESP32.

The idea is to build a wall light that can provide soft, warm ambient lighting or respond to music. Each hexagon has an opal diffuser to create an even glow rather than showing individual LED points.

The system will run on WLED, allowing me to control colors, brightness, and effects over Wi-Fi.

**Project status:** Still in the design phase. I’ve created the initial geometry in OpenSCAD and printed the first module. I’m starting to test its lighting performance.

## Why I Started This Project

I was interested in how light behaves inside an opal diffuser.

There’s quite a bit happening between an LED and the illuminated surface we eventually see. The distance to the diffuser, the materials, and even the internal geometry can make a big difference.

With HexaGlow, I wanted to answer one question. **How much space do I need between the LEDs and the diffuser to get a smooth, uniform light?**

## What I Want to Test

I’ll start with a single hexagon and focus on the following.

- **Light uniformity:** Test LED-to-diffuser distances of 12 mm and 16 mm. I’ll photograph both setups using identical camera settings to compare hotspots, shadows, and overall uniformity.
- **Assembly and maintenance:** Make sure I can remove the diffuser and access the LED strip without taking the whole installation apart.
- **Lighting effects:** Start with a simple warm white scene, then experiment with music-reactive effects.
- **System integration:** Connect three modules to check power distribution, wiring, and WLED segment configuration before expanding to seven.

## The Design

Each module is a 145 mm hexagon measured flat to flat, with a 3D-printed housing.

The design includes space for the LED strip and an opening at the back for cable routing.

I’m using OpenSCAD to keep the geometry parametric. That makes it easy to adjust the module depth, diffuser position, and internal clearances as I learn from the first prints.

The mounting system and diffuser retention still need some work. I’d like to find a solution that’s simple to assemble and makes maintenance easy.

## Electronics & Control

- **ESP32:** Handles LED control and Wi-Fi connectivity.
- **WLED:** Provides the web interface, lighting effects, and segment control.
- **Addressable RGB LEDs:** Allow individual control of the LEDs inside each module.
- **INMP441 microphone:** Adds the option of music-reactive lighting.
- **5 V power supply:** Powers the LED strips, with capacity and protection selected according to the final load.

I plan to keep the wiring accessible so I can troubleshoot or replace components without dismantling the entire light.

## Proposed Wiring

The proposed connections for the first prototype use a standard ESP32 development board.

| Function | ESP32 pin | Connection |
| --- | --- | --- |
| LED data | GPIO 18 | Through a 5 V logic-level shifter to the strip DIN |
| Microphone bit clock | GPIO 26 | INMP441 SCK/BCLK |
| Microphone word select | GPIO 25 | INMP441 WS |
| Microphone data | GPIO 32 | INMP441 SD |
| Microphone power | 3.3 V | INMP441 VDD |
| Ground and channel selection | GND | INMP441 GND and L/R to select the left channel |

The LED strip uses a separate regulated 5 V supply, with all grounds connected together. The ESP32 will be powered through its supported input.

I confirmed the pin assignments and power requirements against the actual components before wiring everything.

## Next Steps

The first milestone is a working hexagon on my electronics bench.

I’ve printed the housing. Next I’ll install the LEDs and compare the two diffuser distances. Once I have measurements and photographs, I’ll update this page with the results, including anything that didn’t work as expected.

If the first module performs well, I’ll move on to a three-module setup before building the complete seven-hexagon wall light.

For now, the images shown here are concept renders, not photographs of a finished prototype.

## Gallery

<figure>
  <img src="/projects/hexaglow/warm.jpg" alt="Hexagonal wall light modules glowing amber above a wooden desk" loading="lazy" width="1440">
  <figcaption>Concept render · warm ambient scene.</figcaption>
</figure>

<figure class="mt-8">
  <img src="/projects/hexaglow/module.jpg" alt="Exploded view of a hexagonal wall light showing the diffuser, LED strip and graphite housing" loading="lazy" width="1440">
  <figcaption>Concept illustration · one module separated into diffuser, LED strip and housing.</figcaption>
</figure>
