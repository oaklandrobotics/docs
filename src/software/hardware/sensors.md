---
order: 3
---
# Sensors

[[toc]]

## ZED 2i Depth Camera

We utilize a ZED2i stereo camera for vision purposes.
The ZED2i is a depth camera that was designed for outdoor use with built-in sensors for metrics such as acceleration, temperature, and air pressure.
These alongside the main depth camera functionality and the included [ZED SDK](https://www.stereolabs.com/developers/release) make the ZED2i an invaluable piece of hardware in our software subsystem.
Further [documentation](https://www.stereolabs.com/docs/get-started-with-zed) can be found on the stereolabs website.

## GPS

The robot must get within one (1) meter of GPS waypoints found along the course.
To achieve this, a ZED-F9P module is utilized.
Using the SparkFun GPS-RTK-SMA Kit.
This GPS is capable of three-dimensional accuracy down to 10mm.
Documentation on all parts of this kit including schematics, data sheets, and a GitHub repository can be found on the [SparkFun Website](https://www.sparkfun.com/products/18292).
Along with that, there is an extensive Arduino library for reading and controlling the GPS can be found [on GitHub](https://github.com/sparkfun/SparkFun_u-blox_GNSS_v3).

## IMU

In addition to the IMU provided by electrical, the robot also makes use of the IMU built into the ZED which helps with position tracking for it, as well as localization overall.
These two IMUs are fused to get a better reading of the robot's pose overall.