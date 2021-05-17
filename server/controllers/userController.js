import mongoose from "mongoose";
import bcrypt from "bcrypt";

import User from "../models/UserModel.js";
import HttpError from "../models/HttpError.js";


export const registerUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const existingUser = await User.findOne({email: email})
        if (existingUser) {
            return next(new HttpError("User already exists", 422))
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const createdUser = new User({email, passwordHash})
        createdUser.save();

        res.status(201).json({message: "user created"})
    }catch(err){
        next(new HttpError())
    }
}

export const loginUser = async (req, res, next) => {
    try {
        res.status(201).json({message: "user login"})
    }catch(err){
        next(new HttpError())
    }
}