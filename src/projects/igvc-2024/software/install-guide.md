---
order: 2
---
# Installation Guide

[[toc]]

## Overview

This guide goes over the steps to install the some of the tools, softwares, and SDKs that we use.

## Ubuntu

There are a few different methods to set up a Ubuntu system that works with ROS 2.

### Native Install

1. Download the Ubuntu 22.04 ISO [here.](https://ubuntu.com/download/desktop)
2. Make a bootable USB with the ISO.
    - [Rufus](https://rufus.ie/en/)
    - [Balena Etcher](https://etcher.balena.io/)
3. [Install Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)
4. [Install ROS 2](#ros-2)

### VM 

1. Download the Ubuntu 22.04 ISO [here.](https://ubuntu.com/download/desktop)
2. Install a VM hypervisor:
    - [VirtualBox](https://www.virtualbox.org/)
    - [VMware Workstation Player](https://www.vmware.com/products/workstation-player.html)
3. [Install Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)
4. [Install ROS 2](#ros-2)

### WSL2

1. Open PowerShell or Windows Command Prompt in administrator mode by right-clicking and selecting "Run as administrator"
2. Then enter the instllation command: `wsl --install --d Ubuntu-22.04`
3. Then restart your machine.
4. [Install ROS 2](#ros-2)

## ROS 2

1. [Install ROS 2 Humble](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html)
    - Be sure to do the full desktop install (`sudo apt install ros-humble-desktop`).
    - To verify that your installation works correctly, try the examples.
2.  Run these commands:
``` sh
cd ~
echo "source /opt/ros/humble/setup.bash" >> .bashrc
```
This will make it so the `source` command will be run for you automatically every time you open a new terminal.

## Nav2

Install Nav2 with these commands:

``` sh
sudo apt install ros-humble-navigation2 \
ros-humble-nav2-bringup \
ros-humble-turtlebot3-gazebo \
```

Verify the installation was successful by running these commands:

``` sh
export TURTLEBOT3_MODEL=waffle
export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:/opt/ros/humbke/share/turtlebot3_gazebo/models

ros2 launch nav2_bringup tb3_simulation_launch.py headless:=False
```

For more information, see the [Nav2 documentation](https://navigation.ros.org/getting_started/index.html).

## ZED SDK

The ZED SDK can be installed on both Ubuntu and Windows.
If you are installing on Windows, make sure you have CUDA installed beforehand.

1. Install the ZED SDK
    - [Windows](https://www.stereolabs.com/docs/installation/windows)
    - [Ubuntu](https://www.stereolabs.com/docs/installation/linux)
    - Accept all the default options for the installation
2. Verify that the installation was successful by running the ZED Explorer and ZED Depth Viewer.
3. If you installed on Ubuntu, you can also play with the [ROS 2 tools](https://www.stereolabs.com/docs/ros2).