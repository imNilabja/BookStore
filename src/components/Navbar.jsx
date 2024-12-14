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
                <div className=' flex items-center   text-white justify-center w-[11%] font-extrabold text-xl'>
                    <Link to="/">LOREM</Link>
                </div>


                {!status ? (
                    <>
                        <div className='flex w-[10%] justify-around items-center mr-9'>
                            <Link to="/login"><button className='flex items-center text-white font-extrabold '>Login</button></Link>
                            <Link to="/signup"> <button className='flex items-center text-white font-extrabold '>Sign Up</button></Link>
                        </div>

                    </>

                ) : (
                    <>
                        <div className='ml-2 flex w-[55%] gap-4 justify-end items-center mr-9 flex-wrap ' >
                            <Link to="/dashboard"> <button className='flex items-center text-white font-extrabold '>Dashboard</button></Link>
                            <Link to="/about"> <button className='flex items-center text-white font-extrabold '>About</button></Link>
                            <Link to="/career"> <button className='flex items-center text-white font-extrabold '>Career</button></Link>
                            <Link to="/contact"> <button className='flex items-center text-white font-extrabold '>Contact</button></Link>
                            <button className='flex items-center text-white font-extrabold ' onClick={handleLogout}>Logout</button>
                        </div>


                    </>
                )
                }






            </div>
        </>
    )
}

export default Navbar
