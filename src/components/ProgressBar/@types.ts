import { VideoPlayerState } from "../VideoPlayer/@types";

export interface ProgressBarProps {
  videoState: VideoPlayerState;
  setVideoState: React.Dispatch<React.SetStateAction<VideoPlayerState>>;
  video: HTMLVideoElement;
}

export interface hoveredPosType {
  duration: number;
  left: number;
}
