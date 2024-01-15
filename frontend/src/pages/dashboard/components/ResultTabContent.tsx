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
import TuneIcon from '@mui/icons-material/Tune';
import { useMediaQuery } from "@mui/material";
import { devices } from "../../../utils";
import CategorySliderModal from "../../../components/commons/CategorySliderModal";

const useStyles = makeStyles(
    (theme) => ({
        resultTabContainer: {
            marginTop: '10px'
        },
        filterTabContainer: {
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // [theme.breakpoints.down('md')]: {
            //     justifyContent: 'flex-end'
            // }
        },
        filterButton: {
            padding: '8px 16px',
            border: '1px solid ' + theme.palette.dark.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: '0.3s linear',
            userSelect: 'none',
            boxShadow: '0px 2px 0px ' + theme.palette.primary.main,
            borderRadius: '5px',
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
            }
        }
    })
);

const FilterButton = ({ classes, icon, title, onClick }: any) => {
    const matches = useMediaQuery(devices.tablet)
    const handleTitle = () => {
        if (icon !== undefined) {
            return !matches && title;
        }

        return title;
    }

    return (
        <div className={classes.filterButton} onClick={onClick}>
            {icon} {handleTitle()}
        </div>
    );
}
export default function ResultTabContent() {
    const classes = useStyles();

    const selectedColleges = useCollegeStore((state) => state.selectedColleges);
    const buttons = [
        { key: 'list', title: 'List', icon: <SummarizeIcon /> },
        { key: 'summary', title: 'Summary', icon: <SegmentIcon /> },
    ];

    const [activeTab, setActiveTab] = useState('list');
    const [showDialog, setShowDialog] = useState(false);
    const [filterModalState, setFilterModalState] = useState(false);
    const [dialogProps, setDialogProps] = useState({
        title: '',
        description: ''
    });

    const openDialog = (title: string, description: string) => {
        setDialogProps({ title, description })
        setShowDialog(true);
    }

    const setSliderModalState = () => {
        console.log('setSliderModalState');
        setFilterModalState(!filterModalState);
    }

    return (
        <div className={classes.resultTabContainer}>
            <div className={classes.filterTabContainer}>
                <FilterButton classes={classes} onClick={setSliderModalState} icon={<TuneIcon />} title="Sliders" />
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
            <CategorySliderModal
                showDialog={filterModalState}
                handleClose={() => {
                    setFilterModalState(false);
                }}
            />
        </div>
    )
}