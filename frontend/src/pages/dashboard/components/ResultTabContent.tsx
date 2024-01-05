import { useState } from "react";
import ButtonTabs from "../../../components/commons/ButtonTabs";
import CollegeCard from "../../../components/commons/CollegeCard";
import useCollegeStore from "../../../store/college/college.store"
import SegmentIcon from '@mui/icons-material/Segment';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { makeStyles } from "@mui/styles";
import ResultCard from "../../../components/commons/ResultCard";

const useStyles = makeStyles(
    (theme) => ({
        resultTabContainer: {
            marginTop: '10px'
        },
        filterTabContainer: {
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
                justifyContent: 'flex-end'
            }
        }
    })
)
export default function ResultTabContent() {
    const selectedColleges = useCollegeStore((state) => state.selectedColleges);
    const [activeTab, setActiveTab] = useState('list');
    const buttons = [
        { key: 'list', title: 'List', icon: <SummarizeIcon /> },
        { key: 'summary', title: 'Summary', icon: <SegmentIcon /> },
    ];
    const classes = useStyles();

    return (
        <div className={classes.resultTabContainer}>
            <div className={classes.filterTabContainer}>
                <ButtonTabs
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                    buttons={buttons}
                />
            </div>
            {
                activeTab === 'list' ?
                    selectedColleges.map((college, index: number) => (
                        <CollegeCard college={college} key={`collegeCardComp${index}`} />
                    ))
                    :
                    <ResultCard colleges={selectedColleges} />
            }
        </div>
    )
}