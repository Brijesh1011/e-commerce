import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/product.model.js"

//function for add product

const addProduct=async (req,res)=>{
    try {
        
        const {name,description,price,category,subcategory,sizes,bestseller}=req.body

        const  image1=req.files.image1 && req.files.image1[0]
        const  image2=req.files.image2 && req.files.image2[0]
        const  image3=req.files.image3 && req.files.image3[0]
        const  image4=req.files.image4 && req.files.image4[0]
        
        const images=[image1,image2,image3,image4].filter((item)=>item !== undefined)


        let imagesUrl= await Promise.all(
            images.map(async(item)=>{
                let result =await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        // console.log(name,description,price,category,subCategory,sizes,bestseller)
        // console.log(imagesUrl)

        const productData={
            name,
            description,
            category,
            price:Number(price),
            bestseller:bestseller === 'true'? true :false,
            sizes: JSON.parse(sizes),
            subcategory,
            image:imagesUrl,
            
        }

        console.log(productData)

        const product = new productModel(productData);
        await product.save()

        res
        .status(200)
        .json({success:true,msg:'Poduct Added'})
        
    } catch (error) {
        console.log(error)
        res
        .status(400)
        .json({success:false,message:error.message,msg:'error in add product function'})
    }
}

//function for list product

const listProduct=async (req,res)=>{

    try {
        
        const products= await productModel.find({})
        res.json({success:true,products})

    } catch (error) {
        console.log(error)
        res
        .status(400)
        .json({success:false,message:error.message,msg:'error in list product function'})
    }

}

//function for remove product

const removeProduct=async (req,res)=>{

      try {
        
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"product remove"})

      } catch (error) {
        res
        .status(400)
        .json({success:false,message:error.message,msg:'error in remove product function'})
      }

}

//function for single product info

const  singleProduct=async (req,res)=>{
 
     try {
        const { productId } =req.body
        const product= await productModel.findById(productId)

        if(!product){
            return res.status(400).json({success:false,message:"productId is not in list"})
        }
        
         res.json({success:true,message:"product info is ready",product})

     } catch (error) {
        res
        .status(400)
        .json({success:false,message:error.message,msg:'error in single product info function'})
     }

}


export {addProduct,listProduct,removeProduct,singleProduct}