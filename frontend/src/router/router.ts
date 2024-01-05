import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/auth/LoginPage";
import HomePage from "../pages/home/HomePage";
import PageNotFound from "../pages/errors/PageNotFound";
import DashboardPage from "../pages/dashboard/DashboardPage";
import GettingStartedPage from "../pages/getting-started/GettingStartedPage";

const routes: RouteObject[] = [
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: 'login',
                Component: LoginPage,
            },
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
            },
        ]
    },
    {
        path: '*',
        Component: PageNotFound,

    }
];
const router = createBrowserRouter(routes, {

})

export default router;