import React, { ReactNode, useState } from "react";
import { ControlsBarProps, controlBarAllowedItems } from "./@types";
import classNames from "classnames";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import ControlIcon from "../ControlIcon";
import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import SoundIcon from "../SoundIcon";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatTime } from "@src/utils/formatDurationTime";
// import Settings from "../Settings";
import FullScreen from "../FullScreen";
// import Subtitle from "../Subtitle";
import MiniPlayer from "../MiniPlayer";
import SecondsForward from "../SecondsForward";
import ProgressBar from "../ProgressBar";
import Screenshot from "../Screenshot";
import ArrowNavigation from "../ArrowNavigation";
import { VideoPlayerProps } from "../VideoPlayer/@types";
// import Speed from "../Speed";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { getPercentage } from "@src/utils/getPercentage";
import Download from "../Download";
import { vidifyShortcuts } from "@src/utils/managePlayerKeyDown";

const renderItem = (
  options: controlBarAllowedItems,
  item: JSX.Element,
  itemName: string
) => {
  const itemSettings = options[itemName as keyof controlBarAllowedItems];
  const isBoolean = typeof itemSettings === "boolean";
  const isAllowed = isBoolean ? itemSettings : itemSettings?.allow;
  if (!isAllowed) return null;

  const className = !isBoolean && itemSettings?.className;
  const style = !isBoolean && itemSettings?.style;

  const existingClassName = item.props.className;
  const existingStyle = item.props.style;

  const mergedClassName = existingClassName
    ? `${existingClassName} ${className || ""}`
    : className;
  const mergedStyle = { ...existingStyle, ...style };

  const finalItem = React.cloneElement(item, {
    className: mergedClassName,
    style: mergedStyle,
  });
  return finalItem;
};

const renderVideoDuration = (
  duration: number,
  currentTime: number,
  type: VideoPlayerProps["durationType"]
) => {
  const prefixCls = getPrefixCls("duration");
  const [durationType, setDurationType] = useState(type === "default" ? 0 : 1);

  return (
    <div
      className={prefixCls}
      onClick={() => setDurationType(durationType === 0 ? 1 : 0)}
    >
      {formatTime(currentTime, formatTime(duration))} /{" "}
      {formatTime(durationType === 0 ? duration : duration - currentTime)}
    </div>
  );
};

const internalControlsBar: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ControlsBarProps
> = (props, ref) => {
  const {
    videoRef,
    videoState,
    actions,
    allowedItems,
    durationType,
    customButtons,
    customControlBar,
    progressBar,
  } = props;
  const prefixCls = getPrefixCls("control-bar");

  const renderButton = (node: ReactNode, tooltipContent: ReactNode) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const childButton = e.currentTarget
        .children[1] as HTMLButtonElement | null;

      if (childButton) childButton.click();
    };

    return (
      <div
        className={concatPrefixCls(prefixCls, "button")}
        onClick={handleClick}
        data-tooltip-id={tooltipContent as string}
      >
        <Tooltip
          id={tooltipContent as string}
          variant="dark"
          offset={20}
          noArrow={true}
          place={"top-end"}
          className={concatPrefixCls(prefixCls, "button-tooltip")}
        >
          {tooltipContent}
        </Tooltip>
        {node}
      </div>
    );
  };

  const classes = classNames(prefixCls, {
    [`${prefixCls}-hidden`]: videoState.playing,
  });

  const leftCustomButtons = customButtons?.filter(
    (button) => button.placement === "left"
  );
  const rightCustomButtons = customButtons?.filter(
    (button) => button.placement === "right"
  );

  return (
    <div className={classes} ref={ref}>
      {progressBar && <ProgressBar videoState={videoState} />}
      {customControlBar ? (
        customControlBar
      ) : (
        <>
          <div className={`${prefixCls}-left`}>
            {typeof videoState.src !== "string" &&
              renderButton(
                <ArrowNavigation
                  type="prev"
                  disabled={videoState.currentSrcIndex === 0}
                  onClickPrev={() => actions?.previousVideo()}
                />,
                `previous (${vidifyShortcuts.prev_video})`
              )}
            {renderButton(
              <ControlIcon
                onPlay={() => actions?.play()}
                onPause={() => actions?.pause()}
                play={videoState.playing}
              />,
              `${videoState.playing ? "Puase" : "Play"} (${
                vidifyShortcuts.play
              })`
            )}
            {typeof videoState.src !== "string" &&
              renderButton(
                <ArrowNavigation
                  type="next"
                  disabled={
                    videoState.currentSrcIndex + 1 > videoState.src.length - 1
                  }
                  onClickNext={() => actions?.nextVideo()}
                />,
                `next (${vidifyShortcuts.next_video})`
              )}

            {renderButton(
              <SecondsForward
                isNext={false}
                onClick={(_, sec) =>
                  actions?.updateCurrentTime(videoState.currentTime - sec)
                }
              />,
              `Previous 5s`
            )}
            {renderButton(
              <SecondsForward
                isNext={true}
                onClick={(_, sec) =>
                  actions?.updateCurrentTime(videoState.currentTime + sec)
                }
              />,
              "Next 5s"
            )}

            <div className={concatPrefixCls(prefixCls, "volume-area")}>
              {renderButton(
                <SoundIcon
                  onClick={(_, volume) => actions?.setVolume(volume)}
                  onMute={() => actions?.mute()}
                  onVolume={() =>
                    actions?.setVolume(
                      videoState.volume ? videoState.volume : 1
                    )
                  }
                  volume={videoState.volume}
                  mute={videoState.muted}
                />,
                `Volume ${getPercentage(videoState.volume, 1).toFixed()}% (${
                  vidifyShortcuts.mute
                })`
              )}
              {allowedItems.volumeSlider && (
                <Slider
                  className="vf-slider"
                  min={0}
                  max={1}
                  step={0.1}
                  value={videoState.muted ? 0 : videoState.volume}
                  onChange={(volume) => actions?.setVolume(volume as number)}
                />
              )}
            </div>
            {renderButton(
              renderVideoDuration(
                videoState.duration,
                videoState.currentTime,
                durationType
              ),
              "duration"
            )}

            {leftCustomButtons?.map((customButton) => customButton.content)}
          </div>
          <div className={`${prefixCls}-right`}>
            {rightCustomButtons?.map((customButton) => customButton.content)}

            {renderItem(
              allowedItems,
              renderButton(
                <Download onClick={() => actions?.download()} />,
                `downlaod (${vidifyShortcuts.download})`
              ),
              `downlaod`
            )}
            {renderItem(
              allowedItems,
              renderButton(
                <Screenshot onClick={() => actions?.screenShot()} />,
                `screenshot (${vidifyShortcuts.screenshot})`
              ),
              "screenshot"
            )}
            {/* {renderButton(<Speed />)} */}
            {/* {renderButton(<Subtitle />)}
        {renderButton(<Settings />)} */}
            {renderButton(<MiniPlayer video={videoRef} />, "mini player")}
            {renderItem(
              allowedItems,
              renderButton(
                <FullScreen
                  onFullScreen={() => actions?.setFullscreen(true)}
                  onCancelFullScreen={() => actions?.setFullscreen(false)}
                />,
                `fullscreen (${vidifyShortcuts.fullscreen})`
              ),
              "fullscreen"
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const ControlsBar = React.forwardRef<HTMLDivElement, ControlsBarProps>(
  internalControlsBar
);
