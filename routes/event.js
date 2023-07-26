const express = require("express");

const {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
} = require("../controllers/event");

const upload = require("../middlewares/multer-upload");
const { cloudinaryUpload } = require("../middlewares/cloudinary-upload");

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.get("/id", getEvent);
eventRouter.post("/", upload.single("image"), cloudinaryUpload, addEvent);
eventRouter.delete("/id", deleteEvent);

module.exports = { eventRouter };
