const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./handlers/db');
const cors = require('cors');
const { userRouter } = require('./routes/users');
const { messageRouter } = require('./routes/message');
const { errorHandler } = require('./middlewares/errorHandler');
const { eventRouter } = require('./routes/event');

const app = express();
const port = 3000;

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

//Middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

//Routing
app.use('/', userRouter);
app.use('/message', messageRouter);
app.use('/events', eventRouter);

//Errorhandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
