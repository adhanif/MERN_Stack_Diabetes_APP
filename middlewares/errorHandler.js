const errorHandler = (err, req, res, next) => {
  console.log(err.statusCode);
  res.status(err.statusCode || 500).send(err.message || 'something went wrong');
};

module.exports = { errorHandler };
