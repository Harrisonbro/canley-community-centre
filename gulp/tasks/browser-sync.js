/* jslint node: true */

"use strict";

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync'),
    localConfig = require('../../config/gulp.json');

gulp.task('browser-sync', function() {
    if ( ! localConfig.browserSync) { return; }

    browserSync({
        open: false,

        /* Static file version */
        server: {
            baseDir: "./",
        },

        /* Server version */
        // proxy: localConfig.browserSyncProxy,
    });
});

gulp.task('browser-sync--reload', function() {
    console.log( "Runnign page reload" );

    if ( ! localConfig.browserSync) { console.log( "not relaoding" ); return; }

    browserSync.reload();
});
