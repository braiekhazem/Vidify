import React from "react";
import { MiniPlayerProps } from "./@types";
import { ReactComponent as MiniPlayerSVG } from "../../global/assets/icons/miniPlayer/miniPlayer.svg";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import usePictureInPicture from "react-use-pip";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const MiniPlayer: React.FC<MiniPlayerProps> = (props) => {
  const { video } = props;

  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture({ current: video } as any);

  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    togglePictureInPicture(!isPictureInPictureActive);
  };

  const prefixCls = getPrefixCls("miniplayer-button");

  if (!isPictureInPictureAvailable) return;

  return (
    <div className={prefixCls} onClick={onClickHandler}>
      <MiniPlayerSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
    </div>
  );
};

export default MiniPlayer;
