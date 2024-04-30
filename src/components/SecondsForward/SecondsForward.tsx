import React from "react";
import { SecondsForwardProps } from "./@types";
import { ReactComponent as NextSecondsSVG } from "../../global/assets/icons/secondsForward/next5-seconds.svg";
import { ReactComponent as PrevSecondsSVG } from "../../global/assets/icons/secondsForward/prev5-seconds.svg";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const SecondsForward: React.FC<SecondsForwardProps> = (props) => {
  const { isNext, onClick } = props;

  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClick && onClick(isNext, 5);
  };

  const prefixCls = getPrefixCls("seconds-forward-button");
  const Icon = isNext ? NextSecondsSVG : PrevSecondsSVG;

  return (
    <div className={prefixCls} onClick={onClickHandler}>
      <Icon width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
    </div>
  );
};

export default SecondsForward;
