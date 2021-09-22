const {
    REDIS_URL,
    REDIS_PORT } = require('../config/config.js');

const Redis = require("redis");

const redisClient = Redis.createClient({
    url: `redis://${REDIS_URL}:${REDIS_PORT}`
});

const DEFAULT_EXPERATION = 3600;

exports.getFromCache = async (name, callback) =>  new Promise((resolve, reject) => {
    redisClient.get(name, async (error, data) => {
        if(data == null){
            // fill redis and return data
            console.log('Fill Redis and return data');
            const theData = await callback();
            redisClient.setex(name, DEFAULT_EXPERATION, JSON.stringify(theData));
            resolve(theData);
        }else{
            // Return existing data in redis
            console.log('Redis returning data');
            resolve(JSON.parse(data));
        }
    });
});
exports.resetRedis = async () => {
    redisClient.flushall();
}