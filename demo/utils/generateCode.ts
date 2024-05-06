import { VideoPlayerState } from "../../src";

const customControlBar = `controlBar: (actions, info) => (
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
  ),`;

export const generateCode = async (
  videoState: VideoPlayerState,
  extraInfos
) => {
  const component = `
<VideoPlayer
    loop={${videoState.loop}}
    mute={${videoState.muted}}
    defaultSrcIndex={${videoState.currentSrcIndex}}
    src={${JSON.stringify(videoState.src)}}
    volume={${videoState.volume}}
    durationType={"${videoState.durationType}"}
    annotation={${
      extraInfos.annotation &&
      "<img src='https://res.cloudinary.com/dj6kxvxqb/image/upload/v1714516244/logo_yvh5kf.svg' />"
    }}
    block={${extraInfos.block}}
    rounded={${extraInfos.rounded}}
    width={"${extraInfos.width}px"}
    primaryColor={"${videoState.primaryColor}"}
    autoPlay={${extraInfos.autoPlay}}
    onPlay={() => console.log("Play")}
    onPause={() => console.log("Pause")}
    onClick={() => console.log("Video clicked")}
    onError={() => console.log("Error")}
/>`;

  return Promise.resolve(component);
};
