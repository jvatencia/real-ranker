import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { useEffect } from "react";

interface CommonRadarChartProps {
    dataKey: string;
    data: any[],
    radarKeys: any[],
}
export default function CommonRadarChart({ dataKey, data, radarKeys }: CommonRadarChartProps) {

    useEffect(() => {
        console.log('CommonRadarChart data', data);
    }, []);

    return (
        <RadarChart
            outerRadius="80%" data={data} width={250} height={200}>
            <PolarGrid />
            <PolarAngleAxis tickLine={false} dataKey={dataKey} style={{
                fontSize: '11px'
            }} />
            <PolarRadiusAxis axisLine={false} tick={false} angle={30} domain={[0, 1]} />
            {
                radarKeys.map((radar, index) => (
                    <Radar name={data[index].category} dataKey={radar.key}  {...radar.theme} key={`customRadarItem${dataKey}${index}`} />
                ))
            }
        </RadarChart>
    );
}