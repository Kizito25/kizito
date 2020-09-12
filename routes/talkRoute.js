const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("frontend/talk", {
    pageTitle: "Talks",
  });
});

module.exports = router;
