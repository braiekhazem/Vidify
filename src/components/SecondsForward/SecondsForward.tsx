import React from "react";
import { SecondsForwardProps } from "./@types";
import { ReactComponent as NextSecondsSVG } from "../../global/assets/icons/secondsForward/next5-seconds.svg";
import { ReactComponent as PrevSecondsSVG } from "../../global/assets/icons/secondsForward/prev5-seconds.svg";
import { getPrefixCls } from "@src/utils/getPrefixCls";

const SecondsForward: React.FC<SecondsForwardProps> = (props) => {
  const { isNext, onClick } = props;

  const onClickHandler = () => {
    onClick && onClick(isNext, 5);
  };

  const prefixCls = getPrefixCls("seconds-forward-button");
  const Icon = isNext ? NextSecondsSVG : PrevSecondsSVG;

  return (
    <div className={prefixCls} onClick={onClickHandler}>
      <Icon width={26} height={26} />
    </div>
  );
};

export default SecondsForward;
