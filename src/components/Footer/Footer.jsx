import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <div className='h-[50vh] text-gray-400 bg-[rgb(24,38,51)] flex flex-row p-5  gap-28 border-2 border-gray-800'>
      <div className='mt-5 ml-5 flex flex-col gap-5 border-r-[1px] border-[#3a3a3e] mr-5'>
        <img src="i3.png" alt="" className='h-[15vh] w-[8vw] ml-10' />
        <p className='pr-10 w-[20vw] ml-'>
          {/* © 2024 BlogIT. All Rights Reserved. */}
          Your go-to platform for creating, sharing, and discovering IT insights.
        </p>
        <p className='pr-10 w-[20vw]  text-[12px]'>
          © 2024 BlogIT. All Rights Reserved.
          {/* Your go-to platform for creating, sharing, and discovering IT insights. */}
        </p>
      </div>
      <div className='flex flex-col gap-7 mt-14 '>
        <h4 className='text-lg'>
          Links
        </h4>
        <ul className='flex flex-col gap-3 items-center justify-center'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/Signup'>Signup</Link></li>
          <li><Link to='/Login'>Login</Link></li>
        </ul>
      </div>
      <div className='flex flex-col gap-7 mt-14 ml-5'>
        <h4 className='text-lg'>Contact us</h4>
        <ul className='flex flex-col gap-3 items-center justify-center'>
          <li><Link to='/'>support@blogit.com</Link></li>
          <li><Link to='/'>+123 456 7890</Link></li>
        </ul>
      </div>
      <div className='flex flex-col gap-3 mt-14 ml-5'>
        <Link to='/'><h4 className='text-lg'>Terms of Service</h4></Link>
        <Link to='/'><h4 className='text-lg'>Privacy</h4></Link>
        <Link to='/'><h4 className='text-lg'>Content policy</h4></Link>
        
      </div>
      <div className='flex flex-col items-center  gap-7 mt-14 ml-5'>
        <h4 className='text-lg'>Social</h4>
        <ul className='flex flex-row gap-5 items-center justify-center'>
          <li><Link to='/'><img src="facebook.png" alt="" className='w-[3vw] h-[6vh]' /></Link></li>
          <li><Link to='/'><img src="instagram.png" alt="" className='w-[3vw] h-[6vh]' /></Link></li>
          <li><Link to='/'><img src="linkedin.png" alt="" className='w-[3vw] h-[6vh]' /></Link></li>
          <li><Link to='/'><img src="twitter.png" alt="" className='w-[3vw] h-[6vh]' /></Link></li>
        
        </ul>
      </div>
    </div>
  )
}

export default Footer