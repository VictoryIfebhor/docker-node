const mongoose = require("mongoose");

module.exports.connectDB = async (mongoUri) => {
  await mongoose.connect(mongoUri);
};
