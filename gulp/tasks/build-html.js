/* jslint node: true */

"use strict";

var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    config      = require('../config'),
    fileinclude = require('gulp-file-include'),
    minifyHTML  = require('gulp-minify-html'),
    minifyInline = require('gulp-minify-inline');

gulp.task('build-html', function() {
    gulp.src(['indexSrc.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe(minifyHTML())
        // .pipe(minifyInline())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
});