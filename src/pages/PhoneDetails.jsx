import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useLoaderData, useParams} from "react-router";
import {MdBookmarkAdd, MdShoppingCartCheckout} from "react-icons/md";
import Button from "../components/ui/Button.jsx";

const PhoneDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const singlePhones = data.find(phone => phone.id === parseInt(id));
    const {name,image,brand,model,price,description,storage,camera_info} = singlePhones || {}
    return (
        <div>
            <Navbar/>
            <div className='w-full py-12'>
                <img
                    src={image}
                    alt='Banner Image'
                    className='w-full mx-auto md:w-auto mb-8'
                />
                {/* Title and buttons */}
                <div className='flex justify-between'>
                    <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                    <div className='space-x-4 flex gap-2'>
                        <Button label= {<MdShoppingCartCheckout/>}/>
                        <Button label={<MdBookmarkAdd/>}/>
                    </div>
                </div>
                {/* Details */}
                <div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PhoneDetails;
