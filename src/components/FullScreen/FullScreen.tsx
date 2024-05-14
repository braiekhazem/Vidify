import React, { useEffect, useState } from "react";
import { FullScreenProps } from "./@types";
import { ReactComponent as FullscreenSVG } from "../../global/assets/icons/fullscreen/fullscreen.svg";
import { ReactComponent as CancelFullscreenSVG } from "../../global/assets/icons/fullscreen/cancel-fullscreen.svg";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import classNames from "classnames";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

function isFullScreen() {
  return Boolean(
    document.fullscreenElement ||
      document.fullscreenElement ||
      document.fullscreenElement ||
      document.fullscreenElement
  );
}

const DoFullScreen = (el: HTMLElement): void => {
  if (!isFullScreen()) {
    if (el === undefined) el = document.documentElement;
    if (document.fullscreenEnabled) {
      el.requestFullscreen();
    } else if (document.fullscreenEnabled) {
      el.requestFullscreen();
    } else if (document.fullscreenEnabled) {
      el.requestFullscreen();
    } else if (document.fullscreenEnabled) {
      el.requestFullscreen();
    }
  }
};

export const fullScreenMode = () => {
  const element: any = document.querySelector(".vf-video-wrapper"); //container element
  if (!document.fullscreenElement) {
    DoFullScreen(element);
  } else if (document.exitFullscreen) {
    document.exitFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  }
};

export const FullScreen: React.FC<FullScreenProps> = (props) => {
  const { onCancelFullScreen, onFullScreen, className } = props;

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const fullscreenChangeHandler = () => {
    setIsFullscreen(!!document.fullscreenElement);
    if (!!document.fullscreenElement) {
      onFullScreen && onFullScreen();
    } else {
      onCancelFullScreen && onCancelFullScreen();
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  const prefixCls = getPrefixCls("fullscreen-button");

  const classes = classNames(prefixCls, className);

  const Icon = isFullscreen ? CancelFullscreenSVG : FullscreenSVG;

  return (
    <div className={classes} onClick={fullScreenMode}>
      <Icon width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
    </div>
  );
};

export default FullScreen;
