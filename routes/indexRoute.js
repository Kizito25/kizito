const express = require("express");
const router = express.Router();
const indexControl = require("../controllers/indexControl");

router.get("/", indexControl.getHomepage);

module.exports = router;
