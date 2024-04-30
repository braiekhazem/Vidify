import React from "react";
import { DownloadProps } from "./@types";
import { ReactComponent as DownloadSVG } from "../../global/assets/icons/download/download.svg";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";
import classNames from "classnames";
import { getPrefixCls } from "./../../utils/getPrefixCls";

const Download: React.FC<DownloadProps> = (props) => {
  const { onClick, className } = props;

  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClick && onClick();
  };

  const prefixCls = getPrefixCls("download-button");

  const classes = classNames(prefixCls, className);
  return (
    <div className={classes} onClick={onClickHandler}>
      <DownloadSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
    </div>
  );
};

export default Download;
