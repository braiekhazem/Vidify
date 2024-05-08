<div align="center">  <img  alt="vidify-logo" src="https://res.cloudinary.com/dj6kxvxqb/image/upload/v1714516244/logo_yvh5kf.svg" width="80" height="80" style="display:inline"> <h1 style="margin-top:0" >Vidify</h1></div>

<div align="center">
  <a href="https://www.npmjs.com/package/vidify" title="MIT License">
    <img src="https://img.shields.io/npm/l/vidify?color=brightgreen" alt="MIT License">
  </a>
  <a href="https://www.npmjs.com/package/vidify" title="Latest version">
    <img src="https://img.shields.io/npm/v/vidify" alt="Latest version">
  </a>
  <a href="https://buymeacoffee.com/hazembraiek" title="Latest version">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-donate-blue.svg" alt="Latest version">
  </a>
</div>

### 🔗 🚀 Live Demo: [Demo](https://vidify-demo.netlify.app/)

## ✨ Features

- 📹 Video player component that provides consistent UI/UX on different browsers.
- 🎨 Super customizable layout.
- 📝 Provide tools for users to add annotations.
- 🔄 Vidify supports passing an array of video sources.
- 📱 Flexbox css with SVG icons. Mobile friendly.
- 🎨 Provide options for users to customize the primary color.
- ♿️ Accessibility supported, keyboards events supported.
- ✔️ Vidify offers all the essential features expected from a modern video player.
- 🛠️ Customize the control bar, progress bar, and more to match your a- pplication's design and user experience requirements.
- 🎮 Define states and actions to control Vidify with your own user interface elements.
- 📋 Vidify supports customizable ccontrol bar for enhanced user interaction.
- 💻 Written in TypeScript.

