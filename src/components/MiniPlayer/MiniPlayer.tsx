import React from "react";
import { MiniPlayerProps } from "./@types";
import { ReactComponent as MiniPlayerSVG } from "../../global/assets/icons/miniPlayer/miniPlayer.svg";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import usePictureInPicture from "react-use-pip";

const MiniPlayer: React.FC<MiniPlayerProps> = (props) => {
  const { video } = props;

  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture({ current: video } as any);

  const prefixCls = getPrefixCls("miniplayer-button");

  if (!isPictureInPictureAvailable) return;

  return (
    <div
      className={prefixCls}
      onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
    >
      <MiniPlayerSVG width={26} height={26} />
    </div>
  );
};

export default MiniPlayer;
