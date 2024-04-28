import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";

import { getPosts, getFollowingPosts, getLikedPosts, getUserPosts, createPost, deletePost, commentOnPost, likeUnlikePost } from "../controllers/post.controller.js";

const router = express.Router()

router.get('/all', protectRoute, getPosts)
router.get('/following', protectRoute, getFollowingPosts)
router.get('/getLikedPosts/:id', protectRoute, getLikedPosts)
router.get('/posts/:username', protectRoute, getUserPosts)
router.post('/create', protectRoute, createPost)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.post("/comment/:id", protectRoute, commentOnPost)
router.delete('/delete/:id', protectRoute, deletePost)

export default router