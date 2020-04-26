'use strict';

var gulp = require("gulp");
var less = require("gulp-less");


gulp.task("css", function () {
  return gulp.src("source/less/style.less")
  .pipe(gulp.dest("source/css"));
});
