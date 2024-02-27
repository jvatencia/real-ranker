import { makeStyles } from "@mui/styles";
import ButtonTabs from "../../components/commons/ButtonTabs";
import PageBody from "../../components/commons/PageBody";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import WhatsNew from "./components/WhatsNew";

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
);

const getTabContent = ({ activeTab }: any) => {
    switch (activeTab) {
        case 'new': return <WhatsNew />;
        case 'recommended': return null;
    }
}

export default function HomePage() {
    const classes = useStyles();
    const buttons = [
        { key: 'new', title: 'Whats New', },
        { key: 'recommended', title: 'Whats Hot For You' },
    ];

    const [activeTab, setActiveTab] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();
    const tab = searchParams.get('tab');

    useEffect(() => {
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