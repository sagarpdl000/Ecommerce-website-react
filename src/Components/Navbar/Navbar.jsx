import React from 'react'
import logo from '../Assets/logo.png'
import cart from '../Assets/add-to-cart-3046.png'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
    <div className='flex justify-between items-center mx-20 my-6 font-poppins'> 
        <div className='flex gap-3'>
            <img src={logo} alt="" className='h-12 w-30'/>
            <h1 className='text-2xl flex items-end'>PASALEY</h1>
        </div>

        <div className='text-center'>
            <ul className='flex gap-3'>


                <li ><Link to= "/" className='hover:border-b-2 hover:border-orange-400 hover:mb-4' >Shop</Link></li>
                <li><Link to= "/Mens" className='hover:border-b-2 hover:border-orange-400 hover:mb-4'>Men</Link></li>
                <li><Link to= "/Womens" className='hover:border-b-2 hover:border-orange-400 hover:mb-4'>Women</Link></li>
                <li><Link to= "/Kids" className='hover:border-b-2 hover:border-orange-400 hover:mb-4'>Kids</Link></li>



                
            </ul>
        </div>


        <div className='flex gap-4'>
           <Link to='/Login'><button className='text-center px-7  border-2 rounded-full hover:bg-orange-400 hover:text-white'>Login</button></Link>
            <Link to= '/Cart'><img src={cart} alt="" className='h-8 w-8 text-center hover:scale-125 duration-300' /></Link>

        </div>

       
    </div>
    <hr></hr>
    </div>

  )
}
