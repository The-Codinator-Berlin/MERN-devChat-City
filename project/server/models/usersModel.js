import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: false,
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

    userName: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: false
    },

    avatar: {
        type: String,
        required: false,
        unique: false
    },

    postsArr: { type: mongoose.Schema.Types.ObjectId, ref: "post" },

});

const usersModel = mongoose.model("user", userSchema);

export default usersModel;