import express from "express";
import postsModel from "../models/postsModel.js";
const router = express.Router();

router.get("/all", async (request, response) => {
  // response.send("You are recieving all of the posts!");
  const allPosts = await postsModel.find({});
  response.status(200).json({
    allPosts,
    number: allPosts.length,
    description: "You are seeing all the posts that have been posted in devChat-City"
  })
});

export default router;
