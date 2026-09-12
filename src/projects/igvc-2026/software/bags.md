# ROS 2 Bags

Bags are a feature of ROS 2 that allows you to record data being published across the topics, and play that data back at a later time in the same way it was published. It is useful for debugging, testing nodes with real data, and sharing work.

The `ros2 bag` command-line tool allows you to record bags, play them back, and convert bags to include different topics, different formats, etc., all with different configurable options. See the [ROS 2 docs](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.html) for more info.

## Example Bags

Some example bags are stored in our Google Drive and can be accessed [here*](https://drive.google.com/drive/folders/17S5-LnJm3yi2zjNNsaiKRRkUrNrLBQzX?usp=drive_link). There are four bags available: `first_run`, `first_run_trimmed`, `second_run`, and `second_run_trimmed`. The `trimmed` versions include a subset of all topics, in order to reduce file size. The list of included topics is:

::: details Topics included in `trimmed`
```md
# TF
/tf
/tf_static
/robot_description

# Odometry
/fusion/odom
/fusion/pose
/diff_cont/odom
/joint_states

# IMU
/esp/imu

# GNSS
/gnss/fix,
/ntrip_client/rtcm

# LiDAR
/scan_filtered
/velodyne_points
/depth_camera/filtered/points

# cmd_vel
/diff_cont/cmd_vel

# Nav2
/plan
/local_costmap/costmap
/global_costmap/costmap
/local_costmap/published_footprint
/global_costmap/published_footprint

# Camera
/zed/zed_node/rgb/color/rect/image
/zed/zed_node/point_cloud/cloud_registered
```
:::

### Playback Guide

Follow these instructions to set up your environment to play them back.

1. Choose and download a bag from the Google Drive folder*.
2. Unzip the bag to a folder with this commannd:

```bash
tar --zstd -xf <bag_name>.tar.zst
```
> [!NOTE]
> You need to have the `zstd` package installed to be able to unzip the bag. You can install it with
> ```bash
> sudo apt install zstd
> ```

3. Source your workspace by following the instructions in the [README](https://github.com/oaklandrobotics/ros_ora26#build-and-source-the-workspace).
4. Begin playback of the bag with one of these commands:

```bash
# Play back the bag once
ros2 bag play path/to/bag/folder
```
```bash
# Loop playback of the bag forever until cancelled
ros2 bag play -l path/to/bag/folder
```
```bash
# Play a specific range of the bag. For example, from 1:00 to 1:30
ros2 bag play --start-offset 60 --playback --playback-duration 30
```

5. You can use these hotkeys during playback:
    - **Space**: Toggle pause and resume playback
    - **Right Arrow**: Play the very next message, useful while paused
    - **Up Arrow**: Increase the message playback rate by 10%
    - **Down Arrow**: Decrease the message playback rate by 10%
    - **Ctrl + C**: Stop playback

**You may need to be added to the Shared Drive first - ask an E-board member for more info.*