const express = require("express");

const router = express.Router();

const { indexHome, resetRedis } = require("../controllers/indexController")

router.route("/").get(indexHome);
router.route("/reset_redis").get(resetRedis);

module.exports = router;