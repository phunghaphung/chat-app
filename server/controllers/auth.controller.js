import User from "../models/user.model.js";
import { createUserAvatar } from "../services/user.service.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// @desc Post login one user
// @route POST /api/auth/login
// @access Public
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password || ""
  );

  if (!user || !isPasswordCorrect) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  generateTokenAndSetCookie(user._id, res);

  return res.status(200).json({
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
    profilePic: user.profilePic,
  });
};

// @desc Post signup one user
// @route POST /api/auth/signup
// @access Public
export const signupUser = async (req, res) => {
  const { fullname, username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    return res.status(400).json({ error: "Username already existed." });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const profilePic = createUserAvatar(username);

  const newUser = await User({
    fullname,
    username,
    password: hashedPassword,
    profilePic,
  });

  if (newUser) {
    // generate jwt token
    await generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    return res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } else {
    return res.status(400).json({ error: "Invalid user data" });
  }
};

// @desc Get logout one user
// @route POST /api/auth/logout
// @access Public
export const logoutUser = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out successfully" });
};
