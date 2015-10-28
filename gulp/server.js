var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src([
  	'src',
  	'.tmp'
  	])
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      // open: true,
      port: 8080
    }));
});

gulp.task('server:dist', function() {
  gulp.src([
    'dist'
    ])
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      // open: true,
      port: 9002
    }));
});