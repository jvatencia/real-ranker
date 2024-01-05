import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/auth/LoginPage";
import HomePage from "../pages/home/HomePage";
import PageNotFound from "../pages/errors/PageNotFound";
import DashboardPage from "../pages/dashboard/DashboardPage";
import GettingStartedPage from "../pages/getting-started/GettingStartedPage";
import PrivateRoutes from "../components/utilities/PrivateRoutes";

const routes: RouteObject[] = [
    {
        path: '/',
        Component: PrivateRoutes,
        children: [
            {
                path: 'home',
                Component: HomePage,
            },
            {
                path: 'getting-started',
                Component: GettingStartedPage,
            },
            {
                path: 'dashboard',
                Component: DashboardPage,
            }
        ]
    },
    {
        path: '/login',
        Component: LoginPage,
    },
    {
        path: '*',
        Component: PageNotFound,

    }
];
const router = createBrowserRouter(routes, {

})

export default router;