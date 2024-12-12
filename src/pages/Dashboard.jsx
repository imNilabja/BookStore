/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import CarouselFade from '../components/CarousalFade'
import { useState } from 'react'
const Dashboard = () => {

  const [status, setstatus] = useState(localStorage.getItem('login') === 'true')
  return (
    <>
      <Navbar />
      <CarouselFade />
      {status ? (
        <>
          <p className='text-2xl font-bold'>
          you have Access!
          </p></>
      ) : (
        <>
          <p className='text-2xl font-bold'>
            
            Login to Access!
          </p></>
      )}
    </>

  )
}

export default Dashboard