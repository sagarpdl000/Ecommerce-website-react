import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const CartItems = () => {
    const {getTotalCartAmount ,All_Product, cartItems, removeFromCart} = useContext(ShopContext);
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

                    <button className='text-left '  id='quantity'>{cartItems[e.id]}</button>
                    
                    <p>Rs. {e.new_Price*cartItems[e.id]}</p>

                    <FontAwesomeIcon icon={faXmark} onClick={()=>{removeFromCart(e.id)}} className='hover:cursor-pointer bg-red-600 px-4 py-2 hover:text-white'/>
                    
                </div>
                <hr/>
            </div>
          )
        }
        return null;
       })}
       <div className='grid grid-cols-2 mt-16'>
        <div>
          <h1 className='text-xl font-bold mb-6'>Cart Totals</h1>
          <div>
            <div className='grid grid-cols-2'>
              <p>Sub-total</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr className='my-2'/>
            <div className='grid grid-cols-2'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className='my-2'/>
            <div className='grid grid-cols-2'>
              <h1>Total</h1>
              <h1>Rs.{getTotalCartAmount()}</h1>
            </div>
          </div>
          <button className='mt-6  px-8 py-2 bg-red-600 text-white hover:scale-105 duration-300'>Checkout</button>
        </div>
        <div className='mx-12'>
          <p>Promo code?</p>
          <div>
            <input type="text" name="" id="" placeholder='promo code' className='bg-gray-200 py-2 px-6 mt-2'/>
            <button className='bg-black py-2 px-5 text-white'>Submit</button>
          </div>
        </div>
       </div>

    </div>
  )
}

export default CartItems