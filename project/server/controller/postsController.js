import authenticateJwt from "../middleware/jwtAuth.js";
import postsModel from "../models/postsModel.js";
import { v2 as cloudinary } from "cloudinary";

const getAllPosts = async (request, response) => {
  try {
    const allPosts = await postsModel
      .find({})
      .populate({ path: "userWhoPosted", select: "userId" });
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

export {
  getAllPosts,
  getPostsByCodingLanguage,
  screenshotUpload,
  createNewPost,
};
