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

var extraChoices = {
  mainMenu: [
    {
      name: messages.complete,
      value: 'complete',
      run: ''
    },
    exitChoice
  ],
  complete: [
    {
      name: messages.back,
      value: 'mainMenu',
      run: ''
    },
    exitChoice
  ]
};


// ---


module.exports = function showMenu(grunt, tasks, type, done) {

  function openExtraChoice(optionChosen) {
    showMenu(grunt, tasks, optionChosen, done);
    return false;
  }


  // ---


  var isMainMenu = type === 'mainMenu';
  var choices = getChoices(grunt, tasks, isMainMenu);

  extraChoices[type].forEach(function loopThroughChoices(item) {
    if (item.run === '') {
      item.run = openExtraChoice;
    }
    choices.addChoice(item);
  });

  var mainMenuPrompt = {
    type: 'list',
    name: 'mainMenu',
    message: messages.mainMenu,
    choices: choices.arr
  };

  return inquirer.prompt([mainMenuPrompt], function mainMenuQuestionCallback(answer) {
    if (choices.dic[answer.mainMenu].run.call(grunt.task, answer.mainMenu)) {
      done();
    }
  });

};

