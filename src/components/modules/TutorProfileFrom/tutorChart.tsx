'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SlotChartType } from '@/type/chart.type'



type Props = {
  data: SlotChartType[]
}

const TutorSlotLineChart = ({ data }: Props) => {
  return (
    <div className="">
      
      {/* Chart Section */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Slot Creation Trend</CardTitle>
        </CardHeader>

        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="total"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

     

    </div>
  )
}

export default TutorSlotLineChart
