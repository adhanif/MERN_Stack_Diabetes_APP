const express = require('express');
const eventRouter = express.Router();
const { eventQuery } = require('../middlewares/eventQuery');
const upload = require('../middlewares/multer-upload');
const { cloudinaryUpload } = require('../middlewares/cloudinary-upload');
const { eventGeoCoder } = require('../middlewares/geoCoder');
const { eventCity } = require('../middlewares/cityFinder');
const {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  getNextEvents,
  getEventsOfUser,
  getAllEventComments,
} = require('../controllers/event');

eventRouter.get('/', eventQuery, getAllEvents);
eventRouter.get('/:id', getEvent);
//adnan
eventRouter.get('/:id/comments', getAllEventComments);

eventRouter.get('/myEvents/:userId', getEventsOfUser);

// eventRouter.post("/create", addEvent);
eventRouter.delete('/id', deleteEvent);
eventRouter.post(
  '/',
  upload.single('image'),
  cloudinaryUpload,
  eventGeoCoder,
  eventCity,
  addEvent
);
eventRouter.delete('/id', deleteEvent);

//Elvis routes for footer
eventRouter.get('/next/:amount', getNextEvents);

module.exports = { eventRouter };
