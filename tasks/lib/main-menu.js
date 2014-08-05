var inquirer = require('inquirer');

var messages = require('./messages');


// ---


// Gets an object with both an array and a dictionary of choices
function getChoices(grunt, tasks) {

  var arr = [];
  var dic = {};

  for (var key in tasks) {
    if (tasks.hasOwnProperty(key)){
      dic[key] = {
        name: tasks[key].name,
        value: key,
        run: grunt.task.run
      };
      arr.push(dic[key]);
    }
  }

  return {
    arr: arr,
    dic: dic
  };
}

function showMainMenu(grunt, tasks, done) {

  var choices = getChoices(grunt, tasks);

  var initMenuPrompt = {
    type: 'list',
    name: 'mainMenu',
    message: messages.mainMenu,
    choices: choices.arr
  };

  console.log(choices);
  return inquirer.prompt([initMenuPrompt], function mainMenuQuestionCallback(answer) {
    choices.dic[answer.mainMenu].run.call(grunt.task, answer.mainMenu);
    done();
  });

}


// ---


module.exports = {
  showMainMenu: showMainMenu
};

