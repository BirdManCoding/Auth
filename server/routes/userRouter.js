import { Router } from "express";

import {registerUser, loginUser} from "../controllers/userController.js"
import {userValidator} from "../middlewares/userValidation.js"

const router = Router();

// @route   POST /api/users/register
// @desc    User Register Route
// @access  Public
router.post("/register",userValidator ,registerUser)

// @route   POST /api/users/login
// @desc    User Login Route
// @access  Public
router.post("/login",userValidator ,loginUser)





export default router;