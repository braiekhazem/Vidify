import React, { ReactNode } from "react";
import { VideoPlayerState } from "../VideoPlayer/@types";
export interface WrapperProps {
    children: ReactNode;
    playing: boolean;
    videoState: VideoPlayerState;
    currentVideoRef: React.Ref<any>;
    className: string;
    prefixCls: string;
    title: string;
    onKeyDown: any;
    ref: any;
    onDoubleClick: any;
    onClick: any;
    tabIndex: number;
    style: React.CSSProperties;
    controlBarElement: HTMLDivElement | null;
}
