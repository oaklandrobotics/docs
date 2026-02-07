# Environment Setup

## ROS 2

ROS 2 is an open-source communications middleware that allows various sensors, applications, drivers, etc., to communicate with each other in an organized manner. This is the main tool/library which we will use to create the software package for our robot.

Read the official documentation [here](https://docs.ros.org/en/jazzy/).

## Installation methods

ROS 2 is supported on multiple platforms, but we recommend either using a native installation of Ubuntu or a containerized Docker environment, as these approaches are the most stable and easiest to support as a team. You can reference the official documentation (linked above) for alternative installation options.

Our recommended setup paths:
- [Native](./native.md)
- [Docker](./docker.md)

## Which method should you choose?

The installation method you choose mostly depends on what tasks or goals you are trying to accomplish. That being said, both are equally viable options, however most of the leadership is familiar with the native installation.
This table discusses some of the benefits & drawbacks of each method:

Topic | Docker | Native
--- | --- | ---
**Setup Difficulty** | Often simpler. All dependencies, tools, etc., are bundled. | Done manually. Everything needs to be installed yourself.
**Operating System** | Can be run anywhere (Windows, MacOS, another Linux distro) | Ubuntu only
**Performance** | Near-native speed | Fastest possible
**Hardware Access** | Extra setup needed for USB devices, GPUs, networking, etc | Easiest device access
**GUI Tools** | Extra setup needed (Display forwarding) | Works out-of-the-box
**Rollback safety** | Can reset back to default state at any time | Can be *technically* be done, but more effort
**Debugging** | Extra layer to access tools, files, logs | Direct access to access tools, files, logs

See (or message) Kayla Dawkins (@danielle217) if you have any questions about the benefits of Docker or issues with the setup