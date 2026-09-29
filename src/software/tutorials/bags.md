# Bags

ROS2 bags let you record messages published to topics and replay them later. This is useful for debugging, testing nodes with real data, and sharing work. With the `ros2 bag` command-line tool, you can record bags, play them back, and convert them to include different topics and to different formats. See the [Additional Resources](#additional-resources) for more info.

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

Before recording, be sure to change into the directory where you would like the bag to be saved. After that, run the `ros2 bag record` command to capture the data being published to a topic (or topics). The bag will be named in the format of `rosbag2_year_month_day-hour_minute_second`, unless the `-o` parameter is used to specify a name for your bag. You can press **Ctrl + C** to stop the recording once finished. See [this section](https://github.com/ros2/rosbag2#record) of the rosbag2 README for more info. Here are some example commands:

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

Sometimes it may be useful to reduce the number of topics in a bag, or modify it to have a smaller file size so it is easier to handle. For example, you may want to extract a few topics of interest from a previous bag that was recorded with `ros2 bag record -a`. This is where the `ros2 bag convert` command can be used. With `convert`, you can modify bags by merging two or more bags, splitting a bag into multiple bags, trimming the start and end times, or changing storage methods, among other things. See [this section](https://github.com/ros2/rosbag2#convert) of the rosbag2 README for more info.

These steps will show what was done to create the `reduced` versions of the [example bags](../projects/igvc-2026/example-bags.md).

1. Record data from ALL topics to a bag named `first_run`:
```sh
cd ~/bags
ros2 bag record -o first_run -a
```

2. Create a configuration YAML file in the same directory as the bag. Inside this file, choose a name for the output bag, as well as the list of topics. (See the example `out.yaml` below):
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