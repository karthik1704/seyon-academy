'use client';
import { VideoJsPlayerOptions } from "video.js";
import VideoPlayer from "@/components/video-player";

export default  function LivePlayer() {

  const videoJsOptions: VideoJsPlayerOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://cdn.seyonacademy.com/demo/1111111.mp4",
        
      },
      
    ],
  };

  return (
    <div>
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
    
}


