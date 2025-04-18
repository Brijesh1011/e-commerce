import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Adjust the import path as necessary

const CheckoutButton = () => {
    const { navigatehook } = useContext(ShopContext); // Access the navigate function from context

    return (
        <div className='w-full text-end'>
            <button 
                onClick={() => navigatehook('/place-order')} 
                className='bg-black text-white text-sm my-8 px-8 py-3'
            >
                PROCEED TO CHECKOUT
            </button>
        </div>
    );
};

export default CheckoutButton;