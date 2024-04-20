import React from "react";
import { ArrowNavigationProps } from "./@types";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import classNames from "classnames";
import { ReactComponent as NextSVG } from "../../global/assets/icons/arrowNavigation/next.svg";
import { ReactComponent as PreviousSVG } from "../../global/assets/icons/arrowNavigation/previous.svg";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const ArrowNavigation: React.FC<ArrowNavigationProps> = (props) => {
  const { type, onClickNext, onClickPrev, className, disabled } = props;

  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (disabled) return;
    if (type === "next") onClickNext && onClickNext();
    else onClickPrev && onClickPrev();
  };

  const prefixCls = getPrefixCls("arrow-navigation-button");

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
  });

  const Icon = type === "next" ? NextSVG : PreviousSVG;

  return (
    <div className={classes} onClick={onClickHandler}>
      <Icon width={DEFAULT_ICONS_SIZE - 9} height={DEFAULT_ICONS_SIZE - 9} />
    </div>
  );
};

export default ArrowNavigation;
