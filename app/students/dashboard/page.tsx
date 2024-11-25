import { SERVER_IMAGE_URL } from "@/app/constants";
import { getCurrentStudent } from "@/services/students";
import { StudentType } from "@/types/students";
import Image from "next/image";

export default async function StudentDashboardPage() {
  const student: StudentType = await getCurrentStudent();

  return (
    <div className="w-full h-full bg-gradient-to-br from-white from-60%  to-green-400 to-30%">
      <div className="w-full flex flex-col items-center mt-3 gap-4">

      <div className="rounded-full flex gap-4 ">
        <Image
          src={`${SERVER_IMAGE_URL}${student.student_profile.student_photo}`}
          alt={student.first_name + " " + student.last_name}
          width={200}
          height={200}
          className="rounded-full shadow-md shadow-green-500"
          />
      </div>
      <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold text-center">{student.first_name + " " + student.last_name}</h1>
      <h2 className="text-1xl font-bold text-center">{student.student_code}</h2>
      <p className="text-center text-muted-foreground">{student.batch.batch_name}</p>
        </div>
          </div>
    </div>
  );
}
