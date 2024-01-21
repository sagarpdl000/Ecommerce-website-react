import React from 'react'
import logo from '../Assets/logo.png'


export const Navbar = () => {
  return (
    <div className='flex justify-between m-8 text-center '> 
        <div>
            <img src={logo} alt="" className='h-12 w-30'/>
        </div>

        <div className='text-center'>
            <ul className='flex gap-4'>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Women</a></li>
            </ul>
        </div>


        <div>
            <button className=''>Login</button>
        </div>

       
    </div>
     

  )
}
