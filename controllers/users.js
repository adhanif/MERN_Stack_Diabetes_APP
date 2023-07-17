const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

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
          .cookie("access token", token, {
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

const logOut = async (req, res) => {};

module.exports = { signUp, signIn, logOut };
