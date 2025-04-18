import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

function Navbar() {

    const [visible, setvisible] = useState(false)
    const {setShowSearch,showSearch,getCartCount,navigatehook,token,setToken,setCartItems}=useContext(ShopContext)
     
    const logout=()=>{
        navigatehook('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        
    }

  return (
    <div className='flex item-center justify-between py-4 font-md'>
        <span className='text-3xl font-bold'> <Link to='/'> SWiFt MArT</Link></span>

        <ul className='hidden sm:flex gap-5 text-md text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-3 sm:gap-6'>
            <img onClick={()=>setShowSearch(!showSearch)} src="https://img.icons8.com/?size=256&id=59878&format=png" alt="search"  className='w-5 h-5 cursor-pointer'/>
          <div className='group relative'>
            
            <img onClick={()=>token?null:navigatehook('/login')} src="https://img.icons8.com/?size=256w&id=z-JBA_KtSkxG&format=png" alt="Profile" className='w-5 cursor-pointer'/>
            {/*---------------------- dropdown------------ */}

            {token &&  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500 rounded'>
                 <p className='cursor-pointer hover:bg-gray-300 text-center rounded-2xl hover:text-black '>My Profile</p>
                 <p onClick={()=>navigatehook('/orders')} className='cursor-pointer hover:bg-gray-300 text-center rounded-2xl hover:text-black'>Order</p>
                 <p onClick={logout} className='cursor-pointer hover:bg-gray-300 text-center rounded-2xl hover:text-black'>Logout</p>
                </div>
            </div>}
           
          </div>
          <Link to='/cart' className='relative'>
           <img src="https://img.icons8.com/?size=256w&id=-ksYluJgPFRQ&format=png" alt="" className=' w-5 min-w-5' />
           <p className='absolute right-[-5px] bottom-[0px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

          </Link>
          <img onClick={()=>setvisible(true)} src="	https://cdn-icons-png.flaticon.com/512/12314/12314153.png" alt="menu icon" className='w-5 cursor-pointer  sm:hidden ' />
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
            {/* sidebar menu */}
            <div className='flex flex-col text-gray-600 border '>
                <div onClick={()=>setvisible(false)} className='flex item-center text-center gap-4 p-3 cursor-pointer'>
                    <img  src="https://img.icons8.com/?size=256w&id=15811&format=png" alt="drop down menu icon" className='w-4' />
                    <p >Back</p>
                </div>
                <NavLink to='/'  className='py-2 px-6 border border-b text-center'>Home</NavLink>
            <NavLink to='/collection'  className='py-2 px-6 border border-b text-center'>Collection</NavLink>
            <NavLink to='/about' className='py-2 px-6 border border-b text-center' >About</NavLink>
            <NavLink to='/contact' className='py-2 px-6 border-none text-center'>Contact</NavLink>

            </div>

        </div>
    </div>
  )
}

export default Navbar