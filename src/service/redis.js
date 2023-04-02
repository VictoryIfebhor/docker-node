const redis = require("redis");
const RedisStore = require("connect-redis").default;
const config = require("../config");

const redisClient = redis.createClient({ url: config.REDIS_URL });
redisClient.connect().catch((e) => console.log());

module.exports.redisStore = new RedisStore({ client: redisClient });
