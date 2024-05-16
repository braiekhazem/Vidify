import { VideoPlayerState } from "@src/components/VideoPlayer/@types";

export const syncStateWithVideo = (
  video: HTMLVideoElement,
  state: VideoPlayerState
) => {
  const { playing, videoLoaded, muted, volume } = state;
  if (!videoLoaded) return;

  if (playing) {
    video.play();
  } else {
    video.pause();
  }

  video.muted = muted;
  if (volume >= 0 && volume <= 1) {
    video.volume = volume;
  } else console.error("Volume outside of range [0,1]");
};
