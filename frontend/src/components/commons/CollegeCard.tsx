import { borderRadius, styled, useTheme } from "@mui/system";
import { formatNumber, getScore, toLetterGrade, toPercent } from "../../utils/utilities";
import { InfoOutlined, Diversity3Outlined, CheckOutlined, StarOutlineRounded, PaidOutlined, AssessmentOutlined, ArrowCircleRight, ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { Tooltip, TooltipProps, tooltipClasses, ClickAwayListener, useMediaQuery, Zoom, Chip } from "@mui/material";
import { useState } from "react";
import useCollegeStore from "../../store/college/college.store";
import { devices } from "../../utils/breakpoints";
import { Link } from "react-router-dom";
import { getAcceptanceRate } from "../../utils";
import { TooltipModal } from "../modals/TooltipModal";

const CollegeCardContainer = styled('div')(({ theme }) => ({
    // border: '1px solid ' + theme.palette.secondary.main,
    padding: '20px',
    background: '#fff',
    margin: '10px 0',
    borderRadius: '5px',
    width: '100%',
    display: 'flex',
    color: theme.palette.dark.main,
    backgroundColor: theme.palette.secondary.light,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        margin: '10px 0'
    },
    [theme.breakpoints.between('sm', 'md')]: {
        maxWidth: '500px',
        margin: '10px auto'
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '700px',
    },
    borderTopRightRadius: '50px',
    "&:before": {
        content: "' '",
        height: '85px',
        width: '105px',
        position: 'absolute',
        right: 0,
        top: 0,
        borderRadius: '0px 0px 0px 5px',
        background: theme.palette.light.main
    }
}));

const CollegeInfo = styled('div')(({ theme }) => ({
    fontSize: 18,
    fontWeight: 'bold',
    width: 'calc(100% - 190px)',
    padding: '10px',
    borderLeft: '1px solid rgba(0,0,0,0.1)',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        borderLeft: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        height: '155px'
    }
}));

const CollegeInfoHeader = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
});

const CollegeInfoContent = styled('div')(({ theme }) => ({
    width: 'calc(100% - 110px)',
    fontSize: 20,
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: 16,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 18
    }
}));

const StatusRow = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5px'
})

const StatusDesc = styled('div')({
    width: 'auto',
    "&:last-child": {
        marginLeft: 'auto',
    },
    fontSize: 14,
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center'
})

const GradesInfo = styled('div')(({ theme }) => ({
    width: '190px',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '200px',
        margin: '0 auto !important',
    }
}));

const UserGrade = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    background: theme.palette.secondary.main,
    color: theme.palette.light.main,
    width: '100px',
    height: '80px',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    borderRadius: '5px',
    overflow: 'hidden'
}));

const ScoreLabel = styled('div')(({ theme }) => ({
    fontSize: 12,
    color: theme.palette.dark.main,
    background: theme.palette.warning.main,
    height: '30px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const ScoreValue = styled('div')({
    fontSize: '22px',
    fontWeight: 'bold',
    width: '100%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const GradeInfoIcon = styled(ArrowDropDownCircleOutlined)(({ theme }) => ({
    fontSize: '1.2rem !important',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    transform: 'rotate(-90deg)'
}));

const GradeToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.secondary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.light.main,
        maxWidth: 'none',
        fontSize: 12,
        padding: 10,
    },
}));

const HowYouStand = styled('div')(({ theme }) => ({
    border: '1px solid ' + theme.palette.light.main,
    height: '80px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '5px',
    position: 'absolute',
    top: '90px',
    right: '5px',
    color: theme.palette.dark.main,
    background: theme.palette.light.main
}));

interface ToolTipContentProps {
    keyValueArray: Array<any>;
    gradeCategory?: string;
    openDialog?: any;
    college?: any;
    handleTooltipClose?: any
}

interface CollegeCardProps {
    college: any;
    openDialog?: any;
}

const GetCategoryValue = ({ item, category }: any) => {
    if (!item.hasOwnProperty('value')) {
        return null;
    }

    if (item.value != null) {
        return (
            <div>{formatNumber(item.value)}</div>
        );
    }

    return (
        category.key !== 'diversity' ?
            <div>
                null <TooltipModal tooltipContent={"Often times university's leave out information due to privacy reasons and this is why the information is not available, however, this can sometimes be taken advantage of to leave out unfavorable data"} />
            </div>
            :
            <div>
                null
            </div>
    );
}

