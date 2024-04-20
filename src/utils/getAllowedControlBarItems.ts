import { controlBarAllowedItems } from "@src/components/ControlsBar/@types";
import { VideoPlayerProps } from "@src/components/VideoPlayer/@types";

export const defaultAllowedItems = {
  screenshot: true,
  fullScreen: true,
  volumeSlider: true,
};

export const getAllowedControlBarItems = (
  props: VideoPlayerProps
): controlBarAllowedItems => {
  const { contextmenu = defaultAllowedItems } = props;
  const {
    screenshot = true,
    fullScreen = true,
    volumeSlider = true,
  } = contextmenu;

  return {
    screenshot,
    fullScreen,
    volumeSlider,
  };
};
