var log = require('simple-output');

var info = require('../package.json');
var messages = require('./lib/messages');
var mainMenu = require('./lib/main-menu');


// ---


module.exports = function (grunt) {

  var taskManager = grunt.registerTask('menu', 'Add an useful menu for listing/executing your configured tasks.', function () {

    var done = this.async();

    log.success(messages.welcome.replace('{{version}}', info.version));

    mainMenu.showMainMenu(grunt, taskManager._tasks, done);

    //console.log(taskManager._tasks);

  });

};

