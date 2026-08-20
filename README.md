# 🐶 Web Puppy

A little white puppy that lives in the corner of your browser.

> A cozy Chromium extension — the puppy follows you to every webpage.

<img width="1336" height="799" alt="Web Puppy Screenshot" src="https://github.com/user-attachments/assets/31d49a9f-c661-486b-8098-6ff8f43f67a4" />

## Features

- Stays in the bottom-right corner of every page
- Idle animations — tail wagging, blinking
- Drag to move it anywhere you like

## Getting Started

**1. Open** `chrome://extensions` in Chrome

**2. Enable** Developer mode (top right)

**3. Click** Load unpacked → Select the `web-puppy` folder

**4. Done** — Visit any webpage and meet your puppy 🎉

## How it Works

- `manifest.json` — extension config (Manifest V3)
- `content.js` — injects the puppy into every page
- `content.css` — handles position and animations

## Notes

- Works on Chromium browsers (Chrome, Edge, Brave, etc.)
- No data collection, runs entirely locally.
