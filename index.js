const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./handlers/db");
const cors = require("cors");
const path = require("path");
const { userRouter } = require("./routes/users");
const { messageRouter } = require("./routes/message");
const { errorHandler } = require("./middlewares/errorHandler");
const { eventRouter } = require("./routes/event");
const { articleRouter } = require("./routes/article");
const { cityRouter } = require("./routes/city");

// for deployment (donot delete)

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "client", "dist")));
// Configure CORS
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

//Middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

//for deployment (donot delete)
//For deployment put "/api" before all the routes

app.use("/api/", userRouter);
app.use("/api/message", messageRouter);
app.use("/api/events", eventRouter);
app.use("/api/cities", cityRouter);
app.use("/api/articles", articleRouter);

// for deployment (donot delete)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

//
//Errorhandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
