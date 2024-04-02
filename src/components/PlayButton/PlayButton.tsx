import React, { useEffect, useRef } from "react";
import { PlayButtonProps } from "./@types";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import classNames from "classnames";

const PlayButton: React.FC<PlayButtonProps> = (props) => {
  const {
    onPlay,
    onPuase,
    videoState: { playing, rendered, videoLoaded },
  } = props;

  const prefixCls = getPrefixCls("play-button");

  const onClickHandler = () => {
    if (playing) {
      onPuase();
    } else {
      onPlay();
    }
  };

  const classes = classNames(prefixCls, {
    [`${prefixCls}-play`]: playing,
    [`${prefixCls}-pause`]: !playing,
  });

  const iconContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!rendered) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (iconContainerRef.current) {
      iconContainerRef.current.style.display = "flex";
    }

    const timerId = setTimeout(() => {
      if (iconContainerRef.current) {
        iconContainerRef.current.style.display = "none";
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [playing]);

  //   if (firstRender) {
  //     return <div onClick={onClickHandler}></div>;
  //   }

  return (
    <div
      className={classes}
      id={!rendered && !playing && videoLoaded ? `${prefixCls}-initial` : ""}
      onClick={onClickHandler}
      ref={iconContainerRef}
      title={!rendered ? "play" : ""}
    >
      {!playing ? (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="35px"
          width="35px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
        </svg>
      ) : (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="35px"
          width="35px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></path>
        </svg>
      )}
    </div>
  );
};

export default PlayButton;
