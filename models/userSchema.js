const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    requires: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
