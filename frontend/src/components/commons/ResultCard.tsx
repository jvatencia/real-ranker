import { styled, useTheme } from "@mui/system";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import { Button, useMediaQuery } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { getScore, toPercent } from "../../utils/utilities";
import useCollegeStore from "../../store/college/college.store";
import { ChevronLeftOutlined, RemoveOutlined, SortOutlined } from "@mui/icons-material";
import SortCard from "./SortCard";
import { FONT_FAMILY } from "../../utils";

// styled('div')(({ theme }) => ({}))
const ResultCardContainer = styled('div')(({ theme }) => ({
    userSelect: 'none'
}));

const ResultCardHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid rgba(0,0,0,0)',
    overflow: 'hidden',
    flexBasis: 0,
}));

const ResultCardHeaderContent = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 'calc(100% - 20px)',
    flex: '0 0 calc(100% - 20px)'
}));

const ResultCardCollegeHeader = styled('div')(({ theme }) => ({
    border: '1px solid ' + theme.palette.dark.main,
    background: theme.palette.warning.main,
    marginLeft: '10px',
    height: '100px',
    width: '100px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 1,
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
    borderBottom: 'none'
}));

const ResultCardCollegeToggle = styled('div')(({ theme }) => ({
    width: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    flexGrow: 1,
    alignSelf: 'normal',
    borderColor: theme.palette.dark.main,
    borderLeftWidth: '1px',
    color: theme.palette.primary.main,
}));

const ResultCardSecondaryRow = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
}));

const ResultCardPrimaryRow = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.dark.main,
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderStyle: 'solid',
    transition: '0.3s linear',
    height: '60px',
    overflow: 'hidden'
}));

const ResultCardSecondaryItemContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: theme.palette.light.main,
}));

const ResultCardPrimaryItemContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
}));

const ResultCardSecondaryItemLabel = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: 'calc(100% - 220px)',
    color: theme.palette.dark.main,
    fontSize: '14px',
    padding: '0 10px',
}));

const ResultCardPrimaryItemLabel = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: 'calc(100% - 220px)',
    color: theme.palette.light.main,
    fontSize: '14px',
    padding: '0 5px'
}));


const ResultCardSecondaryItem = styled('div')(({ theme }) => ({
    borderColor: theme.palette.dark.main,
    borderRightWidth: '1px',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: '1px',
    borderStyle: 'solid',
    background: theme.palette.warning.main,
    marginLeft: '10px',
    minHeight: '25px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    color: theme.palette.dark.main
}));

const ResultCardPrimaryItem = styled('div')(({ theme }) => ({
    color: theme.palette.light.main,
    marginLeft: '10px',
    height: '60px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: FONT_FAMILY.DEFAULT,
}));



const EmptySecondaryRow = ({ collegesDisplay, rowNumber }: any) => {
    return (

        <ResultCardSecondaryRow style={{ justifyContent: 'space-between' }}>
            <ResultCardSecondaryItemLabel></ResultCardSecondaryItemLabel>
            <ResultCardSecondaryItemContainer>
                {
                    collegesDisplay.map((college: any) => (
                        <ResultCardSecondaryItem key={`collegeEmptySecondaryRow${rowNumber}${college.name.replace(' ', '')}`}></ResultCardSecondaryItem>
                    ))
                }
            </ResultCardSecondaryItemContainer>
        </ResultCardSecondaryRow>
    );
}

