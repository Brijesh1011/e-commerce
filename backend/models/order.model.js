import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    userId:{
      type:String,
      require:true
    },
    items:{
      type:Array,
      require:true
    },
    amount:{
      type:Number,
      require:true
    },
    address:{
      type:Object,
      require:true
    },
    status:{
      type:String,
      require:true,
      default:'Order Placed'
    },
    paymentMethod:{
      type:String,
      require:true
    },
    payment:{
      type:Boolean,
      require:true,
      default:false
    }
},{timestamps:true})


const orderModel=mongoose.model("orderModel",orderSchema)

export default orderModel