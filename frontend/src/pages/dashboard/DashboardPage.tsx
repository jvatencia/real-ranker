import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import PageBody from "../../components/commons/PageBody";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCollegeStore from "../../store/college/college.store";
import ResultTabContent from "./components/ResultTabContent";
import { AppPageTitle } from "../../components/styled";


export default function DashboardPage() {

    const hasInvalidForm = useCollegeStore((state) => state.selectedColleges.length === 0);

    const navigate = useNavigate();

    useEffect(() => {
        if (hasInvalidForm) {
            return navigate('/getting-started', { state: { from: '/dashboard' } });
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <ResponsiveBox style={{ marginTop: '20px' }}>
            <PageBody>
                <AppPageTitle>These are your results</AppPageTitle>
                <ResultTabContent />
            </PageBody>
        </ResponsiveBox>
    );
}