import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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

        const token = jwt.sign({
            user: createdUser._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token, {httpOnly: true})
        res.status(201).json({message: "user created"})
    }catch(err){
        next(new HttpError())
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        const correctPassword = await bcrypt.compare(password, user.passwordHash)

        if(!correctPassword) return next(new HttpError("Wrong email or password", 401))


        const token = jwt.sign({
            user: user._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token, {httpOnly: true})
        res.status(201).json({message: "user loggedin"})

    }catch(err){
        next(new HttpError("Wrong email or password", 401))
    }
}

export const logoutUser = async (req, res, next) => {
    try {
        res.cookie("token", "", { httpOnly: true, expires: new Date(0)})
        res.json({message: "user logged out"})
    }catch(err){
        next(new HttpError("Wrong email or password", 401))
    }
}

export const isLoggedIn = async (req, res, next) => {
    try{
        const token = req.cookies.token;

        const verified = jwt.verify(token, process.env.JWT_SECRET)

        if(!token || !verified) return res.json(false)

        res.json(true)

    }catch(err){
        res.json(false)
    }
}