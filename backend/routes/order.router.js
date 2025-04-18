import express from 'express'

import {placeOrder,placeOrderStripe,allOrders,userOrders,updateStatus,verifyStripe} from '../controllers/order.Controller.js'
import adminAuth from '../middleware/adminAuth.middleware.js'
import authUser from '../middleware/auth.js'

const orderRouter=express.Router()

//adminn feature

orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment method

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)


//user feature

orderRouter.post('/userorders',authUser,userOrders);

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)


export default orderRouter;

