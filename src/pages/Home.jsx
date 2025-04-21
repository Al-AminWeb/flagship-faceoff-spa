import React from 'react';
import PhonesContainer from "../components/PhonesContainer.jsx";
import Hero from "../components/Hero.jsx";
import {useLoaderData} from "react-router";

const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <Hero></Hero>
            <PhonesContainer phones={data}></PhonesContainer>
        </div>
    );
};

export default Home;
