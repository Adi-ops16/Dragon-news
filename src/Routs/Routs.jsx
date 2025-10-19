import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import NewsDetails from "../Pages/NewsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            { index: true, Component: Home },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch("/news.json")

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
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch("/news.json")
    }
])