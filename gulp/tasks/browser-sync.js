/* jslint node: true */

"use strict";

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    localConfig = require('../../config/gulp.json');

gulp.task('browser-sync', function() {
    if ( ! localConfig.browserSync) { return; }

    browserSync({
        proxy: localConfig.browserSyncProxy,
        open: false
    });
});

gulp.task('browser-sync--reload', function() {
    if ( ! localConfig.browserSync) { return; }

    browserSync.reload();
});
