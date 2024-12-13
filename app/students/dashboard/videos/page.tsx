import { SERVER_IMAGE_URL } from "@/app/constants";
import { getVideos, getVideosFolders } from "@/services/videos";
import { VideoType } from "@/types/videos";
import { Folder } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function VideosPage() {
  const videos: VideoType[] = await getVideos();
  const videosFolders = await getVideosFolders();

  return (
    <div>
      <div className="flex gap-6 p-5 ">
        {videosFolders.map((folder) => (
          <Link key={folder.id} href={`videos/${folder.id}`}>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full md:w-[100%] flex flex-col items-center hover:shadow-red-100 active:scale-50">
            {folder.image ? (
              <Image
                src={`${SERVER_IMAGE_URL}${folder.image}`}
                width={120}
                height={120}
                alt={folder.category_name}
              />
            ) : (
              <Folder size={120} className="text-red-500" />
            )}
              <h2 className=" font-semibold">{folder.category_name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row p-6 gap-6 w-full h-full">
        {videos.map((video: VideoType) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full md:w-1/3 "
          >
            <h2 className="text-xl font-bold mb-2">{video.video_title}</h2>
            <p className="text-gray-600 mb-4">{video.video_type}</p>
            <div className="aspect-w-16 aspect-h-12">
              <iframe
                className="w-full h-80 rounded-lg"
                src={`${video.video_link}?modestbranding=1&showinfo=0&rel=0&controls=1`}
                title={video.video_title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
