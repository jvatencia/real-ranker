import { styled, useTheme } from "@mui/system";
import { getScore, toLetterGrade, toPercent } from "../../utils/utilities";
import { InfoOutlined, Diversity3Outlined, CheckOutlined, StarOutlineRounded, PaidOutlined, AssessmentOutlined } from "@mui/icons-material";
import { Tooltip, TooltipProps, tooltipClasses, ClickAwayListener, useMediaQuery, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import useCollegeStore from "../../store/college/college.store";
import { devices } from "../../utils/breakpoints";

const CollegeCardContainer = styled('div')(({ theme }) => ({
    boxShadow: '0px 4px 5px rgba(0,0,0,0.3)',
    padding: '20px',
    background: '#fff',
    margin: '10px auto',
    borderRadius: '5px',
    width: '100%',
    display: 'flex',
    color: theme.palette.dark.main,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        margin: '10px 0'
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '700px',
    }
}));

const CollegeInfo = styled('div')(({ theme }) => ({
    fontSize: 18,
    fontWeight: 'bold',
    width: 'calc(100% - 230px)',
    padding: '10px',
    borderLeft: '1px solid rgba(0,0,0,0.1)',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        borderLeft: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
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
    [theme.breakpoints.down('md')]: {
        fontSize: 14
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
    width: '50%',
    fontSize: 14,
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center'
})

const GradesInfo = styled('div')(({ theme }) => ({
    width: '230px',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '250px',
        margin: '0 auto !important',
    }
}));

const UserGrade = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    border: '1px solid ' + theme.palette.primary.main,
    background: 'rgba(255,255,255,0.2)',
    width: '100px',
    height: '60px'
}));

const ScoreLabel = styled('div')(({ theme }) => ({
    fontSize: 12,
    fontWeight: 'normal',
    color: theme.palette.light.main,
    background: theme.palette.primary.main,
    padding: '5px',
    transform: 'translateY(-13px)',
    width: '95%',
    textAlign: 'center'
}));

const ScoreValue = styled('div')({
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    transform: 'translateY(-13px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const GradeInfoIcon = styled(InfoOutlined)(({ theme }) => ({
    fontSize: '1.1rem !important',
    cursor: 'pointer',
    color: theme.palette.primary.main
}));

const GradeToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.primary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        maxWidth: 'none',
        fontSize: 12,
        padding: 10,
    },
}));

interface ToolTipContentProps {
    keyValueArray: Array<{ key: string, value?: string }>;
    gradeCategory?: string;
    openDialog?: any;
    college?: any;
    handleTooltipClose?: any
}

