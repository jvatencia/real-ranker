import { Button, ButtonGroup } from "@mui/material";
import ResponsiveBox from "../../components/commons/ResponsiveBox";
import PageBody from "../../components/commons/PageBody";
import ButtonTabs from "../../components/commons/ButtonTabs";
import { useState } from "react";

export default function DashboardPage() {
    const buttons = [
        { key: 'result', title: 'Result', isActive: true },
        { key: 'college_profile', title: 'College Profile', isActive: false },
        { key: 'graph', title: 'Graph' },
    ];

    const [activeTab, setActiveTab] = useState('result');
    return (
        <ResponsiveBox hasPadding>
            <PageBody>
                <ButtonTabs
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                    buttons={buttons}
                />
            </PageBody>
        </ResponsiveBox>
    );
}