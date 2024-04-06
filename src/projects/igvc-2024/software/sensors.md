---
order: 3
---
# Sensors

[[toc]]

## ZED 2i Depth Camera

Horizon utilizes a ZED2i stereo camera for vision purposes.
The ZED2i is a depth camera that was designed for outdoor use with built-in sensors for metrics such as acceleration, temperature, and air pressure.
These alongside the main depth camera functionality and the included [ZED SDK](https://www.stereolabs.com/developers/release) make the ZED2i an invaluable piece of hardware in our software subsystem.
Further [documentation](https://www.stereolabs.com/docs/get-started-with-zed) can be found on the stereolabs website.

## GPS

Horizon must get within one (1) meter of GPS waypoints found along the course.
To achieve this, a ZED-F9P module is utilized.
Using the SparkFun GPS-RTK-SMA Kit.
This GPS is capable of three-dimensional accuracy down to 10mm.
Documentation on all parts of this kit including schematics, data sheets, and a GitHub repository can be found on the [SparkFun Website](https://www.sparkfun.com/products/18292).
Along with that, there is an extensive Arduino library for reading and controlling the GPS can be found [on GitHub](https://github.com/sparkfun/SparkFun_u-blox_GNSS_v3).
<!-- GPS-RTK-SMA Breakout - ZED-F9P with GNSS L1/L2 Multi-Band Magnetic Mount Antenna - 5m (SMA) -->

## IMU

In addition to the BNO055 IMU provided by electrical, Horizon also makes use of the IMU built into the ZED which helps with position tracking for it, as well as localization overall.
Since the BNO055 IMU is powered by electrical, the acceleration/velocity data sent out by the IMU is sent out over CAN.
These two IMUs are fused to get a better reading of the robot's pose overall.  