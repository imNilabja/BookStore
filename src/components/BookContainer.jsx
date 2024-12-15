/* eslint-disable no-unused-vars */
import React from 'react'
import BookCards from './BookCards'

const BookContainer = () => {
  return (
    <>
    <div className='w-[80%] min-h-[50%] h-fit border-4 border-blue-900  mx-auto my-8 rounded-md p-5 flex flex-wrap gap-10 items-center justify-center'>
        <BookCards link="/public/Book_1/front.jpg" name="একতি সে নাম আমি লিখেছিনু" price="200"/>
        <BookCards link="/public/Book_2/front.jpg" name="দানব পাখির দ্বীপে" price="300"/>
        <BookCards link="/public/Book_3/front.jpg" name="পাপবিদ্ধা" price="100"/>
        <BookCards link="/public/Book_4/front.jpg" name="গোপন হিয়ার রাইকিশোরী" price="60"/>
        <BookCards link="/public/Book_5/front.jpg" name="হিয়ার মাঝে" price="150"/>
       
      
    </div>
    </>
  )
}

export default BookContainer