import { CSSProperties, ReactNode } from "react";
import { controlBarAllowedItems } from "../ControlsBar/@types";

export interface customButton {
  placement: "left" | "right";
  content: ReactNode;
}

export interface contextmenu extends controlBarAllowedItems {
  customButtons?: customButton[];
  progressBar?: boolean;
  controlBar?: contextmenuRender;
}

export type contextmenuRender = (
  actions: VideoPlayerState["actions"],
  info: VideoPlayerState
) => ReactNode;

export interface VideoPlayerProps {
  src: string | string[];
  defaultSrcIndex?: number;
  startTime?: number;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  primaryColor?: string;
  annotation?: ReactNode;
  annotationStyle?: CSSProperties;
  width?: string;
  height?: string;
  durationType?: "remainingTime" | "default";
  placeholder?: string;
  title?: string;
  style?: CSSProperties;
  currentTime?: number;
  controller?: contextmenu | boolean | contextmenuRender;
  volume?: number;
  paused?: boolean;
  poster?: string;
  thumbnail?: string;
  autoPlay?: boolean;
  playbackRate?: number;
  playsInline?: boolean;
  preload?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
  loop?: boolean;
  muted?: boolean;
  containerRef?: React.Ref<any>;
  block?: boolean;
  rounded?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  onClickNext?: () => void;
  onClickPrevious?: () => void;
  onError?: (error?: string) => void;
  onPlay?: () => void;
  onProgress?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onLoadStart?: () => void;
  onDurationChange?: () => void;
  onVolumeChange?: () => void;
  onScreenshot?: (screenshot: string) => void;
  onLoadedData?: () => void;
  onWaiting?: () => void;
  onDownload?: () => void;
  onAbort?: () => void;
}

export interface VideoPlayerState {
  playing: boolean;
  src: VideoPlayerProps["src"];
  loop: boolean;
  muted: boolean;
  volume: number;
  duration: number;
  buffering: boolean;
  bufferingProgress: number;
  primaryColor: string;
  durationType: VideoPlayerProps["durationType"];
  currentTime: number;
  fullscreen: boolean;
  downloading: boolean;
  currentSrcIndex: number;
  speed: number;
  error: any;
  rendered: boolean;
  videoLoaded: boolean;
  playbackProgress: number;
  loadingData: boolean;
  actions?: {
    play: () => void;
    pause: () => void;
    setVolume: (volume: number) => void;
    mute: () => void;
    setCurrentTime: (currentTime: number) => void;
    updateCurrentTime: (newCurrentTime: number) => void;
    setFullscreen: (fullscreen: boolean) => void;
    setLoadingData: (loading: boolean) => void;
    screenShot: () => void;
    setCurrentSrcIndex: (index: number) => void;
    nextVideo: () => void;
    previousVideo: () => void;
    download: () => void;
  };
}
