const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("welcome to Talks Page");
});

module.exports = router;
