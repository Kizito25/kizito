exports.homepage = (req, res, next) => {
  res.render("frontend/home", {
    pageTitle: "Ihugba Kizito",
  });
};
