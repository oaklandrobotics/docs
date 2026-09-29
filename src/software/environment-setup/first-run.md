# Running The Project

## Prerequisites
- Ros 2 desktop and optional tools must be installed using [this tutorial](./index.md).

## Environment Setup

1. First, fork our [git repository](https://github.com/oaklandrobotics/ros_ora26) by clicking the 'fork' button. Now you effectively have a copy of the repository on your own GitHub account. 

2. We will now create a folder to store our forked project on our local computer. To do this, create a folder named `ros_ora26`. Then create folder named `src` inside of it. You can also use this command to create both folders at the same time in your home directory:
```
mkdir -p ~/ros_ora26/src
```

3. Clone the repository by clicking the green 'code' button; then copy the URL given in the box. From inside of the `~/ros_ora26/` folder(`cd ~/ros_ora26`), run this command to clone your fork into the `src/` folder:
```
git clone <your-copied-url> src
```

4. Now, enter this source command to add Ros 2 shell variables and configuration to your shell environment:
(Tip: You can add this command to your `~/.bashrc` file to run automatically on every new terminal/shell.)
```
source /opt/ros/jazzy/setup.bash
```

5. Ros 2 uses a tool called rosdep to handle project dependencies. These are packages of pre-made code that provide extra functionality for the project. Run the following commands to setup rosdep and install Ros 2 dependencies:
```
sudo rosdep init
```
(Note: The `rosdep init` command only needs to be run once per system installation of the rosdep tool.)
 - Update the repository lists:
```
rosdep update 
```
- Install project specific dependencies:
```
rosdep install -i --from-path src -y
```

6. Ros 2 uses the Colcon build tool to compile project packages. Use this command to build:
```
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```
- `--symlink-install` flag allows us to change project files without needing to rebuild the project.
(Note: Any time a new package/file is introduced to the project, the project must be rebuilt)
- `--cmake-args -DCMAKE_BUILD_TYPE=Release` Option enables compiler optimizations to improve performance. 
(Note: This can make debugging  line-by-line more difficult as the compiled binary code is altered/optimized when built.)

7. The build process creates another source file with shell variables and configuration specific to the build. Use this command to apply them:
```
source install/setup.bash
```

8. We can now run the project with this command:
```
ros2 launch ora_launch sim.launch.yaml
```
- Alternatively, you can use the generic version of this command:
```
ros2 launch <path-to-launch-file>
```

## Rebuilding the Project
If you wish to perform a complete rebuild the project or build a different version of the project; we recommend this process:

1. Remove the build folders created by Colcon with this command:
```
rm -rf build/ install/ log/
```
2. We recommend you close and re-open a new terminal to clear all shell variables or configurations created for the previous project build.

3. Re-source your new shell/terminal using the following command:
(Note: You can add this command to your `~/.bashrc` file to run it automatically for every new shell/terminal)
```
source /opt/ros/jazzy/setup.bash
```

4. Now, repeat steps 5-8 from the Environment Setup section to install dependencies, build with Colcon, and run the project.

## Extra Notes

### Nvidia EGL Libraries

If you have an Nvidia GPU and see warnings similar to this in the terminal when running the project:
```
[component_container-4] pci id for fd 95: 10de:2182, driver (null)
[component_container-4] pci id for fd 96: 10de:2182, driver (null)
[component_container-4] libEGL warning: egl: failed to create dri2 screen
[component_container-4] libEGL warning: pci id for fd 94: 10de:2182, driver (null)
```
This is caused by misconfiguration with the Nvidia EGL vendor library. We can attempt to fix this by specifying the library path. Try adding this line to the end of your `~.bashrc` to fix it:
```
export __EGL_VENDOR_LIBRARY_FILENAMES=/usr/share/glvnd/egl_vendor.d/10_nvidia.json
```
Now source your new bashrc with the command: `source ~/.bashrc`

---

