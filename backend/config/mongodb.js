import mongoose from "mongoose";

const connectdb= async()=>{
   
    mongoose.connection.on('connected',()=>{
        console.log("DB is Connected")
    })
   await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`)

}
export default connectdb