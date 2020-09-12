exports.getHomepage = (req, res, next) => {
  res.render("frontend/home", {
    pageTitle: "Home",
    classGroup: "main",
  });
};
