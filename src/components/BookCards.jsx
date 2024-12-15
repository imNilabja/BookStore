/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import { Link } from 'react-router-dom'
import CartBuyButton from './CartBuyButton'



const BookCards = ({ link1, name, price, link2 }) => {
    return (
        <>



            <button>


                <div className='w-[250px] min-h-[600px] border border-black rounded-lg flex-col items-center justify-center pt-2 h-fit'>
                    <Link to='/book1' state={{
                        image1: link1,
                        image2:link2,
                        name: name,
                        price: price,
                    }}>
                        <div className=" w-[95%] h-[350px] my-auto mx-auto p-1 ">

                            <img src={link1} alt="" className='rounded-md' />

                        </div>
                    </Link>
                    <div className=" w-[95%] h-[175px] mx-auto p-2 flex-col justify-center items-center font-bold">
                        <p className=' p-3'>{name}</p>
                        <p>Price: {price}/-</p>

                        <CartBuyButton buttonText={"Buy"} />
                        <CartBuyButton buttonText={"Cart"} />

                    </div>

                </div>

            </button>



        </>
    )
}

export default BookCards