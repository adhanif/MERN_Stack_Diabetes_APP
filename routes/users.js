const express = require("express");
const userRouter = express.Router();
const { signUp, signIn, logOut } = require("../controllers/users");

userRouter.post("/signup", signUp);
userRouter.post("/login", signIn);
userRouter.post("/logout", logOut);

//
module.exports = { userRouter };
