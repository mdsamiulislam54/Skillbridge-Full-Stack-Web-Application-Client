import StudentDashboardCard from "@/components/modules/studentPage/studentDashboardCard"
import { studentService } from "@/services/student.service";
import { cookies } from "next/headers"


const StudentDashboard = async() => {
  const cookieStore = await cookies();
  const res = await studentService.getStudentDashboardData(cookieStore.toString())
  return (
    <div className="p-4">
      <StudentDashboardCard card={res.data}/>
    </div>
  )
}

export default StudentDashboard