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
  video.volume = volume;
};
