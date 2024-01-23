import { RouteObject, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import HomePage from "../pages/home/HomePage";
import PageNotFound from "../pages/errors/PageNotFound";
import DashboardPage from "../pages/dashboard/DashboardPage";
import GettingStartedPage from "../pages/getting-started/GettingStartedPage";
import PrivateRoutes from "../components/utilities/PrivateRoutes";
import WelcomePage from "../pages/home/WelcomePage";

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
        path: '/welcome',
        Component: WelcomePage,
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