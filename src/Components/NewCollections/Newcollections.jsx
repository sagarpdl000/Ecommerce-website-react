import React from 'react'
import new_collection from '../Assets/new_collection'
import Item from '../Items/Item'

const Newcollections = () => {
  return (
    <div className='font-poppins mt-16 mx-16 '>
        <div className='flex justify-center'>
            <h1 className='text-2xl border-b-2 border-black mb-4 '>New Collections</h1>
        </div>

        <div className=' md:grid grid-cols-4 gap-y-16 gap-x-20 mt-12'>
           {new_collection.map((item,i)=>{

            return <Item key = {i} id = {item.id} image = {item.image} name = {item.name} new_price = {item.new_Price} old_price = {item.new_Price}/>



           })}

        </div>
    </div>
  )
}

export default Newcollections