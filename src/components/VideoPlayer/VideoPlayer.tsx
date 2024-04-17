import { SyntheticEvent, forwardRef, useEffect, useRef, useState } from "react";
import { VideoPlayerProps, VideoPlayerState } from "./@types";
import ClassNames from "classnames";
import mergeRefs from "@src/utils/mergeRefs";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import { ControlsBar } from "../ControlsBar";
import { playerManager } from "@src/utils/playerManager";
import { syncStateWithVideo } from "@src/utils/syncStateWithVideo";
import { fullScreenMode } from "../FullScreen/FullScreen";
import { managePlayerKeyDown } from "@src/utils/managePlayerKeyDown";
import Wrapper from "../Wrapper";
import PlayButton from "../PlayButton";
import classNames from "classnames";

const ASPECT_RATIO = 16 / 9;

const DEFAULT_VIDEO_WIDTH = 800;
const DEFAULT_VIDEO_HEIGHT = Math.round(DEFAULT_VIDEO_WIDTH / ASPECT_RATIO);

const InternalVideoPlayer: React.ForwardRefRenderFunction<
  HTMLVideoElement,
  VideoPlayerProps
> = (props, ref) => {
  const {
    src = "",
    className,
    containerRef,
    autoPlay = false,
    volume,
    title = "",
    // currentTime = 0,
    id,
    width: customWidth = DEFAULT_VIDEO_WIDTH,
    height: customHeight = DEFAULT_VIDEO_HEIGHT,
    style = {},
    muted = false,
    thumbnail,
    loop = false,
    block = false,
    rounded = true,
    primaryColor,
    onClick,
    onPause,
    onPlay,
    onProgress: onProgressHnadler,
    onDurationChange,
    onVolumeChange,
    onLoadedData,
    onError,
    onEnded,
    onWaiting,
    // ...rest
  } = props;
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  // const secondVideoRef = useRef<HTMLVideoElement>(null);
  const currentContainerRef = useRef<HTMLDivElement>(null);

  const [videoState, setVideoState] = useState<VideoPlayerState>({
    playing: false,
    volume: volume ? volume : muted ? 0 : 1,
    muted,
    loop,
    rendered: false,
    speed: 1,
    loadingData: false,
    bufferingProgress: 0,
    duration: 0,
    currentTime: 0,
    buffering: false,
    fullscreen: false,
    error: null,
    quality: "1080p",
    videoLoaded: false,
    subtitle: "English",
    playbackProgress: 0,
    actions: playerManager as any,
  });

  if (style) {
    style.width = style.width || customWidth;
    style.height = style.height || customHeight;
  }

  const { width, height, ...containerstyle } = style as React.CSSProperties & {
    "--vf-color-primary": string;
  };

  if (primaryColor) containerstyle["--vf-color-primary"] = primaryColor;

  const handleVideoLoaded = () => {
    if (currentVideoRef.current)
      setVideoState((prev) => ({
        ...prev,
        videoLoaded: true,
        loadingData: false,
        error: false,
        duration: currentVideoRef.current!.duration,
      }));
    onLoadedData && onLoadedData();
  };

  const handleTimeUpdate = () => {
    if (currentVideoRef.current) {
      onProgressHnadler && onProgressHnadler();
      onDurationChange && onDurationChange();
      videoState.actions?.setCurrentTime(
        setVideoState,
        currentVideoRef.current.currentTime
      );
    }
  };

  const fullScreenHandler = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    if (e.target === currentVideoRef.current) fullScreenMode();
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (currentVideoRef.current)
      managePlayerKeyDown(
        e,
        videoState.actions,
        setVideoState,
        videoState,
        currentVideoRef.current
      );
  };

  const handleVideoError = () => {
    setVideoState((prev) => ({
      ...prev,
      error: true,
      loadingData: false,
    }));
    onError && onError();
  };

  const onClickHandler = (event: SyntheticEvent<Element, Event>) => {
    if (event.target === currentVideoRef.current)
      if (videoState.playing) {
        videoState.actions?.pause(setVideoState);
      } else {
        videoState.actions?.play(setVideoState);
      }

    onClick && onClick(event);
  };

  const onProgress = () => {
    const element = currentVideoRef.current;
    if (!element) return;
    if (!element.buffered) return;
    const bufferedEnd = element.buffered.end(element.buffered.length - 1);
    const duration = element.duration;
    if (duration > 0) {
      setVideoState((prev) => ({
        ...prev,
        bufferingProgress: (bufferedEnd / duration) * 100,
      }));
    }
  };

  const prefixCls = getPrefixCls("video");

  const classes = ClassNames(className, `${prefixCls}-wrapper`, {
    [`${prefixCls}-wrapper-fullscreen`]: videoState.fullscreen,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-rounded`]: rounded,
  });

  const gradientClasses = classNames(`${prefixCls}-wrapper-gradient-bottom`, {
    [`${prefixCls}-wrapper-gradient-bottom-hidden`]: videoState.playing,
  });

  useEffect(() => {
    if (currentVideoRef.current)
      syncStateWithVideo(currentVideoRef.current, videoState);
  }, [videoState, currentVideoRef]);

  return (
    <Wrapper
      className={classes}
      prefixCls={prefixCls}
      videoState={videoState}
      onKeyDown={keyDownHandler}
      currentVideoRef={currentVideoRef}
      ref={mergeRefs(containerRef, currentContainerRef)}
      onDoubleClick={fullScreenHandler}
      onClick={onClickHandler}
      playing={videoState.playing}
      tabIndex={0}
      title={title}
      style={containerstyle}
    >
      <video
        src={src}
        id={id}
        poster={thumbnail}
        width={block ? "100%" : width}
        ref={mergeRefs(ref, currentVideoRef)}
        controls={false}
        onPause={onPause}
        onPlay={onPlay}
        onEnded={onEnded}
        onVolumeChange={onVolumeChange}
        className={prefixCls}
        crossOrigin="anonymous"
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onProgress={onProgress}
        onWaiting={() => {
          onWaiting && onWaiting();
          videoState.actions?.setLoadingData(setVideoState, true);
        }}
        onLoadStart={() =>
          videoState.actions?.setLoadingData(setVideoState, true)
        }
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
        autoPlay={autoPlay}
      />
      {/* <video
        style={{ display: "none" }}
        src={src}
        poster={thumbnail}
        id="video2"
        width={block ? "100%" : width}
        ref={secondVideoRef}
        controls={false}
        onPause={onPause}
        crossOrigin="anonymous"
        preload={"auto"}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleVideoLoaded}
        autoPlay={autoPlay}
      /> */}

      <PlayButton
        videoState={videoState}
        onPlay={() => videoState.actions?.play(setVideoState)}
        onPuase={() => videoState.actions?.pause(setVideoState)}
      />
      {videoState.videoLoaded && (
        <ControlsBar
          videoRef={currentVideoRef?.current}
          videoState={videoState}
          actions={videoState.actions}
          setVideoState={setVideoState}
        />
      )}
      <div className={gradientClasses}></div>
      {videoState.error && (
        <div
          style={{
            background: "white",
            color: "red",
            position: "absolute",
            left: "20px",
            top: "20px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Error : video not supported
        </div>
      )}
    </Wrapper>
  );
};

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  InternalVideoPlayer
);
