import { fullScreenMode } from "./../components/FullScreen/FullScreen";
import { VideoPlayerState } from "@src/components/VideoPlayer/@types";

export const vidifyShortcuts = {
  play: "k",
  fullscreen: "f",
  screenshot: "SHIFT+S",
  download: "SHIFT D",
  mute: "m",
  next_video: "SHIFT+P",
  prev_video: "SHIFT+N",
};

export const managePlayerKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  actions: VideoPlayerState["actions"],
  videoState: VideoPlayerState
) => {
  if (event.keyCode === 32 || event.key === " ") {
    videoState.playing ? actions?.pause() : actions?.play();
  } else if (event.keyCode === 37 || event.key === "ArrowLeft") {
    actions?.updateCurrentTime(videoState.currentTime - 5);
  } else if (event.keyCode === 39 || event.key === "ArrowRight") {
    actions?.updateCurrentTime(videoState.currentTime + 5);
  } else if (event.keyCode === 38 || event.key === "ArrowUp") {
    if (videoState.volume < 1)
      actions?.setVolume(
        videoState.volume + 0.1 > 1 ? 1 : videoState.volume + 0.1
      );
  } else if (event.keyCode === 40 || event.key === "ArrowDown") {
    if (videoState.volume > 0)
      actions?.setVolume(
        videoState.volume - 0.1 < 0 ? 0 : videoState.volume - 0.1
      );
  } else if (
    event.shiftKey &&
    (event.key === "P" || event.key === "p") &&
    typeof videoState.src !== "string"
  ) {
    actions?.nextVideo();
  } else if (
    event.shiftKey &&
    (event.key === "N" || event.key === "n") &&
    typeof videoState.src !== "string"
  ) {
    actions?.previousVideo();
  } else if (event.key === "m" || event.key === "M") {
    if (videoState.muted) {
      actions?.setVolume(videoState.volume);
    } else actions?.mute();
  } else if (event.key === "f" || event.key === "F") {
    if (videoState.fullscreen) actions?.setFullscreen(false);
    else actions?.setFullscreen(true);
    fullScreenMode();
  } else if (event.key === "k" || event.key === "K") {
    videoState.playing ? actions?.pause() : actions?.play();
  } else if (event.shiftKey && (event.key === "S" || event.key === "s")) {
    actions?.screenShot();
  } else if (event.shiftKey && (event.key === "D" || event.key === "d")) {
    actions?.download();
  }
};
