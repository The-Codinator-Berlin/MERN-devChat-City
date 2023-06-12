import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
dotenv.config();

const cloudinaryConfig = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.SECRET,
        secure: true
    });
    console.log('process.env.CLOUD_NAME :>> ', process.env.API_KEY);

};

export default cloudinaryConfig;