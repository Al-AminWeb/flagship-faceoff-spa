import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
    return (<>
        <Navbar></Navbar>
        <Outlet/>
        <h1>footer</h1>
    </>);
};

export default MainLayout;
