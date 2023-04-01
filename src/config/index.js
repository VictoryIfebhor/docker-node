module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  REDIS_HOST: process.env.REDIS_URL || "redis",
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  SESSION_SECRET: process.env.SESSION_SECRET,
};
