const Event = require('../models/event');

const addEvent = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, eventDate, creator, location } = req.body;
    //create Event
    participants = [];
    const newEvent = await Event.create({
      title,
      eventDate,
      creator,
      location,
      participants,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (req, res) => {
  console.log(req.body);
  return true;
};

const getAllEvents = async (req, res) => {
  console.log(req.body);
  return true;
};

const getEvent = async (req, res) => {
  console.log(req.body);
  return true;
};

module.exports = { addEvent, deleteEvent, getAllEvents, getEvent };
