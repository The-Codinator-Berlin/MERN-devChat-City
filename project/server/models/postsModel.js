import mongoose from "mongoose";


const postsSchema = new mongoose.Schema({

    heading: {
        type: String,
        required: true,
        unique: false
    },

    body: {
        type: String,
        required: true,
        unique: false
    },

    coding_language: {
        type: String,
        required: true,
        unique: false
    },

    user_name: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String,
        required: false,
        unique: false
    },

    likes: {
        type: Number,
        required: false,
        unique: false
    },

    when_posted: {
        type: Timestamp,
        required: true,
        unique: false
    },

    comments: [{

        comment: {
            type: string,
            required: false,
            unique: false,
        },


        author: {
            type: String,
            required: true,
            unique: true,
        },

        image: {
            type: String,
            required: false,
            unique: false,
        },
    },]

});

const postsModel = mongoose.model("post", postsSchema);

export default postsModel;