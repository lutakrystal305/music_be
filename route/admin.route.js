const express = require("express");
const router = express.Router();

const middleware = require("../verify.middleware");

const controller = require("../controller/admin.controller");
router.post("/login", controller.login);
router.post("/post", middleware.verify, controller.post);

module.exports = router;
