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

var bannerImageSizes = [
    400,
    600,
    800,
    1000,
    1200,
    1400,
    1600,
    1800,
];

var logoImageSizes = [
    100,
    300,
    500,
    700,
    900,
    1100,
    1300,
];

var straplineImageSizes = [
    100,
    300,
    500,
    700,
    900,
    1100,
    1300,
    1500,
    1700,
    1900,
    2100,
    2300,
    2500,
    2700,
    2900,
];

gulp.task('images', function() {
    _.each(bannerImageSizes, function(imageSize) {
        gulp.src([config.images_src + '/splash.jpg', config.images_src + '/splash-vertical.jpg'])
            .pipe(imageResize({ width : imageSize }))
            .pipe(imagemin({
                progressive: true,
                interlaced: true
            }))
            .pipe(rename({suffix: '-' + imageSize}))
            .pipe(gulp.dest(config.images_build));
    });

    _.each(logoImageSizes, function(imageSize) {
        gulp.src(config.images_src + "/logo.png")
            .pipe(imageResize({ width : imageSize }))
            .pipe(imagemin({
                optimizationLevel: 7,
            }))
            .pipe(rename({suffix: '-' + imageSize}))
            .pipe(gulp.dest(config.images_build));
    });

    _.each(straplineImageSizes, function(imageSize) {
        gulp.src(config.images_src + "/strapline.png")
            .pipe(imageResize({ width : imageSize }))
            .pipe(imagemin({
                optimizationLevel: 7,
            }))
            .pipe(rename({suffix: '-' + imageSize}))
            .pipe(gulp.dest(config.images_build));
    });

    gulp.src(config.images_src + "/logo-on-white.png")
        .pipe(imagemin({
            optimizationLevel: 7,
        }))
        .pipe(gulp.dest(config.images_build));

    gulp.src(config.images_src + "/**/*.svg")
        .pipe(imagemin())
        .pipe(gulp.dest(config.images_build));
});