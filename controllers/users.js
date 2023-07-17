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

const signIn = async (req, res) => {};

const logout = async (req, res) => {};

module.exports = { signUp, signIn, logout };
