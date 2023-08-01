const express = require("express");
const articleRouter = express.Router();
const {verifyToken} = require("../middlewares/verifyToken");
//const upload = require("../middlewares/multer-upload");
//const { cloudinaryUpload } = require("../middlewares/cloudinary-upload");

const {
  addArticle,
  getArticle,
  getAllArticles
} = require("../controllers/article");

const {
  addComment,
  getComment,
  getAllComments
} = require("../controllers/articleComment");

articleRouter.get("/", getAllArticles);
articleRouter.get("/:id", getArticle);
// articleRouter.post("/", upload.single("image"), cloudinaryUpload, addArticle);
articleRouter.post("/", addArticle);

articleRouter.get("/comments/:id", getComment);
articleRouter.get("/:id/comments", getAllComments)
articleRouter.post("/comments", verifyToken, addComment);

module.exports = { articleRouter };
