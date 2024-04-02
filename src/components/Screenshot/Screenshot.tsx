import React from "react";
import { ScreenshotProps } from "./@types";
import { ReactComponent as ScreenShotSVG } from "../../global/assets/icons/screenshot/screenshot.svg";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import classNames from "classnames";

const Screenshot: React.FC<ScreenshotProps> = (props) => {
  const { className, onClick } = props;

  const prefixCls = getPrefixCls("screenshot-button");

  const classes = classNames(prefixCls, className);

  return (
    <div className={classes} onClick={onClick}>
      <ScreenShotSVG width={26} height={26} />
    </div>
  );
};

export default Screenshot;
