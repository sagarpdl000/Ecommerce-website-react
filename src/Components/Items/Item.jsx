import React from 'react'

const Item = (props) => {
  return (
    <div className=''>
        
        <div>
        <img src={props.image} alt="" className='h-64 w-64 object-cover' />
        </div>

        <div className='pt-3 pl-2'>
        <p>{props.name}</p>
       
      
       <div> ${props.new_price}</div>
       <div className='line-through'> $ {props.old_price}</div>
      
        </div>

    </div>
  )
}

export default Item;