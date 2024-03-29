import mongoose from "mongoose";
import authenticateJwt from "../middleware/jwtAuth.js";
import postsModel from "../models/postsModel.js";
import { v2 as cloudinary } from "cloudinary";

const getAllPosts = async (request, response) => {
  try {
    const allPosts = await postsModel
      .find({})
      .populate({ path: "userWhoPosted", select: ["userName"] });
    response.status(200).json({
      allPosts,
      number: allPosts.length,
      operationSuccess:
        "You are seeing a display of all the posts in devChat-City",
    });
    console.log("Successfully fetched, status 200 :>> ", response);
  } catch (error) {
    response.status(500).json({
      errorMessage: "There was a error when trying trying to fetch this data!",
    });
    console.log("Error status 500, could not fetch data :>> ", error);
  }
};

const getPostsByCodingLanguage = async (request, response) => {
  try {
    const requestedPostsByCodingLanguage = await postsModel.find({
      codingLanguage: request.params.codingLanguage,
    });
    console.log(
      "requestedPostsByCodingLanguage :>>>>>>>> ",
      requestedPostsByCodingLanguage
    );
    if (requestedPostsByCodingLanguage.length === 0) {
      response.status(201).json({
        message:
          "Sorry there are no posts matching the coding language you are looking for!",
      });
    } else {
      response.status(200).json({
        requestedPostsByCodingLanguage,
        number: requestedPostsByCodingLanguage.length,
      });
    }
  } catch (error) {
    response.status(500).json({
      errorMessage: "There was a error when trying trying to fetch this data!",
    });
    console.log("Error status 500, could not fetch data :>> ", error);
  }
};

const screenshotUpload = async (request, response) => {
  //NOTE - Upload image
  if (request.file) {
    try {
      const uploadScreenshotToCloud = await cloudinary.uploader.upload(
        request.file.path,
        {
          folder: "devChat-City_posts_images",
        }
      );
      response.status(200).json({
        message: "Your screenshot has been uploaded successfully",
        image: uploadScreenshotToCloud.secure_url,
      });
      console.log("\u001b[37m" + "File uploaded successfully!");
    } catch (error) {
      console.log("\u001B[31m", error);
    }
  } else {
    //NOTE - 415 refers to wrong format attemting to be uploaded
    response.status(415).json({
      message:
        "\u001B[31m" +
        "Sorry but this file type is not supported! !status 415!)",
    });
    console.log("File not supported!");
  }
};

const createNewPost = async (request, response) => {
  console.log("request.user :>>>>> ", request.user);

  if (request.body) {
    const newPost = new postsModel({
      heading: request.body.heading,
      body: request.body.body,
      codingLanguage: request.body.codingLanguage,
      topic: request.body.topic,
      image: request.body.image,
      userWhoPosted: request.user._id,
    });
    try {
      //NOTE - 200 refers to a successful response
      const savedNewPost = await newPost.save();
      response.status(200).json({
        message:
          "The post information has been successfully saved to the database!",
        savedNewPost,
      });
      console.log("savedNewPost :>> ", savedNewPost);
    } catch (error) {
      console.log("\u001B[31m" + "Error saving new post!", error);
    }
  } else {
    console.log("Not information in the request!");
    //NOTE - 500 refers to general error of process

    response.status(406).json({
      errorMessage: "There was an error in creating and saving the post!",
    });
  }
};

const deletePost = async (request, response) => {
  console.log("request.body :>> ", request.body);
  const postId = request.params.id;
  console.log("postId :>> ", postId);

  try {
    const post = await postsModel.findByIdAndDelete(postId);
    console.log("post :>> ", post);

    if (!post) {
      return response.status(404).json({ error: "Error deleting post" });
    }
    //NOTE this block would work if instead of findByIdAndDelete, we would 1st do
    //findOne / findById, finding the post, and then checking user and author and deleting with postModel.DeleteOne({ _id: postId })
    //   // post.delete
    // if (post.userWhoPosted !== userId)
    //   return response.status(403).json({ error: "Unauthorized access" });
    // }

    return response.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Server error deleting post" });
  }
};

export {
  getAllPosts,
  getPostsByCodingLanguage,
  screenshotUpload,
  createNewPost,
  deletePost,
};
