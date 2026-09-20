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

## Recording Guide

Recording a bag is quite simple. Before recording, be sure to change into the directory where you would like the bag to be saved. After that, all that needs to be done is running the `ros2 bag record` command to capture the data being published to a topic (or topics). The `-o` parameter allows you to specify a name for your bag. Otherwise, the bag will be named with the format of `rosbag2_year_month_day-hour_minute_second`. Here are some example commands:

```bash
# Record data from a single topic
ros2 bag record <topic_name>
```
```shell
# Record data from multiple topics
ros2 bag record /topicA /topicB /topicC
```
```bash
# Record data from multiple topics to a bag named `my_cool_bag`
ros2 bag record -o my_cool_bag /topicA /topicB /topicC
```
```bash
# Record data from ALL topics
ros2 bag record -a
```

## Converting Guide

Sometimes it may be useful to reduce the number of topics in a bag. For example, you may want to extract a few topics of interest from a previous bag that was recorded with `ros2 bag record -a`. This is where the `ros2 bag convert` command can be used. `convert` also allows bags to be modified in other ways, including merging two bags together, splitting a bag into multiple bags, trimming the start and end times, or changing storage methods.

This example will show the steps taken to create the `trimmed` versions of the example bags.

1. Record data from ALL topics to a bag named `first_run`:
```sh
cd ~/bags
ros2 bag record -o first_run -a
```

2. Create a configuration YAML file, and choose a name for the output bag, as well as the list of topics. The configuration YAML also allows you to (`out.yaml` is attached in the dropdown below):
```sh
touch out.yaml
nano out.yaml
```
::: details `out.yaml`
```yaml
output_bags:
- uri: first_run_reduced # name of your output bag 
  topics: [ # list of topics, comma-separated
    # tf
    /tf,
    /tf_static,
    /robot_description,

    # odom
    /fusion/odom,
    /fusion/pose,
    /diff_cont/odom,
    /joint_states,

    # imu
    /esp/imu,

    # gnss
    /gnss/fix,
    /ntrip_client/rtcm,

    # lidar
    /scan_filtered,
    /velodyne_points,
    /depth_camera/filtered/points,

    # cmd_vel
    /diff_cont/cmd_vel,

    # nav2
    /plan,
    /local_costmap/costmap,
    /global_costmap/costmap,
    /local_costmap/published_footprint,
    /global_costmap/published_footprint,

    # camera
    /zed/zed_node/rgb/color/rect/image,
    /zed/zed_node/point_cloud/cloud_registered,
  ]
```
:::

3. In the same directory as the bag, run this command to convert the bag:
```sh
ros2 bag convert -i first_run -o out.yaml
```

4. Optionally, compress the bag with `zstd` if the file size is large:
```sh
tar --zstd -cf first_run_trimmed.tar.zst first_run_trimmed
```

## Additional Resources

- [ROS 2's Official Documentation](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.html
)
- [`rosbag2` repo](https://github.com/ros2/rosbag2)
    - The `README` contains plenty of other usage guides and examples
- [rqt_bag](https://wiki.ros.org/rqt_bag)
    - A handy UI tool for displaying and replaying bag files

**You may need to be added to the Shared Drive first - ask an E-board member for more info.*