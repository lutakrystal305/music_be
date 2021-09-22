const express = require("express");
const router = express.Router();


const controller = require("../controller/get.controller");
router.get("/", controller.get);

module.exports = router;
