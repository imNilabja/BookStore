/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const BookCards = ({ link,name,price }) => {
    return (
        <>
            <div className='w-[220px] h-[350px] border border-black rounded-md flex-col items-center justify-center'>
                <div className=" w-[95%] h-[175px] my-auto mx-auto p-1">

                    <img src={link} alt="" />

                </div>
                <div className=" w-[95%] h-[175px] my-auto mx-auto p-2 flex-col justify-center items-center font-bold">
                    <p>{name}</p>
                    <p>Price:{price}/-</p>


                </div>

            </div>






        </>
    )
}

export default BookCards