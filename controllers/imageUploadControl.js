const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

// console.log from Utils
const cl = require("../utils/consoleLog");

const s3 = new AWS.S3({});
AWS.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: "us-east-1",
});

const imageFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cl.log("got here");
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({
  imageFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: "kizio.dev",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = upload;
