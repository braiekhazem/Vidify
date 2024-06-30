import React, { useEffect, useRef, useState } from "react";
import { ProgressBarProps, hoveredPosType } from "./@types";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import classNames from "classnames";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import { getPercentage } from "./../../utils/getPercentage";
import { formatTime } from "./../../utils/formatDurationTime";

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { videoState } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef<HTMLDivElement>(null);
  const [hoveredPos, setHoveredPos] = useState<hoveredPosType | null>(null);
  const [containerWidth, setConatinerWidth] = useState<number>(0);

  const playProgress = Math.round(
    getPercentage(videoState.currentTime, videoState.duration)
  );
  const loadProgress = Math.round(videoState.bufferingProgress);

  useEffect(() => {
    if (containerRef.current)
      setConatinerWidth(containerRef.current.clientWidth);
  }, [containerRef, videoState.fullscreen]);

  const seekToPosition = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const clickedPos = (event.clientX - left) / width;
    if (clickedPos < 0 || clickedPos > 1) return;
    const durationMs = videoState.duration * 1000 || 0;

    const newElapsedMs = durationMs * clickedPos;
    const newTimeSec = newElapsedMs / 1000;

    videoState.actions?.updateCurrentTime(newTimeSec);
  };

  const setHoveredPosition = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const clickedPos = (event.clientX - left) / width;
    if (clickedPos < 0 || clickedPos > 1) return;

    const durationMs = videoState.duration * 1000 || 0;

    const newElapsedMs = durationMs * clickedPos;
    const newTimeSec = newElapsedMs / 1000;
    setHoveredPos({ duration: newTimeSec, left: event.clientX - left });
  };

  // const seekToPositionByDrag = (
  //   event: MouseEvent | TouchEvent | PointerEvent,
  //   info: any
  // ) => {
  //   const { offset, point } = info;
  //   const { left, width } = event.srcElement.getBoundingClientRect();
  //   const clickedPos = (offset.x - left) / containerWidth;
  //   if (clickedPos < 0 || clickedPos > 1) return;

  //   const durationMs = videoState.duration * 1000 || 0;

  //   const newElapsedMs = durationMs * clickedPos;
  //   const newTimeSec = newElapsedMs / 1000;
  //   // videoState.actions?.updateCurrentTime(setVideoState, newTimeSec, video);
  // };

  const prefixCls = getPrefixCls("progress-bar");

  const classes = classNames(prefixCls);

  return (
    <div
      className={classes}
      onClick={seekToPosition}
      onMouseEnter={setHoveredPosition}
      onMouseMove={setHoveredPosition}
      onMouseLeave={() => setHoveredPos(null)}
      ref={containerRef}
    >
      <div className={concatPrefixCls(prefixCls, "overlay")}></div>
      {hoveredPos && (
        <div
          className={concatPrefixCls(prefixCls, "hovered-bar")}
          style={{ width: hoveredPos.left }}
        ></div>
      )}
      {hoveredPos && (
        <div
          ref={hoveredRef}
          className={concatPrefixCls(prefixCls, "hovered-duration")}
          style={{
            left:
              hoveredRef.current && containerWidth - hoveredPos?.left <= 12
                ? containerWidth - 12
                : hoveredPos.left <= 12
                ? 12
                : hoveredPos.left,
          }}
        >
          {formatTime(hoveredPos.duration, formatTime(videoState.duration))}
        </div>
      )}
      <div
        className={concatPrefixCls(prefixCls, "play-progress")}
        style={{ width: playProgress + "%" }}
      ></div>
      <div
        className={concatPrefixCls(prefixCls, "load-progress")}
        style={{ width: loadProgress + "%" }}
      ></div>
      <div className={concatPrefixCls(prefixCls, "hover")}></div>
      {/* <motion.div
        className="drag-cr"
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{
          left: 0,
          right: containerWidth - 12,
        }}
        onDrag={seekToPositionByDrag}
      /> */}
      {/* {loadProgress}///{playProgress} */}
    </div>
  );
};

export default ProgressBar;
