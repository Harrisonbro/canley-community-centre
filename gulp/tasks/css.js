/* jslint node: true */

"use strict";

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    libsass     = require('gulp-sass'),
    autoprefix  = require('gulp-autoprefixer'),
    minifyCSS   = require('gulp-minify-css'),
    filter      = require('gulp-filter'),
    rename      = require('gulp-rename'),
    gutil       = require('gulp-util');

gulp.task('sass', ['css']);
gulp.task('css', function() {
    gulp.src(config.css_src + '/**/*.scss')
        .pipe(libsass({
            includePaths: [
                config.bower_src + '/breakpoint-sass/stylesheets'
            ],
            outputStyle: 'expanded',
            sourceComments: 'normal'
        }).on('error', libsass.logError))
        .pipe(autoprefix('last 10 version'))
        .pipe(reload({stream:true}))
        .pipe(gulp.dest(config.css_build))
        .pipe(minifyCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(reload({stream:true}))
        .pipe(gulp.dest(config.css_build));
});