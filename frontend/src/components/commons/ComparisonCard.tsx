import { makeStyles } from "@mui/styles";
import { getScore, toLetterGrade, toPercent } from "../../utils/utilities";
import useCollegeStore from "../../store/college/college.store";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const useStyles = makeStyles((theme) => ({
    comparisonCardContainer: {
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.4)",
        position: "relative",
        padding: "10px 0px",
        height: "auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        overflow: "hidden",
        userSelect: "none",
    },
    comparisonCardCol: {
        width: "35%",
        height: "100%",
        padding: "0 10px",
    },
    comparisonLabelCol: {
        height: "100%",
        width: "30%",
        background: theme.palette.light.main,
    },
    comparisonRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "60px",
        textAlign: "center",
        padding: "8px 16px",
        marginBottom: "10px",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        fontWeight: "bold",
        position: "relative",
    },
    comparisonRowLabel: {
        backgroundColor: theme.palette.primary.main,
        fontWeight: "normal",
        borderRadius: "5px",
        textAlign: "center",
        color: theme.palette.light.main,
    },
    comparisonRowHeader: {
        height: "100px",
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: 1.1,
        color: theme.palette.dark.main,
        zIndex: 1,
        flexDirection: 'column'
    },
    comparisonCheckIconLeft: {
        position: "absolute",
        right: "10px",
    },
    comparisonCheckIconRight: {
        position: "absolute",
        left: "10px",
    },
    changeCollegeBtn: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 5,
        "&:hover": {
            color: theme.palette.primary.main,
            cursor: 'pointer'
        }
    }
}));

interface ComparisonCardProps {
    index: number;
    college1: any;
    college2: any;
    openModal: (props: any) => void;
}

