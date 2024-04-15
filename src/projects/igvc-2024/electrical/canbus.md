# CAN Communication

[[toc]]

## Overview

Within the electrical system of Horizon lies a CAN bus, used for communicating between devices. This style of communication protocal allows for the addition or removal of devices from the network while removing the need for any changes in the code of exisiting devices. 

For a more detailed explaination on what a CAN bus is, refer to the [Wikipedia](https://en.wikipedia.org/wiki/CAN_bus?useskin=vector) page. For more information on the ODrive's use of CAN bus, refer to the [ODrive website](https://docs.odriverobotics.com/v/latest/guides/can-guide.html#can-guide)

## Node Structure

Each node on the CAN Bus requires 3 main things in order to function 
- CPU or microprocessor 
    - The host processor decides what the recieved messages mean and what messages to transmit
    - Sensors, actuators, and control devices can be connected to the host processor
- CAN Controller
    - Recieving: The CAN controller stores the recieved serial bits from the bus until the entire message is available, and then allows it to be fetched by the processor
    - Sending: Messages are recieved from the processor and then sent serially on the bus when it is free
- CAN Transciever
    - Recieving: Converts the data stream from CAN bus levels to levels that the CAN controller can use
    - Sending: Converts the data stream from the CAN controller to CAN bus levels

## Node Network



<img src=".\assets\ExampleCANBus.png" width="400" height="400" alt="Node Structure" style="horizontal-align:middle">

## Message Structure

The ODrive uses a CANSimple protocol built on CAN 2.0, where the command id is stored inside the region of the node id via bitshifting.
The Data field works similarly to a normal CAN protocol.
The most relevant commands the ODrive supports are as follows, a full listing can be found on the [ODrive website](https://docs.odriverobotics.com/v/latest/manual/can-protocol.html#messages):

| Name | Command ID | Direction | Data |
| ----------- | ----------- | ----------- | ----------- |
| Estop | 0x02 | Host -> ODrive | N/A |
| Set_Axis_State | 0x07 | Host -> ODrive | `uint32 : Requested State` |
| Set_Input_Pos | 0x0C | Host -> ODrive | `float32 : Position(rev)` - `short : Velocity(0.001 rev/s)` - `short : Torque(0.001 Nm)`|
| Set_Input_Vel | 0x0D | Host -> ODrive | `float32 : Velocity(rev/s)` - `float32 : Torque(Nm)` |