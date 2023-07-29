const { City } = require("../models/event");

const eventCity = async (req, res, next) => {
  try {
    const { city } = req.location;
    console.log(req.location);
    const cityData = await City.findOne({ city });
    if (cityData) {
      next();
    } else {
      const newCity = await City.create({ name: city });
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { eventCity };
