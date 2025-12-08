import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const vidUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div>
        <h1>Let's have a video...</h1>
        <div>
            <ReactPlayer
            url={vidUrl}         // ✅ use 'url', not 'src'
            playbackRate={0.5}   // ✅ correct prop for video speed
            controls={true}      // ✅ show controls (optional)
            width="100%"         // ✅ responsive
            height="500px"       // ✅ set height
            />
        </div>
        <div>
            <ReactPlayer
                src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
            />
        </div>
      
    </div>

  );
};

export default Video;
