"use client";
import dynamic from "next/dynamic";
// import ReactPlayer from 'react-player';
import Loading from "../loading";
const ReactPlayer = dynamic(() => import("react-player"), {
  loading: () => <Loading />, // Optional: Show a loading state
  ssr: false, // Optional: Disable server-side rendering
});
export default function Player({ video }) {
  return (
    <div className=" aspect-w-16 aspect-h-9  ">
      <ReactPlayer
        url={video.video_link}
        playing={false}
        controls={true}
        muted
        
        className="react-player"
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload', // Disable download
            },
          },
        }}
      />
    </div>
  );
}
