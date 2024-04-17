import React, { ReactNode } from "react";
import { ControlsBarProps } from "./@types";
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
// import Speed from "../Speed";

const renderVideoDuration = (duration: number, currentTime: number) => {
  const prefixCls = getPrefixCls("duration");

  return (
    <div className={prefixCls}>
      {formatTime(currentTime, formatTime(duration))} / {formatTime(duration)}
    </div>
  );
};

const internalControlsBar: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ControlsBarProps
> = (props, ref) => {
  const { videoRef, videoState, setVideoState, actions } = props;
  const prefixCls = getPrefixCls("control-bar");

  const renderButton = (node: ReactNode) => (
    <div
      className={concatPrefixCls(prefixCls, "button")}
      onClick={(e) => {
        const childButton = e.currentTarget
          .children[0] as HTMLButtonElement | null;

        if (childButton) childButton.click();
      }}
    >
      {node}
    </div>
  );

  const classes = classNames(prefixCls, {
    [`${prefixCls}-hidden`]: videoState.playing,
  });

  return (
    <div className={classes} ref={ref}>
      <ProgressBar
        videoState={videoState}
        setVideoState={setVideoState}
        video={videoRef}
      />
      <div className={`${prefixCls}-left`}>
        {renderButton(
          <ControlIcon
            onPlay={() => actions?.play(setVideoState)}
            onPause={() => actions?.pause(setVideoState)}
            play={videoState.playing}
          />
        )}
        {renderButton(
          <SecondsForward
            isNext={false}
            onClick={(_, sec) =>
              actions?.updateCurrentTime(
                setVideoState,
                videoState.currentTime - sec,
                videoRef
              )
            }
          />
        )}
        {renderButton(
          <SecondsForward
            isNext={true}
            onClick={(_, sec) =>
              actions?.updateCurrentTime(
                setVideoState,
                videoState.currentTime + sec,
                videoRef
              )
            }
          />
        )}
        {renderButton(
          renderVideoDuration(videoState.duration, videoState.currentTime)
        )}

        <div className={concatPrefixCls(prefixCls, "volume-area")}>
          {renderButton(
            <SoundIcon
              onClick={(_, volume) => actions?.setVolume(setVideoState, volume)}
              onMute={() => actions?.mute(setVideoState)}
              onVolume={() =>
                actions?.setVolume(
                  setVideoState,
                  videoState.volume ? videoState.volume : 1
                )
              }
              volume={videoState.volume}
              mute={videoState.muted}
            />
          )}
          <Slider
            className="vf-slider"
            min={0}
            max={1}
            step={0.1}
            value={videoState.muted ? 0 : videoState.volume}
            onChange={(volume) =>
              actions?.setVolume(setVideoState, volume as number)
            }
          />
        </div>
      </div>
      <div className={`${prefixCls}-right`}>
        {renderButton(
          <Screenshot
            onClick={() => actions?.screenShot(setVideoState, videoRef)}
          />
        )}
        {/* {renderButton(<Speed />)} */}
        {/* {renderButton(<Subtitle />)}
        {renderButton(<Settings />)} */}
        {renderButton(<MiniPlayer video={videoRef} />)}
        {renderButton(
          <FullScreen
            onFullScreen={() => actions?.setFullscreen(setVideoState, true)}
            onCancelFullScreen={() =>
              actions?.setFullscreen(setVideoState, false)
            }
          />
        )}
      </div>
    </div>
  );
};

export const ControlsBar = React.forwardRef<HTMLDivElement, ControlsBarProps>(
  internalControlsBar
);
