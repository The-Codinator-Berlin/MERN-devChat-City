import express from "express";
import postsModel from "../models/postsModel.js";
import { getAllPosts } from "../controller/postsController.js";
const router = express.Router();

router.get("/all", getAllPosts);

export default router;
