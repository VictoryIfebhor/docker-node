const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

module.exports.connectDB = async (mongoUri) => {
  await mongoose.connect(mongoUri);
};
