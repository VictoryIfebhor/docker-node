const redis = require("redis");
const RedisStore = require("connect-redis").default;
const config = require("../config");

const redisClient = redis.createClient({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT,
});

module.exports.redisStore = new RedisStore({ client: redisClient });
