import { getCurrentStudent } from "@/services/students";

export default async function StudentDashboardPage() {
  const student = await getCurrentStudent();

  return (
    <div className="h-full bg-gradient-to-r from-white from-60% via-purple-400 to-green-400 to-30%">
      {student.first_name}
    </div>
  );
}
