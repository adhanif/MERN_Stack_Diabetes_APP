const express = require('express');
const messageRouter = express.Router();
const { sendMail } = require('../controllers/message');

messageRouter.post('/', sendMail);
messageRouter.get('/', (req, res) => {
  res.send('Hallo');
});

module.exports = { messageRouter };
