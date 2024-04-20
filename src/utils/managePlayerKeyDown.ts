import { VideoPlayerState } from "@src/components/VideoPlayer/@types";

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
  }
};
