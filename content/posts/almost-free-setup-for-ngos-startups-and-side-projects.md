---
title: Do Your Own Robot
description: "DYOR Maker"
image: /posts/almost-free-setup-for-ngos-startups-and-side-projects/header.png
alt: Robot Maker
publishedAt: 2020-12-09
tags: 
    - Maker
    - Robotic
tldr: 
tweet: 
---

# DYOR Rover 

## Objective

This project focuses on the design, development and manufacturing of a rover that can autonomously navigate covering aspects such as control, sensorization, programming and planning of robotic systems. The DYOR robot follows a very basic approach and it is dependent on ultrasonic sensors and a digital compass with Arduino. The robot is a standalone system and the autonomous navigation is done by the onboard controller. The methodology implemented is commonly used in robotic and informatics.

## Summary 

HW Aduino Nano v3.0 together with its expansion board with the main advantage to offer rows with pins connected to +5V and 0V, which allow directly connect more sensors and actuators, otherwise it would be needed the breadboard to connect +5V and GND pins.

The Nano v3.0 has 14 Digital-Inputs/Outputs and 8 Analog-Inputs. Some pins can offer an extended feature for serial communication through USB. I support features to control motors with PWM signals, switches or optical sensors and I2C / SPI to communicate with external devices.

## Code
This is some used `Code()` 

Servo object control 
```
#include <Servo.h> 
Servo myservo1;
Servo myservo2;
```
Servo spin
```
void setup() {
  Serial.begin(9600);
  myservo1.attach(8);
  myservo2.attach(9);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(3, OUTPUT);
}
```
Distance stop, Control motors and wheels spin time
```
void loop() {
  digitalWrite(trigPin, HIGH);
  _delay_ms(500);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration/2) / 29.1;        
  if (distance < 40) { 
    digitalWrite(3, HIGH);
    myservo1.write(n); 
    myservo2.write(180-n);
   delay(1000);  
   myservo1.write(n);
   myservo2.write(90-n);
   delay(500);
}
```
Waiting Mode
```
  else { // waiting mode
    digitalWrite(3, LOW);
    myservo1.write(180-n);
    myservo2.write(n);
}
}
```
## Features

* Arduino Uno board
* Ultrasonic Distance Sensor - HC-SR04
* HC-05 Wireless Bluetooth RF 
* Jumper Wires Generic Male/Male 
* LED generic
* Wheel kit 
* Powerbank 
* Wood chassis
* Hot glue gun
* Android App Inventor2
* TinkerCAD
* Schematics Fritzing

## Backstory
DYOR robot is the Hello World to robotics arena. Working with this board helped me with in-depth understanding of Microcontroller’s architecture and ARM architecture. 

This is suitable to develop quick embedded applications with sophisticated libraries, APIs and Arduino development environment.

CAD Design | Digital Manufacturing | Electronic assembly | Robotic Programming

Tutored by Dr. Leopoldo Armesto from the Universitat Politècnica de Valencia (Spain)


<a href="https://unsplash.com/photos/zP7X_B86xOg" rel="some text"><img src="/resources/_gen/images/dyor1.PNG" alt="" /></a>


!['Arduino'](https://source.unsplash.com/fZB51omnY_Y)