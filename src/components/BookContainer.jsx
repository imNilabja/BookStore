/* eslint-disable no-unused-vars */
import React from 'react'
import BookCards from './BookCards'

const BookContainer = () => {
  return (
    <>
    <div className='w-[80%] min-h-[50%] h-fit border-4 border-blue-900  mx-auto my-8 rounded-md p-5 flex flex-wrap gap-10 items-center justify-center'>
        <BookCards link="Book1_front.jpg" name="একতি সে নাম আমি লিখেছিনু" price="200"/>
        <BookCards link="Book2_front.jpg" name="দানব পাখির দ্বীপে" price="300"/>
        <BookCards link="Book3_front.jpg" name="পাপবিদ্ধা" price="100"/>
        <BookCards link="Book4_front.jpg" name="গোপন হিয়ার রাইকিশোরী" price="60"/>
        <BookCards link="Book5_front.jpg" name="হিয়ার মাঝে" price="150"/>
       
      
    </div>
    </>
  )
}

export default BookContainer