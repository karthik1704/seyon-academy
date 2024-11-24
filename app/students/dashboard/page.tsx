import { getCurrentStudent } from "@/services/students";



export default async function StudentDashboardPage() {

    const student = await getCurrentStudent();

    return(
        <div>{student.first_name}</div>
    )
}