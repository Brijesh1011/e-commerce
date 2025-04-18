import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Verify() {

    const {navigatehook,backendUrl,token,setCartItems}=useContext(ShopContext)
    const[searchParam,setSearchParam]=useSearchParams()

    const success=searchParam.get('success')
    const orderId=searchParam.get('orderId')

    const verifyPayment=async()=>{
        try {
            
            if(!token){
                return null
            }
            const response=await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}})
            if(response.data.success){
                setCartItems({})
                navigatehook('/orders')
            }else{
                navigatehook('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(()=>{
     verifyPayment()
    },[token])

  return (
    <div>
        
    </div>
  )
}

export default Verify