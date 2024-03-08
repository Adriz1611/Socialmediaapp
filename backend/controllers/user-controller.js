import User from "../model/User";

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

  const newUser = new User({
    name,
    email,
    password,
  });
  try {
    await newUser.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ newUser });
};

export { signup, getAllUser };
