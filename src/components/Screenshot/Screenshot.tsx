import React from "react";
import { ScreenshotProps } from "./@types";
import { ReactComponent as ScreenShotSVG } from "../../global/assets/icons/screenshot/screenshot.svg";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import classNames from "classnames";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const Screenshot: React.FC<ScreenshotProps> = (props) => {
  const { className, onClick, icon } = props;

  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClick && onClick();
  };

  const prefixCls = getPrefixCls("screenshot-button");

  const classes = classNames(prefixCls, className);

  return (
    <div className={classes} onClick={onClickHandler}>
      {icon || (
        <ScreenShotSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
      )}
    </div>
  );
};

export default Screenshot;
