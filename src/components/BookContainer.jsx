/* eslint-disable no-unused-vars */
import React from 'react'
import BookCards from './BookCards'

const BookContainer = () => {
  return (
    <>
    <div className='w-[80%] min-h-[50%] max-h-fit border-4 border-blue-900  mx-auto my-8 rounded-md p-5 flex flex-wrap gap-10 items-center justify-center'>
        <BookCards link="cloudy.png" name="Naruto" price="299"/>
        <BookCards link="evening.png" name="Papbiddha" price="250"/>
        <BookCards link="rainy.png" name="JAVA Guide" price="450"/>
       
      
    </div>
    </>
  )
}

export default BookContainer