import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-32 text-sm '>
        <div>
        <span className='text-3xl font-bold'> <Link to='/'> SWiFt MArT</Link></span>
        <p className='w-full md:w-2/3  text-gray-600 mt-4'>Lorem ipsum dolor sit amet,omnis aliquam quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ab iste suscipit ipsa sunt. Consequatur, iste, ducimus voluptatum nemo numquam vitae odit voluptatem dolores nobis quasi eos vel harum voluptas.
        Sint obcaecati atque </p></div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contect@swiftmart.com</li>
                
            </ul>
        </div>
        </div>
        <div className='flex flex-col  '>
            <hr className='border border-solid border-gray-100 sm:border-gray-200'/>
            <p className='py-2 sm:py-5 text-sm text-center text-gray-600'>Copyright 2025@ swiftmart.com -All Right Reserved</p>
        </div>

    
    </div>
  )
}

export default Footer