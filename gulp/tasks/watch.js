/* jslint node: true */

"use strict";

var gulp   = require('gulp'),
    config = require('../config'),
    gutil  = require('gulp-util');

gulp.task('watch', ['browser-sync'], function () {

    /**
     * Rebuild CSS when src files change (SASS task should
     * trigger injection of new CSS)
     */
    gulp.watch(config.css_src + '/**/*.scss', ['css']);

    /**
     * Rebuild JS when src files change (SASS task should
     * trigger reload)
     */
    gulp.watch(config.js_src + '/**/*.js', ['js']);

    /**
     * Build images when src image files change
     */
    gulp.watch(config.images_src + '/**/*.{png,jpg,jpeg,gif}', ['images']);

    /**
     * Recompile HTML src when it changes
     */
    gulp.watch([
        './indexSrc.html',
        './public/css/main.css',
        './public/css/main.min.css'
    ], ['build-html']);

    /**
     * Reload browser when PHP or HTML files change
     */
    gulp.watch('./index.html', ['browser-sync--reload']);
    // gulp.watch('./*.{php,html}', ['browser-sync--reload']);

});