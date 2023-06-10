import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    github: {
        type: String,
        required: false,
        unique: true
    },

    user_name: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: false
    },

});

const usersModel = mongoose.model("user", userSchema);

export default usersModel;