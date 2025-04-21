import React, {useState} from 'react';
import bannerImg from '../assets/banner.png'
import Button from "./ui/Button.jsx";

const Hero = ({handleSearch}) => {
    const [searchText, setSearchText] =useState('');
    return (<div className='py-12'>

        <img className='w-full mx-auto md:max-w-md' src={bannerImg} alt=""/>
        <div className='text-center space-y-4'>
            <h1 className='font-thin text-7xl text-gray-900'>Browse, Search, View, Buy</h1>
            <p className='text-gray-500'>Best place to browse, search, view details and purchase of top flagship
                phones
                of the current time - FlagshipFaceOff</p>
            <form onSubmit={(e) => {
                handleSearch(e,searchText)
                setSearchText('')
            }} className='flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                <input value={searchText}
                       onChange={e=>setSearchText(e.target.value)}
                    className='bg-white border border-gray-300 rounded shadow-md w-2/3 g-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0'
                    placeholder='search phone by name' type="text"/>
                <Button label='search' type='submit'/>
            </form>
        </div>
    </div>);
};

export default Hero;
