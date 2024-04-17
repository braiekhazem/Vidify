import { useState } from "react";
import { VideoPlayer } from "..";

const App = () => {
  const [url, setURL] = useState("");
  console.log(url);
  return (
    <div className="app">
      <h1>Hello in vidify</h1>
      <VideoPlayer
        // src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/fd41a97e21b9d758a13d5e211e2fe37c.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240329%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240329T162847Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=a73cdb646a448948be9e22849f5267d98cf2813edd1fbe290dbe19da1b958a52"
        src={
          url ||
          "https://dl.dropboxusercontent.com/scl/fi/c1ft0bo6gk2b1fuiqyt62/f90fcdfe-96a2-4418-9b5e-57c00389f816.mp4?rlkey=s2c3c58zx49eoyjimirnm9lty&dl=0"
        }
        currentTime={2}
        onProgress={() => console.log("progress...")}
        // primaryColor="violet"
        autoPlay
        onPlay={() => console.log("play")}
        onPause={() => console.log("pause")}
        onClick={() => console.log("click")}
        onError={() => console.log("error")}
        onEnded={() => console.log("ended")}
        onVolumeChange={() => console.log("vol change")}
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
