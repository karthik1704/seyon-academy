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
        <p className="text-muted-foreground">
          Your Journey to Success Begins Here!...
        </p>
      </div>

      <div className="bg-[#F8F6FF] px-6 sm:px-8 md:px-12 lg:px-12 xl:px-20 py-8 mx-8 rounded-md mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-48 md:w-64 flex-shrink-0">
            <Image
              src="/images/students/teacher_board.png"
              alt="Student learning illustration"
              width={256}
              height={256}
              className="w-full h-auto"
            />
          </div>

          <div className="flex-grow space-y-4 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Learn Smarter, Achieve More!
            </h1>
            <p className="text-gray-600 max-w-xl">
              Experience the future of education with{" "}
              <span className="font-medium"> LIVE interactive classes</span>,
              expert guidance, and real-time doubt resolution. Your dreams
              deserve the best. classes
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}
