require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const { connectDB } = require("./db");
const config = require("./config");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const {
  errorMiddleware,
  routeNotFound,
} = require("./middlewares/error-handler");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.use(routeNotFound);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  await connectDB(config.MONGO_URI);
  app.listen(port, () => console.log(`listening on port ${port}`));
};

start();
