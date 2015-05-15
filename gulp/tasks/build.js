/* jslint node: true */

"use strict";

var gulp = require('gulp');

gulp.task('build', [
    'images',
    'fonts',
    'build-modernizr',
    'build-normalize-css',
    'build-box-sizing-polyfill',
    'build-css',
    'js',
]);