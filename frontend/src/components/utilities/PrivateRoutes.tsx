import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuthStore from "../../store/auth/auth.store";
import Layout from "../layout/Layout";
import useCollegeStore from "../../store/college/college.store";

const RedirectApp = ({ location }: any) => {
    // do some checking
    const hasInvalidForm = useCollegeStore((state) => state.selectedColleges.length === 0);

    if (location.pathname === '/' && hasInvalidForm) {
        return <Navigate to="/getting-started" state={{ from: location }} />
    }

    return location.pathname === '/' ? <Navigate to="/dashboard" state={{ from: location }} /> : <Layout><Outlet /></Layout>;
}
const PrivateRoutes = () => {
    const location = useLocation();
    const isAuthenticated = useAuthStore((state => !!state.token));


    return isAuthenticated ?
        <RedirectApp location={location} /> : <Navigate to="/welcome" state={{ from: location }} />;
}

export default PrivateRoutes;