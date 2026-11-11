# 🐶 Web Puppy

A little white puppy that lives in the corner of your browser.

> A cozy Chromium extension — the puppy follows you to every webpage.

<img width="1336" height="799" alt="Web Puppy Screenshot" src="https://github.com/user-attachments/assets/31d49a9f-c661-486b-8098-6ff8f43f67a4" />

## Features

- Stays in the bottom-right corner of every page
- Idle animations — tail wagging, blinking
- Drag to move it anywhere you like

## Getting Started

### Install from the release

1. Download [`web-puppy-v0.1.0.zip`](https://github.com/PW486/web-puppy/releases/download/v0.1.0/web-puppy-v0.1.0.zip) from the [GitHub Release](https://github.com/PW486/web-puppy/releases/tag/v0.1.0).
2. Extract the ZIP file.
3. Open `chrome://extensions` in Chrome, or the extensions page in your Chromium-based browser.
4. Enable **Developer mode**.
5. Click **Load unpacked** and select the extracted `web-puppy-v0.1.0` folder containing `manifest.json`.
6. Visit any webpage and meet your puppy 🎉

### Install from source

Open `chrome://extensions`, enable **Developer mode**, click **Load unpacked**, and select the project folder containing `manifest.json`.

## How it Works

- `manifest.json` — extension config (Manifest V3)
- `content.js` — injects the puppy into every page
- `content.css` — handles position and animations

## Notes

- Works on Chromium browsers (Chrome, Edge, Brave, etc.)
- No data collection, runs entirely locally.
