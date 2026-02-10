"use client"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
} from "recharts"
import { Card} from "@/components/ui/card"

type ChartData = {
    date: string
    price: number
}

type Props = {
    data: ChartData[]
}

const MixBarChart = ({ data }: Props) => {

    return (
        <div>
        
            <Card className="w-full mt-10">
                <LineChart
                    style={{ width: '100%', maxWidth: '1200px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="date" stroke="#82ca9d" />

                </LineChart>
            </Card>
        </div>
    )
}

export default MixBarChart
