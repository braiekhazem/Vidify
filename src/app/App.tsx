import { useRef, useState } from "react";
import { VideoPlayer } from "..";

const App = () => {
  const [url, setURL] = useState("");
  const videoRef = useRef(null);

  console.log({ videoRef });

  return (
    <div className="app">
      <h1>Hello in vidify</h1>

      <VideoPlayer
        ref={videoRef}
        loop={false}
        defaultSrcIndex={1}
        durationType={"remainingTime"}
        src={
          url || [
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "https://dl.dropboxusercontent.com/scl/fi/v8m1y45ctwp9v1y5fib5a/cd8752af-5975-4d14-8495-6ff3852fb8f1.quicktime?rlkey=q2gze3o2yswmir6y6fllb3fwc&dl=0",
            "https://dl.dropboxusercontent.com/scl/fi/zhl1aksgwx0g0g72h0lym/376fa367-6118-4888-965b-7236c55118e0.mp4?rlkey=1d41qg2okvpjk57kid83ts406&dl=0",
            "https://dl.dropboxusercontent.com/scl/fi/sxr9bdro2sq1g7ne5m5u1/0dda3906-9b06-471d-82f5-6fc357e9c035.mp4?rlkey=z41jupmqi8p8v5wlj4bpg9ccm&dl=0",
          ]
        }
        contextmenu={{
          screenshot: true,
          customButtons: [{ content: "test", placement: "right" }],
          // controlBar: (actions) => {
          //   console.log({ actions });
          //   return (
          //     <div>
          //       <button onClick={actions?.play}>Play</button>
          //       <button onClick={actions?.pause}>Pause</button>
          //     </div>
          //   );
          // },
        }}
        thumbnail="https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png"
        volume={0.7}
        annotation={
          <img src="https://i.loli.net/2019/06/06/5cf8c5d94521136430.png" />
        }
        block={false}
        onProgress={() => console.log("progress...")}
        // primaryColor="green"
        poster="https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png"
        autoPlay={false}
        onPlay={() => console.log("play")}
        onPause={() => console.log("pause")}
        onClick={() => console.log("click")}
        onError={() => console.log("error")}
        onEnded={() => console.log("ended")}
        onDownload={() => console.log("download...")}
        onVolumeChange={() => console.log("vol change")}
        onScreenshot={(file) => console.log({ file })}
      />
      {/* <VideoPlayer
        src={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
      /> */}
      <input
        placeholder="put your movie"
        type="file"
        onChange={(e) =>
          e.target.files &&
          e.target.files[0] &&
          setURL(URL.createObjectURL(e.target.files[0]))
        }
      />
    </div>
  );
};

//https://gemoo.com/tools/video-uploader/

export default App;
