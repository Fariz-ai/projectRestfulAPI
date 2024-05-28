/** @format */

const errorHandler = (err, req, res, next) => {
  res.status(err.status).json({ err: err.message });
};

module.exports = errorHandler;
