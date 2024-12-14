/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
  return (
    <div className='fixed bottom-0 w-screen h-11 bg-purple-700 flex text-white'>
        <ul className='flex w-[100%] h-[100%] gap-4 justify-center text-xs'>
        <button>Home</button>
          <button>Explore</button>
          <button>Buy</button>
          <button>Reach Us</button>
          <button>About</button>
        </ul>
    </div>
  )
}

export default Footer