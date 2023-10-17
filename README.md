# Markdown Renaissance 🏛

I am constantly writing small markdown notes and I've decided to make **minimlistic**, stylish and high-perfomance redactor to sue my needs. This app has
all basic functionality to comfortably write markdown text on **laptops** and **mobile** devices. [Check it live here](http://app.markdown-renaissance.surge.sh/).

## Introduction

<img width="600" alt="Light theme main screen" src="https://user-images.githubusercontent.com/103210607/192010143-bf680e0d-b2a5-416f-b317-12dc2fe8dfce.png">
<img width="600" alt="Dark theme main screen" src="https://user-images.githubusercontent.com/103210607/192010336-52b2e5fe-8273-43de-8917-6c0de37cdc3b.png">

### Functionality

- **Text highlighting** while writing markdown, ability to **preview** your markdown notes
- **Debounced** text parsing for higher perfomance, preview **lazy-loading**
- Ability to press button and insert most common markdown **presets** (bold, italic text, header or link) or to clear screen
- You can **store** your session in your browser's local storage and **restore** it later on to continue work
- **Characters** and **words** calculation, ability to hide it
- You can either show or hide markdown preview (it is hidden on the first render to increase TTI)
- Amazing dark theme

App is also optimized for mobile devices:

<img width="425" alt="Mobile main screen view" src="https://user-images.githubusercontent.com/103210607/192011973-95ce0eed-b31b-4f74-ad7c-742460920022.png">

### Tech stack

- React + TypeScript
- [Vite](https://vitejs.dev)
- SASS
- [highlight.js](https://highlightjs.org) for text highlighting
- [remarkable](https://www.npmjs.com/package/remarkable) for markdown parsing
- Iconify and [react-useanimations](https://react.useanimations.com) for svg icons
- Reach Tooltip for tooltips
- Surge for static page deployment

![App usage](https://user-images.githubusercontent.com/103210607/192013405-e4e7f067-5718-4d37-99be-da64c4cf49bd.gif)

### Further plans

- Add ability to **download** markdown files
- Optimize adaptive layout, work on cross-browser solutions
