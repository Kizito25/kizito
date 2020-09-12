const express = require("express");
const router = express.Router();
// const indexControl = require("../controllers/indexControl");

router.get("/", (req, res, next) => {
  res.render("frontend/home", {
    pageTitle: "Home",
  });
});

module.exports = router;
