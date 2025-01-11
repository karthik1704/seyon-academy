'use client';
import dynamic from "next/dynamic";
import { VideoJsPlayerOptions } from "video.js";
import Image from "next/image";
// Dynamically import VideoPlayer to prevent server-side rendering
const VideoPlayer = dynamic(() => import("@/components/video-player"), { ssr: false });

export default  function LivePlayer() {

  const videoJsOptions: VideoJsPlayerOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://d1l6g0g8s8syz2.cloudfront.net/TEST/output.m3u8",
        type: "application/x-mpegURL",
        
      },
      
    ],
  };

  return (
    <div>
      <h1>HLS Video with Video.js</h1>

      <VideoPlayer options={videoJsOptions} />
      <Image src="https://d1l6g0g8s8syz2.cloudfront.net/lab.jpeg" width={500} height={500} alt='test'/>

    </div>
  );
    
}


