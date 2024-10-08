import { useEffect, useRef, useState } from "react";
import { VideoPlayer, VideoPlayerState } from "../../src/index";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import React from "react";
import Header from "../components/Header";
import DemoBox from "../components/DemoBox";
import { defaultAllowedItems } from "../../src/utils/getAllowedControlBarItems";
import { controlBarAllowedItems } from "../../src/components/ControlsBar/@types";

const defaultPoster =
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const defaultSrc = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
];

const App = () => {
  const [url] = useState("");
  const videoRef = useRef<any>(null);
  const [width, setWidth] = useState<number>(800);
  const [rounded, setRounded] = useState<boolean>(true);
  const [annotation, setAnnotation] = useState<boolean>(true);
  const [block, setBlock] = useState<boolean>(false);
  const [autoPlay, setAutoplay] = useState<boolean>(false);
  const [poster, setPoster] = useState<string>(defaultPoster);
  const [primaryColor, setPrimaryColor] = useState<string>("#5f55ee");
  const [src, setSrc] = useState<string | string[]>(defaultSrc);
  const [customControlBar, setCustomControlBar] = useState<boolean>(false);
  const [allowedItems, setAllowedItems] =
    useState<controlBarAllowedItems>(defaultAllowedItems);
  const [videoInfo, setVideoInfo] = useState<VideoPlayerState>(
    {} as VideoPlayerState
  );

  const { videoState, videoActions } = (videoRef.current || {}) as unknown as {
    videoState: VideoPlayerState;
    videoActions: VideoPlayerState["actions"];
  };

  const updateVideoInfo = (key, value) => {
    setVideoInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleAllowedItems = (key: string) => {
    setAllowedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    if (videoState) {
      setVideoInfo({
        ...videoState,
        durationType: videoInfo.durationType || videoState.durationType,
      });
    }
  }, [videoState]);

  return (
    <div className="vidify-demo">
      <Header
        videoState={videoState}
        extraInfos={{
          width,
          rounded,
          block,
          annotation,
          allowedItems,
          customControlBar,
          autoPlay,
          primaryColor,
        }}
      />
      <div className="vidify-demo-content hovered-scrollbar">
        <div className="vidify-demo-input-left hovered-scrollbar">
          <DemoBox header="Volume" classNames="volume-box">
            <div>
              <input
                type="range"
                value={videoState?.volume * 100}
                onChange={(e) => videoActions?.setVolume(+e.target.value / 100)}
              />
              <span> {videoInfo?.volume}</span>
            </div>
          </DemoBox>
          <DemoBox header="Primary color" classNames="color-box">
            <div>
              <input
                type="color"
                value={primaryColor || ""}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </div>
          </DemoBox>
          <DemoBox header="Skip forward and backward" classNames="skip-box">
            <div
              className="skip-btn"
              onClick={() =>
                videoActions?.updateCurrentTime(
                  videoRef.current?.currentTime - 5
                )
              }
            >
              Skip backward 5s
            </div>
            <div
              className="skip-btn"
              onClick={() =>
                videoActions?.updateCurrentTime(
                  videoRef.current?.currentTime + 5
                )
              }
            >
              Skip forward 5s
            </div>
          </DemoBox>
          <DemoBox header="Duration type" classNames="skip-box">
            <div>
              <input
                type="radio"
                id="default"
                name="duration"
                value="default"
                defaultChecked
                onChange={(e) => updateVideoInfo("durationType", "default")}
              />
              <label htmlFor="default">Default</label>
            </div>

            <div>
              <input
                type="radio"
                id="remainingTime"
                name="duration"
                onChange={(e) =>
                  updateVideoInfo("durationType", "remainingTime")
                }
                value="remainingTime"
                // checked={videoInfo.durationType === "remainingTime"}
              />
              <label htmlFor="remainingTime">Remaining Time</label>
            </div>
          </DemoBox>
          <DemoBox header="Size" classNames="size-box">
            <label>
              Width:
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(+e.target.value)}
              />
            </label>

            <label>
              Height:
              <input type="text" value={"auto"} disabled />
            </label>
          </DemoBox>
          <DemoBox header="Other options" classNames="other-options-box">
            <label htmlFor="mute">
              <input
                type="checkbox"
                id="mute"
                onChange={() =>
                  !videoState.muted
                    ? videoActions?.mute()
                    : videoActions?.setVolume(
                        videoState.volume ? videoState.volume : 1
                      )
                }
              />
              Mute
            </label>
            <label htmlFor="rounded">
              <input
                type="checkbox"
                id="rounded"
                defaultChecked={rounded}
                onChange={() => setRounded(!rounded)}
              />
              Rounded
            </label>
            <label htmlFor="block">
              <input
                type="checkbox"
                id="block"
                defaultChecked={block}
                onChange={() => setBlock(!block)}
              />
              Block
            </label>
            <label htmlFor="annotation">
              <input
                type="checkbox"
                id="annotation"
                defaultChecked={annotation}
                onChange={() => setAnnotation(!annotation)}
              />
              Annotation
            </label>
            <label htmlFor="auto-play">
              <input
                type="checkbox"
                id="auto-play"
                defaultChecked={autoPlay}
                onChange={() => setAutoplay(!autoPlay)}
              />
              Auto play
            </label>
            <div className="languages">
              <p>Language: </p>
              <select
                id="languageSelect"
                onChange={(e) => {
                  localStorage.setItem(
                    "lang",
                    e.target?.options[e.target.selectedIndex]?.value || "ar"
                  );
                  window.location.reload();
                }}
              >
                <option
                  value="ar"
                  selected={localStorage.getItem("lang") === "ar"}
                >
                  Arabic
                </option>
                <option
                  value="en"
                  selected={localStorage.getItem("lang") === "en"}
                >
                  English
                </option>
                <option
                  value="fr"
                  selected={localStorage.getItem("lang") === "fr"}
                >
                  French
                </option>
              </select>
            </div>

            <label htmlFor="poster">
              Poster
              <input
                type="file"
                id="poster"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) =>
                  e.target.files &&
                  e.target.files[0] &&
                  setPoster(URL.createObjectURL(e.target.files[0]))
                }
                multiple={false}
              />
            </label>
          </DemoBox>
        </div>
        <div className="vidify-demo-container">
          <VideoPlayer
            ref={videoRef}
            loop={false}
            defaultSrcIndex={0}
            preload=""
            durationType={videoInfo.durationType}
            lang={localStorage.getItem("lang") as "ar" | "en" | "fr"}
            // defaultPlaybackSpeed={3}
            // playOn={["focus", "visible"]}
            // customIcons={{
            //   next: <div>hello</div>,
            //   previous: <div>hello2</div>,
            //   previousForward: <div>h3</div>,
            //   nextForward: <div>h4</div>,
            //   download: <div>h5</div>,
            //   screenShot: <div>h6</div>,
            //   settings: <div>h7</div>,
            //   picInPic: <div>h8</div>,
            //   fullscreen: <div>h9</div>,
            //   exitFullscreen: <div>h10</div>,
            //   play: <div>h11</div>,
            //   pause: <Logo width="100px" />,
            //   mute: <div>h13</div>,
            //   volume: <div>h14</div>,
            // }}
            // customLoader={<div>loading...</div>}
            controller={{
              ...allowedItems,
              ...(customControlBar
                ? {
                    screenshot: {
                      allow: true,
                      style: { color: "red" },
                      className: "custom-button",
                    },
                    fullscreen: false,
                    progressBar: false,
                    controlBar: (actions, info) => (
                      <div style={{ display: "flex", columnGap: "10px" }}>
                        <p>
                          {info.currentTime} / {info.duration}
                        </p>
                        <button onClick={actions?.play}>Play</button>
                        <button onClick={actions?.pause}>Pause</button>
                        <p>Volume</p>
                        <input
                          type="range"
                          value={info.volume * 100}
                          onChange={(e) =>
                            actions?.setVolume(+e.target.value / 100)
                          }
                        />
                        <button onClick={actions?.screenShot}>
                          ScreenShot
                        </button>
                        <button onClick={actions?.download}>Download</button>
                      </div>
                    ),
                  }
                : {}),
            }}
            error={{
              className: "hazem",
              withRetry: true,
              onRetry: () => console.log("retyr"),

              // renderError: (src) => <div>hello there</div>,
            }}
            enableContextMenu={true}
            contextMenu={[
              {
                label: "Filter",
                icon: (
                  <div>
                    <Logo />
                  </div>
                ),
                onClick: () =>
                  videoActions?.toggleFilterModal(!videoState?.filterModal),
              },
              {
                label: "Custom Link",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="42"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#fff" rx="60"></rect>
                      <rect
                        width="256"
                        height="256"
                        fill="#0a66c2"
                        rx="60"
                      ></rect>
                      <path
                        fill="#fff"
                        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                      ></path>
                    </g>
                  </svg>
                ),
                link: "https://www.linkedin.com/in/braiek-hazem",
              },
            ]}
            src={url || src}
            thumbnail={poster}
            volume={0.7}
            annotation={annotation ? <Logo /> : false}
            block={block}
            rounded={rounded}
            width={`${width}`}
            primaryColor={primaryColor}
            poster={poster}
            autoPlay={autoPlay}
            onPlay={() => updateVideoInfo("playing", videoState?.playing)}
            onPause={() => updateVideoInfo("playing", videoState?.playing)}
            onProgress={() => {
              updateVideoInfo("currentTime", videoState?.currentTime);
            }}
            onClick={() => console.log("video clicked")}
            onError={() => updateVideoInfo("error", (videoInfo.error || 0) + 1)}
            onEnded={() => console.log("video end")}
            onLoadedData={() =>
              updateVideoInfo("videoLoaded", videoState?.videoLoaded)
            }
            onDownload={() => console.log("download...")}
            onVolumeChange={() => updateVideoInfo("volume", videoState?.volume)}
            onScreenshot={(file) => console.log({ file })}
            onClickNext={() => console.log("next")}
            onClickPrevious={() => console.log("nprevious")}
          />
        </div>
        <div className="vidify-demo-input-right hovered-scrollbar">
          <DemoBox header="Controll bar" classNames="control-bar-box">
            <div>
              <div className="skip-btn" onClick={videoActions?.play}>
                Play
              </div>
              <div className="skip-btn" onClick={videoActions?.pause}>
                Pause
              </div>
              <div className="skip-btn" onClick={videoActions?.download}>
                Download
              </div>
              <div className="skip-btn" onClick={videoActions?.nextVideo}>
                Next Video
              </div>
              <div className="skip-btn" onClick={videoActions?.previousVideo}>
                Previous Video
              </div>
              <div className="skip-btn" onClick={videoActions?.screenShot}>
                Screenshot
              </div>
            </div>
            <label htmlFor="screenshot">
              <input
                type="checkbox"
                id="screenshot"
                defaultChecked
                onChange={() => toggleAllowedItems("screenshot")}
              />
              Screenshot
            </label>
            <label htmlFor="download">
              <input
                type="checkbox"
                id="download"
                defaultChecked
                onChange={() => toggleAllowedItems("download")}
              />
              Download
            </label>
            <label htmlFor="fullscreen">
              <input
                type="checkbox"
                id="fullscreen"
                defaultChecked
                onChange={() => toggleAllowedItems("fullscreen")}
              />
              Fullscreen
            </label>
            <label htmlFor="volume">
              <input
                type="checkbox"
                id="volume"
                defaultChecked
                onChange={() => toggleAllowedItems("volumeSlider")}
              />
              volume Slider
            </label>
            <label htmlFor="custom-bar" className="custom-bar">
              <input
                type="checkbox"
                id="custom-bar"
                defaultChecked={customControlBar}
                onChange={() => setCustomControlBar(!customControlBar)}
              />
              Custom Control Bar
            </label>
          </DemoBox>
          <DemoBox header="Dynamic Source Switching" classNames="sources-box">
            <div className="tabs">
              <div
                className={`${typeof src === "string" ? "active-tab" : ""}`}
                onClick={() => setSrc(defaultSrc[0])}
              >
                Single
              </div>
              <div
                className={`${typeof src !== "string" ? "active-tab" : ""}`}
                onClick={() => setSrc(defaultSrc)}
              >
                Multiple
              </div>
            </div>

            <div className="active-tab-content hovered-scrollbar">
              {typeof src === "string" ? (
                <input
                  type="text"
                  value={src}
                  onChange={(e) => setSrc(e.target.value)}
                />
              ) : (
                <>
                  {src.map((_, index) => (
                    <input
                      type="text"
                      key={index}
                      value={src[index]}
                      onChange={(e) =>
                        setSrc((prev) =>
                          (prev as string[]).map((_, i) =>
                            i === index ? e.target.value : prev[i]
                          )
                        )
                      }
                    />
                  ))}
                  <div className="buttons">
                    <div
                      className="skip-btn"
                      onClick={() => setSrc((prev) => [...prev, ""])}
                    >
                      +
                    </div>
                    <div
                      className="skip-btn"
                      onClick={() =>
                        src.length > 2 &&
                        setSrc((prev) => {
                          (prev as string[]).pop();
                          return [...prev];
                        })
                      }
                    >
                      -
                    </div>
                  </div>
                </>
              )}
            </div>
          </DemoBox>
          <DemoBox header="Video State" classNames="video-state-box">
            <div className="state-key-value">
              Play: {videoInfo.playing ? "on" : "off"}
            </div>
            <div className="state-key-value">Volume: {videoInfo.volume}</div>
            <div className="state-key-value">Src: {videoInfo.src}</div>
            <div className="state-key-value">
              Duration: {videoInfo.duration}
            </div>
            <div className="state-key-value">
              CurrentTime: {videoInfo.currentTime}
            </div>
            <div className="state-key-value">
              Video Loaded: {videoInfo.videoLoaded ? "True" : "False"}
            </div>
            <div className="state-key-value">Primary color: {primaryColor}</div>
            <div className="state-key-value">
              Muted: {videoInfo.muted ? "True" : "False"}
            </div>
            <div className="state-key-value">
              Rounded: {rounded ? "True" : "False"}
            </div>
            <div className="state-key-value">
              Loop: {videoInfo.loop ? "True" : "False"}
            </div>
            <div className="state-key-value">Width: {width}</div>
            <div className="state-key-value">Poster: {poster}</div>
            <div className="state-key-value">Speed: {videoState?.speed}</div>
            {Object.keys(allowedItems).map((key, index) => {
              return (
                <div className="state-key-value" key={index}>
                  {key}: {allowedItems[key] ? "Allowed" : "Not allowed"}
                </div>
              );
            })}
          </DemoBox>
        </div>
      </div>
    </div>
  );
};

export default App;
