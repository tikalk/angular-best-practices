var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

module.exports = gulp.task('style', function () {
  return gulp.src([
      './src/css/style.less',
      './src/app/**/*.less'
  	])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.tmp'));
});