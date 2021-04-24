const express = require("express");
const router = express.Router();
const talkControl = require("../controllers/talkControl");

router.get("/", talkControl.getTalkPage);

module.exports = router;
