const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/ErrorResponse');
// new user Signup
const signUp = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      throw new ErrorResponse('User already exists', 400);
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
    next(error);
    // res.status(500).send(error.message);
  }
};

// user login
const signIn = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const matchUser = await User.findOne({ email }).select('+password');
    if (matchUser) {
      console.log(matchUser);
      const matchPassword = await bcrypt.compare(password, matchUser.password);
      console.log(password);
      console.log(matchUser.password);
      console.log(matchPassword);
      if (matchPassword) {
        const payload = {
          email: matchUser.email,
          id: matchUser._id,
          name: matchUser.name,
        };
        console.log(process.env.JWT_SECRET);

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: '800000s',
        });
        res
          .cookie('access_token', token, {
            maxAge: 1000 * 2000,
          })
          .json(payload);
      } else {
        throw new ErrorResponse('Incorrect password', 401);
      }
    } else {
      throw new ErrorResponse('User does not exist', 404);
    }
  } catch (error) {
    next(error);
  }
};

// user logout
const logOut = async (req, res, next) => {
  try {
    res
      .cookie('access_token', '', { maxAge: 0 })
      .end('You have been logged out successfully!');
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const userProfile = await User.findById(id);
    res.json(userProfile);
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, signIn, logOut, getProfile };
