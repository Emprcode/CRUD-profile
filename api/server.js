import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./src/routers/userRouter.js";
import { connectDB } from "./src/config/dbConfig.js";

const app = express();

const PORT = 8000;

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// db connection

connectDB();

// router

app.use("/users", userRouter);

app.use("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

// run node app in web server

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is running at http://localhost:${PORT}`);
});
