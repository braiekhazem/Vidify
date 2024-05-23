import React, { ReactNode } from "react";
import { VideoPlayerState } from "../VideoPlayer/@types";

export interface WrapperProps {
  children: ReactNode;
  playing: boolean;
  videoState: VideoPlayerState;
  className: string;
  actions: VideoPlayerState["actions"];
  currentVideoRef: React.Ref<any>;
  prefixCls: string;
  customLoader?: ReactNode;
  title: string;
  onKeyDown: any;
  ref: any;
  onDoubleClick: any;
  onClick: any;
  tabIndex: number;
  style: React.CSSProperties;
  controlBarElement: HTMLDivElement | null;
}
