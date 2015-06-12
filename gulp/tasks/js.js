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

    gulp.src([config.node_src + '/fg-loadjs/loadJS.js',
              config.node_src + '/fg-loadcss/loadCSS.js',
              config.node_src + '/fontfaceobserver/fontfaceobserver.js'])
        .pipe(uglify())
        .pipe(gulp.dest(config.js_build));

});