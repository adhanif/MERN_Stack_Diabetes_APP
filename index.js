const express = require("express");
require("dotenv").config();
require("./handlers/db");
const cors = require("cors");
const app = express();
const port = 3000;

// MiddleWares

app.use(cors());
app.use(express.json());

//Routes
// app.use;

// MainRoute
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
