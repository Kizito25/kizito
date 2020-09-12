const express = require("express");
const router = express.Router();
const blogControl = require("../controllers/blogControl");

router.get("/", blogControl.getBlogPage);

module.exports = router;
