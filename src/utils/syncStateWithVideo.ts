import { VideoPlayerState } from "@src/components/VideoPlayer/@types";
import i18n from "@src/i18n";

export const syncStateWithVideo = (
  video: HTMLVideoElement,
  state: VideoPlayerState
) => {
  const { playing, videoLoaded, muted, volume, lang } = state;
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

  if (lang) {
    i18n.changeLanguage(lang);
  }
};
