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


module.exports = function showMenu(grunt, options, tasks, type, done) {

  var mode = grunt.option('multi') ? 'checkbox' : 'list';

  function openExtraChoice(optionChosen) {
    showMenu(grunt, tasks, optionChosen, mode, done);
    return false;
  }

  function runTaskFor(answer) {

    var shouldDo = true;

    if (!answer.mainMenu.forEach) {
      answer.mainMenu = [answer.mainMenu];
    }

    answer.mainMenu.forEach(function (choice) {
      if (!choices.dic[choice].run.call(grunt.task, choice)) {
        shouldDo = false;
      }
    });

    return shouldDo;
  }


  // ---


  var isMainMenu = type === 'mainMenu';
  var choices = getChoices(grunt, options, tasks, isMainMenu);

  extraChoices[type].forEach(function loopThroughChoices(item) {
    if (item.run === '') {
      item.run = openExtraChoice;
    }
    choices.addChoice(item);
  });

  var mainMenuPrompt = {
    type: mode,
    name: 'mainMenu',
    message: messages.mainMenu,
    choices: choices.arr
  };

  return inquirer.prompt([mainMenuPrompt], function mainMenuQuestionCallback(answer) {
    if (runTaskFor(answer)) {
      done();
    }
  });

};

