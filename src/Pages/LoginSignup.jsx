import React from 'react'
import { Link } from 'react-router-dom'


const LoginSignup = () => {
  return (
    
    <div className=' h-screen w-full bg-gray-200 flex flex-col justify-center items-center font-poppins'>

      <div className=' bg-white w-2/5 px-6 py-6 '>
        <h1 className='text-2xl'>Sign up</h1>

        <div>
          <input type="text" placeholder='Name' className='border-2 py-2 my-3 w-full'/>
        </div>

        <div>
          <input type="email" placeholder='Email'  className='border-2 py-2 my-3 w-full' />
        </div>

        <div >
          <input type="password" placeholder='Password' className='border-2 py-2 my-3 w-full'/>
        </div>

        
        <div>
          <button  className='border-2 py-2 my-3 text-center bg-red-500 w-full'>Continue</button>
        </div>

        
          <p className='my-3'>Already have an account? <span className='text-red-700'><Link to = ''>Login here</Link></span></p>
       

        <div className='flex items-center'>
          <input type="checkbox" />
          <p className='pl-2'>  By,continuing, I agree to the terms and conditions.</p>
        </div>

          
        

      </div>

    

      </div>
    
    
  )
}

export default LoginSignup