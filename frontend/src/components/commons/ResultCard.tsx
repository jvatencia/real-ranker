import { styled, useTheme } from "@mui/system";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { getScore, toLetterGrade, toPercent } from "../../utils/utilities";

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
    borderLeftWidth: '1px'
}));

const ResultCardSecondaryRow = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center'
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
    borderStyle: 'solid'
}));

const ResultCardSecondaryItemContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
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
    padding: '0 10px'
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
    fontSize: '20px'
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
    fontSize: '20px',
    fontFamily: 'Poppins',
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

function ResultCard({ colleges, form, userScores }: any) {
    const theme = useTheme();
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [data, setData] = useState([]);
    const [collegesDisplay, setCollegesDisplay] = useState([]);
    const [toDisplay, setToDisplay] = useState(2);
    const matches = useMediaQuery('(max-width:700px)');

    useEffect(() => {
        setCollegesDisplay(data.filter((college: any, i: number) => i >= index && i < (index + toDisplay)));
        initData(colleges);
    }, []);

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
        console.log(data);
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

    const buttonsDisplay = index > 0;

    const initData = (colleges: Array<any>) => {
        let items: any = [];
        colleges.forEach((college) => {
            let npt43Key = college['npt43_priv'] > 0 ? 'npt43_priv' : 'npt43_pub';
            npt43Key = college.hasOwnProperty(`${npt43Key}_absolute`) && college.hasOwnProperty(`${npt43Key}_relative`) ? npt43Key : 'npt43';

            const collegeData: any = {
                name: college['instnm'],
                cost: getScore(college, `npt4${form['familyIncome']}`),
                value: getScore(college, `value_${form['familyIncome']}`),
                success: (0.4 * college['success_relative']) + (0.6 * college['success_absolute']),
                outcomes: (0.4 * college['outcomes_relative']) + (0.6 * college['outcomes_absolute']),
                diversity: 0.5 * (((0.4 * college['social_diversity_score_relative'])
                    + (0.6 * college['social_diversity_score_absolute']))
                    + ((0.4 * college['economic_inclusion_score_relative'])
                        + (0.6 * college['economic_inclusion_score_absolute']))),
                admissionRate: college['adm_rate'],
                userScore: (getScore(college, 'success') + getScore(college, 'outcomes') + getScore(college, npt43Key) + getScore(college, 'economic_inclusion_score')) / 4
            };

            items.push(collegeData);
        })

        setData(items);
        setMounted(true);
    }

    return (
        <>
            {mounted &&
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
                                <ChevronLeftIcon fontSize={'small'} />
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

                            <ResultCardPrimaryRow style={{ justifyContent: 'space-between' }}>
                                <ResultCardPrimaryItemLabel
                                    style={{ color: theme.palette.dark.main }}
                                >
                                    <AddIcon fontSize="small" style={{
                                        marginRight: '5px',
                                        color: theme.palette.secondary.main
                                    }} />Success Score
                                </ResultCardPrimaryItemLabel>
                                <ResultCardPrimaryItemContainer>
                                    {
                                        collegesDisplay.map((college: any) => (
                                            <ResultCardPrimaryItem
                                                style={{ color: theme.palette.dark.main }}
                                                key={`collegeSuccessScore${college['name'].replace(' ', '')}`}>
                                                <div>{toLetterGrade(college.success)}</div>
                                            </ResultCardPrimaryItem>
                                        ))
                                    }
                                </ResultCardPrimaryItemContainer>
                            </ResultCardPrimaryRow>

                            <EmptySecondaryRow collegesDisplay={collegesDisplay} rowNumber={'SuccessScore'} />

                            <ResultCardPrimaryRow style={{ justifyContent: 'space-between' }}>
                                <ResultCardPrimaryItemLabel
                                    style={{ color: theme.palette.dark.main }}
                                >
                                    <AddIcon fontSize="small" style={{
                                        marginRight: '5px',
                                        color: theme.palette.secondary.main
                                    }} />Value Grade
                                </ResultCardPrimaryItemLabel>
                                <ResultCardPrimaryItemContainer>
                                    {
                                        collegesDisplay.map((college: any) => (
                                            <ResultCardPrimaryItem
                                                style={{ color: theme.palette.dark.main }}
                                                key={`collegeValueGrade${college['name'].replace(' ', '')}`}>
                                                <div>{toLetterGrade(college.value)}</div>
                                            </ResultCardPrimaryItem>
                                        ))
                                    }
                                </ResultCardPrimaryItemContainer>
                            </ResultCardPrimaryRow>

                            <EmptySecondaryRow collegesDisplay={collegesDisplay} rowNumber={'ValueGrade'} />

                            <ResultCardPrimaryRow style={{ justifyContent: 'space-between' }}>
                                <ResultCardPrimaryItemLabel
                                    style={{ color: theme.palette.dark.main }}
                                >
                                    <AddIcon fontSize="small" style={{
                                        marginRight: '5px',
                                        color: theme.palette.secondary.main
                                    }} />Outcomes
                                </ResultCardPrimaryItemLabel>
                                <ResultCardPrimaryItemContainer>
                                    {
                                        collegesDisplay.map((college: any) => (
                                            <ResultCardPrimaryItem
                                                style={{ color: theme.palette.dark.main }}
                                                key={`collegeOutcomes${college['name'].replace(' ', '')}`}>
                                                <div>{toLetterGrade(college.outcomes)}</div>
                                            </ResultCardPrimaryItem>
                                        ))
                                    }
                                </ResultCardPrimaryItemContainer>
                            </ResultCardPrimaryRow>
                            <EmptySecondaryRow collegesDisplay={collegesDisplay} rowNumber={'Outcomes'} />

                            <ResultCardPrimaryRow style={{ justifyContent: 'space-between' }}>
                                <ResultCardPrimaryItemLabel
                                    style={{ color: theme.palette.dark.main }}
                                >
                                    <AddIcon fontSize="small" style={{
                                        marginRight: '5px',
                                        color: theme.palette.secondary.main
                                    }} />Cost score
                                </ResultCardPrimaryItemLabel>
                                <ResultCardPrimaryItemContainer>
                                    {
                                        collegesDisplay.map((college: any) => (
                                            <ResultCardPrimaryItem
                                                style={{ color: theme.palette.dark.main }}
                                                key={`collegeCostScore${college['name'].replace(' ', '')}`}>
                                                <div>{toLetterGrade(college.cost)}</div>
                                            </ResultCardPrimaryItem>
                                        ))
                                    }
                                </ResultCardPrimaryItemContainer>
                            </ResultCardPrimaryRow>
                            <EmptySecondaryRow collegesDisplay={collegesDisplay} rowNumber={'CostScore'} />

                            <ResultCardPrimaryRow style={{ justifyContent: 'space-between' }}>
                                <ResultCardPrimaryItemLabel
                                    style={{ color: theme.palette.dark.main }}
                                >
                                    <AddIcon fontSize="small" style={{
                                        marginRight: '5px',
                                        color: theme.palette.secondary.main
                                    }} />Diversity score
                                </ResultCardPrimaryItemLabel>
                                <ResultCardPrimaryItemContainer>
                                    {
                                        collegesDisplay.map((college: any) => (
                                            <ResultCardPrimaryItem
                                                style={{ color: theme.palette.dark.main }}
                                                key={`collegeDiversityScore${college['name'].replace(' ', '')}`}>
                                                <div>{toLetterGrade(college.diversity)}</div>
                                            </ResultCardPrimaryItem>
                                        ))
                                    }
                                </ResultCardPrimaryItemContainer>
                            </ResultCardPrimaryRow>
                            <EmptySecondaryRow collegesDisplay={collegesDisplay} rowNumber={'DiversityScore'} />

                        </ResultCardHeaderContent>
                        <ResultCardCollegeToggle onClick={nextPage}>
                            <ChevronRightIcon fontSize={'small'} />
                        </ResultCardCollegeToggle>
                    </ResultCardHeader>
                </ResultCardContainer>
            }
        </>
    );
}

export default ResultCard;