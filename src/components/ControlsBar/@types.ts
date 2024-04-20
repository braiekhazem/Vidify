import { VideoPlayerProps, VideoPlayerState } from "../VideoPlayer/@types";

export interface controlBarAllowedItems {
  screenshot?: boolean;
  fullScreen?: boolean;
  volumeSlider?: boolean;
}
export interface ControlsBarProps {
  videoRef: any;
  videoState: VideoPlayerState;
  actions: VideoPlayerState["actions"];
  allowedItems: controlBarAllowedItems;
  durationType: VideoPlayerProps["durationType"];
}
