import React from 'react'
import star from '../Assets/star.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';



const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='mx-16 font-poppins grid grid-cols-2 my-10 '>
        <div className='flex  ' id='left '>
            <div className=''>
                <img src={product.image} alt="" className='h-32 w-32 object-cover'/>
                <img src={product.image} alt=""className='h-32 w-32 object-cover pt-2' />
                <img src={product.image} alt=""className='h-32 w-32 object-cover pt-2' />
                
            </div>

    
            <div className='pl-2 '>
                <img src={product.image} alt="" className=' h-96' />

            </div>
        </div>

        <div className= 'mx-4'  id='right'>
            <h1 className='text-3xl'>{product.name}</h1>
            <div>
                <div className='flex my-2'>
                <img src={star} alt="" className='h-5 w-5' />
                <img src={star} alt="" className='h-5 w-5' />
                <img src={star} alt="" className='h-5 w-5' />
                <img src={star} alt="" className='h-5 w-5' />
                <p>(133)</p>
                </div>
                
            </div>

            <div className='flex'>
                <div className='pr-2 line-through text-gray-500'>Rs. {product.old_Price}</div>
                <div className='text-red-700'>Rs. {product.new_Price}</div>
            </div>

            <div className='text-sm my-2'>
                <p>Want to look sharp for an event? If so, this the perfect fit. They are unmatched in sophistication and style. These are made of high-grade material that is not only sleek and shiny but also breathable and comfortable.</p>
            </div>

            <div>
                <h1>Select Size</h1>
                <div className='flex my-2 gap-4'>
                    <div className=' px-3 bg-gray-400'><button>S</button></div>
                    <div className=' px-3 bg-gray-400'><button>M</button></div>
                    <div className=' px-3 bg-gray-400'><button>L</button></div>
                    <div className=' px-3 bg-gray-400'><button>XL</button></div>
                    <div className=' px-3 bg-gray-400'><button>XXL</button></div>

                </div>
            </div>

            <button onClick={()=>{addToCart(product.id)}} className='my-2 bg-red-500 px-6 py-2 uppercase text-white duration-300 hover:scale-105'>Add to cart</button>

            <p><span>Category: </span>Man, Winter Jacket</p>
            

        </div>

    </div>
  )
}

export default ProductDisplay;