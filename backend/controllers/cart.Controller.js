import userModel from "../models/user.model.js"


//add products to  user cart
const addToCart =async(req,res)=>{
  try {
    
    const { userId,itemId,size }=req.body

    const  userData=await userModel.findById(userId)
    let cartData=await userData.cartData;

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1
        }
        else{

            cartData[itemId][size]=1
        }
    }else{
        cartData[itemId]={}
        cartData[itemId][size]=1
    }

    await userModel.findByIdAndUpdate(userId,{cartData})

    res.status(200).json({success:true,message:"Added to Cart"})


  } catch (error) {
    console.log(error)
    res.status(400).json({success:false,message:error.message})
  }
};

//update products to  user cart
const updateCart=async(req,res)=>{


    try {
        
        const {userId,itemId,size,quantity}=req.body

        const  userData=await userModel.findById(userId)
       let cartData=await userData.cartData;

       cartData[itemId][size]= quantity

       await userModel.findByIdAndUpdate(userId,{cartData})
       res.status(200).json({success:true,message:" Cart Data is Upadated"})

    } catch (error) {
        console.log(error)
       res.status(400).json({success:false,message:error.message})
    }

};
//getUser products to  user cart
const getUserCart=async(req,res)=>{
    
    try {
        
        const {userId}=req.body

        const  userData=await userModel.findById(userId)
       let cartData=await userData.cartData;

       res.status(200).json({success:true,cartData})

    } catch (error) {
        
        console.log(error)
        res.status(400).json({success:false,message:error.message})

    }

};

export {addToCart,updateCart,getUserCart}
