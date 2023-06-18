import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passportStrategy from "./config/passportConfig.js";
import cloudinaryConfig from "./config/cloudinary.js";
import passport from "passport";
import * as dotenv from "dotenv";
dotenv.config();
import postsRoute from "./routes/postsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import usersModel from "./models/usersModel.js";
usersModel;

const app = express();

const addMiddleware = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  cloudinaryConfig();
  passportStrategy(passport);
};

const startServer = () => {
  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    console.log("\u001b[36m" + "Server is running on port" + port);
  });
};

const loadRoutes = () => {
  app.use("/api/devChat-City/posts", postsRoute);
  app.use("/api/devChat-City/users", usersRoute);
};

const connectMongoDB = async () => {
  await mongoose.connect(process.env.DB);
  console.log("\u001b[35m" + "MongoDB is running!");
};

(async function controller() {
  await connectMongoDB();
  addMiddleware();
  loadRoutes();
  startServer();
})();
