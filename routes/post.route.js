import express from "express";
import {
  createPost,
  findPostById,
  getAllPost,
  updateByIdPost,
  deleteById,
} from "../controller/post.controller.js";

const router = express.Router();
router.post("/posts", createPost);
router.get("/posts/:id", findPostById);
router.get("/all", getAllPost);
router.put("/post/:id", updateByIdPost);
router.delete("/postd/:id", deleteById);

export default router;
