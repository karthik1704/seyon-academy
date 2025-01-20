"use client";
import React, { useEffect, useRef } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  options: VideoJsPlayerOptions;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      // Initialize Video.js player
      playerRef.current = videojs(videoRef.current, options, () => {
        console.log("Player is ready");
      });
    }

    return () => {
      // Cleanup Video.js player
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-default-skin " />
      </div>
    </div>
  );
};

export default VideoPlayer;
