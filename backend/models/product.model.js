import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
     name:{
        type:String,
        require:true
     },
     description:{
        type:String,
        require:true
     },
     price:{
        type:Number,
        require:true
     },
     image:{
        type:Array,
        require:true
     },
     category:{
        type:String,
        require:true
     },
     subcategory:{
        type:String,
        require:true
     },
     sizes:{
        type:Array,
        require:true
     },
     bestseller:{
        type:Boolean
     }
},{timestamps:true})

const productModel=mongoose.model("productModel",productSchema) 

export default productModel
