import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import PageBody from "../../components/commons/PageBody";
import ButtonTabs from "../../components/commons/ButtonTabs";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCollegeStore from "../../store/college/college.store";
import ResultTabContent from "./components/ResultTabContent";
import { makeStyles } from "@mui/styles";
import GraphTabContent from "./components/GraphTabContent";

const getTabContent = ({ activeTab }: any) => {
    switch (activeTab) {
        case 'result': return <ResultTabContent />;
        case 'college_profile': return null;
        case 'graph': return <GraphTabContent />;
    }
}

const useStyles = makeStyles(
    (theme) => ({
        tabContainer: {
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center'
            }
        }
    })
)
export default function DashboardPage() {
    const classes = useStyles();
    const buttons = [
        { key: 'result', title: 'Result', isActive: true },
        { key: 'college_profile', title: 'College Profile', isActive: false },
        { key: 'graph', title: 'Graph' },
    ];

    const [activeTab, setActiveTab] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();
    const tab = searchParams.get('tab');
    const hasInvalidForm = useCollegeStore((state) => state.selectedColleges.length === 0);

    const navigate = useNavigate();

    useEffect(() => {
        if (hasInvalidForm) {
            return navigate('/getting-started', { state: { from: '/dashboard' } });
        }

        if (tab === null || tab === '') {
            setSearchParams({
                tab: buttons[0].key
            });
        }

        if (tab !== null) {
            setActiveTab(tab);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);


    const updateTab = (tab: string) => {
        setSearchParams({ tab });
    }

    return (
        <ResponsiveBox style={{ marginTop: '20px' }}>
            <PageBody>
                <div className={classes.tabContainer}>
                    <ButtonTabs
                        setActiveTab={updateTab}
                        activeTab={activeTab}
                        buttons={buttons}
                    />
                </div>
                {getTabContent({ activeTab })}
            </PageBody>
        </ResponsiveBox>
    );
}