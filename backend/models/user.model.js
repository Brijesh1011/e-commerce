import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    cartData: {
        type: Object,
        default: {}
    }


}, { timestamps: true, minimize: false })

const  userModel=mongoose.model("userModel",userSchema)

export default userModel