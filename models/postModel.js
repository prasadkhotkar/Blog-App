// import mongoose

const mongoose=require("mongoose");

//route handler

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Likes"
    }],
    Comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    }],
})

//export
module.exports=mongoose.model("Post",postSchema);