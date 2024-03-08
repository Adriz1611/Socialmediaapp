import User from "../model/User";
import bcrypt from "bcryptjs";

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find({});
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No user found" });
  }
  return res.status(200).json({ users });
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }
  if (existingUser) {
    return res.status(422).json({ message: "User already exists" });
  }
  const hashedPassword = bcrypt.hashSync(password);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ newUser });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }
  if (!existingUser) {
    return res.status(422).json({ message: "User not found" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(422).json({ message: "Invalid credentials" });
  }
  return res.status(200).json({ message: "Logged in" });
};

export { signup, getAllUser, login };
