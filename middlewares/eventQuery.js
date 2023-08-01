const ErrorResponse = require("../utils/ErrorResponse");
const eventQuery = async (req, res, next) => {
  try {
    const {
      keyword,
      distance,
      categories,
      lng,
      lat,
      city,
      cityLng,
      cityLat,
      startDate,
      endDate,
      page,
      limit,
    } = req.query;

    const eventQuery = {};
    if (startDate && endDate)
      eventQuery.eventDate = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    if (keyword) eventQuery.$text = { $search: keyword };
    if (city && !distance) {
      eventQuery.city = city;
    }
    if (city && distance && cityLng && cityLat) {
      eventQuery.city = city;
      eventQuery.location = {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(cityLng), parseFloat(cityLat)],
          },
          $maxDistance: parseInt(distance),
        },
      };
    }
    if (!keyword && distance && lng && lat && !city)
      eventQuery.location = {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lat), parseFloat(lng)],
          },
          $maxDistance: parseInt(distance),
        },
      };

    if (categories) eventQuery.categories = { $in: categories.split(",") };

    req.eventQuery = eventQuery;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { eventQuery };
