import express from "express";
import postsModel from "../models/postsModel.js";
const router = express.Router();

router.get("/all", async (request, response) => {

  try {
    const allPosts = await postsModel.find({});
    response.status(200).json({
      allPosts,
      number: allPosts.length,
      operationSuccess: "You are seeing a display of all the posts in devChat-City"
    })
    console.log('Successfully fetched, status 200 :>> ', response);

  } catch (error) {
    response.status(500).json({
      errorMessage: "There was a error when trying trying to fetch this data!"
    })
    console.log('Error status 500, could not fetch data :>> ', error);
  }
});

export default router;
