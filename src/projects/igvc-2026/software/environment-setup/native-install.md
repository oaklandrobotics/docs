# Native Install

## Ubuntu

ROS 2 has a variety of [distributions](https://docs.ros.org/en/jazzy/Releases.html) which support [targeted operating systems](https://reps.openrobotics.org/rep-2000/#jazzy-jalisco-may-2024---may-2029) at various levels. We recommend to only use the "Tier 1" supported operating systems as they receive the most support and typically work out of the box.

Since we are using **ROS 2 Jazzy**, we recommend installing **Ubuntu 24.04**, which is a Tier 1 supported OS and allows ROS to be installed and maintained entirely via Debian packages.

1. Download the Ubuntu 24.04 ISO [here.](https://ubuntu.com/download/desktop)
2. Make a bootable USB with the ISO.
    - [Rufus](https://rufus.ie/en/)
    - [Balena Etcher](https://etcher.balena.io/)
3. [Install Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)
4. [Install ROS 2](#ros-2)

## ROS 2

1. [Install ROS 2 Jazzy](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debians.html)
    - Be sure to do the full desktop install (`sudo apt install ros-jazzy-desktop`).
    - To verify that your installation works correctly, try running the ROS 2 talker/listener examples from the official documentation.
2.  Run this command:
    ``` sh
    echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc
    ```
    This will make it so the `source` command will be run for you automatically every time you open a new terminal.
    > [!NOTE]
    > If you are running a different shell (e.g., zsh), you will need to source the corresponding setup file to the correct shell configuration file