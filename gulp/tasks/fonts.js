/* jslint node: true */

"use strict";

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    filter      = require('gulp-filter');

gulp.task('fonts', function () {
    return gulp.src(config.fonts_src + '/**/*.{eot,svg,ttf,woff}')
        .pipe(filter(['**/*.{eot,svg,ttf,woff}']))
        .pipe(gulp.dest(config.fonts_build))
        .pipe(reload({stream:true}));
});