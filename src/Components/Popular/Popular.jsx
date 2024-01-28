import React from 'react'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='mt-16 mx-16 font-poppins mb-6 '>
        <div className='flex justify-center'>
        <h1  className='text-2xl font-bold border-b-2 border-black  pb-3'>Latest popular product</h1> </div>

        <div className='md:grid grid-cols-4 mt-12 gap-x-20'>
            {data_product.map((item,i)=>{
                return <Item key = {i} id = {item.id} image = {item.image} name = {item.name} new_price = {item.new_Price} old_price = {item.new_Price}/>
            })}


        </div>




    </div>
  )
}

export default Popular