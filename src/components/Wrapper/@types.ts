import React, { ReactNode } from "react";
import { VideoPlayerState } from "../VideoPlayer/@types";

export interface WrapperProps {
  children: ReactNode;
  playing: boolean;
  videoState: VideoPlayerState;
  className: string;
  actions: VideoPlayerState["actions"];
  currentVideoRef: React.RefObject<HTMLVideoElement>;
  prefixCls: string;
  customLoader?: ReactNode;
  title: string;
  onKeyDown: any;
  ref: any;
  onDoubleClick: any;
  onClick: any;
  tabIndex: number;
  contextMenu: itemMenu[];
  enableContextMenu: boolean;
  style: React.CSSProperties;
  controlBarElement: HTMLDivElement | null;
}

export interface itemMenu {
  label: ReactNode;
  icon?: ReactNode;
  onClick?: (e: any) => void;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ContextMenuProps {
  videoState: VideoPlayerState;
  closeMenu: () => void;
  className?: string;
  onClick?: any;
  items?: itemMenu[];
  style?: React.CSSProperties;
}
