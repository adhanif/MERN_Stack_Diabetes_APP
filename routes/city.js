const express = require("express");
const cityRouter = express.Router();



cityRouter.get("/", getAllCities);

module.exports={cityRouter}