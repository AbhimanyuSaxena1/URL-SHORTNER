import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
        maxLength:2048,
        trim:true
    },
    code:{
        type:String,
        required:true,
        maxLength:6,
        
        unique:true
    },
    clicks:{
        type:Number,
        default:0,
        required:true
    }

},{timestamps:true})


const urlModel = mongoose.model('urls',urlSchema)

export default urlModel