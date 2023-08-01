const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    },
  tags: {
    type: [String],
    required: true,
  },
  text: {
    type: [Object],
    //required: true,
  },
  textSum: {
    type: String,
    //required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updated: {
    type: Date,
    required: true,
  }
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
