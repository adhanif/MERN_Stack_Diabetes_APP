const ErrorResponse = require("../utils/ErrorResponse");
const eventQuery = async (req, res, next) => {
  try {
    const { keyword, distance, categories, lng, lat } = req.query;

    const eventQuery = {};
    if (keyword) eventQuery.$text = { $search: keyword };
    if ((!keyword, distance, lng, lat))
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
