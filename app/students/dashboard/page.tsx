import { SERVER_IMAGE_URL } from "@/app/constants";
import { getCurrentStudent } from "@/services/students";
import { StudentType } from "@/types/students";
import Image from "next/image";

export default async function StudentDashboardPage() {
  const student: StudentType = await getCurrentStudent();

  return (
    <div className="w-full h-full bg-gradient-to-br from-white from-60%  to-green-400 to-30%">
      <div className="w-full flex flex-col  mt-8 ml-4">
        <h1 className="text-2xl font-bold ">
          Welcome {student.first_name + " " + student.last_name}
        </h1>
        <p className="text-muted-foreground">Your Journey to Success Begins Here!...</p>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-8 bg-green-200 rounded-lg">
        <h4>HI</h4>
      </div>
    </div>
  );
}
