
const { getFromCache, resetRedis } = require("../helpers/redis");

exports.indexHome = async (req, res, next) => {
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
