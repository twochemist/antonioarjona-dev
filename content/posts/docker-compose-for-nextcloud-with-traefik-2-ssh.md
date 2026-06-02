---
title: Embedded Software Testing
description: Embedded Software Testing.
image: /posts/docker-compose-for-nextcloud-with-traefik-2-ssh/header.jpg
alt: Embedded Software Testing
publishedAt: 2020-10-23
tags: 
    - Embedded Systems
    - Software Development
    - Software Testing
tldr: ''
tweet: 
---

# Software Testing

The end of product development is where testing typically occurs, but the first cut if the project run late. Opposite to any kind of engineering discipline where testing is considered fundamental, the code inspection is the last steps in software development. 

After checking the requirements, create a high level design, write the code and perform a couple of unit testing and integrations, then is time to perform final tests. This is a critical step until the end of the project and it would be better to do it progressive, rather than wait until the end. 

An embedded software is custom with a high percentage of new code, this is not a standard platform where it can be used external libraries. Unlike in software, the firmware has to be debugged and tested in several stages, as this need to work with hardware and memory map of the device. 


## Functional Tests

* Stress tests
* Booundary tests
* Exception tests
* Error guessing
* Random tests
* Performance tests

Testing can be integrated in Scrum Sprints to secure the verification, integration and qualification.
Bugs are inevitable in embedded systems and it should be the challenge of software engineers to mitigate them during the project, whatever it cost or how complex the implementation will be. It will save you headaches and money down the road.

```javascript
// if statement without an else part
if (condition is true)
{
< then do these statements >;
}
< code following elseless if >
if (A | | B)
{
< then do these statements >;
}
```

## Assembly languages
ARM and x86 are the most popular one.

## Recap

If you want to control the quality of your software, you have to measure the quality of your testing. 

!['Arduino'](https://source.unsplash.com/LKsHwgzyk7c)
