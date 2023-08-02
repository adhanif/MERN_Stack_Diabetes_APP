const express = require('express');
const eventRouter = express.Router();
const { eventQuery } = require('../middlewares/eventQuery');
const upload = require('../middlewares/multer-upload');
const { cloudinaryUpload } = require('../middlewares/cloudinary-upload');
const { eventGeoCoder } = require('../middlewares/geoCoder');
const { eventCity } = require('../middlewares/cityFinder');
const { verifyToken } = require('../middlewares/verifyToken');

const {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  getNextEvents,
  getEventsOfUser,
  getAllEventComments,

  addEventComment,
} = require('../controllers/event');

eventRouter.get('/', eventQuery, getAllEvents);
eventRouter.get('/myEvents', verifyToken, getEventsOfUser);
eventRouter.get('/:id', getEvent);
//adnan

eventRouter.get('/:id/comments', getAllEventComments);
eventRouter.post('/:id/comments', verifyToken, addEventComment);

// eventRouter.post("/create", addEvent);
eventRouter.delete('/id', deleteEvent);
eventRouter.post(
  '/',
  verifyToken,
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
