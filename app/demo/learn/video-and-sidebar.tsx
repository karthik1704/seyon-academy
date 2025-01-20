"use client";
import {  useState } from "react";
import Player from "./player";
import { Play } from "lucide-react";

const Video = ({ videos }) => {
  const [videoIndex, setVideoIndex] = useState(0);

   


  return (
    <div className="min-h-fit w-full flex flex-col md:flex-row bg-gray-100">
      {/* Main Video Section */}
      <div className="flex bg-white  md:flex-1 w-svw justify-center p-2">
        <div className="rounded-lg p-1 md:px-4 ">
          {/* Video Title */}
          <h1 className="text-2xl font-bold mb-4">
            {videos[videoIndex].video_name}
          </h1>

          <div className="aspect-w-16 aspect-h-9 mb-6">
            <Player video={videos[videoIndex]} />
          </div>

          {/* Video Description */}
          {/* <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
            <h2 className="text-lg font-semibold mb-2">Video Description</h2>
            {/* <p className="text-gray-700">{selectedVideo.description}</p> 
          </div> */}
        </div>
      </div>

      {/* Video List Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-4 border-l border-gray-200">
        <h2 className="text-lg font-bold mb-4">Course Content</h2>
        <ul className="space-y-4">
          {videos.map((video, idx) => (
            <li key={video.id} className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition ${
                videoIndex === idx ? "bg-teal-100" : "hover:bg-gray-50"
              }`}
              onClick={()=>setVideoIndex(idx)}
              >
             
                {/* <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-16 h-16 rounded-md shadow-md"
                /> */}
                <Play className="w-10 h-10 rounded-md shadow-md text-green-600" />

                <div>
                  <h3 className="text-sm font-semibold">{video.video_name}</h3>
                  <p className="text-xs text-gray-500">
                    {/* {video.description.substring(0, 40)}... */}
                  </p>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Video;
