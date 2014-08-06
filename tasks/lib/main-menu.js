var inquirer = require('inquirer');

var getChoices = require('./get-choices');
var messages = require('./messages');


// ---


function showMainMenu(grunt, tasks, done) {

  var choices = getChoices(grunt, tasks);

  var initMenuPrompt = {
    type: 'list',
    name: 'mainMenu',
    message: messages.mainMenu,
    choices: choices.arr
  };

  return inquirer.prompt([initMenuPrompt], function mainMenuQuestionCallback(answer) {
    choices.dic[answer.mainMenu].run.call(grunt.task, answer.mainMenu);
    done();
  });

}


// ---


module.exports = {
  showMainMenu: showMainMenu
};

