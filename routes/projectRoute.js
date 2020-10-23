const express = require("express");
const router = express.Router();
const projectControl = require("../controllers/projectControl");
const upload = require("../controllers/imageUploadControl");

router.get("/", projectControl.getProjectPage);
router.post("/add", upload.single("cover-image"), projectControl.addProject);

module.exports = router;
