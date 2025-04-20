import {createBrowserRouter} from "react-router";

import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import About from "../pages/About.jsx";
import PhoneDetails from "../pages/PhoneDetails.jsx";
import PhonesContainer from "../components/PhonesContainer.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Favorites from "../pages/Favorites.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component:MainLayout,
        errorElement:<ErrorPage />,
        children:[{
           index:true,
            Component:Home,
        },
            {
                path:'/phones-container',

            },
            {
                path:"/about",
                element:<About />
            }
        ]
    },

    {
        path:"/phone-details",
        element:<PhoneDetails />
    },
    {
        path:"/favorite",
        element:<Favorites />
    }

]);

export default router;