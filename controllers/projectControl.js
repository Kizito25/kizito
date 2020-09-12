exports.getProjectPage = (req, res, next) => {
  res.render("frontend/project", {
    pageTitle: "Projects",
    classGroup: "project",
  });
};
