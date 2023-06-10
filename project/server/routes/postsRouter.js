import express from "express";
import postsModel from "../models/postsModel.js";
import { getAllPosts, getPostsByCodingLanguage } from "../controller/postsController.js";
const router = express.Router();

router.get("/all", getAllPosts);
router.get("/:codingLanguage", getPostsByCodingLanguage);


export default router;
