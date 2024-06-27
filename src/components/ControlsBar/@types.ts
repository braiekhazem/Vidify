import { CSSProperties, ReactNode } from "react";
import {
  VideoPlayerProps,
  VideoPlayerState,
  customButton,
} from "../VideoPlayer/@types";

export interface ItemType {
  allow: boolean;
  style?: CSSProperties;
  className?: string;
  render?: (actions: any) => ReactNode;
}

export interface controlBarAllowedItems {
  screenshot?: ItemType | boolean;
  fullscreen?: ItemType | boolean;
  volumeSlider?: ItemType | boolean;
  download?: ItemType | boolean;
  duration?: ItemType | boolean;
  skip?: ItemType | boolean;
}
export interface ControlsBarProps {
  videoRef: any;
  customControlBar: ReactNode | null;
  videoState: VideoPlayerState;
  customIcons: VideoPlayerProps["customIcons"];
  actions: VideoPlayerState["actions"];
  allowedItems: controlBarAllowedItems;
  progressBar: ReactNode | boolean;
  customButtons: customButton[] | null;
  durationType: VideoPlayerProps["durationType"];
}
