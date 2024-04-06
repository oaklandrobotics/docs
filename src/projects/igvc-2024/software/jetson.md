---
order: 4
---
# Nvidia Jetson

[[toc]]

## Overview

The Nvidia Jetson is a small computer developed for use with smart robotics.
Specifically, the module used on Horizon is the Jetson Orin Nano 8GB.
The module can simultaneously run compute-intensive tasks, like image processing, neural networks, or planning aglorithms without high electrical demand.
An introduction, including documentation, a setup guide, and hardware specs can be found at [Jetson Orin Nano Developer Kit User Guide](https://developer.nvidia.com/embedded/learn/jetson-orin-nano-devkit-user-guide/index.html#introduction).

## Specs

- **CPU**: 6-core Arm® Cortex®-A78AE @ 1.5 GHz
- **GPU**: 1024-core NVIDIA Ampere architecture GPU @ 625 MHz
- **RAM**: 8GB LPDDR5
- **Storage**: MicroSD Card or NVMe via M.2
    - We currently have a 128 GB MicroSD
- **I/O**
    - 4x USB 3.2 Gen2
    - 1x USB Type-C (for flashing firmware)
    - 1x Gigabit Ethernet
    - 1x DisplayPort
- More details
    - https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/
    - https://developer.nvidia.com/embedded/learn/jetson-orin-nano-devkit-user-guide/hardware_spec.html

## Jetpacks

The software running on the Jetson is Nvidia's proprietary "[JetPacks](https://developer.nvidia.com/embedded/jetpack)," which are special versions of Ubuntu that are paired with a special bootloader and Linux kernel.

### Flashing a JetPack

#### Requirements

- A laptop or VM running the version of Ubuntu you wish to flash to the Jetson
    - E.g. If you wish to to flash Ubuntu 20.04 to the Jetson, the laptop or VM must have Ubuntu 20.04 installed as well
- A high-speed USB Type-C to Type-A cable
    - For some reason, I've only been able to get the cable that comes with the ZED to work with it. Other cables may work, haven't really tried any :shrug:
- A female-to-female jumper cable
    - Used for shorting the pins that put the Jetson into recovery mode
- The Jetson, with the MicroSD Card plugged into it
- An Nvidia Developer account
    - Create an account [here](https://developer.nvidia.com/) by pressing "Join" at the top-right of the page.

#### Installation

1. On the "host" laptop, [download and install the Nvidia SDK Manager](https://docs.nvidia.com/sdk-manager/download-run-sdkm/index.html).
    - You can do either the direct download or network repository method
2. Connect the Jetson to the computer with the Type-C-to-Type-A cable.
3. With the jumper cable, short the pins labeled "FC_REC" and "GND."
4. Power up the Jetson.
5. [Install the Jetpack](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html).
    - Generally, you can accept the defaults. <!-- TODO Verify this -->
    - For the username and password, use `ora` and `ora-2023`, respectively
    - It is not necessary to install the "Additional SDKs" (DeepStream, Rivermax, etc.)
6. Once installation has compleaaaaaaaaaaaaaated, you can proceed to use the Jetson as normal.

## Installing Software

Most software should be able to be installed on the Jetson, similar to any other Ubuntu system.
One thing to make note of is the Jetson's different CPU architecture.
The Jetson is `arm64`-based rather than the usual `x86` you might find on most computers.
If you are trying to install something on the Jetson, and the software is acting weird or not installing at all, check that you are are installing / have installed the correct build of that piece of software.
For our purposes, [ROS 2 supports `arm64`](https://www.ros.org/reps/rep-2000.html#humble-hawksbill-may-2022-may-2027), and the ZED SDK has [special builds specifically for Jetson](https://www.stereolabs.com/developers/release#nvidia-jetson-504616ef8d38).

## CAN

See [this.](https://docs.nvidia.com/jetson/archives/r36.2/DeveloperGuide/HR/ControllerAreaNetworkCan.html)