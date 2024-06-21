import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { VideoPlayerProps, VideoPlayerState, contextmenu } from "./@types";
import mergeRefs from "./../../utils/mergeRefs";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import { ControlsBar } from "../ControlsBar";
import { playerManager } from "./../../utils/playerManager";
import { syncStateWithVideo } from "./../../utils/syncStateWithVideo";
import { fullScreenMode } from "../FullScreen/FullScreen";
import { managePlayerKeyDown } from "./../../utils/managePlayerKeyDown";
import Wrapper from "../Wrapper";
import PlayButton from "../PlayButton";
import classNames from "classnames";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import { getAllowedControlBarItems } from "./../../utils/getAllowedControlBarItems";
import { getVideoSrc } from "./../../utils/getVideoSrc";
import VideoLoadError from "../VideoLoadError";
import i18n from "@src/i18n";
import { DEFAULT_CONTEXT_MENU_ITEMS } from "../Wrapper/Wrapper";
import { DEFAULT_VIDEO_FILTER } from "../Modals/FilterModal/FilterModal";

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
    contextMenu = DEFAULT_CONTEXT_MENU_ITEMS,
    enableContextMenu = true,
    id,
    customLoader,
    annotation,
    annotationStyle,
    width: customWidth = DEFAULT_VIDEO_WIDTH,
    height: customHeight = DEFAULT_VIDEO_HEIGHT,
    style = {},
    muted = false,
    controller = true,
    thumbnail,
    poster,
    loop = false,
    block = false,
    rounded = true,
    primaryColor = "#5f55ee",
    playsInline,
    preload,
    error,
    lang,
    crossOrigin = "anonymous",
    onClick,
    onClickNext,
    onClickPrevious,
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
    onAbort,
  } = props;
  const currentVideoRef = useRef<HTMLVideoElement>(null);

  const controlsBarRef = useRef<HTMLDivElement>(null);

  const currentContainerRef = useRef<HTMLDivElement>(null);

  const defaultVideoState: VideoPlayerState = {
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
    durationType,
    rendered: false,
    videoFilter: DEFAULT_VIDEO_FILTER,
    speed: 1,
    lang,
    annotation: true,
    currentSrcIndex: defaultSrcIndex,
    loadingData: false,
    bufferingProgress: 0,
    dropdownSettingsOpen: false,
    duration: 0,
    currentTime: 0,
    buffering: false,
    downloading: false,
    fullscreen: false,
    error: null,
    videoLoaded: false,
    playbackProgress: 0,
  };

  const [videoState, setVideoState] =
    useState<VideoPlayerState>(defaultVideoState);

  const currentSource = getVideoSrc(props, videoState);

  useEffect(() => {
    if (currentVideoRef.current)
      setVideoState((prev) => ({
        ...prev,
        actions: playerManager(setVideoState, currentVideoRef.current, {
          onScreenshot,
          onDownload,
          onClickNext,
          onClickPrevious,
        }) as any,
      }));
  }, [currentVideoRef]);

  useEffect(() => {
    setVideoState((prev) => ({ ...prev, src, durationType }));
  }, [src, durationType]);

  useEffect(() => {
    if (lang) i18n.changeLanguage(lang);
  }, [lang]);

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
        duration = 0;
        currentVideoRef.current.currentTime = 1e101;
        setTimeout(() => {
          currentVideoRef.current!.currentTime = 0;
          duration = currentVideoRef.current!.duration;
          setVideoState((prev) => ({
            ...prev,
            videoLoaded: true,
            loadingData: false,
            error: false,
            duration,
          }));
          onLoadedData && onLoadedData();
        }, 600);
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
    if (!element || !element.buffered || element.buffered.length === 0) return;

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

  const classes = classNames(className, `${prefixCls}-wrapper`, {
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
    //@ts-ignore
    if (ref && ref.current) {
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
      actions={videoState.actions}
      onKeyDown={keyDownHandler}
      currentVideoRef={currentVideoRef}
      ref={mergeRefs(containerRef, currentContainerRef)}
      onDoubleClick={fullScreenHandler}
      onClick={onClickHandler}
      playing={videoState.playing}
      customLoader={customLoader}
      tabIndex={0}
      contextMenu={contextMenu}
      enableContextMenu={enableContextMenu}
      title={title}
      style={containerstyle}
      controlBarElement={controlsBarRef.current}
    >
      <video
        src={currentSource}
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
        onAbort={onAbort}
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
        style={{
          filter: `
            brightness(${videoState.videoFilter.brightness.value}%) 
            contrast(${videoState.videoFilter.contrast.value}%) 
            saturate(${videoState.videoFilter.saturation.value}%) 
            blur(${videoState.videoFilter.blur.value}px)
          `,
          opacity: `${videoState.videoFilter.opacity.value}%`,
        }}
      />

      <PlayButton
        videoState={videoState}
        onPlay={() => videoState.actions?.play()}
        onPuase={() => videoState.actions?.pause()}
      />
      {videoState.videoLoaded && controller && !videoState.error && (
        <ControlsBar
          ref={controlsBarRef}
          customControlBar={
            typeof controller === "function" ||
            (typeof controller === "object" && controller.controlBar)
              ? (typeof controller === "object" &&
                  typeof controller.controlBar === "function" &&
                  controller.controlBar(videoState.actions, videoState)) ||
                (typeof controller === "function" &&
                  controller(videoState.actions, videoState))
              : null
          }
          videoRef={currentVideoRef?.current}
          videoState={videoState}
          actions={videoState.actions}
          customButtons={
            typeof controller === "object"
              ? (controller as contextmenu)?.customButtons || []
              : null
          }
          allowedItems={getAllowedControlBarItems(props)}
          progressBar={
            typeof controller === "object" &&
            controller.progressBar !== undefined
              ? controller.progressBar
              : typeof controller === "function"
              ? false
              : true
          }
          durationType={durationType}
        />
      )}
      <div className={gradientClasses}></div>
      <div className={gradientClasses}></div>
      <div
        className={`${gradientClasses} ${concatPrefixCls(
          prefixCls,
          "wrapper-gradient-top"
        )}`}
      ></div>
      {annotation && videoState.annotation && (
        <div
          className={`${concatPrefixCls(
            prefixCls,
            "annotation"
          )} ${gradientClasses}`}
          style={annotationStyle}
        >
          {annotation}
        </div>
      )}
      {videoState.error && (
        <VideoLoadError
          src={currentSource}
          onRetry={() => {
            currentVideoRef.current?.load();
            setVideoState((prev) => ({
              ...defaultVideoState,
              loadingData: true,
              currentSrcIndex: prev.currentSrcIndex,
            }));
            error?.onRetry?.(currentSource as string);
          }}
          className={error?.className}
          withRetry={!!error?.withRetry}
          customErrorMessage={error?.errorMessage}
          customError={!!error?.renderError}
          renderContent={(src) => error?.renderError?.(src as string)}
        />
      )}
    </Wrapper>
  );
};

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  InternalVideoPlayer
);
