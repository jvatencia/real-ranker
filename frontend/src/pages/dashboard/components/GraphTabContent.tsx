import { makeStyles } from "@mui/styles";
import useCollegeStore from "../../../store/college/college.store";
import { AppCustomCard, AppPageTitle } from "../../../components/styled";
import { useEffect, useMemo, useState } from "react";
import { COLOR_PALETTES, computeUserScore, getScore, randomColor } from "../../../utils";
import CommonRadarChart from "../../../components/charts/CommonRadarChart";
import { FormControlLabel, Checkbox } from "@mui/material";
import PageBody from "../../../components/commons/PageBody";
import ResponsiveBox from "../../../components/utilities/ResponsiveBox";

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
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            width: '40%',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                justifyContent: 'space-between'
            }
        },
        resultContentWrapper: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 16px',
            width: '60%',
            [theme.breakpoints.down('md')]: {
                width: '100%'
            }
        },
        graphCard: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
                width: '100%',
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


    let colors: any[] = [];

    const checkColor = (color: any): any => {
        if (colors.length === COLOR_PALETTES.length) {
            colors = [];
        }

        if (colors.map(item => item.bg).includes(color)) {
            return checkColor(randomColor());
        }

        return color;
    }

    const [collegeKeys, setCollegeKeys] = useState<any[]>(selectedColleges.map((college: any) => {
        const color = checkColor(randomColor());
        colors.push(color);

        return {
            key: college.instnm.replace(/ /g, '_').toLowerCase(),
            title: college.instnm,
            active: true,
            theme: {
                fill: color.bg,
                fillOpacity: 0.6,
                stroke: color.bg
            }
        }
    }));
    const categories = ['cost', 'value', 'success', 'outcomes', 'diversity'];

    const collegeData = useMemo(
        () => selectedColleges.map((college) => {
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
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [userScores]);

    const initData = () => {


        const keys = collegeKeys.filter((item) => item.active).map((item) => item.key);
        setData(categories.map((category) => {
            const newObj: any = {
                category: category.charAt(0).toUpperCase() + category.slice(1),

            };

            collegeData.forEach((item: any) => {
                if (keys.includes(item.code)) {
                    newObj[item.code] = item[category];
                    newObj[`${item.code}_theme`] = {
                        fill: item.color,
                        fillOpacity: 0.1,
                        stroke: item.color
                    }
                }
            })



            return newObj;
        }));
    }

    const toggleCollege = (college: any) => {
        setCollegeKeys(collegeKeys.map((item) => {
            if (college.key === item.key) {
                return { ...item, active: !college.active };
            }
            return item;
        }));
        setData([]);
    }

    useEffect(() => {
        console.log(collegeKeys);
        if (data.length > 0) {
            setMounted(true);
        } else {
            initData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, collegeKeys])

    return (
        <ResponsiveBox style={{ marginTop: '20px' }}>
            <PageBody>
                <AppPageTitle>College Comparison</AppPageTitle>
                <div className={classes.graphTabContainer}>
                    <div className={classes.filterTabContainer}>
                        <div>
                            {
                                collegeKeys.map((college) => (
                                    <div className={classes.checkboxGroup} key={`checkBox${college.key}`}>
                                        <FormControlLabel className={classes.checkboxControl} control={<Checkbox checked={college.active} onClick={(e: any) => toggleCollege(college)} />} label={college.title} />
                                        <div className={classes.graphCollegeIndicator} style={{ background: college.theme.fill }}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={classes.resultContentWrapper}>
                        <AppCustomCard className={classes.graphCard}>
                            {
                                mounted && data.length > 0 &&
                                <CommonRadarChart data={data}
                                    width={500}
                                    height={500}
                                    radarKeys={collegeKeys}
                                    dataKey="category"
                                />
                            }
                        </AppCustomCard>
                    </div>
                </div>
            </PageBody>
        </ResponsiveBox>
    );
}