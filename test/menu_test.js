var grunt = require('grunt');

var getChoices = require('../tasks/lib/get-choices');
var showMenu = require('../tasks/lib/show-menu');

var tasksData = require('./samples/tasks-data');
var getChoicesExpected = require('./expected/get-choices');
var getChoicesInfoExpected = require('./expected/get-choices-with-info');


// ---


/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.menu = {

  setUp: function (done) {
    done();
  },


  // ---


  testGetChoices: function (test) {
    test.expect(1);

    var choices = getChoices(grunt, {}, tasksData);

    // excludes run methods from the tests
    choices.arr.forEach(function (item) {
      item.run = '';
    });

    // Have to delete func to test agains dummy data
    delete choices.addChoice;

    test.deepEqual(
      choices,
      getChoicesExpected,
      'Should be able to transform raw tasks info into required data'
    );

    test.done();
  },


  // ---


  testGetChoicesWithInfo: function (test) {
    test.expect(1);

    var choices = getChoices(grunt, { info: true }, tasksData);

    // excludes run methods from the tests
    choices.arr.forEach(function (item) {
      item.run = '';
    });

    // Have to delete func to test agains dummy data
    delete choices.addChoice;

    test.deepEqual(
      choices,
      getChoicesInfoExpected,
      'Should be able to transform raw tasks info into required data'
    );

    test.done();
  },


  // ---


  testGetChoicesWithInfoOption: function (test) {
    test.expect(1);

    // mocks the --info cli option
    grunt.option('info', true);

    var choices = getChoices(grunt, {}, tasksData);

    // excludes run methods from the tests
    choices.arr.forEach(function (item) {
      item.run = '';
    });

    // Have to delete func to test agains dummy data
    delete choices.addChoice;

    test.deepEqual(
      choices,
      getChoicesInfoExpected,
      'Should be able to transform raw tasks info into required data'
    );

    test.done();
  },


  // ---


  testAddChoice: function (test){
    test.expect(1);

    var choices = getChoices(grunt, {}, tasksData);

    // excludes run methods from the tests
    choices.arr.forEach(function (item) {
      item.run = '';
    });

    choices.addChoice({
      name: 'another choice',
      value: 'another',
      run: ''
    });

    // Have to delete func to test agains dummy data
    delete choices.addChoice;

    test.notDeepEqual(
      choices,
      getChoicesExpected,
      'Should be different from original data after adding a choice'
    );

    test.done();
  },


  // ---


  testExitMainMenu: function (test) {
    test.expect(1);

    // Mock process.exit to test
    var _exitFn = process.exit;
    process.exit = function (code) {
      test.equal(code, 0);
      process.exit = _exitFn;
    };

    var prompt = showMenu(grunt, {}, tasksData, 'mainMenu', 'list');

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("line");

    test.done();
  },


  // ---


  testExitMultiMode: function (test) {
    test.expect(1);

    // Mock process.exit to test
    var _exitFn = process.exit;
    process.exit = function (code) {
      test.equal(code, 0);
      process.exit = _exitFn;
    };

    var prompt = showMenu(grunt, {}, tasksData, 'mainMenu', 'checkbox');

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("keypress", "", { name : "space" });
    prompt.rl.emit("line");

    test.done();
  }

};

