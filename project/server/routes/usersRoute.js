import express from "express";
import { getAllUsers } from "../controller/usersController.js";

const userRoutes = express.Router();

userRoutes.get("/all", getAllUsers);

export default userRoutes;
