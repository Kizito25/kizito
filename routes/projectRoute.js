const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("frontend/project", {
    pageTitle: "Projects",
  });
});

module.exports = router;
