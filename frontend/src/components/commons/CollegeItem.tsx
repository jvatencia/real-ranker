import { BrokenImageOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import useCollegeStore from "../../store/college/college.store";
import { formatNumber, getAcceptanceRate, getScore, toLetterGrade, toPercent } from "../../utils";
import { useTheme } from "@mui/system";

const useStyles = makeStyles(
    (theme) => ({
        collegeItemWrapper: {
            width: '100%',
            border: '1px solid ' + theme.palette.dark.main,
            borderRadius: '5px',
            margin: '10px auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            [theme.breakpoints.up('md')]: {
                maxWidth: '800px',
                minHeight: '200px',
            }
        },
        collegeImg: {

            background: theme.palette.light.dark,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100px',

        },
        collegeContentWrapper: {
        },
        collegeInfo: {
            padding: '10px 24px',
            width: '100%',
            height: '80px',
        },
        categoryTabs: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            height: '60px',
        },
        categoryTab: {
            width: '20%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            borderTop: '1px solid ' + theme.palette.dark.main,
            borderBottom: '1px solid ' + theme.palette.dark.main,
            background: theme.palette.secondary.main,
            color: theme.palette.light.main,
            transition: '0.3s ease-in-out',
            "&:not(:last-child)": {
                borderRight: '1px solid ' + theme.palette.dark.main
            }
        },
        categoryTabActive: {
            borderBottom: 'unset',
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText
        },
        tabDetailsWrapper: {
            padding: '10px 16px',
            minHeight: '50px',
            background: theme.palette.warning.main
        },
        tabDetailItem: {
            "&div:first-child()": {
                fontWeight: 'bold'
            }
        }
    })
);

