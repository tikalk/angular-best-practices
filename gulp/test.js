var gulp = require('gulp');
var karma = require('karma').server;
var isTravis = process.env.TRAVIS || false;
var isWin = /^win/.test(process.platform);
var pathToKarmaConf = __dirname.replace(isWin ? '\\gulp' : '/gulp', '');

module.exports = gulp.task('test', function (done) {
  karma.start({
    configFile: pathToKarmaConf + (isWin ? '\\' : '') + '/karma.conf.js',
    singleRun: isTravis
  }, done);
});
