const geocoder = require("../utils/geocoder");

const eventGeoCoder = async (req, res, next) => {
  try {
    const { address } = req.body;

    const loc = await geocoder.geocode(address);

    const location_co = {
      city: loc[0].city,
      coordinates: [loc[0].latitude, loc[0].longitude],
    };
    req.location = location_co;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { eventGeoCoder };
