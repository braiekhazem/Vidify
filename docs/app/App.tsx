import { useRef, useState } from "react";
import logo from "./../../assets/logo.svg";
import { VideoPlayer } from "../../src/index";

const App = () => {
  const [url, setURL] = useState("");
  const videoRef = useRef(null);
  console.log("Hello in vidify , React Video Player, hhssh");
  console.log({ videoRef });

  return (
    <div className="app">
      <h1>Hello in vidify</h1>

      <VideoPlayer
        ref={videoRef}
        loop={false}
        defaultSrcIndex={0}
        preload=""
        durationType={"remainingTime"}
        src={
          url || [
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "https://dl.dropboxusercontent.com/scl/fi/sxr9bdro2sq1g7ne5m5u1/0dda3906-9b06-471d-82f5-6fc357e9c035.mp4?rlkey=z41jupmqi8p8v5wlj4bpg9ccm&dl=0",
          ]
        }
        controller={{}}
        crossOrigin=""
        thumbnail="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        volume={0.7}
        annotation={<img src={logo} />}
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
        onClickNext={() => console.log("next")}
        onClickPrevious={() => console.log("nprevious")}
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