![screenshot](https://res.cloudinary.com/dj6kxvxqb/image/upload/v1715112645/Screen_Shot_2024-05-07_at_9.05.31_PM_v2jemq.png)

## 📦 Install

You can install Vidify via npm:

```bash
npm i vidify
```

Or using yarn:

```bash
yarn add vidify
```

## 🔨 Usage

```jsx
import { VideoPlayer } from "vidify";

const MyVideoPlayer = ({ src }) => (
  <VideoPlayer src={src} autoplay className="my-video-player" />
);

export default MyVideoPlayer;
```

### ⌨️ Keyboard shortcuts (When video player focused)

| Key binding | Action            |
| ----------- | ----------------- |
| Space or K  | Play/Pause        |
| shift + P   | Next video        |
| shift + N   | Previous video    |
| shift + D   | Download          |
| shift + S   | Screenshot        |
| ←           | Rewind            |
| →           | Forward           |
| ↑           | Volume up         |
| ↓           | Volume down       |
| M           | Toggle mute       |
| F           | Toggle fullscreen |

## 🛠️ Props

### 🏷️ HTML Video Tag Native Attributes

| Props       | Type                           | Default     | Note |
| ----------- | ------------------------------ | ----------- | ---- |
| src         | string \| string[]             | ''          |      |
| preload     | 'auto' \| 'metadata' \| 'none' | 'auto'      |      |
| autoPlay    | boolean                        | false       |
| loop        | boolean                        | false       |      |
| muted       | boolean                        | false       |      |
| volume      | number                         | 1.0         |
| crossOrigin | string                         | 'anonymous' |      |

##### More attributes details : [Vidify props attributes](https://github.com/braiekhazem/Vidify/blob/main/src/components/VideoPlayer/%40types.ts#L19)

### 🛠️ Vidify Props

| Prop            | Type                                                | Description                                                                       |
| --------------- | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| src             | string \| string[]                                  | The source(s) of the video file(s).                                               |
| defaultSrcIndex | number                                              | The index of the default source to play.                                          |
| startTime       | number                                              | The time (in seconds) to start playing the video from.                            |
| children        | React.ReactNode                                     | Child elements to be rendered within the video player component.                  |
| className       | string                                              | Additional CSS class(es) to apply to the video player component.                  |
| id              | string                                              | The unique identifier of the video player component.                              |
| primaryColor    | string                                              | The primary color used for styling the video player interface.                    |
| annotation      | ReactNode                                           | Additional content (such as text or icons) to be displayed on the video player.   |
| annotationStyle | CSSProperties                                       | CSS styles to apply to the annotation content.                                    |
| width           | string                                              | The width of the video player.                                                    |
| height          | string                                              | The height of the video player.                                                   |
| durationType    | "remainingTime" \| "default"                        | The type of duration display for the video player.                                |
| placeholder     | string                                              | The URL of an image to display as a placeholder before the video loads.           |
| title           | string                                              | The title of the video player.                                                    |
| style           | CSSProperties                                       | Custom CSS styles to apply to the video player.                                   |
| controller      | contextmenu \| boolean \| contextmenuRender         | Configurations for the control bar of the video player.                           |
| volume          | number                                              | The volume level of the video player (0 to 1).                                    |
| paused          | boolean                                             | Whether the video is paused or not.                                               |
| poster          | string                                              | The URL of an image to display as the video poster.                               |
| thumbnail       | string                                              | The URL of an image to display as the video thumbnail.                            |
| autoPlay        | boolean                                             | Whether the video should automatically start playing when loaded.                 |
| playbackRate    | number                                              | The playback rate of the video (e.g., 1 for normal speed, 2 for double speed).    |
| playsInline     | boolean                                             | Whether the video should play inline (e.g., in the same layout as other content). |
| preload         | string                                              | Specifies how the video should be loaded when the page loads.                     |
| crossOrigin     | "anonymous" \| "use-credentials" \| "" \| undefined | The CORS setting for the video resource.                                          |
| loop            | boolean                                             | Whether the video should loop playback.                                           |
| muted           | boolean                                             | Whether the video should be muted.                                                |
| containerRef    | React.Ref<any>                                      | Reference to the container element of the video player.                           |
| block           | boolean                                             | Whether the video player should be displayed full width or not.                   |
| rounded         | boolean                                             |

### 🎉 Event Props

| Props            | Type             | Default | Note                                                                                |
| ---------------- | ---------------- | ------- | ----------------------------------------------------------------------------------- |
| onClick          | Function (Event) | null    | Called when click on video player                                                   |
| onClickNext      | Function (Event) | null    | Called when click Next button                                                       |
| onClickPrevious  | Function (Event) | null    | Called when click Previous button                                                   |
| onPlay           | Function (Event) | null    | Called when user plays the video                                                    |
| onPause          | Function (Event) | null    | Called when user pauses the video                                                   |
| onAbort          | Function (Event) | null    | Called when unloading the video player, like when switching to a different src file |
| onEnded          | Function (Event) | null    | Called when playback has finished to the end of the file                            |
| onError          | Function (Event) | null    | Called when the video tag encounters an error                                       |
| onProgress       | Function (Event) | null    | Called when the video is on progress                                                |
| onLoadStart      | Function (Event) | null    | Called when the video is loading                                                    |
| onDurationChange | Function (Event) | null    | Called when the duration video change                                               |
| onVolumeChange   | Function (Event) | null    | Called when the volume video change                                                 |
| onScreenshot     | Function (File)  | null    | Called when the user screenshot                                                     |
| onLoadedData     | Function ()      | null    | Called when the video data loaded                                                   |
| onWaiting        | Function ()      | null    | Called when the user is waiting the video to load                                   |
| onDownload       | Function ()      | null    | Called when the user download the video                                             |

## 🔄 Dynamic Source Switching with Tooltip Preview

Vidify supports passing an array of video sources (srcs) to enable dynamic source switching. This feature allows users to seamlessly switch between different video sources within the same player instance. Additionally, when hovering over the next or previous video button, Vidify displays a tooltip previewing the next or previous video. This enhancement provides users with a visual preview of upcoming content, enabling informed decisions when switching between videos.

```jsx
import { VideoPlayer } from "vidify";

const videoSources = [
  "https://example.com/video1.mp4",
  "https://example.com/video2.mp4",
  "https://example.com/video3.mp4",
];

const MyVideoPlayer = () => (
  <VideoPlayer
    src={videoSources}
    controls
    autoplay
    className="my-video-player"
  />
);

export default MyVideoPlayer;
```

![screenshot](https://res.cloudinary.com/dj6kxvxqb/image/upload/v1715112646/Screen_Shot_2024-05-07_at_9.07.27_PM_eca32w.png)

## 🎨 Customizable Primary Color

Vidify provides a 'primaryColor' prop that allows users to specify a custom primary color for the video player interface. This feature enables users to match the video player's appearance to their application's branding or design scheme.

```jsx
import { VideoPlayer } from "vidify";

const MyVideoPlayer = () => (
  <VideoPlayer
    src="https://example.com/video.mp4"
    controls
    autoplay
    primaryColor="red"
    className="my-video-player"
  />
);

export default MyVideoPlayer;
```

![screenshot](https://res.cloudinary.com/dj6kxvxqb/image/upload/v1715112647/Screen_Shot_2024-05-07_at_9.08.33_PM_xcf3ij.png)

## 🛠️ Control Bar and Progress Bar Customization

The `controller` prop in Vidify allows for fine-grained control over the visibility and customization of the control bar and progress bar. Users can choose from various options to tailor the video player interface according to their needs.

### Option 1: Hide Control Bar and Progress Bar

Setting `controller={false}` hides both the control bar and progress bar, providing a minimalist video player interface.

### Option 2: Custom Control Bar

Passing a function to the `controller` prop allows users to create their own custom control bar using React components. The function receives an `actions` object containing methods to control the video playback (e.g., `play`, `pause`).

```jsx
controller={(actions, info) => (
  <div>
    <span onClick={actions?.play}>Play</span>
    <span onClick={actions?.pause}>Pause</span>
  </div>
)}

```

### Option 3: Advanced Control Options

Users can provide an object to the `controller` prop to enable advanced control options. This object allows for granular control over individual components of the video player interface, such as the screenshot button, fullscreen button, and progress bar.

```jsx
controller={{
  screenshot: {
    allow: true,
    style: { color: "red" },
    className: "custom-button",
  },
  fullscreen: false,
  progressBar: false,
  controlBar: (actions, info) => (
    <div style={{ display: "flex", columnGap: "10px" }}>
      <p>{info.currentTime} / {info.duration}</p>
      <button onClick={actions?.play}>Play</button>
      <button onClick={actions?.pause}>Pause</button>
      <p>Volume</p>
      <input
        type="range"
        onChange={(e) => actions?.setVolume(+e.target. value / 100)}
      />
      <button onClick={actions?.screenShot}  >ScreenShot</button>
      <button onClick={actions?.download}>Download</button>
    /div>
  ),
}}

```

![screenshot](https://res.cloudinary.com/dj6kxvxqb/image/upload/v1715112646/Screen_Shot_2024-05-07_at_9.10.19_PM_vtqkes.png)

### Option 4: Custom Buttons

Users can add custom buttons to the control bar by providing an array of custom button objects. Each button object specifies the button's content and placement (either "left" or "right").

```jsx
controller={{
  customButtons: [
    { content: <div>Button 1</div>, placement: "left" },
    { content: <div>Button 2</div>, placement: "right" },
  ],
}}

```

## ❤️ Support

If you've found Vidify useful and would like to support its ongoing development, you can donate via Buy Me a Coffee:

<a href="https://buymeacoffee.com/hazembraiek" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200"></a>

Your support is greatly appreciated! ☕️❤️

## ⌨️ Development

🚀 Follow these steps to clone and run Vidify locally:

```bash
$ git clone https://github.com/braiekhazem/Vidify.git
$ cd vidify
$ npm install
$ npm run dev  # for running the development server
# OR
$ npm run demo # for running the demo
```

Open your browser and visit http://localhost:3000 .

## 🤝 How to Contribute

Thank you for considering contributing to Vidify! Here's how you can help:

### Opening Issues

If you encounter any bugs or have suggestions for improvements, please [open an issue](https://github.com/your-username/vidify/issues) on GitHub. Be sure to include detailed information about the issue or suggestion, along with any relevant screenshots or code examples.

### Pull Requests

We welcome contributions from the community! If you'd like to contribute code changes, enhancements, or new features, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are thoroughly tested.
4. Submit a pull request with a clear description of your changes and the problem they solve.
5. We'll review your pull request and provide feedback or merge it into the main branch.

### Code Style

Please adhere to the existing code style and conventions when making changes to the codebase. This helps maintain consistency and readability across the project.

### Feature Requests

If you have an idea for a new feature or improvement, feel free to [open an issue](https://github.com/braiekhazem/Vidify/issues) to discuss it with the maintainers and community members. We're always interested in hearing your ideas!

By contributing to Vidify, you're helping to make it a better tool for everyone. Thank you for your support!

## 📜 License

```markdown
Copyright 2024 Hazem braiek

Licensed under the Apache License, Version 2.0.
You may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
