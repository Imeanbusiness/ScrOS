# Scr-OS Manual

## Getting started

### Installation

1. Click [here](https://github.com/Imeanbusiness/ScrOS/archive/refs/heads/main.zip) to download. The current version is `v1.1.3`.

2. Unzip the folder

3. Uncompress the folder

4. Open the folder and open scros.html

## Basics 

![Interface](Images/ManualImage.png)

### 1: Clock

This tells time. By default, it is set to 24 hour. You can change this with the >fclock command. 

### 2: Command Output

This is the output of whatever commands you enter into the command panel. 

### 3: App Dock

These are the basic app icons you can click on to quickly navigate. Use the arrow keys on board to flip between pages.

### 4: Command Panel (Input)

This is like a terminal where you enter in all you commands, which are analyzed by Terry before being output-ted onto the Command Output text area.

## Functions 

### Conversation

While limited, you can have basic conversation with Terry.

### Basic stuff

You can ask Terry to open up sites for you, or google search if it's something he doesn't know.

### Commands

You can run commands on Terry to make him work specifically.

### Customization

Running commands allows you to change up settings with the start up screen, whether it's the font family, background picture, font color, and more!

### Ease of use

Scr-OS offers a home screen with some of the most used apps in social media for your reference! Running commands is easy and intuitive as well.

## Commands 

Here is a list of every command and how to use it. 

## 🎨 Customization

| Command | Description |
|--------|-------------|
| `>bgc (filename)` | Set the background to a specific image. Image must be in the `Images` folder. |
| `>fontcolor (color)` | Set the font color. Accepts hex codes or CSS color names. |
| `>outlcolor (color)` | Set the font outline color. Accepts hex codes or CSS color names. |
| `>font (font name)` | Set the font family. Example: `Nunito`, `Arial`. |
| `>iconpack (folder name)` | Change the icon set. All icons should follow the format `AppIcons/AppName.png`. (Twitter must be named `Twitter.png`) |

---

## 🛠️ Assistance

| Command | Description |
|--------|-------------|
| `>help` | View this help menu. |
| `>kill` | Exit Scr-OS. |
| `>gh` | Open the Scr-OS GitHub repository. |
| `>status` | Show Scr-OS version and system status. |
| `>settings` | View your current settings. |

---

## 🔍 Search & Web

| Command | Description |
|--------|-------------|
| `>gs (query)` | Google Search the provided query. |
| `>yt (query)` | Search YouTube for the query. |
| `>ms (query)` | Search Spotify for the song/query. |
| `>ops (site)` | Open a website. Example: `>ops amazon.com` |

---

## ⚙️ System Utilities

| Command | Description |
|--------|-------------|
| `>calc (expression)` | Math evaluator. Supports functions like `sqrt`, `sin`, `pi`, `log`. |
| `>calcds (maximum denominator)`| Sets up a maximum denominator value for simplifying to fractions. Must be between 1 and 1000. Keep in mind that the calculator will run exponentially slower per higher value.|
| `calcmode` | Switch between degrees and radians. Radians are on by default |
| `>compchk (number)` | Composite checker. Lists all factors and tells if the number is prime. |
| `>reset` | Reset Scr-OS memory to default. Requires running twice to confirm. |
| `>fclock` | Toggle between 12-hour and 24-hour clock format. |
| `>textms (delay)` | Set a delay during text generation in milliseconds (ms). Must be within 0 to 100. |
| `>remove (slot)` | Removes an app from the app dock on the current page. There are only slots 1 to 10. |
| `>replace (slot) (appname)` | Replace a slot from the app dock on the current page with the app you request. Please submit an issue on GitHub if you would like to see more apps. Enter 0 as appname to remove the app. |
| `>api` | Enter your own API to use some chat functions. You can get your own API [here](https://developers.google.com/custom-search/v1/overview) |

---

## 💬 AI/Chat Features

| Command | Description |
|--------|-------------|
| `mode` | Toggle between "chat mode" and "search mode". In chat mode, asking Terry questions will return short, top results. |
| `dmode` | Decides whether "chat mode" or "search mode" is set as default during startup. |

---

