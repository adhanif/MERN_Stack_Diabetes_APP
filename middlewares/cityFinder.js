const { City } = require("../models/event");

const eventCity = async (req, res, next) => {
  try {
    const { name, coordinates } = req.location.city;

    const cityData = await City.findOne({ name });
    if (cityData) {
      req.location.city = cityData;
      next();
    } else {
      const newCity = await City.create({ name, coordinates });
      req.location.city = newCity;
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { eventCity };
