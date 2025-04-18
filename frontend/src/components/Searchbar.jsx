import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'

function Searchbar() {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const location=useLocation();
    const [visible, setvisible] = useState(false)
    useEffect(() => {
      if(location.pathname.includes('collection')){
       setvisible(true)
      }else{
        setvisible(false)
      }
    }, [location])
    
    
  return showSearch && visible ?(
    <div className='border-t border-t-gray-50 border-b-gray-200 border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search'  className='flex-1 outline-none bg-inherit text-sm'/>
          <img className='w-4' src="https://img.icons8.com/?size=256&id=59878&format=png" alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src="https://img.icons8.com/?size=256w&id=95867&format=png" alt="" />
    </div>
  ):null
}

export default Searchbar