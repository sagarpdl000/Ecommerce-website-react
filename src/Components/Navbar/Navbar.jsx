import React, { useContext } from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
    const{getTotalCartItems} = useContext(ShopContext);
  return (
    <div className=''>
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
           <div className='relative'>
            <Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping}/></Link>
            <p className='absolute bottom-4 left-3 text-white bg-red-600 rounded-full px-1 text-sm'>{getTotalCartItems()}</p>
            </div>

        </div>

       
    </div>
    <hr></hr>
    </div>

  )
}
