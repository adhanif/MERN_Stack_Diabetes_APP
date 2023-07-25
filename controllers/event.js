const Event = require("../models/event");
const geocoder = require("../utils/geocoder");
const addEvent = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { title, eventDate, creator, address } = req.body;
    const loc = await geocoder.geocode(address);
    console.log(loc);
    const location_co = {
      type: "Point",

      coordinates: [loc[0].latitude, loc[0].longitude],
    };
    // console.log(loc.latitude);
    //create Event
    participants = [];
    const newEvent = await Event.create({
      title,
      eventDate,
      creator,
      location: location_co,
      participants,
      address,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (req, res) => {
  //TODO
  console.log("delete Event function called");
  console.log(req.body);
  return true;
};

const getAllEvents = async (req, res, next) => {
  // console.log('getAllEvents function called');
  // console.log(req.body);
  try {
    const events = await Event.find({});
    res.status(201).json(events);
  } catch (error) {
    next(error);
  }

  return true;
};

const getEvent = async (req, res) => {
  console.log("getEvent function called");
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
