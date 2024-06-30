import React from "react";
import { MiniPlayerProps } from "./@types";
import { ReactComponent as MiniPlayerSVG } from "../../global/assets/icons/miniPlayer/miniPlayer.svg";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const MiniPlayer: React.FC<MiniPlayerProps> = (props) => {
  const { video, icon } = props;

  const onClickHandler = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!video) return;
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const prefixCls = getPrefixCls("miniplayer-button");

  return (
    <div className={prefixCls} onClick={onClickHandler}>
      {icon || (
        <MiniPlayerSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
      )}
    </div>
  );
};

export default MiniPlayer;
