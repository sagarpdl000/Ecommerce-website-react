import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'




const Footer = () => {
  return (
    <div className=' flex justify-center bg-gradient-to-b from-slate-200 to-stone-200 py-8 font-poppins'>
        <div className=''>
        <div className='flex items-end justify-center mb-4'>
        <img src={logo} alt="" className='h-16 w-16'/>
        <h1 className='uppercase text-2xl'>Pasaley</h1>
        </div>

        <div className='gap-6 flex'>
            <Link to= "">Company</Link>
            <Link to= "">Products</Link>
            <Link to= "">About us</Link>
            <Link to= "">Office</Link>
        </div>

        <div className='justify-center flex mt-4 gap-4'>
        
 
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='h-6 w-6' /></a>
               <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='h-6 w-6' /></a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className='h-6 w-6' /></a>

        </div>
        


        </div>
        
    </div>
  )
}

export default Footer