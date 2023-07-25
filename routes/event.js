const express = require('express');
const eventRouter = express.Router();
const {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  getNextEvents,
} = require('../controllers/event');

eventRouter.get('/', getAllEvents);
eventRouter.get('/id', getEvent);
eventRouter.post('/create', addEvent);
eventRouter.delete('/id', deleteEvent);
//Elvis routes for footer
eventRouter.get('/next/:amount', getNextEvents);

module.exports = { eventRouter };
