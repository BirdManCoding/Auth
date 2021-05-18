import mongoose from "mongoose";

import HttpError from "../models/HttpError.js";
import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";


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

       const newPost = new Post({title, content, creator: req.user});
       const user = await User.findById(req.user);
       user.posts.push(newPost.id);

       const session = await mongoose.startSession();
       session.startTransaction();
       await newPost.save({session});
       await user.save({session});
       await session.commitTransaction();

       res.json({message: "Post created successfully", newPost})
    }catch(err){
        next(new HttpError(err))
    }
}
