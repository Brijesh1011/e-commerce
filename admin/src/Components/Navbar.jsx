import React from 'react'
import {assets} from '../assets/admin_assets/assets.js'

function Navbar({setToken}) {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
        <span className='text-3xl font-bold'>  SWiFt MArT</span>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>LogOut</button>
    </div>
  )
}

export default Navbar