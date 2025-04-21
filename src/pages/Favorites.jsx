import React, {useEffect, useState} from 'react';
import Footer from "../components/Footer.jsx";
import PhoneCard from "../components/PhoneCard.jsx";
import {getFavorites} from "../utils/index.js";

const Favorites = () => {
    const [displayPhones, setDisplayPhones] =useState([]);
    useEffect(() => {
        const savedPhones = getFavorites()
        setDisplayPhones(savedPhones)
    },[])
    return (
        <div>
            <div className='py-12'>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-8'>
                    {
                        displayPhones.map(phone => <PhoneCard phone={phone} key={phone.id}></PhoneCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Favorites;
