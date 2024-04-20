import { CSSProperties, ReactNode } from "react";
import { controlBarAllowedItems } from "../ControlsBar/@types";

interface contextmenu extends controlBarAllowedItems {}
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
  contextmenu?: contextmenu;
  volume?: number;
  paused?: boolean;
  poster?: string;
  thumbnail?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  containerRef?: React.Ref<any>;
  block?: boolean;
  rounded?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
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
  currentTime: number;
  fullscreen: boolean;
  currentSrcIndex: number;
  speed: number;
  error: any;
  rendered: boolean;
  videoLoaded: boolean;
  quality: string | null;
  subtitle: string | null;
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
  };
}
