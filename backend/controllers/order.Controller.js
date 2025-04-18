import orderModel from "../models/order.model.js"
import userModel from "../models/user.model.js"


import Stripe from 'stripe'

//goble var
const currency='inr'
const deliveryCharge=10

//gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


//cod method

const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            address,
            items,
            amount,
            paymentMethod: "COD",
            payment: false
        }

        const newOrder = new orderModel(orderData)

        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.status(200).json({ success: true, message: "Order Placed" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }

}


//Stipe method

const placeOrderStripe = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body

        const { origin } = req.headers

        const orderData = {
            userId,
            address,
            items,
            amount,
            paymentMethod: "COD",
            payment: false
        }
        const newOrder = new orderModel(orderData)

        await newOrder.save()

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
                
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charge'
                },
                unit_amount: deliveryCharge * 100
                
            },
            quantity: 1 
        })

        const session =await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment'
        })
        res.json({success:true,session_url:session.url});

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }

}

//verify stripe

const verifyStripe=async(req,res)=>{
    const {orderId,success,userId}=req.body
    try {
        
        if(success=== "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true,paymentMethod:"stripe"})
            await userModel.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true});
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}










//all order data for admin panel

const allOrders = async (req, res) => {

    try {

        const orders = await orderModel.find({})
        res.status(200).json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }

}


//user order data for front end

const userOrders = async (req, res) => {

    try {

        const { userId } = req.body;

        const orders = await orderModel.find({ userId })

        res.status(200).json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }

}

//update order status from admin panel

const updateStatus = async (req, res) => {

    try {

        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.status(200).json({ success: true, message: "Status updated" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }

}


export { placeOrder, placeOrderStripe,  allOrders, userOrders, updateStatus,verifyStripe }
