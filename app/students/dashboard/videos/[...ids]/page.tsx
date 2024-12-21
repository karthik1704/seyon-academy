import { SERVER_IMAGE_URL } from "@/app/constants";
import { getVideosByFolder } from "@/services/videos";
import { VideoType } from "@/types/videos";
import { Folder } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ ids: string[] }>;
}

export default async function NotesFilesAndFolderPage({ params }: Props) {
  const { ids } = await params;
  console.log(ids);
  if (ids.length === 0) {
    redirect("/students/dashboard/videos");
  }
  const { children, videos } = await getVideosByFolder(ids.at(-1) as string);

  return (
    <div className="flex flex-wrap gap-6 p-5 w-full">
      {!!children &&
        children.map((folder) => (
          <Link key={folder.id} href={`${folder.id}`}>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full md:w-1/3 flex flex-col items-center hover:shadow-red-100">
              {folder.image ? (
                <Image
                  src={`${SERVER_IMAGE_URL}${folder.image}`}
                  width={120}
                  height={120}
                  alt={folder.category_name}
                  className="rounded-lg"
                />
              ) : (
                <Folder size={120} className="text-red-500" />
              )}
              <h2 className="text-xl font-bold mt-2 text-center">
                {folder.category_name}
              </h2>
            </div>
          </Link>
        ))}
      {!!videos &&
        videos.map((video: VideoType) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full md:w-1/3"
          >
            <h2 className="text-xl font-bold mb-2">{video.video_title}</h2>
            <p className="text-gray-600 mb-4">{video.video_type}</p>
            <div className="aspect-w-16 aspect-h-9">
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
  );
}
