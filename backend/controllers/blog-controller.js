import Blog from "../model/Blog";

const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find({});
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ blogs });
};

const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ blog });
};

const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogid = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogid, {
      title,
      description,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ blog });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ blog });
};

const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndDelete(id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ message: "Blog deleted" });
};

export { getAllBlogs, addBlog, updateBlog, getById, deleteBlog };
