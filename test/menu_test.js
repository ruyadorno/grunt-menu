var grunt = require('grunt');

var getChoices = require('../tasks/lib/get-choices');

var tasksData = require('./samples/tasks-data');
var getChoicesExpected = require('./expected/get-choices');


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

    var choices = getChoices(grunt, tasksData);

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


  testAddChoice: function (test){
    test.expect(1);

    var choices = getChoices(grunt, tasksData);

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
  }

};

