const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.create({ username, password });

  return res.status(201).json({ user });
};
