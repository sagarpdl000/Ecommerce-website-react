import React from 'react'

const Item = (props) => {
  return (
    <div className='shadow-2xl hover:scale-105 duration-300'>
        
        <div>
        <img src={props.image} alt="" className='h-64 w-64 object-cover' />
        </div>

        <div className='pt-3 pl-2'>
        <p>{props.name}</p>
       
      
       <div> Rs. {props.new_price}</div>
       <div className='line-through'> Rs. {props.old_price}</div>
      
        </div>

    </div>
  )
}

export default Item;