import React from 'react'
import image from '../Assets/offer.png'


function Offer() {
  return (
    <div className=' bg-gradient-to-b from-slate-200 to-stone-200 grid grid-cols-2  mt-36 '>

    <div className='mx-auto mt-24 mb-9 '>
      <h1 className='text-5xl font-bold'>Exclusive</h1>
      <h1 className='text-6xl my-3 font-bold'>Offers for you</h1>
      <h1 className='text-2xl my-3  '>From our best seller.</h1>
      <button className='bg-blue-600 px-10 py-3 rounded-2xl text-xl hover:translate-x-2 transition  duration-700 hover:text-white'>Check Now</button>
       
    </div>


    <div className=" mr-10">
        <img src={image} alt="" className='h-80 w-90 object-fill  '/>
    </div>

</div>
    
    

  )
}

export default Offer