import { Router } from "express";

import {getPosts, createPost} from "../controllers/postController.js"
import {userValidator} from "../middlewares/postValidation.js"
import {isAuth} from "../middlewares/isAuth.js"

const router = Router();


// @route   get /api/posts
// @desc    Get all Blog Posts
// @access  Public
router.get("/", getPosts)

// @route   post /api/posts
// @desc    Create a new Blog Post
// @access  Private
router.post("/", userValidator, isAuth ,createPost)






export default router;