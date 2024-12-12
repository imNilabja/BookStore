/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className='w-[100%] min-h-14 bg-green-600 mxz-auto flex justify-between'>
                <div className=' flex items-center text-white justify-center w-[11%] font-extrabold text-xl'>
                   <Link to="/">LOREM</Link> 
                </div>

                {/* <div className='flex items-center  justify-center'>
                    <input type='text' className='w-[600px] h-7 rounded-md' ></input>
                    <button><img width={26} src="/search.png" className='mx-2' /></button>
                </div> */}
                <div className='flex w-[25%] login.gif justify-around items-center mr-9'>
                    <Link to="/login"><button className='flex items-center text-white font-extrabold '>Login</button></Link>
                    <Link to="/signup"> <button className='flex items-center text-white font-extrabold '>Sign Up</button></Link>
                    <Link to="/about"> <button className='flex items-center text-white font-extrabold '>About</button></Link>
                    <Link to="/career"> <button className='flex items-center text-white font-extrabold '>Career</button></Link>
                    <Link to="/contact"> <button className='flex items-center text-white font-extrabold '>Contact</button></Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar
