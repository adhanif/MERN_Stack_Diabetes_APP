const Event = require('../models/event');

const addEvent = async (req, res, next) => {
  try {
    console.log('AddEvent');
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
    console.log('error creating event');
    next(error);
  }
};

const deleteEvent = async (req, res) => {
  //TODO
  console.log('delete Event function called');
  console.log(req.body);
  return true;
};

const getAllEvents = async (req, res, next) => {
  console.log('getAllEvents function called');
  console.log(req.body);
  try {
    const events = await Event.find({});
    res.status(201).json(events);
  } catch (error) {
    next(error);
  }

  return true;
};

const getEvent = async (req, res) => {
  console.log('getEvent function called');
  console.log(req.body);
  const { _id } = req.body;
  try {
    const event = await Event.findById(_id);
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

module.exports = { addEvent, deleteEvent, getAllEvents, getEvent };
