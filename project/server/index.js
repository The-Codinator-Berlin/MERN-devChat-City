import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import postsRoute from "./routes/postsRoute.js"
import usersRoute from "./routes/usersRoute.js"

dotenv.config();

const app = express();

const addMiddleware = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
};

const startServer = () => {
  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    console.log("Server is running on port" + port);
  });
};

const loadRoutes = () => {
  app.use("/api/devChat-City/posts", postsRoute);
  app.use("/api/devChat-City/users", usersRoute);
};

const connectMongoDB = async () => {
  await mongoose.connect(process.env.DB);
  console.log("MongoDB is running!");
};

(async function controller() {
  await connectMongoDB();
  addMiddleware();
  loadRoutes();
  startServer();
})();
