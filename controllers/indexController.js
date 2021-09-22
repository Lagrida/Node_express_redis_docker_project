
const { getFromCache, resetRedis } = require("../helpers/redis");

exports.indexHome = async (req, res, next) => {
    console.log('inside index home');
    res.status(200).json({
        message: "Api index home"
    });
}
exports.resetRedis = async (req, res, next) => {
    resetRedis();
    res.status(200).json({
        message: "Redis is reset"
    });
}
