import { useRef, useState } from "react";
import { VideoPlayer } from "..";

const App = () => {
  const [url, setURL] = useState("");
  console.log(url);
  const videoRef = useRef(null);
  console.log({ videoRef });

  return (
    <div className="app">
      <h1>Hello in vidify</h1>

      <VideoPlayer
        // src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/fd41a97e21b9d758a13d5e211e2fe37c.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240329%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240329T162847Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=a73cdb646a448948be9e22849f5267d98cf2813edd1fbe290dbe19da1b958a52"
        ref={videoRef}
        defaultSrcIndex={0}
        durationType={"remainingTime"}
        src={
          url || [
            "https://dl.dropboxusercontent.com/scl/fi/zhl1aksgwx0g0g72h0lym/376fa367-6118-4888-965b-7236c55118e0.mp4?rlkey=1d41qg2okvpjk57kid83ts406&dl=0",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "https://dl.dropboxusercontent.com/scl/fi/v8m1y45ctwp9v1y5fib5a/cd8752af-5975-4d14-8495-6ff3852fb8f1.quicktime?rlkey=q2gze3o2yswmir6y6fllb3fwc&dl=0",
          ]
        }
        currentTime={1}
        contextmenu={{ screenshot: true }}
        thumbnail="https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png"
        volume={0.7}
        annotation={
          <img src="https://i.loli.net/2019/06/06/5cf8c5d94521136430.png" />
        }
        onProgress={() => console.log("progress...")}
        // primaryColor="red"
        poster="https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png"
        autoPlay
        onPlay={() => console.log("play")}
        onPause={() => console.log("pause")}
        onClick={() => console.log("click")}
        onError={() => console.log("error")}
        onEnded={() => console.log("ended")}
        onVolumeChange={() => console.log("vol change")}
        onScreenshot={(file) => console.log({ file })}
        // block
      />
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
