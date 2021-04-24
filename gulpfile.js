var gulp = require("gulp");

const { series } = require("gulp");

function promiseTask() {
  console.log("Got here");
  return Promise.resolve("the value is ignored");
}

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.build = series(transpile, bundle, promiseTask);
