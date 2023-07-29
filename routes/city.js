const express = require("express");
const cityRouter = express.Router();
const { getAllCities } = require("../controllers/city");

cityRouter.get("/", getAllCities);

module.exports = { cityRouter };
