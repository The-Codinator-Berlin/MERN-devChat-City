import express from "express";
import { getAllPosts, getPostsByCodingLanguage } from "../controller/postsController.js";

const PostsRoute = express.Router();

PostsRoute.get("/all", getAllPosts);
PostsRoute.get("/:codingLanguage", getPostsByCodingLanguage);


export default PostsRoute;
