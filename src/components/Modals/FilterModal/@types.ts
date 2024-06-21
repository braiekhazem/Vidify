import { VideoPlayerState } from "@src/components/VideoPlayer/@types";

export interface FilterModalProps {
  videoState: VideoPlayerState;
  currentVideoRef: HTMLVideoElement | null;
}
