const AWS = require("aws-sdk");
const multer = require("multer");

// console.log from Utils
const cl = require("../utils/consoleLog");

AWS.config.update({ region: "us-west-2", apiVersion: "2006-03-01" });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});
// const imageFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cl.log("got here");
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
//   }
// };
const storage = multer.memoryStorage({
  destination: (req, file, callback) => {
    callback(null, "");
  },
});
const upload = multer({ storage }).single("image");

module.exports = {
  s3,
  upload,
  // imageFilter,
};
