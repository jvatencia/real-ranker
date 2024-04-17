import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { useEffect } from "react";

interface CommonRadarChartProps {
    dataKey: string;
    data: any[],
    radarKeys: any[],
    width?: number,
    height?: number,
}
export default function CommonRadarChart({ dataKey, data, radarKeys, width, height }: CommonRadarChartProps) {

    useEffect(() => {
        console.log('CommonRadarChart data', data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <RadarChart
            outerRadius="80%" data={data} width={width || 250} height={height || 200}>
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