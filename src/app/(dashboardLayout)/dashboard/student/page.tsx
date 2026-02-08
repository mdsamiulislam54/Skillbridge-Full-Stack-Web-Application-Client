import MixBarChart from "@/components/modules/AdminPage/MixBarChart/MixbarChart";
import StudentDashboardCard from "@/components/modules/studentPage/studentDashboardCard"
import { studentService } from "@/services/student.service";
import { cookies } from "next/headers"


const StudentDashboard = async () => {
  const cookieStore = await cookies();
  const [card, chart] = await Promise.all([
    studentService.getStudentDashboardData(cookieStore.toString()),
      studentService.getDashboardChartData(cookieStore.toString())
  ])
  return (
    <div className="p-4">
      <StudentDashboardCard card={card.data} />
      <MixBarChart data={chart.data}/>
    </div>
  )
}

export default StudentDashboard