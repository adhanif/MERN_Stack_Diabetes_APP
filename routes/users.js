const express = require('express');
const userRouter = express.Router();
const upload = require('../middlewares/multer-upload');
const { cloudinaryUpload } = require('../middlewares/cloudinary-upload');

const {
  signUp,
  signIn,
  logOut,
  getProfile,
  setProfilePicture,
} = require('../controllers/users');
const { verifyToken } = require('../middlewares/verifyToken');

userRouter.post('/signup', signUp);
userRouter.post('/login', signIn);
userRouter.post('/logout', logOut);
userRouter.get('/profile', verifyToken, getProfile);
userRouter.post(
  '/profile',
  verifyToken,
  upload.single('image'),
  cloudinaryUpload,
  setProfilePicture
);

//
module.exports = { userRouter };
