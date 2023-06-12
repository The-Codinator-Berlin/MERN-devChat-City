import express from "express";
import { getAllUsers } from "../controller/usersController.js";
import { imageUpload } from "../controller/usersController.js"
import multerUpload from "../middleware/multer.js";


const userRoute = express.Router();

userRoute.get("/all", getAllUsers);

userRoute.post("/imageUpload", multerUpload.single("image"), imageUpload);

export default userRoute;
