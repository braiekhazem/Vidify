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
  const { contextmenu = defaultAllowedItems } = props;

  const {
    screenshot = true,
    fullscreen = true,
    volumeSlider = true,
    downlaod = true,
  } = typeof contextmenu === "object"
    ? (contextmenu as controlBarAllowedItems)
    : defaultAllowedItems;

  return {
    screenshot,
    fullscreen,
    volumeSlider,
    downlaod,
  };
};
