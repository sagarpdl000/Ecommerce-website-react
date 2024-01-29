import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-gradient-to-b from-slate-200 to-stone-200 mt-20 py-16 grid grid-cols-1 font-poppins'>
        <div className='text-center'>
            <h1 className='text-4xl my-3'>Get Notified With Our Exclusive Offers</h1>
            <p className='my-3'>Subscribe to our newsletter and grab the deal.</p>
            <input type="text" placeholder='YOUR EMAIL ID' className='py-2 px-12 rounded-2xl'/>
            <button className='bg-black text-white py-2 px-6 rounded-2xl hover:text-blue-400'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter