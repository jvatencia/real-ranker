import { makeStyles } from "@mui/styles";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import useCollegeStore from "../../store/college/college.store";
import { FONT_FAMILY, getScore } from "../../utils";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/system";

const useStyles = makeStyles(
    (theme) => ({
        graphCard: {
            height: '450px',
            width: '300px',
            boxShadow: '0px 3px 0px ' + theme.palette.primary.main,
            border: '1px solid ' + theme.palette.primary.main,
            margin: '10px',
            padding: '20px 16px',
            borderRadius: '5px'
        },
        graphCardTitle: {
            fontFamily: FONT_FAMILY.DEFAULT,
            color: theme.palette.primary.main,
            lineHeight: 1,
            fontSize: '20px',
            fontWeight: 'bold',
            height: '40px',
            display: 'flex',
            alignItems: 'center'
        },
        graphContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 'calc(100% - 40px)'
        },
        angleAxis: {
            fontSize: '10px',
            "& tspan": {
                color: theme.palette.primary.main

            }
        }
    })
);

const CollegeRadarChart = ({ data, college, classes }: any) => {
    const theme = useTheme();

    return (
        <RadarChart
            outerRadius="80%" data={data} width={250} height={200}>
            <PolarGrid />
            <PolarAngleAxis tickLine={false} dataKey="name" style={{
                fontSize: '11px'
            }} />
            <PolarRadiusAxis axisLine={false} tick={false} angle={30} domain={[0, 1]} />
            <Radar name={college} dataKey="value" stroke={theme.palette.primary.main} fill={theme.palette.warning.main} fillOpacity={0.6} />
        </RadarChart>
    );
}

interface CollegeGraphCardProps {
    college: any;
}
export default function CollegeGraphCard({ college }: Readonly<CollegeGraphCardProps>) {
    const classes = useStyles();
    const form = useCollegeStore((state) => state.form);
    const userScores = useCollegeStore((state) => state.userScore);
    const [data, setData] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);

    const weighted_mult_sum = (weights: Array<number>, nums: Array<number>) => {
        return weights.reduce((a: number, b: number, index: number) => {
            return a + (b * nums[index]);
        }, 0);
    }

    useEffect(() => {
        initData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setMounted(data.length > 0);
        console.log(data);
    }, [data]);


    const initData = () => {

        const cost = parseFloat(getScore(college, `npt4${form['familyIncome']}`).toFixed(2));
        const value = parseFloat(getScore(college, `value_${form['familyIncome']}`).toFixed(2));
        const success = parseFloat(
            ((0.4 * college['success_relative']) + (0.6 * college['success_absolute'])).toFixed(2)
        );
        const outcomes = parseFloat(
            ((0.4 * college['outcomes_relative']) + (0.6 * college['outcomes_absolute'])).toFixed(2)
        );
        const diversity = parseFloat(
            (0.5 * (((0.4 * college['social_diversity_score_relative']) +
                (0.6 * college['social_diversity_score_absolute'])) +
                ((0.4 * college['economic_inclusion_score_relative']) +
                    (0.6 * college['economic_inclusion_score_absolute'])))).toFixed(2)
        );

        const userScore = parseFloat(weighted_mult_sum([
            userScores['success'] / 100,
            userScores['value'] / 100,
            userScores['cost'] / 100,
            userScores['diversity'] / 100,
            userScores['outcomes'] / 100],
            [success, value, cost, diversity, outcomes]).toFixed(2));

        setData([
            { name: 'Cost', value: (cost * 100) },
            { name: 'Value', value: (value * 100) },
            { name: 'Success', value: (success * 100) },
            { name: 'Outcomes', value: (outcomes * 100) },
            { name: 'Diversity', value: (diversity * 100) },
        ]);

        return userScore;
    };

    return (
        <div className={classes.graphCard}>
            <div className={classes.graphCardTitle}>{college.instnm}</div>
            <div className={classes.graphContainer}>
                {
                    mounted &&
                    <CollegeRadarChart data={data} college={college.instnm} classes={classes} />
                }
            </div>
        </div>
    );
}