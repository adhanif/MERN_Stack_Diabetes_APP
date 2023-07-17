const express = require("express");
const userRouter = express.Router();
const { signUp, signIn, logOut, getProfile } = require("../controllers/users");
const { verifyToken } = require("../middlewares/verifyToken");

userRouter.post("/signup", signUp);
userRouter.post("/login", signIn);
userRouter.post("/logout", logOut);
userRouter.get("/profile", verifyToken, getProfile);

//
module.exports = { userRouter };
