import express from "express";
import { getPosts } from "../../controllers/posts/postsController.js";

const router = express.Router();

router.get("/", getPosts);

export default router;
