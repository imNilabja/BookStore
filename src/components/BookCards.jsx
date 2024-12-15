/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import { Link } from 'react-router-dom'


const BookCards = ({ link, name, price }) => {
    return (
        <>
            <Link to='/book'>


                <button>


                    <div className='w-[250px] h-[550px] border border-black rounded-lg flex-col items-center justify-center pt-2'>
                        <div className=" w-[95%] h-[350px] my-auto mx-auto p-1 ">

                            <img src={link} alt="" className='rounded-md' />

                        </div>
                        <div className=" w-[95%] h-[175px] my-auto mx-auto p-2 flex-col justify-center items-center font-bold">
                            <p className=' p-3'>{name}</p>
                            <p>Price: {price}/-</p>


                        </div>

                    </div>

                </button>
            </Link>


        </>
    )
}

export default BookCards