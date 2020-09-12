const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("frontend/talk", {
    pageTitle: "Talks",
    classGroup: "talk",
  });
});

module.exports = router;
