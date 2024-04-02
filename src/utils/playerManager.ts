import { VideoPlayerState } from "@src/components/VideoPlayer/@types";
import { downloadFile } from "./downloadFile";

export const playerManager: VideoPlayerState["actions"] = {
  play(setState) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      playing: prev.loadingData ? false : true,
    }));
  },

  pause(setState) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      playing: false,
      loadingData: false,
    }));
  },

  setVolume(setState, volume) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      volume,
      muted: volume === 0,
    }));
  },

  mute(setState) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      muted: true,
    }));
  },

  setCurrentTime(setState, currentTime) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      currentTime,
      rendered: true,
      loadingData: false,
    }));
  },

  updateCurrentTime(setState, newCurrentTime, video) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      currentTime: newCurrentTime,
    }));

    video ? (video.currentTime = newCurrentTime) : null;
  },

  setFullscreen(setState, fullscreen) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      fullscreen,
    }));
  },

  setLoadingData(setState, loading) {
    setState((prev: VideoPlayerState) => ({
      ...prev,
      loadingData: loading,
    }));
  },

  screenShot(_, video) {
    const capture = (video: HTMLVideoElement) => {
      let w = video.videoWidth;
      let h = video.videoHeight;
      let canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      let ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0, w, h);
      return canvas;
    };

    const date = new Date(Date.now());

    const fileName = `Screen Shot ${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} at ${String(
      date.getHours() % 12 || 12
    ).padStart(2, "0")}.${String(date.getMinutes()).padStart(2, "0")}.${String(
      date.getSeconds()
    ).padStart(2, "0")} ${date.getHours() >= 12 ? "PM" : "AM"}`;

    let canvas = capture(video as HTMLVideoElement);
    downloadFile({ url: canvas.toDataURL(), name: fileName });
  },
};
