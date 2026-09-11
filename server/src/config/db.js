import mongoose from "mongoose";
import config from "./config.js";
const connectDB =async ()=>{
    try {
       await mongoose.connect(config.Uri)
       console.log("db connected");
       
    } catch (error) {
        console.log('error->',error)
    }
}

export default connectDB