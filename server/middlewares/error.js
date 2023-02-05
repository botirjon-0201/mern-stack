module.exports = (err, req, res, next) => {
  res.status(500).json("An unexpected server error occurred!");
};