export default function ComparisonCard({
    college1,
    college2,
    openModal,
}: Readonly<ComparisonCardProps>) {
    const classes = useStyles();
    const [[item1, item2], setData] = useState<Array<any>>([null, null]);
    const [mounted, setMounted] = useState(false);

    const form = useCollegeStore((state) => state.form);
    const categories = [
        {
            key: "userScore",
            label: "Your Score",
        },
        {
            key: "admissionRate",
            label: "Admission Rate",
        },
        {
            key: "success",
            label: "Success Score",
            scores: [
                { key: "Orientation to Graduation" },
                { key: "Average Time to Graduation" },
                { key: "Student Support Score" },
                { key: "% Left in 2 Years" },
                { key: "Withdrawal Rate" },
            ],
        },
        {
            key: "value",
            label: "Value Grade",
            scores: [
                { key: "Worth More to Pay More" },
                { key: "Filler" },
                { key: "Filler" },
                { key: "Some Professions" },
            ],
        },
        {
            key: "outcomes",
            label: "Outcomes",
            scores: [
                { key: "Debt/Income Ratio" },
                { key: "Inventor Score" },
                { key: "Income 90% at 10 Years" },
                { key: "Income 75% at 10 Years" },
                { key: "Income 25% at 10 Years" },
                { key: "Income 10% at 10 Years" },
            ],
        },
        {
            key: "cost",
            label: "Cost Score",
            scores: [
                { key: "Net Price for Your Income Range" },
                { key: "Net Cost of Your Degree" },
                { key: "Filler" },
            ],
        },
        {
            key: "diversity",
            label: "Diversity Score",
            scores: [
                { key: "Parents in Top Quintile of Household Income (%)" },
                { key: "Parents in Bottom Quintile of Household Income (%)" },
                { key: "Parents in Top 10% of Household Income" },
                { key: "Parents in Top 1% of Household Income" },
                { key: "Parents in Top 0.1% of Household Income" },
                { key: "Economic Inclusion Score" },
            ],
        },
    ];

    useEffect(() => {
        initData();
    }, []);

    const initData = () => {
        const items: any = [college1, college2].map((college) => {
            let npt43Key = college["npt43_priv"] > 0 ? "npt43_priv" : "npt43_pub";
            npt43Key =
                college.hasOwnProperty(`${npt43Key}_absolute`) &&
                    college.hasOwnProperty(`${npt43Key}_relative`)
                    ? npt43Key
                    : "npt43";

            return {
                name: college["instnm"],
                displayLabels: ["success", "value", "cost", "outcomes", "diversity"],
                cost: {
                    score: getScore(college, `npt4${form["familyIncome"]}`),
                    moreInfo: [
                        {
                            key: "Net Price for Your Income Range",
                            value: college["npt43_pub"] + college["npt43_priv"],
                        },
                        {
                            key: "Net Cost of Your Degree",
                            value: (
                                (college["npt43_pub"] + college["npt43_priv"]) *
                                ((4 * college["c100_4"]) /
                                    (college["c150_4"] + college["c100_4"]) +
                                    (6 * college["c150_4"]) /
                                    (college["c150_4"] + college["c100_4"]))
                            ).toFixed(2),
                        },
                        { key: "Filler", value: "Filler" },
                    ],
                },
                value: {
                    score: getScore(college, `value_${form["familyIncome"]}`),
                    moreInfo: [
                        { key: "Worth More to Pay More", value: null },
                        { key: "Filler", value: null },
                        { key: "Filler", value: null },
                        { key: "Some Professions", value: null },
                    ],
                },
                success: {
                    score:
                        0.4 * college["success_relative"] +
                        0.6 * college["success_absolute"],
                    moreInfo: [
                        {
                            key: "Orientation to Graduation",
                            value: toPercent(college["comp_orig_yr4_rt"]),
                        },
                        {
                            key: "Average Time to Graduation",
                            value: (
                                (4 * college["c100_4"]) /
                                (college["c150_4"] + college["c100_4"]) +
                                (6 * college["c150_4"]) /
                                (college["c150_4"] + college["c100_4"])
                            ).toFixed(2),
                        },
                        {
                            key: "Student Support Score",
                            value: toPercent(
                                0.4 * college["support_relative"] +
                                0.6 * college["support_absolute"]
                            ),
                        },
                        {
                            key: "% Left in 2 Years",
                            value: toPercent(college["enrl_orig_yr2_rt"]),
                        },
                        {
                            key: "Withdrawal Rate",
                            value: toPercent(college["wdraw_orig_yr3_rt"]),
                        },
                    ],
                },
                outcomes: {
                    score:
                        0.4 * college["outcomes_relative"] +
                        0.6 * college["outcomes_absolute"],
                    moreInfo: [
                        {
                            key: "Debt/Income Ratio",
                            value: (
                                (0.4 * college["weighted_debt_relative"] +
                                    0.6 * college["weighted_debt_absolute"]) /
                                (0.4 * college["weighted_income_relative"] +
                                    0.6 * college["weighted_income_absolute"])
                            ).toFixed(2),
                        },
                        { key: "Inventor Score", value: college["inventor"] },
                        {
                            key: "Income 90% at 10 Years",
                            value: college["pct90_earn_wne_p10"],
                        },
                        {
                            key: "Income 75% at 10 Years",
                            value: college["pct75_earn_wne_p10"],
                        },
                        {
                            key: "Income 25% at 10 Years",
                            value: college["pct25_earn_wne_p10"],
                        },
                        {
                            key: "Income 10% at 10 Years",
                            value: college["pct10_earn_wne_p10"],
                        },
                    ],
                },
                diversity: {
                    score:
                        0.5 *
                        (0.4 * college["social_diversity_score_relative"] +
                            0.6 * college["social_diversity_score_absolute"] +
                            (0.4 * college["economic_inclusion_score_relative"] +
                                0.6 * college["economic_inclusion_score_absolute"])),
                    moreInfo: [
                        {
                            key: "Parents in Top Quintile of Household Income (%)",
                            value: toPercent(college["par_q5"]),
                        },
                        {
                            key: "Parents in Bottom Quintile of Household Income (%)",
                            value: toPercent(college["par_q1"]),
                        },
                        {
                            key: "Parents in Top 10% of Household Income",
                            value: toPercent(college["par_top10pc"]),
                        },
                        {
                            key: "Parents in Top 1% of Household Income",
                            value: toPercent(college["par_top1pc"]),
                        },
                        {
                            key: "Parents in Top 0.1% of Household Income",
                            value: toPercent(college["par_toppt1pc"]),
                        },
                        {
                            key: "Economic Inclusion Score",
                            value: toPercent(
                                0.4 * college["economic_inclusion_score_relative"] +
                                0.6 * college["economic_inclusion_score_absolute"]
                            ),
                        },
                    ],
                },
                admissionRate: {
                    score: college["adm_rate"],
                },
                userScore: {
                    score:
                        (getScore(college, "success") +
                            getScore(college, "outcomes") +
                            getScore(college, npt43Key) +
                            getScore(college, "economic_inclusion_score")) /
                        4,
                },
            };
        });

        setData(items);
        setMounted(true);
    };

    return (
        <div className={classes.comparisonCardContainer}>
            {mounted && (
                <>
                    <div className={classes.comparisonCardCol}>
                        <div
                            className={`${classes.comparisonRow} ${classes.comparisonRowHeader}`}
                        >
                            {item1.name}
                            <div className={classes.changeCollegeBtn} onClick={() => openModal('college1')}>
                                Change
                            </div>
                        </div>
                        {categories.map((category, index) => (
                            <div
                                className={`${classes.comparisonRow}`}
                                key={`comparisonRowCategoryItem1${category.key}${index}`}
                            >
                                {toLetterGrade(item1[category.key].score)}
                                {item1[category.key].score > item2[category.key].score && (
                                    <CheckCircleIcon
                                        className={classes.comparisonCheckIconLeft}
                                        color="success"
                                        fontSize="small"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={`${classes.comparisonLabelCol}`}>
                        <div style={{ height: "110px" }}></div>
                        {categories.map((category, index) => (
                            <div
                                className={`${classes.comparisonRow} ${classes.comparisonRowLabel}`}
                                key={`comparisonRowCategoryLabel${category.key}${index}`}
                            >
                                {category.label}
                            </div>
                        ))}
                    </div>
                    <div className={classes.comparisonCardCol}>
                        <div
                            className={`${classes.comparisonRow} ${classes.comparisonRowHeader}`}
                        >
                            {item2.name}
                            <div className={classes.changeCollegeBtn} onClick={() => openModal('college2')}>
                                Change
                            </div>
                        </div>
                        {categories.map((category, index) => (
                            <div
                                className={`${classes.comparisonRow}`}
                                key={`comparisonRowCategoryItem2${category.key}${index}`}
                            >
                                {toLetterGrade(item2[category.key].score)}
                                {item1[category.key].score < item2[category.key].score && (
                                    <CheckCircleIcon
                                        className={classes.comparisonCheckIconRight}
                                        color="success"
                                        fontSize="small"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
