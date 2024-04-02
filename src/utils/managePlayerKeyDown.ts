import { VideoPlayerState } from "@src/components/VideoPlayer/@types";

export const managePlayerKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  actions: VideoPlayerState["actions"],
  setState: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
  videoState: VideoPlayerState,
  video: HTMLVideoElement
) => {
  if (event.keyCode === 32 || event.key === " ") {
    videoState.playing ? actions?.pause(setState) : actions?.play(setState);
  } else if (event.keyCode === 37 || event.key === "ArrowLeft") {
    actions?.updateCurrentTime(setState, videoState.currentTime - 5, video);
  } else if (event.keyCode === 39 || event.key === "ArrowRight") {
    actions?.updateCurrentTime(setState, videoState.currentTime + 5, video);
  } else if (event.keyCode === 38 || event.key === "ArrowUp") {
    if (videoState.volume < 1)
      actions?.setVolume(
        setState,
        videoState.volume + 0.1 > 1 ? 1 : videoState.volume + 0.1
      );
  } else if (event.keyCode === 40 || event.key === "ArrowDown") {
    if (videoState.volume > 0)
      actions?.setVolume(
        setState,
        videoState.volume - 0.1 < 0 ? 0 : videoState.volume - 0.1
      );
  }
};
