# Bags

ROS2 bags let you record messages published to topics and replay them later. This is useful for debugging, testing nodes with real data, and sharing work. With the `ros2 bag` command-line tool, you can record bags, play them back, and convert them to include different topics and to different formats. See the [Additional Resources](#additional-resources) for more info.

## Example Bags

Some example bags are stored in our Google Drive and can be accessed [here*](https://drive.google.com/drive/folders/17S5-LnJm3yi2zjNNsaiKRRkUrNrLBQzX?usp=drive_link). There are four bags available: `first_run`, `first_run_reduced`, `second_run`, and `second_run_reduced`. The `reduced` versions include a small subset of the more interesting topics from the large list of all topics, to reduce file size. The list of included topics is:

| Category | Topics |
| --- | --- |
| TF | `/tf`, `/tf_static`, `/robot_description` |
| Odometry | `/fusion/odom`, `/fusion/pose`, `/diff_cont/odom`, `/joint_states` |
| IMU | `/esp/imu` |
| GNSS | `/gnss/fix`, `/ntrip_client/rtcm` |
| LiDAR | `/scan_filtered`, `/velodyne_points`, `/depth_camera/filtered/points` |
| cmd_vel | `/diff_cont/cmd_vel` |
| Nav2 | `/plan`, `/local_costmap/costmap`, `/global_costmap/costmap`, `/local_costmap/published_footprint`, `/global_costmap/published_footprint` |
| Depth Camera | `/zed/zed_node/rgb/color/rect/image`, `/zed/zed_node/point_cloud/cloud_registered` |

### Quick Start

Follow these instructions to get started:

> [!IMPORTANT]
> - Ensure your environment has been set up, and your workspace has been sourced by completing the instructions in the ros_ora26 [README](https://github.com/oaklandrobotics/ros_ora26#environment-setup).
> - Also ensure you have the `zstd` installed to extract the bag. You can install it with: 
>     ```sh
>     sudo apt install zstd
>     ```

1. Make a directory to save your bags to:
```sh
mkdir ~/bags && cd ~/bags
```

2. Choose a bag from the Google Drive folder* and download it to that location.
3. Extract the bag with this commannd:

```sh
tar --zstd -xf <bag_name>.tar.zst
```

4. Verify everything looks correct with the `info` command. You should see an output similar to this:
```sh
ros2 bag info <bag_name>
```
```
Files:             first_run_0.mcap
Bag size:          12.9 GiB
Storage id:        mcap
ROS Distro:        jazzy
Duration:          1780338829.192156265s
Start:             Dec 31 1969 19:00:00.000870514 (0.000870514)
End:               Jun  1 2026 14:33:49.193026779 (1780338829.193026779)
Messages:          4447154
Topic information: Topic: /behavior_server/transition_event | Type: lifecycle_msgs/msg/TransitionEvent | Count: 0 | Serialization Format: cdr
                   Topic: /behavior_tree_log | Type: nav2_msgs/msg/BehaviorTreeLog | Count: 23 | Serialization Format: cdr
                   ...
                   <Topic list truncated for brevity>
```

5. Play the bag:
```sh
ros2 bag play <bag_name>
```

**You may need to be added to the Shared Drive first - ask an E-board member for help with this.*

## Playback

You can use any of these commands to start the playback of a bag. While the bag is playing, you should see the available topics with `ros2 topic list`, and can echo them with `ros2 topic echo`. See [this section](https://github.com/ros2/rosbag2#play) of the rosbag2 README for more info.

- Play the bag once:
```sh
ros2 bag play <bag_name>
```

- Loop playback of the bag forever until cancelled:
```sh
ros2 bag play -l <bag_name>
```

- Play a specific range of the bag. For example, from 1:00 to 1:30:
```sh
ros2 bag play --start-offset 60 --playback-duration 30 <bag_name>
```

> [!TIP]
> You can use these hotkeys during playback:
> | Hotkey | Action |
> | --- | --- |
> | **Space** | Toggle pause and resume playback |
> | **Right Arrow** | Play the very next message (useful while paused) |
> | **Up Arrow** | Increase message playback rate by 10% |
> | **Down Arrow** | Decrease message playback rate by 10% |
> | **Ctrl + C** | Stop playback |

## Recording

Before recording, be sure to change into the directory where you would like the bag to be saved. After that, all that needs to be done is running the `ros2 bag record` command to capture the data being published to a topic (or topics). The bag will be named with the format of `rosbag2_year_month_day-hour_minute_second`, unless the `-o` parameter is used to specify a name for your bag. You can press **Ctrl + C** to stop the recording once finished. See [this section](https://github.com/ros2/rosbag2#record) of the rosbag2 README for more info. Here are some example commands:

- Record a single topic:
```sh
ros2 bag record <topic_name>
```

- Record multiple topics:
```sh
ros2 bag record /topicA /topicB /topicC
```

- Record multiple topics to a bag named `my_cool_bag`:
```sh
ros2 bag record -o my_cool_bag /topicA /topicB /topicC
```

- Record ALL topics:
```sh
ros2 bag record -a
```

## Reducing/Converting

Sometimes it may be useful to reduce the number of topics in a bag, or modify it to have a smaller file size so it is easier to handle. For example, you may want to extract a few topics of interest from a previous bag that was recorded with `ros2 bag record -a`. This is where the `ros2 bag convert` command can be used. With `convert`, you can modify bags by merging two bags together, splitting a bag into multiple bags, trimming the start and end times, or changing storage methods, among other things. See [this section](https://github.com/ros2/rosbag2#convert) of the rosbag2 README for more info.

These steps will show what was done to create the `reduced` versions of the example bags.

1. Record data from ALL topics to a bag named `first_run`:
```sh
cd ~/bags
ros2 bag record -o first_run -a
```

2. Create a configuration YAML file in the same directory as the bag. Inside of this, choose a name for the output bag, as well as the list of topics. (See the example `out.yaml` below):
```sh
touch out.yaml
nano out.yaml
```
::: details `out.yaml`
```yaml:line-numbers {2,3}
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

3. Run this command to convert the bag:
```sh
ros2 bag convert -i first_run -o out.yaml
```

4. Optionally, compress the bag with `zstd` if the file size is large:
```sh
tar --zstd -cf first_run_reduced.tar.zst first_run_reduced
```

## Additional Resources

- [ROS 2's Official Documentation](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.html
)
- [rosbag2 repo](https://github.com/ros2/rosbag2)
    - The README contains plenty of other usage guides and examples
- [rqt_bag](https://wiki.ros.org/rqt_bag)
    - A handy UI tool for displaying and replaying bag files