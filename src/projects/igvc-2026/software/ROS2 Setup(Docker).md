# ROS2 Setup(Docker)

> **Disclaimer:** This was tested and done on Windows 11.
---

## Prerequisites

Install the following **before** starting. All are **required**.

| Software | Why It's Needed |
|----------|----------------|
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) | Runs the ROS2 container |
| [VSCode](https://code.visualstudio.com/) | IDE for development |
| VSCode Extension: **Docker** (by Microsoft) | Manage containers inside VSCode |
| VSCode Extension: **Dev Containers** (by Microsoft) | Open project inside the container |
| [VcXsrv](https://sourceforge.net/projects/vcxsrv/) | GUI support (RViz, Gazebo, etc.) |

---

## Project Folder Structure

Create this structure **before** starting. All files are **required**.

```
ros2_jazzy_project/
├── .devcontainer/
│   └── devcontainer.json       ← Tells VSCode how to connect to the 
├── workspace/
│   └── src/                    ← Where you clone repos and create
├── Dockerfile                  ← Defines what gets installed in the 
└── docker-compose.yml          ← Defines how the container runs
```

---

## File 1: `docker-compose.yml`

**Required.** Place this in the project root (`ros2_jazzy_project/`).

```yaml
services:
  ros2:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: ros2_jazzy_dev
    network_mode: host
    environment:
      - DISPLAY=host.docker.internal:0.0   # Required for GUI (VcXsrv)
      - ROS_DOMAIN_ID=0                    # Required for ROS2 communication
      - QT_X11_NO_MITSHM=1                # Required for Qt-based GUI apps (RViz, rqt)
      - LIBGL_ALWAYS_INDIRECT=0            # Required for OpenGL rendering in container
    volumes:
      - ./workspace:/root/workspace        # Mounts your local workspace into the container
    stdin_open: true
    tty: true
    command: sleep infinity                # Keeps container running in the background
```

---

## File 2: `Dockerfile`

**Required.** Place this in the project root (`ros2_jazzy_project/`).

```dockerfile
FROM osrf/ros:jazzy-desktop-full
# Base image: official ROS2 Jazzy image with desktop tools pre-installed
# Already includes: ROS2 core, rclcpp, rclpy, rviz2, basic build tools

ENV DEBIAN_FRONTEND=noninteractive
ENV ROS_DISTRO=jazzy

RUN apt-get update && apt-get install -y \
    
    # REQUIRED: Terminal and Text Editors
    terminator \                           
    vim \                                  
    nano \                                

    # REQUIRED: Version Control
    git \                                 
    git-lfs \                             

    # REQUIRED: Build Tools
    build-essential \                      
    cmake \

    #REQUIRED: Python3 and pip                          
    python3-pip \                          
    python3-colcon-common-extensions \     
    python3-colcon-mixin \                
    python3-vcstool \                    

    # REQUIRED: ROS2 Dev Tools
    python3-rosdep \                     
    python3-rosinstall-generator \       

    # OPTIONAL: Debugging Tools
    gdb \                                  
    valgrind \                             

    # OPTIONAL: Network Tools
    wget \                                
    curl \                                
    net-tools \                            
    iputils-ping \                        

    # OPTIONAL: System Monitoring
    htop \                                
    tree \                                

    # REQUIRED: GUI Support and Testing
    x11-apps \                            
    mesa-utils \                       
    libgl1-mesa-dri \                  

    # REQUIRED: Gazebo Simulation
    ros-${ROS_DISTRO}-ros-gz \         

    # REQUIRED: Visualization Tools
    ros-${ROS_DISTRO}-rviz2 \             
    ros-${ROS_DISTRO}-rqt \              
    ros-${ROS_DISTRO}-rqt-common-plugins \

    # REQUIRED: Navigation and SLAM
    ros-${ROS_DISTRO}-navigation2 \        
    ros-${ROS_DISTRO}-nav2-bringup \      
    ros-${ROS_DISTRO}-slam-toolbox \       

    # REQUIRED: Robot State and Transforms
    ros-${ROS_DISTRO}-robot-state-publisher \      
    ros-${ROS_DISTRO}-joint-state-publisher \      
    ros-${ROS_DISTRO}-joint-state-publisher-gui \  

    # REQUIRED: URDF and Xacro
    ros-${ROS_DISTRO}-urdf \            
    ros-${ROS_DISTRO}-xacro \              
   
    # OPTIONAL: Cartographer SLAM
   
    ros-${ROS_DISTRO}-cartographer \       
    ros-${ROS_DISTRO}-cartographer-ros \  

    # REQUIRED: Demo and Example Packages
    
    ros-${ROS_DISTRO}-demo-nodes-cpp \    
    ros-${ROS_DISTRO}-demo-nodes-py \   
    ros-${ROS_DISTRO}-example-interfaces \ 
    ros-${ROS_DISTRO}-turtlesim \       

    # REQUIRED: Transforms and Geometry
    ros-${ROS_DISTRO}-tf2-tools \         
    ros-${ROS_DISTRO}-geometry2 \       

    # OPTIONAL: Bag File Tools
    ros-${ROS_DISTRO}-rosbag2 \                    
    ros-${ROS_DISTRO}-rosbag2-storage-default-plugins \ 

    # OPTIONAL: CycloneDDS
    ros-${ROS_DISTRO}-rmw-cyclonedds-cpp \  # CycloneDDS middleware

    # REQUIRED: Python Libraries (installed via apt)
    python3-numpy \                        
    python3-matplotlib \                  
    python3-pandas \                      
    python3-scipy \                       
    python3-opencv \                      
    python3-serial \                      
    && rm -rf /var/lib/apt/lists/*         

#Initialize ROSDEP
RUN rosdep update

# OPTIONAL: Extra Python Packages
RUN pip3 install --break-system-packages --no-cache-dir \
    transforms3d                         


# Update Colcon Mixins
RUN colcon mixin update default || true


# Source ROS2 in Bashrc
RUN echo "source /opt/ros/${ROS_DISTRO}/setup.bash" >> /root/.bashrc && \
    echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> /root/.bashrc && \
    echo "if [ -f /root/workspace/install/setup.bash ]; then source /root/workspace/install/setup.bash; fi" >> /root/.bashrc

# Working Directory
WORKDIR /root/workspace

# OPTIONAL: Set Default DDS to CycloneDDS
ENV RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

ENV DEBIAN_FRONTEND=dialog
```

---

## File 3: `.devcontainer/devcontainer.json`

**Required.** Place this inside the `.devcontainer/` folder.

```json
{
  "name": "ROS2 Jazzy",
  "dockerComposeFile": "../docker-compose.yml",
  "service": "ros2",
  "workspaceFolder": "/root/workspace",
  "customizations": {
    "vscode": {
      "extensions": [
        // REQUIRED: ROS2
        "ms-iot.vscode-ros",                    
        "smilerobotics.urdf",                 

        // REQUIRED: C++ Support
        "ms-vscode.cpptools",                   
        "ms-vscode.cpptools-extension-pack",   
        "ms-vscode.cmake-tools",               

        // REQUIRED: Python Support
        "ms-python.python",                    
        "ms-python.vscode-pylance",             
        
        // REQUIRED: Git and Version Control
        "eamodio.gitlens",                      
        "mhutchie.git-graph",                 

        // OPTIONAL: Code Quality
        "ms-vscode.makefile-tools",             
        "twxs.cmake",                           
        "streetsidesoftware.code-spell-checker", 
        "aaron-bond.better-comments",         
        "pkief.material-icon-theme",           

        // REQUIRED: YAML and XML (ROS2 config files)
        "redhat.vscode-yaml",                  
        "redhat.vscode-xml"                    
      ],
      "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.defaultInterpreterPath": "/usr/bin/python3",
        "cmake.configureOnOpen": false,
        "C_Cpp.default.compilerPath": "/usr/bin/g++",
        "files.associations": {
          "*.repos": "yaml",
          "*.world": "xml",
          "*.xacro": "xml"
        }
      }
    }
  }
}
```

---

## VcXsrv Setup (GUI Support)

**Required** if you want to use GUI applications like RViz, Gazebo, or rqt.

1. Install [VcXsrv](https://sourceforge.net/projects/vcxsrv/) from SourceForge
2. Launch **XLaunch** 
3. Configure with these settings:
   - Display settings: **Multiple windows**
   - Start client: **Start no client**
   - Extra settings: **Check "Disable access control"**
4. Click **Finish**
5. VcXsrv will appear as an **X icon in your system tray** — keep it running

> **NOTE:** You must start VcXsrv **every time** you reboot Windows before using GUI apps in the container.

---

## Building and Running the Container

### First Time Setup

1. Open the `ros2_jazzy_project` folder in VSCode
2. Press `Ctrl+Shift+P`
3. Type: **Dev Containers: Rebuild and Reopen in Container**
4. Press Enter and wait for the build to complete

> The first build downloads and installs packages. This takes **10–20 minutes** depending on your internet speed. After that the rebuilds are faster because Docker caches layers.

### After Setup 

Once the container has been built, reopening it is near-instant:

1. Press `Ctrl+Shift+P`
2. Type: **Dev Containers: Reopen in Container**

---

## Stopping and Restarting the Container

| Action | How To Do It |
|--------|-------------|
| **Stop**  | `Ctrl+Shift+P` → **Dev Containers: Reopen Folder Locally** |
| **Start again** | `Ctrl+Shift+P` → **Dev Containers: Reopen in Container** |
| **Rebuild** (after Dockerfile changes) | `Ctrl+Shift+P` → **Dev Containers: Rebuild Container** |
| **Check status** | Open Docker Desktop → Containers tab |

> Your container (`ros2_jazzy_dev`) persists between stops. All your installed packages and files inside the container are saved.

---

## Testing Your Setup

Open a terminal inside VSCode (`` Ctrl+` ``) and run these commands:

### Test ROS2
```bash
ros2 --help
```

### Test C++ and Python Demo Nodes
```bash
# Terminal 1
ros2 run demo_nodes_cpp talker

# Terminal 2 (open a new terminal)
ros2 run demo_nodes_py listener
```

### Test GUI (make sure VcXsrv is running)
```bash
# Basic GUI test
xclock

# Test 3D/OpenGL rendering
glxgears

# Test ROS2 GUI tools
ros2 run turtlesim turtlesim_node
rviz2
rqt
```

---

## Cloning Git Repos

Always clone into `workspace/src/`:

```bash
cd ~/workspace/src
git clone https://github.com/username/repo-name.git -b jazzy
```

### Building After Cloning
```bash
cd ~/workspace

# Install any missing dependencies
rosdep install --from-paths src --ignore-src -r -y

# Build
colcon build

# Source your workspace
source install/setup.bash
```

---

## Creating New ROS2 Packages

```bash
cd ~/workspace/src

# C++ package
ros2 pkg create --build-type ament_cmake my_cpp_package --dependencies rclcpp std_msgs

# Python package
ros2 pkg create --build-type ament_python my_py_package --dependencies rclpy std_msgs
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| GUI apps won't open | Make sure VcXsrv is running with "Disable access control" checked |
| `cannot open display` | Check Windows Firewall — allow VcXsrv on both Private and Public networks |
| Container won't start | Run `docker ps -a` in PowerShell to check status |
| `postCreateCommand` error | Remove or simplify the `postCreateCommand` in `devcontainer.json` |
| Package not found in Dockerfile | Check the package name — Jazzy uses different names (e.g., `ros-jazzy-ros-gz` instead of `ros-jazzy-gazebo-ros-pkgs`) |

---

## Quick Reference Commands

```bash
# Build workspace
cd ~/workspace && colcon build

# Source workspace
source ~/workspace/install/setup.bash

# List ROS2 nodes
ros2 node list

# List ROS2 topics
ros2 topic list
```