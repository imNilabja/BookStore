/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'

import { useState } from 'react'
import BookContainer from '../components/BookContainer'
import Footer from '../components/Footer'
const Dashboard = () => {

  const [status, setstatus] = useState(localStorage.getItem('login') === 'true')
  return (
    <>
      <Navbar />
      {status ? (
        <>
          <p className='text-2xl font-bold'>
            
          </p></>
      ) : (
        <>
          <p className='text-2xl font-bold m-auto w-[100%] justify-center flex my-4'>
          Login to Buy!
          </p></>
      )}
      <BookContainer />
      <Footer/>
      
    </>

  )
}

export default Dashboard