import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Items/Item'
import All_Product from '../Components/Assets/All_Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


const ShopCategory = (props) => {
  const {all_Product} = useContext(ShopContext)
  return (
    <div className='mx-16 font-poppins'>
      <img src={props.banner} alt="" className='h-72 w-full  object-top'/>
      <div className='my-16'>
      <div className='flex justify-between'>
        <p className=''>
          <span className='font-bold'>Showing 1-8</span> out of 18 products.
        </p>
        
         <p className='border border-black rounded-xl px-2'>Sort by <FontAwesomeIcon icon={faCaretDown} /></p>
        </div>

        <div className='grid grid-cols-4 pt-14 gap-16'>
          {All_Product.map((item,i)=>{

            if (props.category === item.category){
              return <Item key = {i} id = {item.id} image = {item.image} name = {item.name} new_price = {item.new_Price} old_price = {item.new_Price}/>
            }
            else{
              return null;
            }

          })}
        </div>

      </div>

    </div>
  )
}

export default ShopCategory