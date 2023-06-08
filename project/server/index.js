import express from "express";
import cors from "cors";
import chatPosts from "../server/routes/chatPosts.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log("Server is running on port" + port);
});
console.log("Mongo DB credentials :>> ", process.env.DB);
app.use("/devChat-City", chatPosts);

const connectMongoDB = async () => {
  await mongoose.connect(process.env.DB);
  console.log("MongoDB is running!");
};
connectMongoDB();
