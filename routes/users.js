const express = require("express");
const userRouter = express.Router();
const { signUp } = require("../controllers/users");

userRouter.post("/signup", signUp);
userRouter.post("/signIn", signUp);
userRouter.post("/logout", signUp);

//
module.exports = { userRouter };
