const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// console.log() shorthand
const cl = (value) => console.log(value);

// mongoose
//   .connect(process.env.URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useNewT,
//   })
//   .then((connected) => {
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => cl(`server listening on port ${PORT}`));
//   });

// use ejs-locals for all ejs templates:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Public Directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
const indexRoute = require("./routes/indexRoute");
const projectRoute = require("./routes/projectRoute");
const blogRoute = require("./routes/blogRoute");
const talkRoute = require("./routes/talkRoute");
// Home
app.use("/", indexRoute);

// Projects
app.use("/projects", projectRoute);

// Blogs
app.use("/blog", blogRoute);

// Talks
app.use("/talks", talkRoute);

// Error 404 page

app.use((req, res, next) => {
  res.status(404).send("error 404! Page cannot be found");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => cl(`server listening on port ${PORT}`));

module.exports = app;
