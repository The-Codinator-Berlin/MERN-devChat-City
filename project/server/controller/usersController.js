import usersModel from "../models/usersModel.js";
import { v2 as cloudinary } from "cloudinary";
import { hashedPassword } from "../utilities/encryptPassword.js";

const getAllUsers = async (request, response) => {
    try {
        const allUsers = await usersModel.find({}).populate({ path: "postsArr" });
        response.status(200).json({
            allUsers,
            number: allUsers.length,
            operationSuccess:
                "You are seeing a display of all the users in devChat-City",
        });
    } catch (error) {
        response.status(500).json({
            errorMessage:
                "There was a error when trying trying to fetch the users data!",
        });
        console.log(
            "\u001B[31m" + "Error status 500, could not fetch users data :>> ",
            error
        );
    }
};

const imageUpload = async (request, response) => {
    //NOTE - Upload image
    if (request.file) {
        try {
            const uploadImage = await cloudinary.uploader.upload(request.file.path, {
                folder: "devChat-City_imageUpload",
            });
            response.status(200).json({
                message: "Your file has been uploaded successfully",
                avatar: uploadImage.secure_url,
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

const registerUser = async (request, response) => {
    console.log("request.body :>> ", request.body);
    try {
        const existingUser = await usersModel.findOne({
            email: request.body.email,
        });
        if (!existingUser) {
            try {
                const encryptPassword = await hashedPassword(request.body.password);
                if (encryptPassword) {
                    const newUser = new usersModel({
                        userName: request.body.userName,
                        email: request.body.email,
                        password: encryptPassword,
                        avatar: request.body.avatar,
                    });
                    try {
                        //NOTE - 200 refers to a successful response
                        response.status(200).json({
                            message:
                                "The registration information has been successfully saved to the database!",
                            userName: savedNewUser.userName,
                            email: savedNewUser.email,
                            password: savedNewUser.password,
                            avatar: savedNewUser.avatar,
                        });
                        console.log("savedNewUser :>> ", savedNewUser);
                    } catch (error) {
                        console.log("\u001B[31m" + "Error saving new user!", error);
                    }
                }
            } catch (error) {
                console.log(
                    "There was an error in registering and the registration has been unsuccessful! :>>",
                    error
                );
                //NOTE - 500 refers to general error of process

                response.status(500).json({
                    errorMessage:
                        "TThere was an error in registering and the registration has been unsuccessful!",
                });
            }
        } else {
            //NOTE - 409 refers to conflict of information 
            response.status(409).json({
                errorMessage:
                    "Sorry but there is already a registered account with that email address!",
            });
        }
    } catch (error) {
        console.log(
            "\u001B[31m" + "Unable to register user with this email address!",
            error
        );
    }
};

export { getAllUsers, imageUpload, registerUser };
