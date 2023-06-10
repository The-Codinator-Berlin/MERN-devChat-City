import express from "express";
import postsModel from "../models/postsModel.js";
const router = express.Router();

router.get("/all", async (request, response) => {
  // response.send("You are recieving all of the posts!");
  const allPosts = await postsModel.find({});
  response.json({
    allPosts
  })
});

export default router;
