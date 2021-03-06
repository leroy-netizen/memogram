import express from "express";
import { getPosts } from "../../controllers/posts/postsController.js";
import { createPost } from "../../controllers/posts/postsController.js";
import { updatePost } from "../../controllers/posts/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
