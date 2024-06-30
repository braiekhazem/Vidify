import { VideoPlayerState } from "@src/components/VideoPlayer/@types";

export const syncStateWithVideo = (
  video: HTMLVideoElement,
  state: VideoPlayerState
) => {
  const { playing, videoLoaded, muted, volume, speed } = state;
  if (!videoLoaded) return;

  if (playing) {
    video.play().catch((e) => console.error("Vidify: Error playing video", e));
  } else {
    video.pause();
  }

  if (video.muted !== muted) video.muted = muted;

  if (video.volume !== volume)
    if (volume >= 0 && volume <= 1) {
      video.volume = volume;
    } else console.error("Volume outside of range [0,1]");

  if (speed !== video.playbackRate) {
    video.playbackRate = speed;
  }
};
