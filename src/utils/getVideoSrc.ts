import {
  VideoPlayerProps,
  VideoPlayerState,
} from "@src/components/VideoPlayer/@types";

export const getVideoSrc = (
  props: VideoPlayerProps,
  videoState: VideoPlayerState
) => {
  const { src } = props;
  const { currentSrcIndex } = videoState;

  if (
    typeof src !== "string" &&
    src?.length &&
    currentSrcIndex <= src?.length
  ) {
    return src[currentSrcIndex];
  } else if (src && typeof src === "string") {
    return src;
  }

  return undefined;
};
