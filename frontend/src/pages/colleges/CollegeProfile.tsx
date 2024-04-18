import { Link, useParams } from "react-router-dom";
import PageBody from "../../components/commons/PageBody";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { COLLEGE_CONTROL, FIPS_STATES, FONT_FAMILY, formatNumber, getAcceptanceRate, getScore, toLetterGrade, toPercent } from "../../utils";
import { letterSpacing, useTheme } from "@mui/system";
import { CheckOutlined, StarOutlineRounded, PaidOutlined, AssessmentOutlined, Diversity3Outlined, PlaceOutlined, SchoolOutlined, LanguageOutlined } from "@mui/icons-material";
import useCollegeStore from "../../store/college/college.store";
import { TooltipModal } from "../../components/modals/TooltipModal";

const useStyles = makeStyles(
    (theme) => ({
        schoolTitle: {
            fontSize: '35px',
            fontFamily: FONT_FAMILY.POPPINS_BOLD,
            [theme.breakpoints.down('md')]: {
                fontSize: '20px'
            }
        },
        profileCard: {
            width: '100%',
            padding: '16px 32px',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
            borderRadius: '5px',
            marginBottom: '20px',
            [theme.breakpoints.down('md')]: {
                marginBottom: '10px',
                padding: '16px',
            }
        },
        profileHeader: {
            fontFamily: FONT_FAMILY.POPPINS_BOLD,
            fontSize: '2rem',
            marginBottom: '15px',
            [theme.breakpoints.down('md')]: {
                fontSize: '24px'
            }
        },
        schoolUserGrade: {
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column-reverse'
            }
        },
        schoolCategoryGrade: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        },
        gradeInfoItem: {
            width: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: '10px'
        },
        gradeInfoItemOverall: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: '20px',
        },
        gradeInfoScore: {
            height: '50px',
            width: '50px',
            borderRadius: '15px',
            marginBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontFamily: FONT_FAMILY.PTSANS_BOLD,
            [theme.breakpoints.up('md')]: {
                height: '80px',
                width: '80px',
                fontSize: '30px',
                letterSpacing: '-3px'
            }
        },
        gradeInfoScoreOverall: {
            height: '100px',
            width: '100px',
            borderRadius: '15px',
            marginBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            fontFamily: FONT_FAMILY.PTSANS_BOLD,
            [theme.breakpoints.up('md')]: {
                height: '120px',
                width: '120px',
                fontSize: '4rem',
                letterSpacing: '-3px'
            }
        },
        gradeInfoCategory: {
            fontFamily: FONT_FAMILY.PTSANS,
            fontSize: '16px'
        },
        profileInfoSection: {
            display: 'flex',
            alignItems: 'center',
            height: '200px',
            marginTop: '25px',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                height: 'auto',
                width: '100%',
            }
        },
        profileUserGrade: {
            width: '200px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            [theme.breakpoints.down('md')]: {
                width: '150px',
                height: '150px',
            }
        },
        profileGrade: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '180px',
            width: '180px',
            borderRadius: '15px',
            fontSize: '5rem',
            fontFamily: FONT_FAMILY.PTSANS_BOLD,
            [theme.breakpoints.down('md')]: {
                width: '130px',
                height: '130px',
            }
        },
        profileDetailsSection: {
            padding: '16px',
            width: 'calc(100% - 200px)',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            }
        },
        profileDetail: {
            width: '30%',
            fontFamily: FONT_FAMILY.PTSANS,
            [theme.breakpoints.down('md')]: {
                width: '50%',
            },
            "& a": {
                textDecoration: 'none',
                color: theme.palette.secondary.main
            }
        },
        admissionCol: {
            width: '50%',
            height: '100%'
        },
        costItem: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0,0,0,0.3)',
            padding: '5px 16px',
            [theme.breakpoints.down('md')]: {
                padding: '5px 8px'
            }
        },
        profileLabelKey: {
            fontSize: '16px',
            fontFamily: FONT_FAMILY.PTSANS
        },
        profileSmallLabel: {
            fontSize: '14px',
            fontFamily: FONT_FAMILY.PTSANS,
        },
        profileLabelValue: {
            fontSize: '24px',
            fontFamily: FONT_FAMILY.POPPINS
        },
        profileLabelValueLg: {
            fontSize: '4rem',
            fontFamily: FONT_FAMILY.POPPINS
        }
    })
);

