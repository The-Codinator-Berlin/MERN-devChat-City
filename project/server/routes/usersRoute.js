import express from "express";
import { getAllUsers } from "../controller/usersController.js";
import { imageUpload } from "../controller/usersController.js"


const userRoute = express.Router();

userRoute.get("/all", getAllUsers);

userRoute.post("/imageUpload", imageUpload);

export default userRoute;
