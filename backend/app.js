import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://adrijbhadra:adrijbhadra@cluster0.dhelf4v.mongodb.net/Blog"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
