import express from "express";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
} from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/get/:id", getById);
blogRouter.delete("/delete/:id", deleteBlog);

export default blogRouter;
