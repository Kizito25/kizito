exports.getBlogPage = (req, res, next) => {
  res.render("frontend/blog", {
    pageTitle: "Blog",
    classGroup: "blog",
  });
};
