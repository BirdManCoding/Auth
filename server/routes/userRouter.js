import { Router } from "express";

import {registerUser, loginUser, logoutUser, isLoggedIn} from "../controllers/userController.js"
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

// @route   GET /api/users/logout
// @desc    User Logout Route
// @access  Public
router.get("/logout" ,logoutUser)

// @route   GET /api/users/loggedIn
// @desc    Checks if user loggedIn
// @access  Public
router.get("/loggedIn" , isLoggedIn)




export default router;