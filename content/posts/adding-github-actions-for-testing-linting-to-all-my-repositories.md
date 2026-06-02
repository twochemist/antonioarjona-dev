---
title: Software Development in Automotive with ASPICE
description: Software Development. 
image: /posts/adding-github-actions-for-testing-linting-to-all-my-repositories/checks_passed.jpg
alt: ASPICE
publishedAt: 2020-11-13
tags: 
    - ASPICE
    - Software Development
    - Testing
tldr: ''
tweet: 
---

# Automotive SPICE

If you don't work in the Automotive Industry, ASPICE won't tell you most probably anything.
Even for people within the industry not working in software development would be pretty unknown.

Well, this standard is established as a reference model to standardize the vehicle functionality and its reliability by introducing high complex software system to ensure the development and manufacturing in time and quality. If you are an electronic engineer, it might seem like the standard used for circuit analysis SPICE. 

SPICE is derived initially from the ISO15504/33002 and reworked by the VDA QMC working group 13. It is no more than a bunch of guidelines on how to keep a software project manageable within a life cycle.

There are 16 processes clustered, here are mentioned the directly related to:

* Software 
	* [x]Requirements Analysis
	* [x]Architectural Design
	* [x]Detailed Design and Unit Construction
	* [x]Unit Verification
	* [x]Integration and Integration Test
	* [x]Qualification Test
	
ASPICE has a high level of abstraction and doesn’t describe process to any concrete ALM lifecycle model like V- or Waterfall model.

Independently whether an Agile (Scrum/Kanban) or Non-Agile development is used, it has to ensure that the product delivered fulfill the customer requirements, architecture, design, source code and black/white box test cases free of bugs.

There are several certification levels, the level 1 will rate that your developer toolset work properly in your current project but not assure the scalability and support for the next one. If bugs are reported, for example, when a new sensor comes out the toolset should integrate the new functions to patch it. This is when the level 2 is demonstrated. 

At the end it reflexes how a company operates efficiently rather than how well the software performs.