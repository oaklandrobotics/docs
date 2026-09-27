---
order: 2
---
# Installation Guide

[[toc]]

## Overview

This guide goes over the steps to install some of the tools, software, and SDKs that we use.

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
export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:/opt/ros/humble/share/turtlebot3_gazebo/models

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
3. If you installed it on Ubuntu, you can also play with the [ROS 2 tools](https://www.stereolabs.com/docs/ros2).