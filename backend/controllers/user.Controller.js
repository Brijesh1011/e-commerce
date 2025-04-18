import userModel from "../models/user.model.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";




const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser=async(req,res)=>{
    
    try {
        
        const {email,password}= req.body;

        const user= await userModel.findOne({email});

        if(!user){
            return res
            .status(404)
            .json({status:false,message:"User is not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
           const token=createToken(user._id)
           res
           .status(200)
           .json({success:true,token}) 
        }else{
            res
            .status(400)
            .json({success:false,message:"Inavlid credentials"})   
        }

    } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({success:false,message:"error in login user function",meg:error.message})
    }

}


const registerUser=async(req,res)=>{
 
    try{
      
       const {name,email,password}=req.body;
       
       const exists =await userModel.findOne({email})
       if(exists){
        return res
        .status(400)
        .json({success:false,message:"User already exists"})
       }

       if(!validator.isEmail(email)){
        return res
        .status(401)
        .json({success:false,message:"please enter valid email"})
       }
       if(password.length < 8){
        return res
        .status(402)
        .json({success:false,message:"please enter strong Password"})
       }
         // hash password
       const salt=await bcrypt.genSalt(10)
       const hashedPassword=await bcrypt.hash(password,salt)

       const newUser=new userModel({
        name,
        email,
        password:hashedPassword
       })
       const user= await newUser.save()
       const token = createToken(user._id)

       res
       .status(200)
       .json({success:true,token})

    }catch(error){
        console.log(error);
        res
        .status(500)
        .json({success:false,message:"error in register user function"})
    }

}

const logoutUser=async()=>{

}
const adminLogin=async(req,res)=>{

    try {
        
        const {email,password} =req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token =await jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true , token})
        }else{
            res.status(400).json({success:false,message:"Invalid credentials"})
        }


    } catch (error) {
        console.log(error)
        res.status(400).json({success:false,message:"admin login fuc problem"})
    }

}

export {loginUser,registerUser,logoutUser,adminLogin}