/* jslint node: true */

"use strict";

var gulp   = require('gulp'),
    rename = require('gulp-rename'),
    config = require('../config');

gulp.task('build-normalize-css', function() {
    gulp.src(config.bower_src + '/normalize.css/normalize.css')
        .pipe(rename('_normalize.scss'))
        .pipe(gulp.dest(config.bower_src + '/normalize.css'));
});