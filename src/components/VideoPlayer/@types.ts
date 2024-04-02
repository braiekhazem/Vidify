import { CSSProperties } from "react";

export interface VideoPlayerProps {
  src: string;
  startTime?: number;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  primaryColor?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  title?: string;
  style?: CSSProperties;
  currentTime?: number;
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
  onLoadedData?: () => void;
}

export interface VideoPlayerState {
  playing: boolean;
  loop: boolean;
  muted: boolean;
  volume: number;
  duration: number;
  buffering: boolean;
  bufferingProgress: number;
  currentTime: number;
  fullscreen: boolean;
  speed: number;
  error: any;
  rendered: boolean;
  videoLoaded: boolean;
  quality: string | null;
  subtitle: string | null;
  playbackProgress: number;
  loadingData: boolean;
  actions?: {
    play: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      videoRef?: HTMLVideoElement
    ) => void;
    pause: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      videoRef?: HTMLVideoElement
    ) => void;
    setVolume: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      volume: number,
      videoRef?: HTMLVideoElement
    ) => void;
    mute: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      videoRef?: HTMLVideoElement
    ) => void;
    setCurrentTime: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      currentTime: number,
      videoRef?: HTMLVideoElement
    ) => void;
    updateCurrentTime: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      newCurrentTime: number,
      videoRef?: HTMLVideoElement
    ) => void;
    setFullscreen: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      fullscreen: boolean
    ) => void;
    setLoadingData: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      loading: boolean
    ) => void;
    screenShot: (
      fn: React.Dispatch<React.SetStateAction<VideoPlayerState>>,
      videoRef?: HTMLVideoElement
    ) => void;
  };
}
