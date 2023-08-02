const Comment = require("../models/commentSchema");

const addComment = async (req, res, next) => {
  try {
    // console.log(req.body)
    const { text } = req.body;
    const { id } = req.params;

    const comment = await Comment.create({
      creator: req.user._id,
      article: id,
      text,
    });

    res.status(201).json({ ...comment._doc, creator: req.user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getComment = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id, "HELLO");
    const comment = await Comment.findById(id).populate("creator", "article");
    // const comment = await Article.findOne({_id: id});

    res.json(comment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllComments = async (req, res, next) => {
  console.log("hello");
  const { id } = req.params;
  try {
    const comments = await Comment.find({ article: id }).populate("creator");
    res.json(comments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addComment,
  getComment,
  getAllComments,
};
