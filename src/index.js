require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const { connectDB } = require("./db");
const config = require("./config");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const {
  errorMiddleware,
  routeNotFound,
} = require("./middlewares/error-handler");
const { redisStore } = require("./service/redis");
const { authMiddleware } = require("./middlewares/auth.middleware");

const app = express();

app.enable("trust proxy"); // must enable for express apps running behing a proxy

app.use(express.json());
app.use(morgan("dev"));
app.use(
  session({
    store: redisStore,
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: 60000, secure: false },
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!!!</h1>");
});
app.use("/users", userRouter);
app.use("/posts", authMiddleware, postRouter);

app.use(routeNotFound);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  await connectDB(config.MONGO_URI);
  app.listen(port, () => console.log(`listening on port ${port}`));
};

start();
