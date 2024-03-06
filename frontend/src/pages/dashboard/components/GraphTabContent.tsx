import { makeStyles } from "@mui/styles";
import useCollegeStore from "../../../store/college/college.store";
import { AppCustomCard } from "../../../components/styled";
import { useEffect, useState } from "react";
import { COLOR_PALETTES, computeUserScore, getScore, randomColor } from "../../../utils";
import CommonRadarChart from "../../../components/charts/CommonRadarChart";
import { FormControlLabel, Checkbox } from "@mui/material";

const useStyles = makeStyles(
    (theme) => ({
        graphTabContainer: {
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row'
            }
        },
        filterTabContainer: {
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            [theme.breakpoints.down('md')]: {
                justifyContent: 'space-between'
            }
        },
        resultContentWrapper: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 16px',
            [theme.breakpoints.down('md')]: {
                width: '100%'
            }
        },
        graphCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
                width: '500px',
                margin: '0 auto'
            }
        },
        checkboxGroup: {
            display: 'flex',
            alignItems: 'center'
        },
        checkboxControl: {
            marginRight: '5px'
        },
        graphCollegeIndicator: {
            height: '15px',
            width: '15px',
            borderRadius: '50%',
        }
    })
);

export default function GraphTabContent() {
    const classes = useStyles();
    const selectedColleges = useCollegeStore((state) => state.selectedColleges);
    const form = useCollegeStore((state) => state.form);
    const userScores = useCollegeStore((state) => state.userScore);
    const [mounted, setMounted] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [collegeKeys, setCollegeKeys] = useState<any[]>([]);
    const categories = ['cost', 'value', 'success', 'outcomes', 'diversity'];

    const initData = () => {

        let colors: string[] = [];

        const checkColor = (color: string): string => {
            if (colors.length === COLOR_PALETTES.length) {
                colors = [];
            }

            if (colors.includes(color)) {
                return checkColor(randomColor());
            }

            return color;
        }

        setCollegeKeys(selectedColleges.map((college: any) => {
            const color = checkColor(randomColor());
            colors.push(color);

            return {
                key: college.instnm.replace(/ /g, '_').toLowerCase(),
                title: college.instnm,
                active: true,
                theme: {
                    fill: color,
                    fillOpacity: 0.6,
                    stroke: color
                }
            }
        }));


        const collegeData = selectedColleges.map((college) => {
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

            const userScore = computeUserScore(college, userScores, form);

            return {
                code: college.instnm.toLowerCase().replace(/ /g, '_'),
                title: college.instnm,
                grade: userScore,
                cost: (cost * 100),
                value: (value * 100),
                success: (success * 100),
                outcomes: (outcomes * 100),
                diversity: (diversity * 100)
            };
        });

        console.log('collegeData', collegeData);

        setData(categories.map((category) => {
            const newObj: any = {
                category: category.charAt(0).toUpperCase() + category.slice(1),

            };

            collegeData.forEach((item: any) => {
                newObj[item.code] = item[category];
                newObj[`${item.code}_theme`] = {
                    fill: item.color,
                    fillOpacity: 0.1,
                    stroke: item.color
                }
            })



            return newObj;
        }));
    }

    useEffect(() => {
        if (data.length > 0) {
            setMounted(true);
        } else {
            initData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div className={classes.graphTabContainer}>
            <div className={classes.filterTabContainer}>
                <div>
                    {
                        collegeKeys.map((college) => (
                            <div className={classes.checkboxGroup} key={`checkBox${college.key}`}>
                                <FormControlLabel className={classes.checkboxControl} control={<Checkbox checked={college.active} />} label={college.title} />
                                <div className={classes.graphCollegeIndicator} style={{ background: college.theme.fill }}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.resultContentWrapper}>
                <AppCustomCard className={classes.graphCard}>
                    {
                        mounted &&
                        <CommonRadarChart data={data}
                            radarKeys={collegeKeys}
                            dataKey="category"
                        />
                    }
                </AppCustomCard>
            </div>
        </div>
    );
}