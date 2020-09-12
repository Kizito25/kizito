exports.getTalkPage = (req, res, next) => {
  res.render("frontend/talk", {
    pageTitle: "Talks",
    classGroup: "talk",
  });
};
