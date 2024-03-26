# Software Install Guide


[[toc]]

## Overview
**ANDREW WRITE SOMETHING HERE**
## Arduino IDE

The Arduino IDE is a software tool used for writing, compiling, and uploading code to Arduino boards. Follow these steps to install Arduino IDE on your computer:

### Step 1: Download Arduino IDE

1. Visit the [Arduino Software](https://www.arduino.cc/en/software) download page.
2. Choose the appropriate version for your operating system (Windows, macOS, Linux).
3. Click on the download link to download the Arduino IDE installer.

### Step 2: Install Arduino IDE

#### Windows

1. Once the download is complete, locate the downloaded installer file (usually a .exe file).
2. Double-click on the installer file to start the installation process.
3. Follow the on-screen instructions to complete the installation.
4. After installation, you may need to restart your computer.

#### macOS

1. Locate the downloaded Arduino IDE disk image file (usually a .dmg file).
2. Double-click on the disk image file to mount it.
3. Drag the Arduino IDE application to your Applications folder to install it.
4. Eject the disk image after installation.

#### Linux

1. To install the Arduino IDE 2 on Linux, first download the AppImage 64 bits (X86-64) from the [Arduino Software page](https://www.arduino.cc/en/software).
2. Before we can launch the editor, we need to first make it an executable file. This is done by: 
    + Right-clicking the file 
    + Choose **Properties** 
    + Select **Permissions**
    + Rick the **Allow executing file as program** box.
3. You can now double click the file to launch the Arduino IDE 2 on your Linux machine. In case you cannot run the AppImage file, make sure that FUSE is installed on your system.
    + In Ubuntu (>= 22.04):
        ```
        sudo add-apt-repository universe
        sudo apt install libfuse2
        ```
    + In Fedora
        ```
        dnf install fuse
        ```
    + See instructions for installing FUSE on your distribution [here](https://github.com/AppImage/AppImageKit/wiki/FUSE).
    + To enable the Arduino IDE to access the serial port and upload code to your board, the following rule can be added to ``` /etc/udev/rules.d/99-arduino.rules.```
        ```
        SUBSYSTEMS=="usb", ATTRS{idVendor}=="2341", GROUP="plugdev", MODE="0666"
        ```
#### Conclusion

Congratulations! You have successfully installed the Arduino IDE on your system.

## KiCad

### Step 1: Download KiCad 8.0

1. Visit the [KiCad Downloads](https://www.kicad.org/download/) page.
2. Look for the KiCad 8.0 version compatible with your operating system.
3. Click on the download link to get the installer.

### Step 2: Install KiCad 8.0

#### Windows

1. Once the download is complete, locate the downloaded installer file (usually a .exe file).
2. Double-click on the installer file to start the installation process.
3. Follow the on-screen instructions provided by the installer.
4. Choose the installation directory and any additional options as needed.
5. Wait for the installation to complete.
6. After installation, you may need to restart your computer.

#### macOS

1. Locate the downloaded KiCad 8.0 disk image file (usually a .dmg file).
2. Double-click on the disk image file to mount it.
3. Drag the KiCad 8.0 application to your Applications folder to install it.
4. Eject the disk image after installation.

#### Linux

1. Open a terminal window.
2. Run the following command to add the KiCad repository:

    ```sh
    sudo add-apt-repository ppa:kicad/kicad-8.0-releases
    ```
3. After adding the repository, update the package list using the following command:
    ```sh
    sudo apt update
    ```
4. Once the package list is updated, proceed to install KiCad by running:
    ```sh
    sudo apt install kicad
    ```
    Follow any prompts or instructions that appear during the installation process.

#### Conclusion

Congratulations! You have successfully installed KiCad 8.0 on your system.
