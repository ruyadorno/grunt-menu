var inquirer = require('inquirer');

var exit = require('./exit');
var getChoices = require('./get-choices');
var messages = require('./messages');


// ---


// Extra menu options
var exitChoice = {
  name: messages.exit,
  value: 'exit',
  run: exit
};

function showMainMenu(grunt, tasks, done) {

  var choices = getChoices(grunt, tasks, true);
  choices.addChoice(exitChoice);

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

