module.exports.authMiddleware = (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ message: "Cannot authenticate user" });
  }

  next();
};
