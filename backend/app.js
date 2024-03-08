import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://adrijbhadra:adrijbhadra@cluster0.dhelf4v.mongodb.net/Blog"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
