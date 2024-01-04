import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/auth/LoginPage";
import HomePage from "../pages/home/HomePage";
import PageNotFound from "../pages/errors/PageNotFound";
import DashboardPage from "../pages/dashboard/DashboardPage";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'dashboard',
                element: <DashboardPage />
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />,

    }
];
const router = createBrowserRouter(routes, {

})

export default router;