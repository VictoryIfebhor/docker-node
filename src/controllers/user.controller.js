const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.create({ username, password });

  return res.status(201).json({ user });
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({ username });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const isCorrect = await user.validatePassword(password);
  if (!isCorrect) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  return res.status(200).json({ user });
};
