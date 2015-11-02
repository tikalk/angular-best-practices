var gulp = require('gulp');
var runSequence = require('run-sequence');

// require external tasks
require('./gulp/concat.js');
require('./gulp/server.js');
require('./gulp/test.js');
require('./gulp/watch.js');
require('./gulp/style.js');
require('./gulp/dist.js');
require('./gulp/dogen.js');

gulp.task('default', ['serve']);
gulp.task('serve', function (callback) {
  runSequence(
    'build',
    'style',
    'assets',
    'watch',
    'webserver'
  );
});