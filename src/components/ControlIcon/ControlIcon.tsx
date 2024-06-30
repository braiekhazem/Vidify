import { getPrefixCls } from "./../../utils/getPrefixCls";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ControlIconProps } from "./@types";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";

const ControlIcon = React.forwardRef<HTMLElement, ControlIconProps>(
  (props, ref) => {
    const {
      onClick,
      onChange,
      onPause,
      onPlay,
      play = false,
      className,
      icon,
      pauseIcon,
    } = props;

    const [selfPlay, setSelfPlay] = useState<boolean>(play);
    const prefixCls = getPrefixCls("control-button");

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-pause`]: selfPlay,
    });

    const onClickHandler = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      event.stopPropagation();

      setSelfPlay(!selfPlay);

      const isPlay = !selfPlay;
      if (isPlay) {
        onPlay && onPlay();
      } else {
        onPause && onPause();
      }

      onChange && onChange(!selfPlay);
      onClick && onClick(event, !selfPlay);
    };

    useEffect(() => {
      setSelfPlay(play);
    }, [play]);

    const PlayIcon = () => (
      <>
        <span
          className={concatPrefixCls(
            prefixCls,
            "play-button play-button-before"
          )}
        ></span>
        <span
          className={concatPrefixCls(
            prefixCls,
            "play-button play-button-after"
          )}
        ></span>
      </>
    );

    const renderIcon = () => {
      if (selfPlay) {
        return pauseIcon || <PlayIcon />;
      }
      return icon || <PlayIcon />;
    };

    return (
      <span
        id={concatPrefixCls(prefixCls, "play-button-container")}
        className={classes}
        ref={ref}
        onClick={onClickHandler}
      >
        {renderIcon()}
      </span>
    );
  }
);

export default ControlIcon;
