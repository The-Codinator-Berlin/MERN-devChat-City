import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    unique: false,
  },

  body: {
    type: String,
    required: true,
    unique: false,
  },

  codingLanguage: {
    type: String,
    required: true,
    unique: false,
  },

  topic: {
    type: String,
    required: true,
    unique: false,
  },

  whoPosted: {
    type: String,
    required: true,
    unique: false,
  },

  image: {
    type: String,
    required: false,
    unique: false,
  },

  likes: {
    type: Number,
    required: false,
    unique: false,
  },

  postedWhen: {
    type: String,
    required: false,
    unique: false,
  },

  comments: [
    {
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

      postedWhen: {
        type: String,
        required: false,
        unique: false,
      },
    },
  ],

  userWhoPosted: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const postsModel = mongoose.model("post", postSchema);

export default postsModel;
