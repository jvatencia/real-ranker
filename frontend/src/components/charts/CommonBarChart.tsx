import { useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";

interface CommonBarChartProps {
    dataKey: string;
    data: any[],
    barKeys: any[],
}

export default function CommonBarChart({ dataKey, data, barKeys }: CommonBarChartProps) {
    useEffect(() => {
        console.log('CommonRadarChart data', data);
        console.log('CommonRadarChart radarKeys', barKeys);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ResponsiveContainer>
            <BarChart data={data} layout="horizontal">
                <CartesianGrid strokeDasharray="4 1 2" />
                <XAxis dataKey={'acronym'} />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                    barKeys.map((item, index) => (
                        <Bar layout="horizontal" dataKey={item.category} fill={item.theme.fill} key={`customBarItem${dataKey}${index}`} />
                    ))
                }
            </BarChart>
        </ResponsiveContainer>
    );
}