/* jslint node: true */

"use strict";

var gulp   = require('gulp'),
    config = require('../config');

gulp.task('build-box-sizing-polyfill', function() {
    gulp.src('app/assets/boxsizing.htc')
        .pipe(gulp.dest(config.css_build));
});