import express from "express";
import {
  getAllUsers,
  loginUser,
  registerUser,
  getUserProfile,
} from "../controller/usersController.js";
import { imageUpload } from "../controller/usersController.js";
import multerUpload from "../middleware/multer.js";

const userRoute = express.Router();

//Get requests to MongoDB
userRoute.get("/all", getAllUsers);
userRoute.get("/userProfile", getUserProfile);

//Post requests to MongoDB
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.post("/imageUpload", multerUpload.single("image"), imageUpload);

export default userRoute;
