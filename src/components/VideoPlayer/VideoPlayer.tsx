import React, {
  SyntheticEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { VideoPlayerProps, VideoPlayerState, contextmenu } from "./@types";
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
import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import { getAllowedControlBarItems } from "@src/utils/getAllowedControlBarItems";
import { getVideoSrc } from "@src/utils/getVideoSrc";

const ASPECT_RATIO = 16 / 9;

const DEFAULT_VIDEO_WIDTH = 800;
const DEFAULT_VIDEO_HEIGHT = Math.round(DEFAULT_VIDEO_WIDTH / ASPECT_RATIO);
export const DEFAULT_ICONS_SIZE = 26;

const InternalVideoPlayer: React.ForwardRefRenderFunction<
  HTMLVideoElement,
  VideoPlayerProps
> = (props, ref) => {
  const {
    src,
    defaultSrcIndex = 0,
    className,
    containerRef,
    autoPlay = false,
    volume,
    title = "",
    durationType = "default",
    // currentTime = 0,
    id,
    annotation,
    annotationStyle,
    width: customWidth = DEFAULT_VIDEO_WIDTH,
    height: customHeight = DEFAULT_VIDEO_HEIGHT,
    style = {},
    muted = false,
    contextmenu = true,
    thumbnail,
    poster,
    loop = false,
    block = false,
    rounded = true,
    primaryColor,
    playsInline,
    preload,
    crossOrigin = "anonymous",
    onClick,
    onPause,
    onPlay,
    onProgress: onProgressHnadler,
    onDurationChange,
    onVolumeChange,
    onLoadedData,
    onScreenshot,
    onError,
    onEnded,
    onWaiting,
    onDownload,
  } = props;
  const currentVideoRef = useRef<HTMLVideoElement>(null);

  const controlsBarRef = useRef<HTMLDivElement>(null);

  const currentContainerRef = useRef<HTMLDivElement>(null);

  const [videoState, setVideoState] = useState<VideoPlayerState>({
    src,
    playing: autoPlay,
    volume:
      volume !== undefined && typeof volume === "number"
        ? volume
        : muted
        ? 0
        : 1,
    muted:
      (volume !== undefined && typeof volume === "number" && volume === 0) ||
      autoPlay ||
      muted,
    loop,
    rendered: false,
    speed: 1,
    currentSrcIndex: defaultSrcIndex,
    loadingData: false,
    bufferingProgress: 0,
    duration: 0,
    currentTime: 0,
    buffering: false,
    fullscreen: false,
    error: null,
    videoLoaded: false,
    playbackProgress: 0,
  });

  useEffect(() => {
    if (currentVideoRef.current)
      setVideoState((prev) => ({
        ...prev,
        actions: playerManager(setVideoState, currentVideoRef.current, {
          onScreenshot,
          onDownload,
        }) as any,
      }));
  }, [currentVideoRef]);

  if (style) {
    style.width = style.width || customWidth;
    style.height = style.height || customHeight;
  }

  const { width, height, ...containerstyle } = style as React.CSSProperties & {
    "--vf-color-primary": string;
  };

  if (primaryColor) containerstyle["--vf-color-primary"] = primaryColor;

  const handleVideoLoaded = () => {
    if (currentVideoRef.current) {
      let duration = currentVideoRef.current.duration;
      if (duration === Infinity) {
        currentVideoRef.current.currentTime = 1e101;
        setTimeout(() => {
          currentVideoRef.current!.currentTime = 0; // to reset the time, so it starts at the beginning
          duration = currentVideoRef.current!.duration;
          setVideoState((prev) => ({
            ...prev,
            videoLoaded: true,
            loadingData: false,
            error: false,
            duration,
          }));
          onLoadedData && onLoadedData();
        }, 100);
      } else {
        setVideoState((prev) => ({
          ...prev,
          videoLoaded: true,
          loadingData: false,
          error: false,
          duration,
        }));
        onLoadedData && onLoadedData();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (currentVideoRef.current) {
      onProgressHnadler && onProgressHnadler();
      onDurationChange && onDurationChange();
      videoState.actions?.setCurrentTime(currentVideoRef.current.currentTime);
      if (
        videoState.duration === Infinity &&
        currentVideoRef.current?.duration > 0
      ) {
        setVideoState((prev) => ({
          ...prev,
          duration: currentVideoRef.current?.duration as number,
        }));
      }
    }
  };

  const fullScreenHandler = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    if (e.target === currentVideoRef.current) fullScreenMode();
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (currentVideoRef.current)
      managePlayerKeyDown(e, videoState.actions, videoState);
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
        videoState.actions?.pause();
      } else {
        videoState.actions?.play();
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

  useEffect(() => {
    if (ref) {
      const { actions, ...rest } = videoState;
      //@ts-ignore
      ref.current.videoState = rest;
      //@ts-ignore
      ref.current.videoActions = actions;
    }
  }, [videoState]);

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
      controlBarElement={controlsBarRef.current}
    >
      <video
        src={getVideoSrc(props, videoState)}
        id={id}
        poster={thumbnail || poster}
        width={block ? "100%" : width}
        ref={mergeRefs(ref, currentVideoRef)}
        controls={false}
        onPause={onPause}
        onPlay={onPlay}
        onEnded={onEnded}
        onVolumeChange={onVolumeChange}
        className={prefixCls}
        loop={videoState.loop}
        preload={preload}
        onTimeUpdate={handleTimeUpdate}
        onProgress={onProgress}
        onWaiting={() => {
          onWaiting && onWaiting();
          videoState.actions?.setLoadingData(true);
        }}
        playsInline={playsInline}
        crossOrigin={crossOrigin}
        onLoadStart={() => videoState.actions?.setLoadingData(true)}
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
        autoPlay={autoPlay}
        muted={videoState.muted}
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
        onPlay={() => videoState.actions?.play()}
        onPuase={() => videoState.actions?.pause()}
      />
      {videoState.videoLoaded && contextmenu && (
        <ControlsBar
          ref={controlsBarRef}
          customControlBar={
            typeof contextmenu === "function" ||
            (typeof contextmenu === "object" && contextmenu.controlBar)
              ? (typeof contextmenu === "object" &&
                  typeof contextmenu.controlBar === "function" &&
                  contextmenu.controlBar(videoState.actions)) ||
                (typeof contextmenu === "function" &&
                  contextmenu(videoState.actions))
              : null
          }
          videoRef={currentVideoRef?.current}
          videoState={videoState}
          actions={videoState.actions}
          customButtons={
            typeof contextmenu === "object"
              ? (contextmenu as contextmenu)?.customButtons || []
              : null
          }
          allowedItems={getAllowedControlBarItems(props)}
          progressBar={
            typeof contextmenu === "object" &&
            contextmenu.progressBar !== undefined
              ? contextmenu.progressBar
              : typeof contextmenu === "function"
              ? false
              : true
          }
          durationType={durationType}
        />
      )}
      <div className={gradientClasses}></div>
      <div
        className={`${gradientClasses} ${concatPrefixCls(
          prefixCls,
          "wrapper-gradient-top"
        )}`}
      ></div>
      <div
        className={`${concatPrefixCls(
          prefixCls,
          "annotation"
        )} ${gradientClasses}`}
        style={annotationStyle}
      >
        {annotation}
      </div>
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
