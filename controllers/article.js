const Article = require("../models/articleSchema");

const addArticle = async (req, res, next) => {
  try {
    // console.log(req.body)
    const { image, title, tags, text, textSum, author, updated } = req.body;
    console.log(req.body)
    const article = await Article.create({
      image,
      title,
      tags,
      text,
      textSum, 
      author,
      updated,
    });
    console.log(article);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({}).populate("author");
    res.json(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getArticle = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id, "HELLO");
    const article = await Article.findById(id).populate("author");
    // const article = await Article.findOne({_id: id});

    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addArticle,
  getArticle,
  getAllArticles,
};
