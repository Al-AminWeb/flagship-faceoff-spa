import React, {useEffect, useState} from 'react';
import PhoneCard from "./PhoneCard.jsx";


const PhonesContainer = ({phones}) => {
    const [displayPhones, setDisplayPhones] =useState([]);
    const [showAll, setShowAll] =useState(false);

    useEffect(() => {
        if(showAll) {
            setDisplayPhones(phones);
        }
        else {
            setDisplayPhones(phones.slice(0,6));
        }
    },[phones,showAll]);
    return (
        <div className='py-12'>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-8'>
                {
                    displayPhones.map(phone => <PhoneCard phone={phone} key={phone.id}></PhoneCard>)
                }
            </div>
            <button onClick={()=>setShowAll(pre => !pre)} href="#_" className="relative inline-block px-4 py-2 font-medium group cursor-poniter">
                <span
                    className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span
                    className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">{}</span>
            </button>
        </div>
    );
};

export default PhonesContainer;
