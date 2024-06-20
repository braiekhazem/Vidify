import { VideoPlayerState } from "@src/components/VideoPlayer/@types";

export interface ShortCutModalProps {
  videoState: VideoPlayerState;
  toggleModal: (open: boolean) => void;
}
