import jwt from "jsonwebtoken"

import HttpError from "../models/HttpError.js"

export function isAuth(req, res, next) {
    try{
        const token = req.cookies.token;

        const verified = jwt.verify(token, process.env.JWT_SECRET)

        if(!token || !verified) return next(new HttpError("Unauthorized", 401));

        req.user = verified.user;
        next()

    }catch(err){
        next(new HttpError("Unauthorized", 401))
    }
}