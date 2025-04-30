import React, { SyntheticEvent, useEffect, useState } from "react";
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

const requestFullScreen = (
  el: HTMLElement = document.documentElement
): void => {
  if (isFullScreen()) {
    return;
  }

  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if ((el as any).webkitRequestFullscreen) {
    (el as any).webkitRequestFullscreen();
  } else if ((el as any).mozRequestFullScreen) {
    (el as any).mozRequestFullScreen();
  } else if ((el as any).msRequestFullscreen) {
    (el as any).msRequestFullscreen();
  }
};
export const fullScreenMode = (e: SyntheticEvent<HTMLDivElement, Event>) => {
  const element = (e.target as HTMLElement).closest(".vf-video-wrapper"); //container element
  if (!document.fullscreenElement) {
    requestFullScreen(element as HTMLElement);
  } else if (document.exitFullscreen) {
    document.exitFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  }
};

export const FullScreen: React.FC<FullScreenProps> = (props) => {
  const {
    onCancelFullScreen,
    onFullScreen,
    className,
    icon,
    exitFullScreenIcon,
  } = props;

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

  const originalIcon = (
    <Icon width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
  );

  const renderIcon = () => {
    if (isFullscreen) {
      return exitFullScreenIcon || originalIcon;
    }
    return icon || originalIcon;
  };

  return (
    <div className={classes} onClick={fullScreenMode}>
      {renderIcon()}
    </div>
  );
};

export default FullScreen;
