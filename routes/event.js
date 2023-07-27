const express = require("express");
const eventRouter = express.Router();
const { eventQuery } = require("../middlewares/eventQuery");
const {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  getNextEvents,
  getNearByEvents,
} = require("../controllers/event");

eventRouter.get("/", eventQuery,  getAllEvents);
// eventRouter.get("/near-by", eventQuery, getNearByEvents);
eventRouter.get("/id", getEvent);
eventRouter.post("/create", addEvent);
eventRouter.delete("/id", deleteEvent);
//Elvis routes for footer
eventRouter.get("/next/:amount", getNextEvents);

module.exports = { eventRouter };
