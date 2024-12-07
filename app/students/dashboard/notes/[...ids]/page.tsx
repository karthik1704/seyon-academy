import { getNotesByFolder } from "@/services/notes";
import { NoteType } from "@/types/notes";
import { FileStack, Folder } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ ids: string[] }>;
}

export default async function NotesFilesAndFolderPage({ params }: Props) {
  const { ids } = await params;
  console.log(ids);
  if (ids.length === 0) {
    redirect("/students/dashboard/notes");
  }
  const { children, notes } = await getNotesByFolder(ids.at(-1) as string);

  return (
    <div className="flex gap-6 p-5 ">
      {!!children &&
        children.map((folder) => (
          <Link key={folder.id} href={`${folder.id}`}>
            <div className="flex flex-col items-center  bg-white p-1    hover:shadow-red-100 active:scale-50">
              <Folder size={120} className="text-green-300" />
              <h2 className=" font-semibold">{folder.category_name}</h2>
            </div>
          </Link>
        ))}
      {!!notes &&
        notes.map((note: NoteType) => (
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
