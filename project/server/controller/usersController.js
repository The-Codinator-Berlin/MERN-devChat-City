import usersModel from "../models/usersModel.js";
import { v2 as cloudinary } from "cloudinary";


const getAllUsers = async (request, response) => {

    try {
        const allUsers = await usersModel.find({}).populate({ path: "postsArr" });
        response.status(200).json({
            allUsers,
            number: allUsers.length,
            operationSuccess: "You are seeing a display of all the users in devChat-City"
        })
    } catch (error) {
        response.status(500).json({
            errorMessage: "There was a error when trying trying to fetch the users data!"
        })
        console.log("\u001B[31m" + 'Error status 500, could not fetch users data :>> ', error);
    }

}

const imageUpload = async (request, response) => {
    //NOTE - Upload image
    if (request.file) {
        try {
            const uploadImage = await cloudinary.uploader.upload(request.file.path, {
                folder: "devChat-City_imageUpload",
            });
            response.status(200).json({
                message: "Your file has been uploaded successfully",
                avatar: uploadImage.url
            });
            console.log("File uploaded successfully!")
        } catch (error) {
            console.log("\u001B[31m", error);
        }
    } else {
        //NOTE - 415 refers to wrong format attemting to be uploaded
        response.status(415).json({
            message: "\u001B[31m" + "Sorry but this file type is not supported! !status 415!)"
        });
        console.log("File not supported!");
    };

};





export { getAllUsers, imageUpload, }; 