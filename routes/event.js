const express = require('express');
const eventRouter = express.Router();
const {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
} = require('../controllers/event');

eventRouter.get('/', getAllEvents);
eventRouter.get('/id', getEvent);
eventRouter.post('/create', addEvent);
eventRouter.delete('/id', deleteEvent);

module.exports = { eventRouter };
