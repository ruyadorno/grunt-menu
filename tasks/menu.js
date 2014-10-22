var log = require('simple-output');

var info = require('../package.json');
var messages = require('./lib/messages');
var showMenu = require('./lib/show-menu');


// ---


module.exports = function (grunt) {

  var taskManager = grunt.registerTask('menu', 'Add an useful menu for listing/executing your configured tasks.', function () {

    var done = this.async();

    log.success(messages.welcome.replace('{{version}}', info.version));

    showMenu(grunt, this.options(), taskManager._tasks, 'mainMenu', done);

  });

};

