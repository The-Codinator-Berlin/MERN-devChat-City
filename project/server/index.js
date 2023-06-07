import express from "express";
import cors from "cors";

const app = express();

const router = express.Router();

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

app.use("/test", router);

router.get("/firstroute", (request, response) => {
  response.send("this is the first info sent by the server");
});
