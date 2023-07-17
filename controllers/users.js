const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// new user Signup
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      throw new Error("User already exists");
    } else {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const createUser = await User.create({
        name,
        password: hashedPassword,
        email,
      });
      res.status(201).json(createUser);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// user login
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const matchUser = await User.findOne({ email }).select("+password");
    if (matchUser) {
      const matchPassword = await bcrypt.compare(password, matchUser.password);
      if (matchPassword) {
        const payload = { email: matchUser.email, id: matchUser._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "800000s",
        });
        res
          .cookie("access_token", token, {
            maxAge: 1000 * 2000,
          })
          .json(payload);
      } else {
        throw new Error("Incorrect password");
      }
    } else {
      throw new Error("User does not exist");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// user logout
const logOut = async (req, res) => {
  try {
    res
      .cookie("access_token", "", { maxAge: 0 })
      .end("You have been logged out successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const userProfile = await User.findById(id);
    res.json(userProfile);
  } catch (error) {
    res.status(500).send("Error retrieving user profile");
  }
};

module.exports = { signUp, signIn, logOut, getProfile };