interface CollegeCardProps {
    college: any;
    openDialog?: any;
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
                        <div> {item.key}{item.value != null && <span>:</span>} </div>
                        <div> {item.value}</div>
                    </div>
                ))
            }
            <br />
            <div
                onClick={onLinkClick}
                style={{
                    color: theme.palette.secondary.main,
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
                    style={{ marginBottom: matches ? '7px' : 'unset' }}
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

    useEffect(() => {
        console.log('[CollegeCard] userScores', userScores);

    }, [userScores]);

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
        { key: 'Orientation to Graduation', value: toPercent(college['comp_orig_yr4_rt']) },
        { key: 'Average Time to Graduation', value: ((4 * college['c100_4'] / ((college['c150_4'] + college['c100_4']))) + (6 * college['c150_4'] / ((college['c150_4'] + college['c100_4'])))).toFixed(2) },
        { key: 'Student Support Score', value: toPercent(((0.4 * college['support_relative']) + (0.6 * college['support_absolute']))) },
        { key: '% Left in 2 Years', value: toPercent(college['enrl_orig_yr2_rt']) },
        { key: 'Withdrawal Rate', value: toPercent(college['wdraw_orig_yr3_rt']) },
    ];

    const valueArray = [
        { key: 'Worth More to Pay More' },
        { key: 'Filler' },
        { key: 'Filler' },
        { key: 'Some Professions' },
    ];

    const costArray = [
        { key: 'Net Price for Your Income Range', value: (college['npt43_pub'] + college['npt43_priv']) },
        { key: 'Net Cost of Your Degree', value: ((college['npt43_pub'] + college['npt43_priv']) * ((4 * college['c100_4'] / ((college['c150_4'] + college['c100_4']))) + (6 * college['c150_4'] / ((college['c150_4'] + college['c100_4']))))).toFixed(2) },
        { key: 'Filler', value: 'Filler' },
    ];

    const outcomeArray = [
        { key: 'Debt/Income Ratio', value: (((0.4 * college['weighted_debt_relative']) + (0.6 * college['weighted_debt_absolute'])) / ((0.4 * college['weighted_income_relative']) + (0.6 * college['weighted_income_absolute']))).toFixed(2) },
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

    return (
        <CollegeCardContainer>
            <GradesInfo>
                <StatusRow>
                    <StatusDesc>
                        <CheckOutlined fontSize={"small"} style={{ marginRight: '5px' }} />
                        Success
                    </StatusDesc>
                    <StatusDesc style={{ fontWeight: 'bold', justifyContent: 'space-between' }}>{toLetterGrade(success)}
                        <GradeCustomToolTip keyValueArray={successArray} gradeCategory={'Success'} openDialog={openDialog} college={college} />
                    </StatusDesc>
                </StatusRow>
                <StatusRow>
                    <StatusDesc>
                        <StarOutlineRounded fontSize={"small"} style={{ marginRight: '5px' }} />
                        Value
                    </StatusDesc>
                    <StatusDesc style={{ fontWeight: 'bold', justifyContent: 'space-between' }}>{toLetterGrade(value)}
                        <GradeCustomToolTip keyValueArray={valueArray} gradeCategory={'Value'} openDialog={openDialog} college={college} />

                    </StatusDesc>
                </StatusRow>
                <StatusRow>
                    <StatusDesc>
                        <PaidOutlined fontSize={"small"} style={{ marginRight: '5px' }} />
                        Cost
                    </StatusDesc>
                    <StatusDesc style={{ fontWeight: 'bold', justifyContent: 'space-between' }}>{toLetterGrade(cost)}
                        <GradeCustomToolTip keyValueArray={costArray} gradeCategory={'Cost'} openDialog={openDialog} college={college} />

                    </StatusDesc>
                </StatusRow>
                <StatusRow>
                    <StatusDesc>
                        <AssessmentOutlined fontSize={"small"} style={{ marginRight: '5px' }} />
                        Outcomes
                    </StatusDesc>
                    <StatusDesc style={{ fontWeight: 'bold', justifyContent: 'space-between' }}>{toLetterGrade(outcomes)}
                        <GradeCustomToolTip keyValueArray={outcomeArray} gradeCategory={'Outcomes'} openDialog={openDialog} college={college} />

                    </StatusDesc>
                </StatusRow>
                <StatusRow>
                    <StatusDesc>
                        <Diversity3Outlined fontSize={"small"} style={{ marginRight: '5px' }} />
                        Diversity
                    </StatusDesc>
                    <StatusDesc style={{ fontWeight: 'bold', justifyContent: 'space-between' }}>{toLetterGrade(diversity)}
                        <GradeCustomToolTip keyValueArray={diversityArray} gradeCategory={'Dviersity'} openDialog={openDialog} college={college} />
                    </StatusDesc>
                </StatusRow>
            </GradesInfo>
            <CollegeInfo>
                <CollegeInfoHeader>
                    <CollegeInfoContent>
                        <div>{college['instnm']}</div>
                        <div>

                        </div>
                    </CollegeInfoContent>
                    <UserGrade>
                        <ScoreLabel>YOUR SCORE</ScoreLabel>
                        <ScoreValue>{yourscore}</ScoreValue>
                    </UserGrade>
                </CollegeInfoHeader>
            </CollegeInfo>


        </CollegeCardContainer>
    );
}

export default CollegeCard;