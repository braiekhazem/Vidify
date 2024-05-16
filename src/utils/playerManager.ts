import { VideoPlayerState } from "@src/components/VideoPlayer/@types";
import { downloadFile } from "./downloadFile";

export const playerManager: (
  setState: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
  video: HTMLVideoElement | null,
  mediaEventHandlers: any
) => VideoPlayerState["actions"] = (setState, video, mediaEventHandlers) => {
  return {
    play() {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        playing: prev.loadingData ? false : true,
      }));
    },

    pause() {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        playing: false,
        loadingData: false,
      }));
    },

    setVolume(volume) {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        volume,
        muted: volume === 0,
      }));
    },

    mute() {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        muted: true,
      }));
    },

    setCurrentTime(currentTime) {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        currentTime,
        rendered: true,
        loadingData: false,
      }));
    },

    updateCurrentTime(newCurrentTime) {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        currentTime: newCurrentTime,
      }));

      video ? (video.currentTime = newCurrentTime) : null;
    },

    setFullscreen(fullscreen) {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        fullscreen,
      }));
    },

    setLoadingData(loading) {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        loadingData: loading,
      }));
    },

    setCurrentSrcIndex(index) {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        currentSrcIndex: index,
      }));
    },

    nextVideo() {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        playing: true,
        currentSrcIndex:
          prev.currentSrcIndex + 1 > prev.src.length - 1
            ? prev.src.length - 1
            : prev.currentSrcIndex + 1,
      }));
      mediaEventHandlers.onClickNext && mediaEventHandlers.onClickNext();
    },

    previousVideo() {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        playing: true,
        currentSrcIndex:
          prev.currentSrcIndex - 1 < 0 ? 0 : prev.currentSrcIndex - 1,
      }));
      mediaEventHandlers.onClickPrevious &&
        mediaEventHandlers.onClickPrevious();
    },

    screenShot() {
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
      ).padStart(2, "0")}-${String(date.getDate()).padStart(
        2,
        "0"
      )} at ${String(date.getHours() % 12 || 12).padStart(2, "0")}.${String(
        date.getMinutes()
      ).padStart(2, "0")}.${String(date.getSeconds()).padStart(2, "0")} ${
        date.getHours() >= 12 ? "PM" : "AM"
      }`;

      const convertDataURLtoFile = async (
        dataURL: string,
        fileName: string
      ) => {
        const response = await fetch(dataURL);
        const blob = await response.blob();
        const file = new File([blob], fileName, { type: blob.type });
        return file;
      };

      let canvas = capture(video as HTMLVideoElement);
      downloadFile({ url: canvas.toDataURL(), name: `${fileName}.png` });
      convertDataURLtoFile(canvas.toDataURL(), fileName).then((file) => {
        mediaEventHandlers.onScreenshot &&
          mediaEventHandlers.onScreenshot(file);
      });
    },

    download() {
      const date = new Date(Date.now());

      const fileName = `Vidify ${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${String(date.getDate()).padStart(
        2,
        "0"
      )} at ${String(date.getHours() % 12 || 12).padStart(2, "0")}.${String(
        date.getMinutes()
      ).padStart(2, "0")}.${String(date.getSeconds()).padStart(2, "0")} ${
        date.getHours() >= 12 ? "PM" : "AM"
      }`;

      setState((prev) => ({ ...prev, downloading: true }));
      downloadFile({
        url: video?.src as string,
        name: `${fileName}.mp4`,
      })
        .then(() => {
          setState((prev) => ({ ...prev, downloading: false }));

          mediaEventHandlers.onDownload && mediaEventHandlers.onDownload();
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
  };
};
