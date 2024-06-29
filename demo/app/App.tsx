import { useEffect, useRef, useState } from "react";
import { VideoPlayer, VideoPlayerState } from "../../src/index";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import React from "react";
import Header from "../components/Header";
import DemoBox from "../components/DemoBox";
import { defaultAllowedItems } from "../../src/utils/getAllowedControlBarItems";
import { controlBarAllowedItems } from "../../src/components/ControlsBar/@types";
import { Helmet } from "react-helmet";

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
            lang="ar"
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
                label: "Tam task",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="28"
                    viewBox="0 0 80 28"
                    fill="none"
                  >
                    <path
                      d="M25.3928 27.9287H13.1176C9.6386 27.9287 6.30208 26.5467 3.84206 24.0868C1.38203 21.6268 0 18.2904 0 14.8115L0 9.16876C0 6.73705 0.966025 4.40494 2.68556 2.68547C4.4051 0.965992 6.73729 0 9.16908 0L14.8109 0C18.2899 0 21.6264 1.38198 24.0864 3.84192C26.5464 6.30186 27.9285 9.63826 27.9285 13.1171V25.3919C27.9269 26.064 27.6592 26.7081 27.1841 27.1835C26.7089 27.6589 26.0649 27.9268 25.3928 27.9287Z"
                      fill="url(#paint0_linear_6588_42679)"
                    ></path>
                    <path
                      d="M13.96 5.11601C15.7103 5.11505 17.4216 5.63326 18.8773 6.60507C20.3331 7.57687 21.4679 8.9586 22.1381 10.5755C22.8084 12.1923 22.984 13.9716 22.6428 15.6883C22.3015 17.405 21.4588 18.9819 20.2211 20.2195C18.9834 21.4572 17.4065 22.2999 15.6897 22.6411C13.973 22.9824 12.1936 22.8068 10.5767 22.1365C8.95976 21.4663 7.57798 20.3315 6.60614 18.8758C5.63431 17.4201 5.11608 15.7089 5.11703 13.9586C5.11831 11.6138 6.05038 9.3654 7.70848 7.70736C9.36658 6.04932 11.6151 5.11728 13.96 5.11601ZM13.96 2.72363C11.7369 2.72363 9.56369 3.38284 7.71525 4.61788C5.86681 5.85293 4.42612 7.60835 3.57537 9.66216C2.72463 11.716 2.50203 13.9759 2.93574 16.1562C3.36945 18.3366 4.43997 20.3393 6.01195 21.9112C7.58392 23.4831 9.58673 24.5536 11.7671 24.9873C13.9475 25.421 16.2075 25.1984 18.2614 24.3477C20.3153 23.497 22.0708 22.0564 23.3059 20.208C24.541 18.3596 25.2002 16.1865 25.2002 13.9635C25.1964 10.9836 24.0109 8.12697 21.9038 6.01992C19.7967 3.91287 16.9399 2.72745 13.96 2.72363Z"
                      fill="white"
                    ></path>
                    <path
                      d="M13.0334 18.6932L8.58904 14.249C8.55189 14.212 8.52241 14.168 8.5023 14.1196C8.48219 14.0711 8.47183 14.0192 8.47183 13.9668C8.47183 13.9143 8.48219 13.8624 8.5023 13.814C8.52241 13.7656 8.55189 13.7216 8.58904 13.6846L10.3389 11.9348C10.376 11.8976 10.4201 11.8681 10.4686 11.848C10.5171 11.8279 10.5691 11.8175 10.6217 11.8175C10.6742 11.8175 10.7262 11.8279 10.7748 11.848C10.8233 11.8681 10.8674 11.8976 10.9045 11.9348L13.0334 14.0637L17.9471 9.14533C17.9842 9.10814 18.0283 9.07864 18.0768 9.05851C18.1253 9.03838 18.1773 9.02802 18.2299 9.02802C18.2824 9.02802 18.3344 9.03838 18.383 9.05851C18.4315 9.07864 18.4756 9.10814 18.5127 9.14533L20.2625 10.8951C20.2997 10.9321 20.3291 10.9761 20.3492 11.0245C20.3694 11.0729 20.3797 11.1248 20.3797 11.1773C20.3797 11.2297 20.3694 11.2816 20.3492 11.3301C20.3291 11.3785 20.2997 11.4225 20.2625 11.4595L13.0334 18.6932Z"
                      fill="white"
                    ></path>
                    <path
                      d="M34.9888 12.4859C34.9888 11.3306 35.2704 10.9961 36.4775 10.9961H46.8272C47.9837 10.9961 48.317 11.3306 48.317 12.4859V12.717C48.317 13.9204 47.9837 14.2068 46.8272 14.2068H43.3877V26.5092C43.3877 27.6657 43.0531 27.999 41.8978 27.999H41.4092C40.2058 27.999 39.9194 27.6657 39.9194 26.5092V14.2092H36.4775C35.274 14.2092 34.9888 13.9276 34.9888 12.7194V12.4859Z"
                      fill="#9838FF"
                    ></path>
                    <path
                      d="M58.9772 23.8651C58.9772 26.6389 57.2827 28 53.404 28C49.5253 28 47.8296 26.6389 47.8296 23.9421C47.8296 21.2717 49.577 19.936 53.0442 19.936H55.6388V18.96C55.6388 17.7265 54.7398 17.3956 52.9671 17.3956C52.2196 17.3971 51.473 17.4485 50.7323 17.5496C49.6023 17.7289 49.2942 17.4726 49.2942 16.3462V16.2427C49.2942 15.1392 49.577 14.8564 50.6806 14.6783C51.3709 14.5932 52.0658 14.5502 52.7614 14.5495C56.7941 14.5495 58.9772 15.7818 58.9772 18.9672V23.8651ZM55.6388 22.4523H52.9912C51.7878 22.4523 51.168 22.9144 51.168 23.8651C51.2703 25.0986 52.0922 25.2261 53.351 25.2009C54.6604 25.2261 55.5088 25.0721 55.6376 23.6858L55.6388 22.4523Z"
                      fill="#9838FF"
                    ></path>
                    <path
                      d="M64.6021 26.524C64.6021 27.6805 64.3193 27.9621 63.1579 27.9621H62.6705C61.5152 27.9621 61.2324 27.6805 61.2324 26.524V19.7296C61.2324 16.36 63.1327 14.5417 66.7286 14.5417C68.5013 14.5417 69.7853 15.0808 70.5303 16.1855C71.3258 15.0808 72.5846 14.5417 74.3055 14.5417C78.0302 14.5417 79.7511 16.2361 79.7511 19.7296V26.524C79.7511 27.6805 79.4683 27.9621 78.307 27.9621H77.8292C76.6739 27.9621 76.3851 27.6805 76.3851 26.524V19.7296C76.3851 18.2855 75.9735 17.7006 74.3043 17.7006C72.5581 17.7006 72.1212 18.2915 72.1212 19.7296V26.524C72.1212 27.6805 71.8384 27.9621 70.6771 27.9621H70.292C69.1355 27.9621 68.8478 27.6805 68.8478 26.524V19.7296C68.8478 18.2855 68.4363 17.7006 66.7153 17.7006C65.0462 17.7006 64.584 18.2915 64.584 19.7296L64.6021 26.524Z"
                      fill="#9838FF"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_6588_42679"
                        x1="7.3952"
                        y1="-0.122747"
                        x2="21.4531"
                        y2="30.0254"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#40AAFF"></stop>
                        <stop offset="1" stop-color="#C300FF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                ),
                link: "https://app.tamtasks.com/spaces/list/12816998-0ef7-421d-8658-0b2ff3ad0daa",
              },
            ]}
            src={url || src}
            crossOrigin=""
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
