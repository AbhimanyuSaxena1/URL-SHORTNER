import generateCode from "../config/generateCode.js";
import urlModel from "../models/url.model.js";

export const deleteUrlController = async (req,res)=>{
    const {id} = req.params
    await urlModel.findByIdAndDelete(id)
    res.status(204).json({
        success:true,
        message:"URL deleted successfully"
    })
} 

export const createUrlController = async (req,res)=>{
    const {url} = req.body
    if(!url){
        res.status(401).json({error:"Please enter a URL"})
    }
    if((url.startsWith('http://')==false) && (url.startsWith('https://')==false)){
        res.status(401).json({error:"Please enter a valid URL"})
    }
    if(url.length>2048){
        res.status(401).json({error:"URL Too Long"})
    }
    const code = generateCode(6) // 6 is the length of the code generated
    await urlModel.create({
        url,
        code
    })
    console.log('created')
    res.status(201).json({
        message:"url shortened",
        code,
    })
}

export const redirectUrlController = async(req,res)=>{
    const {code} = req.params
    
    const url =await urlModel.findOne({code})
    await urlModel.findOneAndUpdate({code},{
        $inc:({clicks:1})
    })
    res.status(302) .redirect(url.url)
    
}

export const getAllUrlController = async (req,res)=>{
    const urls =await urlModel.find()
    res.status(200).json({
        urls
    })
}