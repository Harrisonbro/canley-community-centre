/* jslint node: true */

/**
 * Image resizing & optimisation
 *
 * Look into the various imagemin plugins on NPM. Eg:
 * https://www.npmjs.com/package/imagemin-optipng
 * https://www.npmjs.com/package/imagemin-pngcrush
 * https://www.npmjs.com/package/imagemin-jpegtran
 */

"use strict";

var gulp        = require('gulp'),
    config      = require('../config'),
    imagemin    = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    imageResize = require('gulp-image-resize'),
    rename      = require('gulp-rename'),
    _           = require('underscore');

var imagesSrcs = [
    config.images_src + '/splash.jpg'
];

var imageSizes = [
    400,
    600,
    800,
    1000,
    1200,
    1400,
    1600,
    1800,
];

gulp.task('images', function() {
    _.each(imageSizes, function(imageSize) {
        gulp.src(imagesSrcs)
            .pipe(imageResize({ width : imageSize }))
            .pipe(imagemin({
                optimizationLevel: 3,
                progressive: true,
                interlaced: true
            }))
            .pipe(rename({suffix: '-' + imageSize}))
            .pipe(gulp.dest(config.images_build));
    });
});