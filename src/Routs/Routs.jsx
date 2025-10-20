import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { path: "/auth/login", Component: Login },
            { path: "/auth/register", Component: Registration },

        ]
    },
    {
        path: "/news-details/:newsId",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
    }
])