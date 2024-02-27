import { useEffect, useMemo, useRef } from "react";
import * as d3 from 'd3';
import ViolinShape from "./violin/ViolinShape";
import { useTheme } from "@mui/system";
import GraphStrip from "./violin/GraphStrip";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };

interface ViolinGraphProps {
    width: number;
    height: number;
    data: { name: string, value: number }[];
}
export default function ViolinGraph({ width, height, data }: ViolinGraphProps) {
    const theme = useTheme();
    const axesRef = useRef(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    const { min, max, groups } = useMemo(() => {
        const [min, max] = d3.extent(data.map((d) => d.value)) as [number, number];
        const groups = data.map((d) => d.name).filter((x, i, a) => a.indexOf(x) === i);

        return { min, max, groups };
    }, [data]);

    // compute scales
    const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 9]).nice();
    const xScale = d3.scaleBand().range([0, boundsWidth]).domain(groups).padding(0.25);

    // Render the X and Y axis using d3.js, not react
    useEffect(() => {
        const svgElement = d3.select(axesRef.current);
        svgElement.selectAll("g").remove();
        const xAxisGenerator = d3.axisBottom(xScale);
        svgElement
            .append("g")
            .attr("transform", "translate(0," + boundsHeight + ")")
            .call(xAxisGenerator);

        const yAxisGenerator = d3.axisLeft(yScale);
        svgElement.append("g").call(yAxisGenerator);
    }, [xScale, yScale, boundsHeight]);

    const allShapes = groups.map((group, i) => {
        const groupData = data.filter((d) => d.name === group).map((d) => d.value);
        return (
            <g key={i} transform={`translate(${xScale(group)},0)`}>
                <ViolinShape
                    data={groupData}
                    yScale={yScale}
                    width={xScale.bandwidth()}
                    binNumber={20}
                    fill={theme.palette.primary.main}
                />
            </g>
        )
    });

    return (
        <div>
            <svg width={width} height={height} style={{ display: 'inline-block' }}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
                >
                    {allShapes}
                </g>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    ref={axesRef}
                    id="violin-graph-axes"
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
                >
                    <GraphStrip width={boundsWidth} height={boundsHeight} />
                </g>

            </svg>
        </div>
    );
}