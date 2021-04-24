// Importing Project Schema
const Project = require("../models/project");
// AWS Upload

const upload = require("../controllers/imageUploadControl");
// console.log from Utils
const cl = require("../utils/consoleLog");
exports.getProjectPage = async (req, res, next) => {
  const projects = await Project.find({});
  try {
    projects.map((project) => {
      console.log(project.tags);
    });
    cl.log(typeof projects);
    return res.render("frontend/project", {
      pageTitle: "Projects",
      classGroup: "project",
      projects,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.get;

exports.addProject = async (req, res, next) => {
  // Add new Project
  // handle uploaded Image
  cl.log(req.file);
  let myImage = req.file.originalname.split(".");
  // get the file extension and rename image
  const fileType = myImage[myImage.length - 1];
  cl.log(myImage);
  const params = {
    Bucket: "kizito.dev",
    Key: `${Date.now()}.${fileType}`,
    Body: req.file.buffer,
    ACL: "public-read",
  };
  upload.s3.upload(params, async (error, data) => {
    if (error) {
      cl.log(typeof error);
      cl.log(error);
      res.status(500).send("Error occured");
    } else {
      cl.log("uploaded successfully");
      // const url = data.Location;
      // const key = data.Key;

      // Create  Database
      const imageUrl = data.Location,
        title = req.body.title,
        tags = req.body.tags,
        description = req.body.description,
        authors = req.body.authors;

      const project = await Project.create({
        title,
        coverImage: imageUrl,
        tags,
        description,
        authors,
      });
      try {
        cl.log(project);
        return res.status(201).send({ project });
      } catch (error) {
        cl.log(error);
        return res.status(404).send(error);
      }
    }
  });
};
