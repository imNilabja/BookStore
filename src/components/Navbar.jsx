/* eslint-disable no-unused-vars */

import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [status, setstatus] = useState(localStorage.getItem('login') === 'true')
    const navigate = useNavigate();
    console.log(status)
    const handleLogout = () => {
        localStorage.setItem("login", false)
        setstatus('false')

        //  alert("logged out")
        navigate("/login")
    }
    return (
        <>
            <div className='w-[100%] min-h-14 bg-green-600 mx-auto flex justify-between'>
                <div className=' flex items-center text-yellow-400 justify-center w-[20%] font-extrabold text-sm xs:text-xl ml-3 xs:m-0'>
                    <Link to="/">Goswami Books</Link>
                </div>


                {!status ? (
                    <>
                        <div className='ml-2 flex w-[25%] gap-3 justify-end items-center mr-9 flex-wrap py-2 '>
                            <Link to="/login"><button className='flex items-center text-white font-extrabold text-sm xs:text-xl'>Login</button></Link>
                            <Link to="/signup"> <button className='flex items-center text-white font-extrabold text-sm xs:text-xl'>Sign Up</button></Link>
                        </div>

                    </>

                ) : (
                    <>
                        <div className='ml-2 flex w-[55%] xs:gap-5 gap-2 justify-end items-center mr-9 flex-wrap py-1' >
                            <Link to="/dashboard"> <button className='flex items-center text-white font-extrabold text-sm xs:text-xl'>Dashboard</button></Link>
                            <Link to="/about"> <button className='flex items-center text-white font-extrabold text-sm xs:text-xl'>About</button></Link>
                            <Link to="/career"> <button className='flex items-center text-white font-extrabold text-sm xs:text-xl'>Career</button></Link>
                            <Link to="/contact"> <button className='flex items-center text-white font-extrabold text-sm xs:text-xl'>Contact</button></Link>
                            <button className='flex items-center text-orange-500 font-extrabold text-sm xs:text-xl' onClick={handleLogout}>Logout</button>
                        </div>


                    </>
                )
                }






            </div>
        </>
    )
}

export default Navbar
