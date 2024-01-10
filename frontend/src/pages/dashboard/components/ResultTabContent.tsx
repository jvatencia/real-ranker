import { useState } from "react";
import ButtonTabs from "../../../components/commons/ButtonTabs";
import CollegeCard from "../../../components/commons/CollegeCard";
import useCollegeStore from "../../../store/college/college.store"
import SegmentIcon from '@mui/icons-material/Segment';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { makeStyles } from "@mui/styles";
import ResultCard from "../../../components/commons/ResultCard";
import InfoModal from "../../../components/commons/InfoModal";
import ComparisonSliders from "../../../components/commons/ComparisonSliders";

const useStyles = makeStyles(
    (theme) => ({
        resultTabContainer: {
            marginTop: '10px'
        },
        filterTabContainer: {
            marginBottom: '10px',
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
    const [showDialog, setShowDialog] = useState(false);
    const [dialogProps, setDialogProps] = useState({
        title: '',
        description: ''
    });

    const openDialog = (title: string, description: string) => {
        setDialogProps({ title, description })
        setShowDialog(true);
    }

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
                        <CollegeCard college={college} key={`collegeCardComp${index}`} openDialog={openDialog} />
                    ))
                    :
                    <>
                        <ResultCard colleges={selectedColleges} />
                        <ComparisonSliders colleges={selectedColleges} />
                    </>
            }

            <InfoModal
                showDialog={showDialog}
                setShowDialog={setShowDialog}
                title={dialogProps.title}
                description={dialogProps.description}
            />
        </div>
    )
}