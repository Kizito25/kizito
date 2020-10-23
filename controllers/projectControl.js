// Importing Project Schema
const Project = require("../models/project");
// console.log from Utils
const cl = require("../utils/consoleLog");

exports.getProjectPage = (req, res, next) => {
  res.render("frontend/project", {
    pageTitle: "Projects",
    classGroup: "project",
  });
};

exports.addProject = async (req, res, next) => {
  // Add new Project
  cl.log(req.body.file);
  const { title, name } = req.body;
  const project = await Project.create({ title, name });
  try {
    cl.log("Project Added Successfully");
    res.status(201).json(project);
  } catch (err) {
    cl.log("Error occured while trying to save your data");
    res.status(400).send("Could not create projects");
  }
};
