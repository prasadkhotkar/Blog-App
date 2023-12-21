const post=require("../models/postModel");

exports.createPost=async (req,res)=>
{
    try{
        const{title,body}=req.body;
        const post=new post({
            title,body,
        });

        const savedPost=await post.save();

        res.json({
            post:savedPost,
        });
   }
    catch(error){
        return res.send.status(400).json({
            error:"Error while creating post",
        });
    }
};

exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await post.find().populate("likes").populate("Comments").exec();

        res.json({
        posts,
        })
    }
    
    catch(error){
        return res.status(400).json({
            error:"Error while fetching post",
        });
    }
}