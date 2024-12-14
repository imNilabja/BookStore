/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import CarouselFade from '../components/CarousalFade'
import { useState } from 'react'
import BookContainer from '../components/BookContainer'
const Dashboard = () => {

  const [status, setstatus] = useState(localStorage.getItem('login') === 'true')
  return (
    <>
      <Navbar />
      <BookContainer />
      
    </>

  )
}

export default Dashboard