const ToolTipContent = ({ keyValueArray, gradeCategory, openDialog, college, handleTooltipClose }: ToolTipContentProps) => {
    const theme = useTheme();

    const onLinkClick = () => {
        handleTooltipClose();
        openDialog(college['instnm'], gradeCategory);
    }

    return (
        <div>
            {
                keyValueArray.map((item, index) => (
                    <div style={{ marginBottom: '5px' }} key={`tooltipContentItem${index}`}>
                        <div> {item.key}{item.value != null && ':'}{item?.tooltip && <TooltipModal tooltipContent={item.tooltipContent} />} </div>
                        <GetCategoryValue
                            item={item}
                            category={{ key: gradeCategory?.toLowerCase() }}
                        />
                    </div>
                ))
            }
            <br />
            <div
                onClick={onLinkClick}
                style={{
                    color: theme.palette.warning.main,
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                <InfoOutlined style={{ fontSize: '1rem', marginRight: '5px' }} /> Click here to learn more about {gradeCategory}.
            </div>
        </div>
    )
}

const GradeCustomToolTip = (props: ToolTipContentProps) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(!open);
    };

    const matches = useMediaQuery(devices.mobileL);

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <GradeToolTip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    placement={matches ? 'top' : 'right'}
                    disableFocusListener
                    disableHoverListener
                    TransitionComponent={Zoom}
                    disableTouchListener
                    style={{ marginBottom: matches ? '0' : 'unset' }}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, matches ? -8 : 0]
                                    }
                                }
                            ]
                        }
                    }}
                    sx={{
                        zIndex: 1100
                    }}
                    open={open}
                    title={<ToolTipContent {...props} handleTooltipClose={handleTooltipClose} />}>
                    <GradeInfoIcon onClick={handleTooltipOpen} />
                </GradeToolTip>
            </div>
        </ClickAwayListener>
    );
}

