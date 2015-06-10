/* jslint node: true */

"use strict";

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    gulpConcat  = require('gulp-concat');

gulp.task('js', function () {

    gulp.src('./node_modules/fg-loadjs/loadJS.js')
        .pipe(uglify())
        .pipe(gulp.dest(config.js_build));

});