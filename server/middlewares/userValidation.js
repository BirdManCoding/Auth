import {check, validationResult} from 'express-validator'
import HttpError from "../models/HttpError.js"


export const userValidator = [
    check("email").isEmail().normalizeEmail(),
    check("password").isString().trim().notEmpty().isLength({min: 6}),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return next(new HttpError("Invalid inputs passed", 422))
        }
        next();
    }
]