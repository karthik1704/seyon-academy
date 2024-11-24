import { getNotes } from "@/services/notes";
import { NoteType } from "@/types/notes";
import {FileStack} from 'lucide-react';
import Link from "next/link";

export default async function NotesPage() {
  const notes: NoteType[] = await getNotes();

  return (
    <div className="flex gap-6 p-5 ">
      {notes.map((note: NoteType) => (
        <Link key={note.id} href={note.note_link} target="_blank">
        <div  className="flex flex-col items-center justify-between bg-white shadow-md rounded-lg p-4 gap-4 mb-4  hover:shadow-lg hover:shadow-red-100 active:scale-50" >
            <FileStack size={120}  className="text-red-500"/>
          <h2 className="text-xl font-semibold">{note.note}</h2>
          <p className="text-gray-600">{note.note_description}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}
