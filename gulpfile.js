/* jslint node: true */

/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

/**
 * Gulp config file. Create this file from the sample if it doesn't exist
 */

var config = require('./config/gulp.json');


/**
 * Require all tasks in gulp/tasks, including subfolders
 */

var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });
