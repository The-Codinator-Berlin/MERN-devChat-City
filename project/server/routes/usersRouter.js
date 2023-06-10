import express from "express";
import usersModel from "../models/usersModel.js";
const router = express.Router();

router.get("/all", async (request, response) => {

    try {
        const allUsers = await usersModel.find({});
        response.status(200).json({
            allUsers,
            number: allUsers.length,
            operationSuccess: "You are seeing a display of all the users in devChat-City"
        })
    } catch (error) {
        response.status(500).json({
            errorMessage: "There was a error when trying trying to fetch the users data!"
        })
        console.log('Error status 500, could not fetch users data :>> ', error);
    }

});

export default router;