function CollegeCard({ college, openDialog }: Readonly<CollegeCardProps>) {
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
    console.log('CollegeCard yourscore', weighted_mult_sum([
        userScores['success'] / 100,
        userScores['value'] / 100,
        userScores['cost'] / 100,
        userScores['diversity'] / 100,
        userScores['outcomes'] / 100],
        [success, value, cost, diversity, outcomes]))

    const avgGraduationRate = ((4 * college['c100_4'] / ((college['c150_4'] + college['c100_4']))) + (6 * college['c150_4'] / ((college['c150_4'] + college['c100_4']))));

    const successArray = [
        { key: 'Real Graduation Rate', value: toPercent(college['comp_orig_yr4_rt']), tooltip: true, tooltipContent: 'Real Graduation Rate' },
        { key: 'Average Time to Graduation', value: avgGraduationRate.toFixed(2), tooltip: true, tooltipContent: 'Average Time to Graduation' },
        { key: 'Student Support Score', value: toPercent(((0.4 * college['support_relative']) + (0.6 * college['support_absolute']))) },
        { key: '% Left in 2 Years', value: toPercent(college['enrl_orig_yr2_rt']) },
        { key: 'Withdrawal Rate', value: toPercent(college['wdraw_orig_yr3_rt']) },
    ];

    const valueArray = [
        { key: 'Worth More to Pay More' },
        { key: 'Some Professions' },
    ];

    const netPriceIncomeRange = (college[`npt4${form.familyIncome}_pub`] !== null || college[`npt4${form.familyIncome}_priv`] !== null) ?
        (college[`npt4${form.familyIncome}_pub`]) + (college[`npt4${form.familyIncome}_priv`]) : null;

    const netCostOfYourDegree = netPriceIncomeRange !== null ? formatNumber((netPriceIncomeRange * avgGraduationRate), true) : null;

    const costArray = [
        { key: 'Net Price for Your Income Range ', value: netPriceIncomeRange != null ? formatNumber(netPriceIncomeRange, true) : null },
        { key: 'Net Cost of Your Degree', value: netCostOfYourDegree, tooltip: true, tooltipContent: 'Net Cost of Your Degree' },
    ];

    const outcomeArray = [
        {
            key: 'Debt/Income Ratio', value: (
                (1 + ((0.4 * college['weighted_debt_relative']) + (0.6 * college['weighted_debt_absolute']))) /
                (1 + ((0.4 * college['weighted_income_relative']) + (0.6 * college['weighted_income_absolute'])))
            ).toFixed(2), tooltip: true, tooltipContent: 'Debt/Income Ratio'
        },
        { key: 'Inventor Score', value: college['inventor'] ?? 0, tooltip: true, tooltipContent: 'Inventor Score' },
        { key: 'Income 90% at 10 Years', value: formatNumber(college['pct90_earn_wne_p10'], true) },
        { key: 'Income 75% at 10 Years', value: formatNumber(college['pct75_earn_wne_p10'], true) },
        { key: 'Income 25% at 10 Years', value: formatNumber(college['pct25_earn_wne_p10'], true) },
        { key: 'Income 10% at 10 Years', value: formatNumber(college['pct10_earn_wne_p10'], true) },

    ];

    const diversityArray = [
        { key: 'Parents in Top Quintile of Household Income (%)', value: toPercent(college['par_q5']) },
        { key: 'Parents in Bottom Quintile of Household Income (%)', value: toPercent(college['par_q1']) },
        { key: 'Parents in Top 10% of Household Income', value: toPercent(college['par_top10pc']) },
        { key: 'Parents in Top 1% of Household Income', value: toPercent(college['par_top1pc']) },
        { key: 'Parents in Top 0.1% of Household Income', value: toPercent(college['par_toppt1pc']) },
        {
            key: 'Economic Inclusion Score', value: toPercent((0.4 * college['economic_inclusion_score_relative']) + (0.6 * college['economic_inclusion_score_absolute'])),
            tooltip: true, tooltipContent: 'Economic Inclusion Score'
        },

    ];

    const gradeInfoArray = [
        { title: 'Success', value: toLetterGrade(success), moreInfo: successArray, icon: () => <CheckOutlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Value', value: toLetterGrade(value), moreInfo: valueArray, icon: () => <StarOutlineRounded fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Cost', value: toLetterGrade(cost), moreInfo: costArray, icon: () => <PaidOutlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Career', value: toLetterGrade(outcomes), moreInfo: outcomeArray, icon: () => <AssessmentOutlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
        { title: 'Diversity', value: toLetterGrade(diversity), moreInfo: diversityArray, icon: () => <Diversity3Outlined fontSize={"small"} style={{ marginRight: '5px' }} /> },
    ];


    const getGradeColor = (userScore: number) => {
        if (userScore > 6) {
            return theme.palette.success.main;
        }

        if (userScore >= 3 && userScore <= 6) {
            return theme.palette.warning.main;
        }

        return theme.palette.error.light;
    }

    return (
        <CollegeCardContainer>
            <GradesInfo>
                {
                    gradeInfoArray.map((item, index) => (
                        <StatusRow key={`${item.title.toLowerCase()}statusRow${index}`}>
                            <StatusDesc>
                                {item.icon()}
                                {item.title}
                            </StatusDesc>
                            <StatusDesc style={{ fontWeight: 'bold', justifyContent: 'flex-end' }}>
                                <div style={{ marginRight: '8px', width: '15px', textAlign: 'left' }}>
                                    {item.value}
                                </div>
                                <GradeCustomToolTip keyValueArray={item.moreInfo} gradeCategory={item.title} openDialog={openDialog} college={college} />
                            </StatusDesc>
                        </StatusRow>
                    ))
                }
            </GradesInfo>
            <CollegeInfo>
                <CollegeInfoHeader>
                    <CollegeInfoContent>
                        <div>
                            <Link to={`/colleges/${college.unitid}`}
                                style={{
                                    textDecoration: 'none',
                                    color: theme.palette.dark.main
                                }}>
                                {college['instnm']}
                            </Link>
                        </div>
                    </CollegeInfoContent>

                </CollegeInfoHeader>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <UserGrade>
                        <ScoreLabel>YOUR SCORE</ScoreLabel>
                        <ScoreValue style={{ color: theme.palette.warning.main }}>{yourscore}</ScoreValue>
                    </UserGrade>
                    <HowYouStand>
                        <div style={{ color: getGradeColor(userScore) }}>{userScore}</div>
                        <div style={{
                            fontSize: '11px',

                        }}>YOUR STANDING</div>
                    </HowYouStand>
                </div>
            </CollegeInfo>


        </CollegeCardContainer>
    );
}

export default CollegeCard;