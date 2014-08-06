/*
 * grunt-menu
 * https://github.com/ruyadorno/grunt-menu
 *
 * Copyright (c) 2014 Ruy Adorno
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    sg_release: {
      options: {
        skipBowerInstall: true,
        developBranch: 'develop',
        masterBranch: 'master',
        files: [
          'package.json',
          'README.md'
        ],
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'], // '-a' for all files
        pushTo: 'origin'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['nodeunit']);

  grunt.registerTask('release', ['sg_release']);

  grunt.registerTask('default', ['jshint', 'test']);

};

