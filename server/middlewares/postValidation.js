import {check, validationResult} from 'express-validator'
import HttpError from "../models/HttpError.js"


export const userValidator = [
    check("title").isString().trim().notEmpty().isLength({min: 3, max: 25}),
    check("content").isString().trim().notEmpty().isLength({min: 10, max: 500}),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return next(new HttpError("Invalid inputs passed", 422))
        }
        next();
    }
]