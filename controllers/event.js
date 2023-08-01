const { Event } = require("../models/event");
const EventComment = require("../models/eventCommentSchema");
// const geocoder = require('../utils/geocoder');
const fs = require("fs");
const addEvent = async (req, res, next) => {
  try {
    const {
      title,
      eventDate,
      time,
      creator,
      eventInfo,
      targetGroup,
      categories,
      image,
      location,
      address,
    } = req.body;

    participants = [];
    const newEvent = await Event.create({
      title,
      eventDate,
      creator,
      time,
      eventInfo,
      categories: JSON.parse(categories),
      targetGroup,
      image: req.file.secure_url,
      location: { type: "Point", coordinates: req.location.coordinates },
      city: req.location.city._id,
      participants,
      address,
    });

    fs.unlink(req.file.localPath, (err, res) => {});
    res.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
    console.log("error creating event");
    next(error);
  }
};

const deleteEvent = async (req, res) => {
  //TODO

  console.log("delete Event function called");
  return true;
};

const getAllEvents = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;

    const count = await Event.countDocuments(req.eventQuery);
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(count / limit);

    const events = await Event.find(req.eventQuery)
      .populate("city")
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    res.status(201).json({ page, totalPages, events });
  } catch (error) {
    next(error);
  }
  return true;
};

const getEvent = async (req, res, next) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

const getNextEvents = async (req, res, next) => {
  const { amount } = req.params;

  const date = new Date();

  try {
    //Get amounnt of events from Database

    // const events = await Event.find();
    const events = await Event.find({ eventDate: { $gte: date } })
      .sort({
        eventDate: 1,
      })
      .limit(amount);

    /*get with date string
    const dateString =
      '' +
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate();
    const events = await Event.find({ eventDate: { $gte: dateString } }).sort({
      eventDate: -1,
    };
    */

    if (events.length == 0) {
      res.status(201).json(["No upmcoming Events"]);
    } else {
      res.status(201).json(events);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getEventsOfUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const events = await Event.find({ creator: userId });
    res.status(201).json(events);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const addEventComment = async (req, res, next) => {
  const { comment } = req.body;
  const { id } = req.params;
  const { _id: userID } = req.user;

  try {
    const newComment = await EventComment.create({
      creater: userID,
      event: id,
      comment,
    });

    res.status(201).json({ ...newComment._doc, creater: req.user });
  } catch (error) {
    next(error);
  }
};

const getAllEventComments = async (req, res, next) => {
  const { id } = req.params;

  try {
    const comments = await EventComment.find({ event: id })
      .sort("-createdAt")
      .populate("creater");
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  getNextEvents,
  // getNearByEvents,
  addEventComment,
  getEventsOfUser,
  getAllEventComments,
};
