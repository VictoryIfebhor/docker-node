exports.errorMiddleware = (error, req, res, next) => {
  // The focus of this project is learning docker.
  // So errors will be logged to the console and internal server error response will be sent as response
  console.log(error);

  return res.status(500).json({ message: "Internal Server Error" });
};

exports.routeNotFound = (req, res, next) => {
  return res.status(404).json({ message: "Route Not Found" });
};
