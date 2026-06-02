---
title: Automotive Electromagnetic Compatibility
description: Overview of EMC Testing & Setup.
image: /posts/my-perfect-homeoffice-conference-call-and-podcasting-setup/setup_overview.png
alt: EMC Testing.
publishedAt: 2021-01-10
tags: 
    - Electronic 
    - Testing
    - EMC
tldr: EMC Testing.
tweet: https://twitter.com/chemistdev
---

# EMC Testing

In the Automotive, as in many other Industries, the developed systems and devices must not be interfered by surrounding electromagnetic fields. After an EMC test is conducted, a test report is written. Understand the content isn't an easy task. 
There are several factors that we need to understand firstly. The combination of frequencies involved, dimensions of the components, the wiring harnesses and the assembly conditions can influence the test results. 

To understand at a glance what EMC is, let's explain the three coupling mechanisms:

* Radiated path - involving Radiated Emissions (RE) and Radiated Immunity (RI) - µV or dB 

* Conducted path - involving Conducted Emissions (CE) and Conducted Immunity (CI) - µV or dB 

* ESD path - involving a combination of both Radiated and Conducted paths- kV


## Practical examples 

(RE) typical example of emission is a DC motor when its wiring harness are transmitting like an antenna.

(CE) typical example of immunity is when a system is affecting the reception on AM radio.

(ESD) typical example of electrostatic discharge is when a component is suffering permanent high voltages.
    
  

## Analysis of Test Results 

The EMC is measured Anechoic Chambers, but the antennas are the most important items because are the methods to receive and emits signals.
Another key element is the coaxial cable to transfer the energy. Depending on which conformace is intended to be demostrated, before of all a test plan must be created. An EMC engineer should review the design, the parts, the wiring and the packaging space whithin the system under study.

The test plan will include:   

* Schematic and layout diagrams
* Wiring harness connectors
* Monitoring equipment 
* Test frequencies and level of immunity
* Operating modes with severe conditions
* Production intent software for operating modes


## How real are EMC issues? 

EMC issues it would experience problems with the electronic control if the system is incompatible with the electromagnetic field environment. 

## Software consideration in EMC 

The Firmware/Software is not directly affected for EMC problems, but since they are controlling the switch in µControllers the clock frequencies in combination with the software loops can cause abnormallity in the system. For example, the use of PWM signals to provide different functionalities can generate noise. This frequencies (noise) can be controlled by the software adjusting the signal.  

## Electrostatic Discharge - ESD 

Traditioinally the ESD check is introduced later than the EMC study, because we need to understand firstly the conducted and radiated characteristics. ESD can have emissions affecting other components that don't have enough immunity. The capacitance between surfaces can store a charge, creating a voltage difference with potential discharges. The semiconductor components operate on lower voltages and a damage can happend inf a couple of hundreds of volts come through. The ESD test is normally performed using an ESD gun, which applies high voltages to several wires and connections on the system. 

## The Value of EMC 

Performing EMC tests is a very time consuming process. Analysis on early stages of the project, while layout changes can be implemented on PCBA, is crucial to determina effects of external fields on an electronic system. Passenger vehicles nowadays have around 4 km of wiring and cabling. Make sense to apply particular lessons learned from previous generations.


!['Arduino'](https://source.unsplash.com/dacmWVUmux4)