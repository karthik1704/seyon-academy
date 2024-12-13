import Image from "next/image";
import { SERVER_IMAGE_URL } from "@/app/constants";
import { getNotes, getNotesFolders } from "@/services/notes";
import { NoteType } from "@/types/notes";
import { FileStack, Folder } from "lucide-react";
import Link from "next/link";

export default async function NotesPage() {
  const notes: NoteType[] = await getNotes();
  const notesFolders = await getNotesFolders();
  return (
    <div className="flex gap-6 p-5 ">
      {notesFolders.map((folder) => (
        <Link key={folder.id} href={`notes/${folder.id}`}>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full md:w-[100%] flex flex-col items-center hover:shadow-red-100 active:scale-50">
            {/* <Folder size={120} className="text-red-500" /> */}
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
      {notes.map((note: NoteType) => (
        <Link key={note.id} href={note.note_link} target="_blank">
          <div className="flex flex-col items-center justify-between bg-white shadow-md rounded-lg p-4 gap-4 mb-4  hover:shadow-lg hover:shadow-red-100 active:scale-50">
            <FileStack size={120} className="text-red-500" />
            <h2 className="text-xl font-semibold">{note.note}</h2>
            <p className="text-gray-600">{note.note_description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
