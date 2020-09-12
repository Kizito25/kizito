const express = require("express");
const router = express.Router();
const projectControl = require("../controllers/projectControl");

router.get("/", projectControl.getProjectPage);

module.exports = router;
