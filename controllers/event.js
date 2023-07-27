const Event = require("../models/event");
const geocoder = require("../utils/geocoder");
const addEvent = async (req, res, next) => {
  try {
    const { title, eventDate, creator, address } = req.body;
    const loc = await geocoder.geocode(address);
    console.log(loc);
    const location_co = {
      type: "Point",

      coordinates: [loc[0].latitude, loc[0].longitude],
    };

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
    console.log("error creating event");
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
  console.log(req.body);

  try {
    const events = await Event.find(req.eventQuery);
    res.status(201).json(events);
  } catch (error) {
    next(error);
  }

  return true;
};

// const getNearByEvents = async (req, res, next) => {
//   // console.log(req.query);

//   try {
//     const events = await Event.find(req.eventQuery);
//     res.status(201).json(events);
//   } catch (error) {
//     next(error);
//   }
// };

const getEvent = async (req, res, next) => {
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

const getNextEvents = async (req, res, next) => {
  console.log("getNExtEvents");
  // console.log(req.params);
  const { amount } = req.params;
  //console.log(amount);
  const date = new Date();
  // console.log(date.toString());
  // console.log(date.getDate());
  // console.log(date.getMonth());
  // console.log(date.getFullYear());
  try {
    //Get amounnt of events from Database
    console.log("before db");
    const events = await Event.find({ eventDate: { $gte: date } }).sort({
      eventDate: -1,
    });
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
    console.log("after db");
    console.log(events);
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

module.exports = {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  getNextEvents,
  // getNearByEvents,
};
