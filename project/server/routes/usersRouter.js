import express from "express";
import usersModel from "../models/usersModel.js";
import { getAllUsers } from "../controller/usersController.js";
const router = express.Router();

router.get("/all", getAllUsers);

export default router;
