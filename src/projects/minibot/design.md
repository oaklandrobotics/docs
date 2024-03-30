# Design


## Overview
The design of Minibot was based around a previous robot, Ranibot. As it was meant to be a introductory project to new members.

### Electrical Components
The minibot consists of four MD10C R3 10 Amp DC Motor Controllers, each attached to an Geartisan 150RPM Gear Motor (ZGA37RG31.6i). A central Arduino/ESP32 interfaces with the motor controllers. The motor controllers connect to the Arudino through the PWM Pins for speed control, and Digital Pins for direction control. Each motor controller requires that it be connected to logical ground.

[Datasheet For MD10CR3](https://images-na.ssl-images-amazon.com/images/I/A1TemgvjKjL.pdf)
[Datasheet for Geartisan 150RPM Motor](https://www.mpja.com/download/32203-32206MDMech.pdf)

### Software Components
Operating the minibot requires uploading code to the central device that connects to the motor controllers. The steps to upload code changes depending on which kind of device is connected:
#### Arduino
Arduino code is typically distributed through a Sketch file to be used in the Arduino IDE. Example code for such a program can be found [here](https://github.com/oaklandrobotics/minibot23/tree/main).
#### ESP32
(WIP)
