var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename")
    
// SASS
gulp.task("sass", function () {
  gulp.src("./scss/*.scss")
    .pipe(sass({includePaths: require('node-bourbon').includePaths}))
    .pipe(gulp.dest("./css"));
});

gulp.task("default", ["sass"]);

gulp.task("watch", ["sass"], function(){
  gulp.watch("scss/**/*.scss", ["sass"]);
});