export default function CollegeProfile() {
    const classes = useStyles();
    let { id } = useParams();
    const selectedCollege = useCollegeStore((state) => state.currentCollege);
    const resetSelectedCollege = useCollegeStore((state) => state.resetSelectedCollege);
    const getCollege = useCollegeStore((state) => state.getCollege);
    const form = useCollegeStore((state) => state.form);
    const userScores = useCollegeStore((state) => state.userScore);
    const theme = useTheme();
    const [userDetail, setUserDetail] = useState<any>(null);

    const weighted_mult_sum = (weights: Array<number>, nums: Array<number>) => {
        return weights.reduce((a: number, b: number, index: number) => {
            return a + (b * nums[index]);
        }, 0);
    }

    const gradeInfoArray = [
        { title: 'Success', key: 'success', icon: () => <CheckOutlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Value', key: 'value', icon: () => <StarOutlineRounded fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Cost', key: 'cost', icon: () => <PaidOutlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Career', key: 'outcomes', icon: () => <AssessmentOutlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Diversity', key: 'diversity', icon: () => <Diversity3Outlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
    ];

    const getGradeColor = (letterGrade: string) => {
        switch (letterGrade) {
            case 'A+':
            case 'A':
            case 'A-':
                return theme.palette.success.main;
            case 'B+':
            case 'B':
            case 'B-':
                return theme.palette.secondary.main;
            case 'C+':
            case 'C':
            case 'C-':
                return theme.palette.warning.main;
            case 'D+':
            case 'D':
            case 'F':
                return theme.palette.error.main;
        }
    }



    useEffect(() => {
        console.log('fetch College', id);
        setUserDetail(null);
    }, []);

    useEffect(() => {
        console.log('userDetail', userDetail);
        if (!userDetail) {
            resetSelectedCollege();
            getCollege(parseInt(id!));
        }
    }, [userDetail]);

    useEffect(() => {
        if (selectedCollege) {
            let npt43Key = selectedCollege['npt43_priv'] > 0 ? 'npt43_priv' : 'npt43_pub';
            npt43Key = selectedCollege.hasOwnProperty(`${npt43Key}_absolute`) && selectedCollege.hasOwnProperty(`${npt43Key}_relative`) ? npt43Key : 'npt43';
            const cost = getScore(selectedCollege, `npt4${form['familyIncome']}`);
            const value = getScore(selectedCollege, `value_${form['familyIncome']}`);
            const success = (0.4 * selectedCollege['success_relative']) + (0.6 * selectedCollege['success_absolute']);
            const outcomes = (0.4 * selectedCollege['outcomes_relative']) + (0.6 * selectedCollege['outcomes_absolute']);
            const diversity = 0.5 * (((0.4 * selectedCollege['social_diversity_score_relative']) + (0.6 * selectedCollege['social_diversity_score_absolute'])) + ((0.4 * selectedCollege['economic_inclusion_score_relative']) + (0.6 * selectedCollege['economic_inclusion_score_absolute'])));
            const score = (getScore(selectedCollege, 'success') + getScore(selectedCollege, 'outcomes') + getScore(selectedCollege, npt43Key) + getScore(selectedCollege, 'economic_inclusion_score')) / 4

            const avgGraduationRate = ((4 * selectedCollege['c100_4'] / ((selectedCollege['c150_4'] + selectedCollege['c100_4']))) + (6 * selectedCollege['c150_4'] / ((selectedCollege['c150_4'] + selectedCollege['c100_4']))));

            const successArray = [
                { key: 'Real Graduation Rate', value: toPercent(selectedCollege['comp_orig_yr4_rt']) },
                { key: 'Average Time to Graduation', value: avgGraduationRate.toFixed(2) },
                { key: 'Student Support Score', value: toPercent(((0.4 * selectedCollege['support_relative']) + (0.6 * selectedCollege['support_absolute']))) },
                { key: '% Left in 2 Years', value: toPercent(selectedCollege['enrl_orig_yr2_rt']) },
                { key: 'Withdrawal Rate', value: toPercent(selectedCollege['wdraw_orig_yr3_rt']) },
            ];

            const valueArray = [
                { key: 'Worth More to Pay More' },
                { key: 'Some Professions' },
            ];

            const netPriceIncomeRange = (selectedCollege[`npt4${form.familyIncome}_pub`] || 0) + (selectedCollege[`npt4${form.familyIncome}_priv`] || 0);

            const costArray = [
                { key: 'Net Price for Your Income Range ', value: `${formatNumber(netPriceIncomeRange, true)}` },
                { key: 'Net Cost of Your Degree', value: `${formatNumber((netPriceIncomeRange * avgGraduationRate), true)}` },
            ];

            const outcomeArray = [
                {
                    key: 'Debt/Income Ratio', value: (
                        (1 + ((0.4 * selectedCollege['weighted_debt_relative']) + (0.6 * selectedCollege['weighted_debt_absolute']))) /
                        (1 + ((0.4 * selectedCollege['weighted_income_relative']) + (0.6 * selectedCollege['weighted_income_absolute'])))
                    ).toFixed(2)
                },
                { key: 'Inventor Score', value: selectedCollege['inventor'] },
                { key: 'Income 90% at 10 Years', value: formatNumber(selectedCollege['pct90_earn_wne_p10'], true) },
                { key: 'Income 75% at 10 Years', value: formatNumber(selectedCollege['pct75_earn_wne_p10'], true) },
                { key: 'Income 25% at 10 Years', value: formatNumber(selectedCollege['pct25_earn_wne_p10'], true) },
                { key: 'Income 10% at 10 Years', value: formatNumber(selectedCollege['pct10_earn_wne_p10'], true) },

            ];

            const diversityArray = [
                { key: 'Parents in Top Quintile of Household Income (%)', value: toPercent(selectedCollege['par_q5']) },
                { key: 'Parents in Bottom Quintile of Household Income (%)', value: toPercent(selectedCollege['par_q1']) },
                { key: 'Parents in Top 10% of Household Income', value: toPercent(selectedCollege['par_top10pc']) },
                { key: 'Parents in Top 1% of Household Income', value: toPercent(selectedCollege['par_top1pc']) },
                { key: 'Parents in Top 0.1% of Household Income', value: toPercent(selectedCollege['par_toppt1pc']) },
                { key: 'Economic Inclusion Score', value: toPercent((0.4 * selectedCollege['economic_inclusion_score_relative']) + (0.6 * selectedCollege['economic_inclusion_score_absolute'])) },

            ];

            setUserDetail({
                success: {
                    score: success,
                    moreInfo: successArray
                },
                value: {
                    score: value,
                    moreInfo: valueArray
                },
                cost: {
                    score: cost,
                    moreInfo: costArray
                },
                outcomes: {
                    score: outcomes,
                    moreInfo: outcomeArray
                },
                diversity: {
                    score: diversity,
                    moreInfo: diversityArray
                },
                score: score
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCollege]);

    const getSATContent = (college: any) => {
        return (
            <div>
                <div style={{ marginBottom: '10px' }}>
                    <div className={classes.profileLabelKey}>SAT Math</div>
                    <div className={classes.profileLabelKey} style={{ fontWeight: 'bold' }}>
                        {college['satmt25']}-{college['satmt75']}
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <div className={classes.profileLabelKey}>SAT Reading</div>
                    <div className={classes.profileLabelKey} style={{ fontWeight: 'bold' }}>
                        {college['satvr25']}-{college['satvr75']}
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <div className={classes.profileLabelKey}>SAT Writing</div>
                    <div className={classes.profileLabelKey} style={{ fontWeight: 'bold' }}>
                        {college['satwr25']}-{college['satwr75']}
                    </div>
                </div>
            </div>
        )
    }

    const getACTContent = (college: any) => {
        return (
            <div>
                <div style={{ marginBottom: '10px' }}>
                    <div className={classes.profileLabelKey}>ACT English</div>
                    <div className={classes.profileLabelKey} style={{ fontWeight: 'bold' }}>
                        {college['acten25']}-{college['acten75']}
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <div className={classes.profileLabelKey}>ACT Math</div>
                    <div className={classes.profileLabelKey} style={{ fontWeight: 'bold' }}>
                        {college['actmt25']}-{college['actmt75']}
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <div className={classes.profileLabelKey}>ACT Writing</div>
                    <div className={classes.profileLabelKey} style={{ fontWeight: 'bold' }}>
                        {college['actwr25']}-{college['actwr75']}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <ResponsiveBox>
            <PageBody>
                <div style={{ width: '80%' }}>
                    {
                        userDetail && selectedCollege &&
                        <div>
                            <div className={classes.profileCard}>
                                <div className={classes.schoolTitle}>{selectedCollege?.instnm}</div>
                                <div></div>
                                <div className={classes.profileInfoSection}>
                                    <div className={classes.profileUserGrade}>
                                        <div className={classes.profileLabelKey}>Overall Grade</div>
                                        <div className={classes.profileGrade}
                                            style={{
                                                background: getGradeColor(toLetterGrade(userDetail.score))
                                            }}>{(userDetail.score * 100).toFixed(0)}</div>
                                    </div>
                                    <div className={classes.profileDetailsSection}>
                                        <div className={classes.profileDetail}>
                                            <PlaceOutlined style={{ marginRight: '5px' }} />
                                            {FIPS_STATES.find((item) => item.id === selectedCollege.st_fips)?.name}
                                        </div>
                                        <div className={classes.profileDetail}>
                                            <SchoolOutlined style={{ marginRight: '5px' }} />
                                            {COLLEGE_CONTROL.find((item) => item.key === selectedCollege.control)?.value}
                                        </div>
                                        <div className={classes.profileDetail}>
                                            <LanguageOutlined style={{ marginRight: '5px' }} />
                                            <Link to={selectedCollege.insturl ?? `/colleges/${selectedCollege.unitid}`}>Visit Website</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.profileCard} ${classes.schoolUserGrade}`}>
                                <div className={classes.schoolCategoryGrade}>
                                    {
                                        gradeInfoArray.map((item, index) => (
                                            <div key={`gradeInfoitem${item.key}${index}`} className={classes.gradeInfoItem}>
                                                <div className={classes.gradeInfoScore}
                                                    style={{ backgroundColor: getGradeColor(toLetterGrade(userDetail[item.key]?.score)) }}>
                                                    {toLetterGrade(userDetail[item.key]?.score)}
                                                </div>
                                                <div className={classes.gradeInfoCategory}>
                                                    {item.title}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={classes.profileCard}>
                                <div className={classes.profileHeader}>Admission</div>
                                <div className={classes.profileInfoSection}>
                                    <div className={classes.profileUserGrade}>
                                        <div>
                                            <div className={classes.profileLabelKey}>Acceptance Rate</div>
                                            <div className={classes.profileLabelValueLg}>{(selectedCollege.adm_rate * 100).toFixed(0)}%</div>
                                        </div>
                                    </div>
                                    <div className={classes.profileDetailsSection}>
                                        <div className={classes.admissionCol}>
                                            <div>
                                                <div className={classes.profileLabelKey}>SAT Range<TooltipModal iconSize="medium" infoTheme="primary" tooltipContent={getSATContent(selectedCollege)} /></div>
                                                <div className={classes.profileLabelValue}>{selectedCollege['satmt25'] + selectedCollege['satvr25']}-{selectedCollege['satmt75'] + selectedCollege['satvr75']}</div>
                                            </div>
                                        </div>
                                        <div className={classes.admissionCol}>
                                            <div>
                                                <div className={classes.profileLabelKey}>ACT Range<TooltipModal iconSize="medium" infoTheme="primary" tooltipContent={getACTContent(selectedCollege)} /></div>
                                                <div className={classes.profileLabelValue}>{selectedCollege['actcm25']}-{selectedCollege['actcm75']}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.profileCard}>
                                <div className={classes.profileHeader}>Cost</div>
                                <div className={classes.profileInfoSection} style={{ height: 'unset' }}>
                                    <div className={classes.profileUserGrade}>
                                        <div>
                                            <div className={classes.profileLabelKey}>Net Price</div>
                                            <div className={classes.profileLabelValue}>$XX,XXXX/<span className={classes.profileSmallLabel}>year</span></div>
                                        </div>
                                    </div>
                                    <div className={classes.profileDetailsSection} style={{ flexDirection: 'column', flexWrap: 'unset' }}>
                                        <div style={{ width: '100%', fontFamily: FONT_FAMILY.POPPINS_BOLD, }}>
                                            Net Price by Household Income
                                        </div>
                                        <div style={{ width: '100%', padding: '10px' }}>
                                            <div className={classes.costItem}>
                                                <div>{'<'}$30k</div>
                                                <div>{formatNumber(selectedCollege['npt41_pub'] + selectedCollege['npt41_priv'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                            <div className={classes.costItem}>
                                                <div>$30-58k</div>
                                                <div>{formatNumber(selectedCollege['npt42_pub'] + selectedCollege['npt42_priv'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                            <div className={classes.costItem}>
                                                <div>$49-75k</div>
                                                <div>{formatNumber(selectedCollege['npt43_pub'] + selectedCollege['npt43_priv'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                            <div className={classes.costItem}>
                                                <div>$76-110k</div>
                                                <div>{formatNumber(selectedCollege['npt44_pub'] + selectedCollege['npt44_priv'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                            <div className={classes.costItem}>
                                                <div>$100k+</div>
                                                <div>{formatNumber(selectedCollege['npt45_pub'] + selectedCollege['npt45_priv'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.profileCard}>
                                <div className={classes.profileHeader}>Career</div>
                                <div className={classes.profileInfoSection} style={{ height: 'unset' }}>
                                    <div className={classes.profileUserGrade}>
                                        <div>
                                            <div className={classes.profileLabelKey}>Graduation Rate</div>
                                            <div className={classes.profileLabelValueLg}>{(selectedCollege['comp_orig_yr4_rt'] * 100).toFixed(0)}%</div>
                                        </div>
                                    </div>
                                    <div className={classes.profileDetailsSection} style={{ flexDirection: 'column', flexWrap: 'unset' }}>
                                        <div style={{ width: '100%', fontFamily: FONT_FAMILY.POPPINS_BOLD, }}>
                                            Income at 10 years
                                        </div>
                                        <div style={{ width: '100%', padding: '10px' }}>
                                            <div className={classes.costItem}>
                                                <div>90%</div>
                                                <div>{formatNumber(selectedCollege['pct90_earn_wne_p10'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                            <div className={classes.costItem}>
                                                <div>75%</div>
                                                <div>{formatNumber(selectedCollege['pct75_earn_wne_p10'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                            <div className={classes.costItem}>
                                                <div>25%</div>
                                                <div>{formatNumber(selectedCollege['pct25_earn_wne_p10'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                            <div className={classes.costItem}>
                                                <div>10%</div>
                                                <div>{formatNumber(selectedCollege['pct10_earn_wne_p10'], true)}/
                                                    <span className={classes.profileSmallLabel}>year</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </PageBody>
        </ResponsiveBox >
    );
}