import { VideoPlayerState } from "../VideoPlayer/@types";
export interface PlayButtonProps {
    onPlay: () => void;
    onPuase: () => void;
    videoState: VideoPlayerState;
}
