/* jslint node: true */

"use strict";

var gulp   = require('gulp'),
    sys    = require('sys'),
    exec   = require('child_process').exec;

// See https://github.com/Modernizr/Modernizr/tree/master/feature-detects for tests
// Edit ./config/modernizr.json to change the tests which are included
gulp.task('mod', ['build-modernizr']);
gulp.task('modernizr', ['build-modernizr']);
gulp.task('build-mod', ['build-modernizr']);
gulp.task('build-modernizr', function() {
    exec('./node_modules/customizr/bin/customizr -c ./config/modernizr.json', function(error, stdout) {
        sys.puts(stdout);
    });
});