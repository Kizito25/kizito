const express = require("express");
const router = express.Router();
const projectControl = require("../controllers/projectControl");
const upload = require("../controllers/imageUploadControl");

router.get("/", projectControl.getProjectPage);
// router.get("/:id", projectControl.getProject)
router.post("/add", upload.upload, projectControl.addProject);

module.exports = router;
