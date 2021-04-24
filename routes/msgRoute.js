const express = require("express");
const router = express.Router();
const msgControl = require("../controllers/msgControl");

// Post Message
router.post("/", msgControl.sendMessage);

//Receive Message
router.get("/", msgControl.receiveMessage);

module.exports = router;
