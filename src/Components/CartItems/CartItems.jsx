import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const CartItems = () => {
    const {All_Product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='mx-16 my-12 font-poppins'>
        
        <div className='bg-blue-200 pl-2 grid grid-cols-6 '>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>

       {All_Product.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return (
            <div>

                <div className='mt-2 grid grid-cols-6 gap-4 items-center mb-4'>

                    <img src={e.image} alt="" className='h-24 w-24 object-cover'/>

                    <p>{e.name}</p>

                    <p>Rs. {e.new_Price}</p>

                    <button className='text-left'  id='quantity'>{cartItems[e.id]}</button>
                    
                    <p>Rs. {e.new_Price*cartItems[e.id]}</p>

                    <FontAwesomeIcon icon={faXmark} onClick={()=>{removeFromCart(e.id)}} className='hover:cursor-pointer bg-red-600 px-4 py-2'/>
                    
                </div>
                <hr/>
            </div>
          )
        }



       })}

    </div>
  )
}

export default CartItems