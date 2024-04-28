import { controlBarAllowedItems } from "@src/components/ControlsBar/@types";
import { VideoPlayerProps } from "@src/components/VideoPlayer/@types";

export const defaultAllowedItems: controlBarAllowedItems = {
  screenshot: true,
  fullscreen: true,
  volumeSlider: true,
  downlaod: true,
};

export const getAllowedControlBarItems = (
  props: VideoPlayerProps
): controlBarAllowedItems => {
  const { controller = defaultAllowedItems } = props;

  const {
    screenshot = true,
    fullscreen = true,
    volumeSlider = true,
    downlaod = true,
  } = typeof controller === "object"
    ? (controller as controlBarAllowedItems)
    : defaultAllowedItems;

  return {
    screenshot,
    fullscreen,
    volumeSlider,
    downlaod,
  };
};
