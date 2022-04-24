import express from "express";
import { getPosts } from "../../controllers/posts/postsController.js";
import { createPost } from "../../controllers/posts/postsController.js";
import { updatePost } from "../../controllers/posts/postsController.js";
import { deletePost } from "../../controllers/posts/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
