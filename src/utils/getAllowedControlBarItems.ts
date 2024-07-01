import { controlBarAllowedItems } from "@src/components/ControlsBar/@types";
import { VideoPlayerProps } from "@src/components/VideoPlayer/@types";

export const defaultAllowedItems: controlBarAllowedItems = {
  screenshot: true,
  fullscreen: true,
  volumeSlider: true,
  download: true,
  duration: true,
  skip: true,
};

export const getAllowedControlBarItems = (
  props: VideoPlayerProps
): controlBarAllowedItems => {
  const { controller = defaultAllowedItems } = props;

  const {
    screenshot = true,
    fullscreen = true,
    volumeSlider = true,
    download = true,
  } = typeof controller === "object"
    ? (controller as controlBarAllowedItems)
    : defaultAllowedItems;

  return {
    screenshot,
    fullscreen,
    volumeSlider,
    download,
  };
};
