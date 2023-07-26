import express from "express";
import {
  createNewPost,
  deletePost,
  getAllPosts,
  getPostsByCodingLanguage,
} from "../controller/postsController.js";
import authenticateJwt from "../middleware/jwtAuth.js";
import multerUpload from "../middleware/multer.js";
import { screenshotUpload } from "../controller/postsController.js";

const PostsRoute = express.Router();

PostsRoute.get("/all", getAllPosts);
PostsRoute.get("/:codingLanguage", authenticateJwt, getPostsByCodingLanguage);

PostsRoute.post(
  "/sendImage",
  authenticateJwt,
  multerUpload.single("image"),
  screenshotUpload
);

PostsRoute.post("/newPost", authenticateJwt, createNewPost);
PostsRoute.post("/deletePost/:id", authenticateJwt, deletePost);
export default PostsRoute;
