const { City } = require("../models/event");

const getAllCities = async (req, res) => {
  try {
    const allCities = await City.find();
    res.status(201).json(allCities);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllCities };
