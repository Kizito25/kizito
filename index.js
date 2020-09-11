const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
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

app.use((req, res, next) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => cl(`server listening on port ${PORT}`));
