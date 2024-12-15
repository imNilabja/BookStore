/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CartBuyButton from './CartBuyButton';
import Footer from './Footer';

const BookDetails = () => {
    const location = useLocation();
    const { image1, image2, name, price } = location.state || {};

    return (
        <>
            <Navbar />

            <div className='flex flex-col justify-center items-center mx-auto   '>
                <div className='max-w-fit border flex gap-4 min-h-fit my-4 mt-10 p-3 flex-wrap justify-center'>

                    <img src={image1} alt={name} className='rounded-md' width={530} />
                    <img src={image2} alt={name} className='rounded-md' width={530} />
                </div>
                <div className='flex flex-col my-8 w-[90%] gap-6'>
                    <p className='text-4xl font-bold'>{name}</p>
                    <p className='text-2xl font-bold'>Price: {price}/-</p>

                </div>
                <div className=' flex my-5 w-[90%] gap-8'>
                    <CartBuyButton buttonText={"Buy"} />
                    <CartBuyButton buttonText={"Cart"} />

                </div>

            </div>

<Footer/>
        </>
    )
}

export default BookDetails