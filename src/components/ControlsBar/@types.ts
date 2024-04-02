import { VideoPlayerState } from "../VideoPlayer/@types";

export interface ControlsBarProps {
  videoRef: any;
  videoState: VideoPlayerState;
  setVideoState: React.Dispatch<React.SetStateAction<VideoPlayerState>>;
  actions: VideoPlayerState["actions"];
}
