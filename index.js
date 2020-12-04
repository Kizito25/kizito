require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const favicon = require("serve-favicon");

// console.log() shorthand
const cl = require("./utils/consoleLog");

// Connect to Database
mongoose
  .connect(process.env.MONGO_URI_REMOTE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((connected) => {
    cl.log("Connected to Database");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => cl.log(`server listening on port ${PORT}`));
  })
  .catch((err) => {
    cl.log(err);
  });

// use ejs-locals for all ejs templates:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Public Directory
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "favicon.png")));
app.use(cors());

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const indexRoute = require("./routes/indexRoute");
const projectRoute = require("./routes/projectRoute");
const blogRoute = require("./routes/blogRoute");
const talkRoute = require("./routes/talkRoute");
const msgRoute = require("./routes/msgRoute");
// Home
app.use("/", indexRoute);

// Projects
app.use("/projects", projectRoute);

// Blogs
app.use("/blog", blogRoute);

// Talks
app.use("/talks", talkRoute);

// Send Message
app.use("/messenger", msgRoute);

// Error 404 page

app.use((req, res, next) => {
  res.status(404).send("error 404! Page cannot be found");
});
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => cl.log(`server listening on port ${PORT}`));

module.exports = app;
