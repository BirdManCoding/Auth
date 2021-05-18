import HttpError from "../models/HttpError.js";
import Post from "../models/PostModel.js";


export const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});

        if(!posts || posts.length === 0){
            next(new HttpError("No posts where found", 404));
        }

        res.json(posts)
    }catch(err){
        next(new HttpError())
    }
}

export const createPost = async (req, res, next) => {
    try {
       const {title, content} = req.body;

       const newPost = new Post({title, content});
       await newPost.save();

       res.json({message: "Post created successfully", newPost})
    }catch(err){
        next(new HttpError())
    }
}
