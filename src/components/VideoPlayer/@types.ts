import { CSSProperties, ReactNode } from "react";
import { controlBarAllowedItems } from "../ControlsBar/@types";
import { itemMenu } from "../Wrapper/@types";

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

export interface errorOptions {
  withRetry?: boolean;
  errorMessage?: string;
  onRetry?: (src: string) => void;
  className?: string;
  renderError?: (src: string) => ReactNode;
}

export interface IFilterItem {
  value: number;
  min: number;
  max: number;
}

export interface IVideoFilter {
  opacity: IFilterItem;
  contrast: IFilterItem;
  saturation: IFilterItem;
  brightness: IFilterItem;
  blur: IFilterItem;
}

export interface VideoPlayerProps {
  src: string | string[];
  defaultSrcIndex?: number;
  startTime?: number;
  children?: React.ReactNode;
  className?: string;
  customLoader?: ReactNode;
  id?: string;
  lang?: "ar" | "en" | "fr";
  contextMenu?: itemMenu[];
  enableContextMenu?: boolean;
  primaryColor?: string;
  annotation?: ReactNode;
  annotationStyle?: CSSProperties;
  width?: string;
  height?: string;
  error?: errorOptions;
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
  keyboardOpened?: boolean;
  filterOpened?: boolean;
  videoFilter: IVideoFilter;
  bufferingProgress: number;
  lang: VideoPlayerProps["lang"];
  annotation: boolean;
  durationType: VideoPlayerProps["durationType"];
  currentTime: number;
  dropdownSettingsOpen: boolean;
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
    closeDropdownSettings: () => void;
    openDropdownSettings: () => void;
    toggleDropdownSettings: () => void;
    toggleAnnotation: () => void;
    setSpeed: (speed: number) => void;
    togglekeyboardModal: (open: boolean) => void;
    toggleFilterModal: (open: boolean) => void;
    setVideoFilter: (key: keyof IVideoFilter, value: number) => void;
    resetVideoFilters: () => void;
  };
}
