import React from 'react'
import img from '../Assets/heroimg1.png'
import cart from '../Assets/add-to-cart-3046.png'

const Hero = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-slate-200 to-stone-200 grid grid-cols-2'>

        <div className='ml-16 mt-44 '>
            <h1 className='uppercase text-2xl'>Don't have time to go shopping?</h1>
            {/* <h2 className='uppercase text-m mt-2'>Don't worry, Shop with us.</h2> */}
            <h1 className='text-6xl font-bold my-3'>New</h1>
            <h1 className='text-6xl font-bold my-3'>Collections</h1>
            <h1 className='text-6xl font-bold flex gap-4 my-3'>Everyday  <img src={cart} alt="" className='h-16 w-16 mt-2'/></h1>
            <button className='bg-blue-600 px-10 py-3 rounded-2xl text-xl hover:translate-x-2 transition  duration-700 hover:text-white'>Shop Now</button>
           
        </div>


        <div className="flex items-center mr-10">
            <img src={img} alt="" className='border rounded-2xl'/>
        </div>
        



    </div>
  )
}

export default Hero