const PrimaryToggleRow = ({ colleges, theme, category, scoreLabels }: any) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = (e: any) => {
        setToggle(!toggle)
    }
    return (
        <>
            <ResultCardPrimaryRow style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: !toggle ? 60 : 60 * (category.scores.length + 1)
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <ResultCardPrimaryItemLabel
                        style={{ color: theme.palette.light.main }}
                    >
                        <div onClick={handleToggle}>
                            {!toggle ?
                                <AddIcon

                                    fontSize="small" style={{
                                        marginRight: '5px',
                                        color: theme.palette.warning.main,
                                        cursor: 'pointer'
                                    }} /> :
                                <RemoveOutlined

                                    fontSize="small" style={{
                                        marginRight: '5px',
                                        color: theme.palette.warning.main,
                                        cursor: 'pointer'
                                    }} />
                            }
                        </div>
                        {category.label}
                    </ResultCardPrimaryItemLabel>
                    <ResultCardPrimaryItemContainer>
                        {
                            colleges.map((college: any) => (
                                <ResultCardPrimaryItem
                                    style={{ color: theme.palette.light.main }}
                                    key={`collegeSuccessScore${college['name'].replace(' ', '')}`}>
                                    <div>{(college[category.key].score * 100).toFixed(1)}%</div>
                                </ResultCardPrimaryItem>
                            ))
                        }
                    </ResultCardPrimaryItemContainer>
                </div>
                {
                    scoreLabels.map((item: any, scoreIndex: number) => (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%'
                        }} key={`college${category.label.replace(/ /g, '')}Array${scoreIndex}`}>
                            <ResultCardPrimaryItemLabel
                                style={{ color: theme.palette.light.main }}
                            >
                                {item.key}
                            </ResultCardPrimaryItemLabel>
                            <ResultCardPrimaryItemContainer>
                                {
                                    colleges.map((college: any, index: number) => (
                                        <ResultCardPrimaryItem
                                            style={{ color: theme.palette.light.main }}
                                            key={`collegeSuccessScore${index}`}>
                                            {
                                                college[category.key]?.moreInfo[scoreIndex]?.value != null &&
                                                <div>{college[category.key].moreInfo[scoreIndex].value}</div>
                                            }
                                        </ResultCardPrimaryItem>
                                    ))
                                }

                            </ResultCardPrimaryItemContainer>
                        </div>

                    ))
                }
            </ResultCardPrimaryRow>
            <EmptySecondaryRow collegesDisplay={colleges} rowNumber={category.label.replace(/ /g, '')} />
        </>

    )
}

function ResultCard({ colleges }: any) {
    const theme = useTheme();
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [data, setData] = useState([]);
    const [collegesDisplay, setCollegesDisplay] = useState([]);
    const [toDisplay, setToDisplay] = useState(2);
    const [showSortCard, setShowSortCard] = useState(false);
    const form = useCollegeStore((state) => state.form);
    const userScores = useCollegeStore((state) => state.userScore);
    const matches = useMediaQuery('(max-width:700px)');
    const categories = [
        {
            key: 'success',
            label: 'Success Score',
            scores: [
                { key: 'Orientation to Graduation' },
                { key: 'Average Time to Graduation' },
                { key: 'Student Support Score' },
                { key: '% Left in 2 Years' },
                { key: 'Withdrawal Rate' }
            ]
        },
        {
            key: 'value',
            label: 'Value Grade',
            scores: [
                { key: 'Worth More to Pay More' },
                { key: 'Filler' },
                { key: 'Filler' },
                { key: 'Some Professions' },
            ]
        },
        {
            key: 'outcomes',
            label: 'Outcomes',
            scores: [
                { key: 'Debt/Income Ratio' },
                { key: 'Inventor Score' },
                { key: 'Income 90% at 10 Years' },
                { key: 'Income 75% at 10 Years' },
                { key: 'Income 25% at 10 Years' },
                { key: 'Income 10% at 10 Years' },
            ]
        },
        {
            key: 'cost',
            label: 'Cost Score',
            scores: [
                { key: 'Net Price for Your Income Range' },
                { key: 'Net Cost of Your Degree' },
                { key: 'Filler' },
            ]
        },
        {
            key: 'diversity',
            label: 'Diversity Score',
            scores: [
                { key: 'Parents in Top Quintile of Household Income (%)' },
                { key: 'Parents in Bottom Quintile of Household Income (%)' },
                { key: 'Parents in Top 10% of Household Income' },
                { key: 'Parents in Top 1% of Household Income' },
                { key: 'Parents in Top 0.1% of Household Income' },
                { key: 'Economic Inclusion Score' },
            ]
        }
    ];


    const initData = (colleges: Array<any>) => {
        setMounted(false);

        const items: any = colleges.map((college, index) => {
            let npt43Key = college['npt43_priv'] > 0 ? 'npt43_priv' : 'npt43_pub';
            npt43Key = college.hasOwnProperty(`${npt43Key}_absolute`) && college.hasOwnProperty(`${npt43Key}_relative`) ? npt43Key : 'npt43';

            return {
                order: index,
                name: college['instnm'],
                displayLabels: ['success', 'value', 'cost', 'outcomes', 'diversity'],
                cost: {
                    score: getScore(college, `npt4${form['familyIncome']}`),
                    moreInfo: [
                        { key: 'Net Price for Your Income Range', value: (college['npt43_pub'] + college['npt43_priv']) },
                        { key: 'Net Cost of Your Degree', value: ((college['npt43_pub'] + college['npt43_priv']) * ((4 * college['c100_4'] / ((college['c150_4'] + college['c100_4']))) + (6 * college['c150_4'] / ((college['c150_4'] + college['c100_4']))))).toFixed(2) },
                        { key: 'Filler', value: 'Filler' },
                    ]
                },
                value: {
                    score: getScore(college, `value_${form['familyIncome']}`),
                    moreInfo: [
                        { key: 'Worth More to Pay More', value: null },
                        { key: 'Filler', value: null },
                        { key: 'Filler', value: null },
                        { key: 'Some Professions', value: null },
                    ]
                },
                success: {
                    score: (0.4 * college['success_relative']) + (0.6 * college['success_absolute']),
                    moreInfo: [
                        { key: 'Orientation to Graduation', value: toPercent(college['comp_orig_yr4_rt']) },
                        { key: 'Average Time to Graduation', value: ((4 * college['c100_4'] / ((college['c150_4'] + college['c100_4']))) + (6 * college['c150_4'] / ((college['c150_4'] + college['c100_4'])))).toFixed(2) },
                        { key: 'Student Support Score', value: toPercent(((0.4 * college['support_relative']) + (0.6 * college['support_absolute']))) },
                        { key: '% Left in 2 Years', value: toPercent(college['enrl_orig_yr2_rt']) },
                        { key: 'Withdrawal Rate', value: toPercent(college['wdraw_orig_yr3_rt']) },
                    ]
                },
                outcomes: {
                    score: (0.4 * college['outcomes_relative']) + (0.6 * college['outcomes_absolute']),
                    moreInfo: [
                        { key: 'Debt/Income Ratio', value: (((0.4 * college['weighted_debt_relative']) + (0.6 * college['weighted_debt_absolute'])) / ((0.4 * college['weighted_income_relative']) + (0.6 * college['weighted_income_absolute']))).toFixed(2) },
                        { key: 'Inventor Score', value: college['inventor'] },
                        { key: 'Income 90% at 10 Years', value: college['pct90_earn_wne_p10'] },
                        { key: 'Income 75% at 10 Years', value: college['pct75_earn_wne_p10'] },
                        { key: 'Income 25% at 10 Years', value: college['pct25_earn_wne_p10'] },
                        { key: 'Income 10% at 10 Years', value: college['pct10_earn_wne_p10'] },
                    ]
                },
                diversity: {
                    score: 0.5 * (((0.4 * college['social_diversity_score_relative'])
                        + (0.6 * college['social_diversity_score_absolute']))
                        + ((0.4 * college['economic_inclusion_score_relative'])
                            + (0.6 * college['economic_inclusion_score_absolute']))),
                    moreInfo: [
                        { key: 'Parents in Top Quintile of Household Income (%)', value: toPercent(college['par_q5']) },
                        { key: 'Parents in Bottom Quintile of Household Income (%)', value: toPercent(college['par_q1']) },
                        { key: 'Parents in Top 10% of Household Income', value: toPercent(college['par_top10pc']) },
                        { key: 'Parents in Top 1% of Household Income', value: toPercent(college['par_top1pc']) },
                        { key: 'Parents in Top 0.1% of Household Income', value: toPercent(college['par_toppt1pc']) },
                        { key: 'Economic Inclusion Score', value: toPercent((0.4 * college['economic_inclusion_score_relative']) + (0.6 * college['economic_inclusion_score_absolute'])) },
                    ]
                },
                admissionRate: college['adm_rate'],
                userScore: (getScore(college, 'success') + getScore(college, 'outcomes') + getScore(college, npt43Key) + getScore(college, 'economic_inclusion_score')) / 4,

            };

        })

        setData(items);
        setMounted(true);
    }

    useEffect(() => {
        initData(colleges);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useMemo(() => {
        if (mounted) {
            initData(colleges);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userScores, mounted]);

    useEffect(() => {
        setCollegesDisplay(data.filter((college: any, i: number) => i >= index && i < (index + toDisplay)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toDisplay]);


    useEffect(() => {
        initToDisplay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matches]);

    useEffect(() => {
        console.log('screen matches,', matches);
        console.log('current index:', index);
        console.log('no of items to display: ', toDisplay);
        console.log('no of colleges: ', data.length);
        setCollegesDisplay(data.filter((college: any, i: number) => i >= index && i < (index + toDisplay)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    useEffect(() => {
        initToDisplay();
        setCollegesDisplay(data.filter((college: any, i: number) => i >= index && i < (index + toDisplay)));
        console.log(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const initToDisplay = () => {
        if (!matches) {
            setToDisplay(4);
        } else {
            setToDisplay(2);
        }
    }

    const nextPage = () => {
        if (index + toDisplay <= data.length) {
            setIndex((oldValue) => (oldValue + toDisplay));
        }
    }

    const prevPage = () => {
        setIndex((oldValue) => (oldValue - toDisplay));
    }

    const togggleSortCard = () => {
        setShowSortCard(!showSortCard);
    }

    const buttonsDisplay = index > 0;


    return (
        <>
            {mounted &&
                <>

                    <div style={{
                        textAlign: 'left',
                        marginBottom: '10px'
                    }}>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={togggleSortCard}
                            startIcon={!showSortCard ? <SortOutlined /> : <ChevronLeftOutlined />}
                        >
                            {!showSortCard ? 'Sort' : 'Summary View'}
                        </Button>
                    </div>

                    {showSortCard ?
                        <SortCard
                            items={data}
                            setItems={setData}
                        /> :
                        <ResultCardContainer>
                            <ResultCardHeader>
                                {
                                    index > 0 &&
                                    <div style={{ width: '20px' }}></div>
                                }
                                <ResultCardHeaderContent style={{
                                    width: buttonsDisplay ? 'calc(100% - 40px)' : 'calc(100% - 20px)',
                                    flex: '0 0 ' + (buttonsDisplay ? 'calc(100% - 40px)' : 'calc(100% - 20px)')
                                }}>
                                    {
                                        collegesDisplay.map((college: any) => (
                                            <ResultCardCollegeHeader key={`college${college['name'].replace(' ', '')}`}>
                                                {college['name']}
                                            </ResultCardCollegeHeader>
                                        ))
                                    }
                                </ResultCardHeaderContent>
                                <div style={{ width: '20px' }}></div>
                            </ResultCardHeader>
                            <ResultCardHeader style={{ borderColor: theme.palette.dark.main, backgroundColor: theme.palette.light.main }}>
                                {
                                    index > 0 &&
                                    <ResultCardCollegeToggle onClick={prevPage}>
                                        <ChevronLeftIcon fontSize={'small'} color="primary" />
                                    </ResultCardCollegeToggle>
                                }
                                <ResultCardHeaderContent
                                    style={{
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        flexDirection: 'column',
                                        width: buttonsDisplay ? 'calc(100% - 40px)' : 'calc(100% - 20px)',
                                        flex: '0 0 ' + (buttonsDisplay ? 'calc(100% - 40px)' : 'calc(100% - 20px)')
                                    }}>

                                    <ResultCardPrimaryRow style={{ justifyContent: 'space-between', backgroundColor: theme.palette.secondary.main }}>
                                        <ResultCardPrimaryItemLabel>Your Score</ResultCardPrimaryItemLabel>
                                        <ResultCardPrimaryItemContainer>
                                            {
                                                collegesDisplay.map((college: any) => (
                                                    <ResultCardPrimaryItem key={`collegeUserScore${college['name'].replace(' ', '')}`}>
                                                        <div>{(college.userScore * 100).toFixed(2)}</div>
                                                    </ResultCardPrimaryItem>
                                                ))
                                            }
                                        </ResultCardPrimaryItemContainer>
                                    </ResultCardPrimaryRow>

                                    <ResultCardSecondaryRow style={{ justifyContent: 'space-between' }}>
                                        <ResultCardSecondaryItemLabel>Acceptance Rate</ResultCardSecondaryItemLabel>
                                        <ResultCardSecondaryItemContainer>
                                            {
                                                collegesDisplay.map((college: any) => (
                                                    <ResultCardSecondaryItem
                                                        style={{ height: 40 }}
                                                        key={`collegeAcceptance${college['name'].replace(' ', '')}`}>
                                                        {toPercent(college.admissionRate)}
                                                    </ResultCardSecondaryItem>
                                                ))
                                            }
                                        </ResultCardSecondaryItemContainer>
                                    </ResultCardSecondaryRow>
                                    {
                                        categories.map((category, index) => (
                                            <PrimaryToggleRow
                                                key={`primaryToggleRow${category.label.replace(/ /g, '')}${index}`}
                                                category={category}
                                                colleges={collegesDisplay}
                                                theme={theme}
                                                scoreLabels={category.scores}
                                            />
                                        ))
                                    }

                                </ResultCardHeaderContent>
                                <ResultCardCollegeToggle onClick={nextPage}>
                                    <ChevronRightIcon fontSize={'small'} color="primary" />
                                </ResultCardCollegeToggle>
                            </ResultCardHeader>
                        </ResultCardContainer>
                    }

                </>
            }
        </>
    );
}

export default ResultCard;