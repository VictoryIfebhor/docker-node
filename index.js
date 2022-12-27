const express = require("express");
const { connectDB } = require("./db");
const config = require("./config");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

const port = process.env.PORT || 3000;

const start = async () => {
  await connectDB(config.MONGO_URI);
  app.listen(port, () => console.log(`listening on port ${port}`));
};

start();
