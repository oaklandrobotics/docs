# Example Bags

Some example bags are stored in our Google Drive and can be accessed [here*](https://drive.google.com/drive/folders/17S5-LnJm3yi2zjNNsaiKRRkUrNrLBQzX?usp=drive_link). These bags were captured during our couple of runs at IGVC 2026. Four bags are available: `first_run`, `first_run_reduced`, `second_run`, and `second_run_reduced`. The `reduced` versions include a small subset of the more interesting topics from the full list to reduce file size. The list of included topics is:

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

## Setup Instructions

Follow these instructions to get started:

> [!IMPORTANT]
> - Ensure your environment has been set up, and your workspace has been sourced by completing the instructions in the [ros_ora26 README](https://github.com/oaklandrobotics/ros_ora26#environment-setup).
> - Also ensure you have `zstd` installed to extract the bag. You can install it with: 
>     ```sh
>     sudo apt install zstd
>     ```

1. Make a directory to save your bags to:
```sh
mkdir ~/bags && cd ~/bags
```

2. Choose a bag from the Google Drive folder* and download it to that location.
3. Extract the bag with this command:

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