const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./handlers/db');
const cors = require('cors');
const { userRouter } = require('./routes/users');
const { messageRouter } = require('./routes/message');
const { errorHandler } = require('./middlewares/errorHandler');
const app = express();
const port = 3000;

app.use(cors());
// app.use(cookieParser());
app.use(express.json());

app.use('/', userRouter);
app.use('/message', messageRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
