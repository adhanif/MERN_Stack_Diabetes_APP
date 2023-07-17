const express = require("express");

const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./handlers/db");
const cors = require("cors");
const { userRouter } = require("./routes/users");
const app = express();
const port = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/", userRouter);
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
