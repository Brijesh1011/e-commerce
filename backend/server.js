import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectdb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/user.router.js"
import productRouter from "./routes/product.router.js"
import cartRouter from "./routes/cart.router.js"
import orderRouter from "./routes/order.router.js"

//App config
const app=express()
const port =process.env.PORT || 4000
connectdb()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//Api endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
  res.send("Api working")
})

app.listen(port,()=>{
    console.log("server is ready to satrt on port: ",port)
})