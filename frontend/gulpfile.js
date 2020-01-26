"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;
const htmlmin = require("gulp-htmlmin");

sass.compiler = require("node-sass");

gulp.task("default", watch);
gulp.task("sass", compile);
gulp.task("sass", compile);
gulp.task("build", build);

function build() {
  return pipeline(gulp.src("js/*.js"), uglify(), gulp.dest("build/js"));
}

function watch() {
  gulp.watch("scss/**/*.scss", compile);
  gulp.watch("*.html", minify);
  gulp.watch("*.html", minify);
}

function minify() {
  return gulp
    .src("*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("build/"));
}

function compile() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/css"));
}