interface CollegeItemProps {
    college: any;
}
export default function CollegeItem({ college }: Readonly<CollegeItemProps>) {
    const classes = useStyles();

    const form = useCollegeStore((state) => state.form);
    const userScores = useCollegeStore((state) => state.userScore);
    const theme = useTheme();
    const userScore = getAcceptanceRate(college, form);

    const weighted_mult_sum = (weights: Array<number>, nums: Array<number>) => {
        return weights.reduce((a: number, b: number, index: number) => {
            return a + (b * nums[index]);
        }, 0);
    }

    const cost = getScore(college, `npt4${form['familyIncome']}`);
    const value = getScore(college, `value_${form['familyIncome']}`);
    const success = (0.4 * college['success_relative']) + (0.6 * college['success_absolute']);
    const outcomes = (0.4 * college['outcomes_relative']) + (0.6 * college['outcomes_absolute']);
    const diversity = 0.5 * (((0.4 * college['social_diversity_score_relative']) + (0.6 * college['social_diversity_score_absolute'])) + ((0.4 * college['economic_inclusion_score_relative']) + (0.6 * college['economic_inclusion_score_absolute'])));
    const yourscore = toLetterGrade(
        weighted_mult_sum([
            userScores['success'] / 100,
            userScores['value'] / 100,
            userScores['cost'] / 100,
            userScores['diversity'] / 100,
            userScores['outcomes'] / 100],
            [success, value, cost, diversity, outcomes])
    );
    const successArray = [
        { key: 'Real Graduation Rate', value: toPercent(college['comp_orig_yr4_rt']) },
        { key: 'Average Time to Graduation', value: ((4 * college['c100_4'] / ((college['c150_4'] + college['c100_4']))) + (6 * college['c150_4'] / ((college['c150_4'] + college['c100_4'])))).toFixed(2) },
        { key: 'Student Support Score', value: toPercent(((0.4 * college['support_relative']) + (0.6 * college['support_absolute']))) },
        { key: '% Left in 2 Years', value: toPercent(college['enrl_orig_yr2_rt']) },
        { key: 'Withdrawal Rate', value: toPercent(college['wdraw_orig_yr3_rt']) },
    ];

    const valueArray = [
        { key: 'Worth More to Pay More' },
        { key: 'Some Professions' },
    ];

    const costArray = [
        { key: 'Net Price for Your Income Range', value: formatNumber(college[`npt4${form.familyincome}_pub`] + college[`npt4${form.familyincome}_priv`]) },
        { key: 'Net Cost of Your Degree', value: formatNumber(((college[`npt4${form.familyincome}_pub`] + college[`npt4${form.familyincome}_priv`]) * ((4 * college['c100_4'] / ((college['c150_4'] + college['c100_4']))) + (6 * college['c150_4'] / ((college['c150_4'] + college['c100_4']))))).toFixed(2)) },
    ];

    const outcomeArray = [
        {
            key: 'Debt/Income Ratio', value:
                (
                    (1 + ((0.4 * college['weighted_debt_relative']) + (0.6 * college['weighted_debt_absolute']))) /
                    (1 + ((0.4 * college['weighted_income_relative']) + (0.6 * college['weighted_income_absolute'])))
                ).toFixed(2)
        },
        { key: 'Inventor Score', value: college['inventor'] },
        { key: 'Income 90% at 10 Years', value: college['pct90_earn_wne_p10'] },
        { key: 'Income 75% at 10 Years', value: college['pct75_earn_wne_p10'] },
        { key: 'Income 25% at 10 Years', value: college['pct25_earn_wne_p10'] },
        { key: 'Income 10% at 10 Years', value: college['pct10_earn_wne_p10'] },

    ];

    const diversityArray = [
        { key: 'Parents in Top Quintile of Household Income (%)', value: toPercent(college['par_q5']) },
        { key: 'Parents in Bottom Quintile of Household Income (%)', value: toPercent(college['par_q1']) },
        { key: 'Parents in Top 10% of Household Income', value: toPercent(college['par_top10pc']) },
        { key: 'Parents in Top 1% of Household Income', value: toPercent(college['par_top1pc']) },
        { key: 'Parents in Top 0.1% of Household Income', value: toPercent(college['par_toppt1pc']) },
        { key: 'Economic Inclusion Score', value: toPercent((0.4 * college['economic_inclusion_score_relative']) + (0.6 * college['economic_inclusion_score_absolute'])) },

    ];

    const tabs = [
        { title: 'Success', value: toLetterGrade(success), key: 'success' },
        { title: 'Cost', value: toLetterGrade(cost), key: 'cost' },
        { title: 'Value', value: toLetterGrade(value), key: 'value' },
        { title: 'Career', value: toLetterGrade(outcomes), key: 'outcomes' },
        { title: 'Diversity', value: toLetterGrade(diversity), key: 'diversity' },
    ];


    const [tab, setTab] = useState(tabs[0].key);
    const [tabDetails, setTabDetails] = useState<any[]>(successArray);

    const setActiveTab = (tab: string) => {
        setTab(tab);
        switch (tab) {
            case 'cost':
                setTabDetails(costArray);
                break;
            case 'value':
                setTabDetails(valueArray);
                break;
            case 'outcomes':
                setTabDetails(outcomeArray);
                break;
            case 'diversity':
                setTabDetails(diversityArray);
                break;
            case 'success':
            default:
                setTabDetails(successArray);
                break;
        }
    }

    return (
        <div className={classes.collegeItemWrapper}>
            <div className={classes.collegeImg}>
                <BrokenImageOutlined fontSize="large" />
            </div>
            <div className={classes.collegeContentWrapper}>
                <div className={classes.collegeInfo}>
                    <div>{college.instnm}</div>
                </div>
                <div>
                    <div className={classes.categoryTabs}>
                        {
                            tabs.map((tabItem) => (
                                <div key={tabItem.key} className={`${classes.categoryTab} ${tab === tabItem.key && classes.categoryTabActive}`} onClick={() => setActiveTab(tabItem.key)}>
                                    <div>{tabItem.title}</div>
                                    <div>{tabItem.value}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={classes.tabDetailsWrapper}>
                        {
                            tabDetails.map((item, index) => (
                                <div key={`tabDetails${index}`} className={classes.tabDetailItem}>
                                    <div>{item.key}</div>
                                    <div>{item.value}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}