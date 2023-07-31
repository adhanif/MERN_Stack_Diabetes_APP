const geocoder = require("../utils/geocoder");

const eventGeoCoder = async (req, res, next) => {
  try {
    const { address } = req.body;

    const addressLocation = await geocoder.geocode(address);
    const cityLocation = await geocoder.geocode(addressLocation[0].city);

    const location_co = {
      city: {
        name: cityLocation[0].city,
        coordinates: [cityLocation[0].latitude, cityLocation[0].longitude],
      },
      coordinates: [addressLocation[0].latitude, addressLocation[0].longitude],
    };
    req.location = location_co;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { eventGeoCoder };
