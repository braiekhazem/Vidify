import React, { ReactNode, useEffect, useState } from "react";
import { ControlsBarProps, controlBarAllowedItems } from "./@types";
import classNames from "classnames";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import ControlIcon from "../ControlIcon";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import SoundIcon from "../SoundIcon";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatTime } from "./../../utils/formatDurationTime";
import Settings from "../Settings";
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
import { getPercentage } from "./../../utils/getPercentage";
import Download from "../Download";
import { vidifyShortcuts } from "./../../utils/managePlayerKeyDown";
import { VideoPlayer } from "../VideoPlayer";
import { useTranslation } from "react-i18next";

const renderItem = (
  options: controlBarAllowedItems | null,
  item: JSX.Element,
  itemName: string
) => {
  const itemSettings = options
    ? options[itemName as keyof controlBarAllowedItems]
    : null;
  const isBoolean = typeof itemSettings === "boolean";
  const isAllowed = isBoolean ? itemSettings : itemSettings?.allow;
  if (!isAllowed && options) return null;

  const className = !isBoolean && itemSettings?.className;
  const style = !isBoolean && itemSettings?.style;

  const existingClassName = item.props.className;
  const existingStyle = item.props.style;

  const mergedClassName = existingClassName
    ? `${existingClassName} ${className || ""}`
    : className;
  const mergedStyle = { ...existingStyle, ...style };

  const finalItem = React.cloneElement(item, {
    className: `${mergedClassName} ${itemName}`,
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
  const [durationType, setDurationType] = useState<number | null>(null);

  useEffect(() => {
    setDurationType(type === "default" ? 0 : 1);
  }, [type]);

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
    customIcons,
    allowedItems,
    durationType,
    customButtons,
    customControlBar,
    progressBar,
  } = props;
  const prefixCls = getPrefixCls("control-bar");
  const { t } = useTranslation(["video"]);

  const renderButton = (node: ReactNode, tooltipContent: ReactNode) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const childButton = e.currentTarget
        .children[1] as HTMLButtonElement | null;

      if (childButton) childButton.click();
    };

    const randomId = `${Math.random() * 99999}`;

    return (
      <div
        className={concatPrefixCls(prefixCls, "button")}
        onClick={handleClick}
        data-tooltip-id={randomId as string}
      >
        <Tooltip
          id={randomId as string}
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

  const renderProgressBar = progressBar && (
    <ProgressBar videoState={videoState} />
  );

  const renderDefaultControls = (
    <>
      <div className={`${prefixCls}-left`}>
        {typeof videoState.src !== "string" &&
          videoState.currentSrcIndex !== 0 &&
          renderButton(
            <ArrowNavigation
              type="prev"
              icon={customIcons?.previous}
              disabled={videoState.currentSrcIndex === 0}
              onClickPrev={() => actions?.previousVideo()}
            />,
            <div className={concatPrefixCls(prefixCls, "video-preview")}>
              <div>
                {t("previous")} {vidifyShortcuts.prev_video}
              </div>
              <VideoPlayer
                width="300px"
                style={{ maxWidth: "300px" }}
                autoPlay
                controller={false}
                src={videoState.src[videoState.currentSrcIndex - 1] as string}
              />
            </div>
          )}
        {renderButton(
          <ControlIcon
            onPlay={() => actions?.play()}
            onPause={() => actions?.pause()}
            play={videoState.playing}
            icon={customIcons?.play}
            pauseIcon={customIcons?.pause}
          />,
          `${videoState.playing ? t("pause") : t("play")} (${
            vidifyShortcuts.play
          })`
        )}
        {typeof videoState.src !== "string" &&
          !(videoState.currentSrcIndex + 1 > videoState.src.length - 1) &&
          renderButton(
            <ArrowNavigation
              type="next"
              disabled={
                videoState.currentSrcIndex + 1 > videoState.src.length - 1
              }
              icon={customIcons?.next}
              onClickNext={() => actions?.nextVideo()}
            />,
            <div className={concatPrefixCls(prefixCls, "video-preview")}>
              <div>
                {t("next")} {vidifyShortcuts.next_video}
              </div>
              <VideoPlayer
                width="300px"
                style={{ maxWidth: "300px" }}
                autoPlay
                controller={false}
                src={videoState.src[videoState.currentSrcIndex + 1] as string}
              />
            </div>
          )}

        {renderItem(
          null,
          renderButton(
            <SecondsForward
              isNext={false}
              onClick={(_, sec) =>
                actions?.updateCurrentTime(videoState.currentTime - sec)
              }
              icon={customIcons?.previousForward}
            />,
            `${t("skip_backword")} ←`
          ),
          "skip"
        )}
        {renderItem(
          null,
          renderButton(
            <SecondsForward
              isNext={true}
              onClick={(_, sec) =>
                actions?.updateCurrentTime(videoState.currentTime + sec)
              }
              icon={customIcons?.nextForward}
            />,
            `${t("skip_forword")}  →`
          ),
          "skip"
        )}

        <div className={concatPrefixCls(prefixCls, "volume-area")}>
          {renderButton(
            <SoundIcon
              onClick={(_, volume) => actions?.setVolume(volume)}
              onMute={() => actions?.mute()}
              onVolume={() =>
                actions?.setVolume(videoState.volume ? videoState.volume : 1)
              }
              volume={videoState.volume}
              mute={videoState.muted}
              muteIcon={customIcons?.mute}
              volumeIcon={customIcons?.volume}
            />,
            `${t("volume")} ${getPercentage(
              videoState.volume,
              1
            ).toFixed()}% (${vidifyShortcuts.mute})`
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
          t("duration")
        )}

        {leftCustomButtons?.map((customButton) => customButton.content)}
      </div>
      <div className={`${prefixCls}-right`}>
        {rightCustomButtons?.map((customButton) => customButton.content)}

        {renderItem(
          allowedItems,
          renderButton(
            <Download
              onClick={() => actions?.download()}
              downloading={videoState.downloading}
              icon={customIcons?.download}
            />,
            `${videoState.downloading ? t("downloading") : t("download")} (${
              vidifyShortcuts.download
            })`
          ),
          `download`
        )}
        {renderItem(
          allowedItems,
          renderButton(
            <Screenshot
              onClick={() => actions?.screenShot()}
              icon={customIcons?.screenShot}
            />,
            `${t("screenshot")} (${vidifyShortcuts.screenshot})`
          ),
          "screenshot"
        )}
        {/* {renderButton(<Speed />)} */}
        {/* {renderButton(<Subtitle />)} */}
        {renderButton(
          <Settings
            onClick={() =>
              videoState.dropdownSettingsOpen
                ? actions?.closeDropdownSettings()
                : actions?.openDropdownSettings()
            }
            icon={customIcons?.settings}
            isActive={videoState.dropdownSettingsOpen}
          />,
          t("settings")
        )}
        {renderButton(
          <MiniPlayer video={videoRef} icon={customIcons?.picInPic} />,
          t("mini_player")
        )}
        {renderItem(
          allowedItems,
          renderButton(
            <FullScreen
              onFullScreen={() => actions?.setFullscreen(true)}
              onCancelFullScreen={() => actions?.setFullscreen(false)}
              icon={customIcons?.fullscreen}
              exitFullScreenIcon={customIcons?.exitFullscreen}
            />,
            `${t("fullscreen")} (${vidifyShortcuts.fullscreen})`
          ),
          "fullscreen"
        )}
      </div>
    </>
  );

  return (
    <div className={classes} ref={ref}>
      {renderProgressBar}
      {customControlBar || renderDefaultControls}
    </div>
  );
};

export const ControlsBar = React.forwardRef<HTMLDivElement, ControlsBarProps>(
  internalControlsBar
);
