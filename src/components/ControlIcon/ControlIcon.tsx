import { getPrefixCls } from "@src/utils/getPrefixCls";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ControlIconProps } from "./@types";
import { concatPrefixCls } from "@src/utils/concatPrefixCls";

const ControlIcon = React.forwardRef<HTMLElement, ControlIconProps>(
  (props, ref) => {
    const {
      onClick,
      onChange,
      onPause,
      onPlay,
      play = false,
      className,
    } = props;

    const [selfPlay, setSelfPlay] = useState<boolean>(play);
    const prefixCls = getPrefixCls("control-button");

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-pause`]: selfPlay,
    });

    const onClickHandler = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
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

    return (
      <span
        id={concatPrefixCls(prefixCls, "play-button-container")}
        className={classes}
        ref={ref}
        onClick={onClickHandler}
      >
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
      </span>
    );
  }
);

export default ControlIcon;
