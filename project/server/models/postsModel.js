import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

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

    codingLanguage: {
        type: String,
        required: true,
        unique: false
    },

    author: {
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

    postedWhen: {
        type: String,
        required: true,
        unique: false
    },

    comments: [{

        comment: {
            type: String,
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

const postsModel = mongoose.model("post", postSchema);

export default postsModel;